'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Immutable = require('immutable');
var window = require('global/window');
var document = require('global/document');
var r = require('r-dom');
var WebGLHeatmap = require('webgl-heatmap');
var MapGL = require('react-map-gl');
var ViewportMercator = require('viewport-mercator-project');

var viridis = require('scale-color-perceptual/hex/viridis.json');
var mapbox = require('mapbox-gl')

var ScatterplotOverlay = require('react-map-gl/src/overlays/scatterplot.react');
var assign = require('object-assign');
var locations = require('example-cities');
var d3 = require('d3');
var rasterTileStyle = require('raster-tile-style');

var tileSourceA = '//tile.stamen.com/toner/{z}/{x}/{y}.png';
var tileSourceB = '//tile.stamen.com/watercolor/{z}/{x}/{y}.png';
var mapStyle = Immutable.fromJS(rasterTileStyle([tileSourceB]));

window.rasterTileStyle = rasterTileStyle;
window.React = React;
window.ReactDOM = ReactDOM;
window.ReactDOMServer = ReactDOMServer;
window.WebGLHeatmap = WebGLHeatmap;
window.MapGL = MapGL;
window.Immutable = Immutable;


module.exports = window.HeatmapOverlay = React.createClass({

  displayName: 'HeatmapOverlay',

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    latitude: React.PropTypes.number.isRequired,
    zoom: React.PropTypes.number.isRequired,
    locations: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.instanceOf(Immutable.List)]),
    lngLatAccessor: React.PropTypes.func.isRequired,
    intensityAccessor: React.PropTypes.func.isRequired,
    sizeAccessor: React.PropTypes.func.isRequired,
    gradientColors: React.PropTypes.instanceOf(Immutable.List).isRequired
  },


  getInitialState: function getInitialState() {
    return {filteredLocations: [],
            allLocations: [],
            filterLoop: 0};
  },


  getDefaultProps: function getDefaultProps() {
    return {
      lngLatAccessor: function lngLatAccessor(location) {
        return [location.longitude, location.latitude];
      },
      intensityAccessor: function intensityAccessor(location) {
        return 1 / 10;
      },
      sizeAccessor: function sizeAccessor(location) {
        return 40;
      },
      gradientColors: Immutable.List(viridis)
    };
  },

  _prevGradientColors: null,
  _gradientTexture: null,

  sortLocations: function(a, b) {
    return a.longitude - b.longitude;
  },

  componentDidMount: function componentDidMount() {
    this._update();

    // this is bad and it should feel bad
    window.addHeatmapPoints = function(locations){
      //console.log("add points");
      var mercator = ViewportMercator(this.props);
      locations.forEach(function each(location) {
        var size = this.props.sizeAccessor(location);
        var intensity = this.props.intensityAccessor(location);
        var pixel = mercator.project(this.props.lngLatAccessor(location));
        this._heatmap.addPoint(pixel[0], pixel[1], size, intensity);
      }, this);

      var sortedNewLocations = this.state.allLocations
          .concat(locations)
          .sort(this.sortLocations);
      this.setState({allLocations: sortedNewLocations});
    }.bind(this);

    this._redraw();
    this._evalFilter();
  },

  componentDidUpdate: function componentDidUpdate() {
    this._update();
  },

  componentWillUnmount: function componentWillUnmount() {
    // Clean up!
    this._heatmap = null;
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps){
    if(this.props.filterCondition != nextProps.filterCondition){
      this.setState({filterLoop: 30});
    }

  },

  _evalFilter: function _evalFilter(){
    if(this.state.filterLoop > 3){

      for (var i = 0; i < this.state.allLocations.length; ++i) {
        if(this.state.allLocations[i].longitude > this.props.boundLongRight){
          var rightIdx = i;
          break;
        }
      }

      for (var i = 0; i < this.state.allLocations.length; ++i) {
        if(this.state.allLocations[i].longitude > this.props.boundLongLeft){
          var leftIdx = i;
          break;
        }
      }

      this.setState({
        filteredLocations: this.state.allLocations.slice(leftIdx, rightIdx)
          .filter(this.props.filterCondition),
        filterLoop: 0
      });
    }else{
      this.setState({filterLoop: this.state.filterLoop + 1})
    }
  },

  /**
    * Updates `this._gradientTexture` Image if `props.gradientColors`
    * has changed.
    * @returns {Image} `this._gradientTexture`.
    */
  _getGradientTexture: function _getGradientTexture() {
    // Only update the texture when the gradient has changed.
    if (this._prevGradientColors === this.props.gradientColors) {
      return this._gradientTexture;
    }
    var canvas = document.createElement('canvas');
    // 512, 10 because these are the same dimensions webgl-heatmap uses for its
    // built in gradient textures.
    var width = 512;
    var height = 10;
    canvas.width = String(width);
    canvas.height = String(height);
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(0, height / 2, width, height / 2);
    var colors = this.props.gradientColors;
    colors.forEach(function each(color, index) {
      var position = index / (colors.size - 1);
      gradient.addColorStop(position, color);
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    var image = new window.Image();
    image.src = canvas.toDataURL('image/png');
    return image;
  },

  _redraw: function _redraw() {
    this._evalFilter();
    var mercator = ViewportMercator(this.props);
    this._heatmap.clear();
    this._heatmap.adjustSize();
    this.state.filteredLocations.forEach(function each(location) {
      var size = this.props.sizeAccessor(location);
      var intensity = this.props.intensityAccessor(location);
      var pixel = mercator.project(this.props.lngLatAccessor(location));
      this._heatmap.addPoint(pixel[0], pixel[1], size, intensity);
    }, this);
    this._heatmap.update();
    this._heatmap.display();
    window.requestAnimationFrame(this._redraw)
  },

  _update: function _update() {
    var gradientTexture = this._getGradientTexture();
    if (this._gradientTexture !== gradientTexture) {
      this._heatmap = new WebGLHeatmap({
        canvas: this.refs.overlay,
        intensityToAlpha: true,
        alphaRange: [0, 0.1],
        gradientTexture: gradientTexture
      });
      this._gradientTexture = gradientTexture;
    }
    this._prevGradientColors = this.props.gradientColors;
  },

  render: function render() {
    var pixelRatio = window.devicePixelRatio || 1;
    return r.canvas({
      ref: 'overlay',
      width: this.props.width * pixelRatio,
      height: this.props.height * pixelRatio,
      style: {
        width: this.props.width + 'px',
        height: this.props.height + 'px',
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0
      }
    });
  }
});





window.PokeMap = React.createClass({

  displayName: 'PokeMap',

  getInitialState: function getInitialState() {
    return {
      locations: locations,
      locationsAlt: locations,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7702549,
        longitude:  -122.444787,
        zoom: 8,
        isDragging: false
      },
      mapStyle: mapStyle
    };
  },

  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', function onResize() {
      this.setState({
        viewport: assign({}, this.state.viewport, {
          width: window.innerWidth,
          height: window.innerHeight
        })
      });
    }.bind(this));

    // register function on window, that when called, updates this state
    window.updatePokemon = function(rows){
      this.setState({locations: rows});
    }.bind(this);

    /*
    this.internalFilter = function(l){
      return true;
    }
    */
  },

  _onChangeViewport: function _onChangeViewport(viewport) {
    this.props.onChangeViewport(viewport);
    this.setState({viewport: assign({}, this.state.viewport, viewport)});

    var boundLongLeft = this.myMapGl
        ._getMap()
        .transform
        .pointLocation(mapbox.Point.convert(new mapbox.Point(0,0)))
        .lng;

    var boundLongRight = this.myMapGl
        ._getMap()
        .transform
        .pointLocation(mapbox.Point.convert(new mapbox.Point(this.state.viewport.width-400,0)))
        .lng;

    this.setState({boundLongRight: boundLongRight,
                   boundLongLeft: boundLongLeft});

    /*
    this.internalFilter = function(l){
      return l.longitude > boundLongLeft && l.longitude < boundLongRight;
    }
    */
  },

  render: function render() {
    var state = this.state;
    var size = this.props.pointSize;
    return r.div({}, [
      /*
      r(MapGL, assign({}, this.state.viewport, {
        onChangeViewport: this._onChangeViewport,
        mapStyle: this.state.mapStyle
      }), [
        /*
        r(HeatmapOverlay, assign({}, this.state.viewport, {
          locations: this.state.locations,
          sizeAccessor: function sizeAccessor() {
            return size;
          }
        }))
        r(ScatterplotOverlay, assign({}, this.state.viewport, {
          locations: Immutable.List(this.state.locations),
          dotRadius: 4,
          globalOpacity: 1,
          compositeOperation: "screen",
          lngLatAccessor: function(location){
            return [location.longitude, location.latitude]
          }
        }))
      ])
    */
      r(MapGL, assign({}, this.state.viewport, {
        ref: function(c){ return this.myMapGl = c;}.bind(this),
        onChangeViewport: this._onChangeViewport,
        mapStyle: this.state.mapStyle
      }), [
        r(HeatmapOverlay, assign({}, this.state.viewport, {
          locations: this.state.locations,
          boundLongLeft: this.state.boundLongLeft,
          boundLongRight: this.state.boundLongRight,
          filterCondition: function(l){
            return this.props.filterCondition(l);
          }.bind(this),
          sizeAccessor: function sizeAccessor() {
            return size;
            //return 30 * Math.pow(2, state.viewport.zoom - 1);
          },
          gradientColors: this.state.gradient
        }))
      ]),

    ]);
  }
});

