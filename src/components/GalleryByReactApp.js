'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');

function genImageURL(imageDatasArr){
  for (var i = 0; j < imageDatas.length; i <j ;i++) {
    var singleImageData = imageDatas[i];
    singleImageData.imageURL = require('../images/'+singleImageData.fileName);
  }
}
var GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <span>Hello</span>
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
