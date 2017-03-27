/*
var css = require('./index.styl');

import React from 'react'
import ReactDOM from 'react-dom'



ReactDOM.render(
  <div>
    <p>快!修改我试w222试看22244222111122255552211221!</p>
  </div>,
  document.getElementById('root')
)
*/

function $(id) {
  return document.getElementById(id);
}

window.onload = function() {
  var oBox = $('box'),
    oLeft = $('left'),
    oRight = $('right'),
    oLine = $('line');
  oLine.onmousedown = function(e) {
    var disX = e.clientX;
    oLine.left = oLine.offsetLeft;
    document.onmousemove = function(e) {
      var foldWidth = oLine.left + (e.clientX - disX);
      var targetName = e.target || e.srcElement;
      var maxT = oBox.clientWidth - oLine.offsetWidth;
      oLine.style.margin = 0;
      foldWidth < 0 && (foldWidth = 0);
      foldWidth > maxT && (foldWidth = maxT);
      oLine.style.left = oLeft.style.width = foldWidth + 'px';
      oRight.style.width = oBox.clientWidth - foldWidth + 'px';
      return false;
    };
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
      oLine.releaseCapture && oLine.releaseCapture();
    }
    oLine.setCapture && oLine.setCapture();
    return false;
  }
}