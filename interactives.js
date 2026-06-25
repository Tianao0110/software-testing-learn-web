// interactives.js — Interactive visualizations registry
// Each unit registers its own widget in its unitN.js file via INTERACTIVES[N] = function(el) {...}
// The HTML renderer calls INTERACTIVES[unitId](container) to build the widget.
var INTERACTIVES = {};
