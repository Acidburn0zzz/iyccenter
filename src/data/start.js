/* globals self */
'use strict';

function $(id) {
  $.cache = $.cache || [];
  $.cache[id] = $.cache[id] || window.content.document.getElementById(id);
  return $.cache[id];
}

if (!self.options.prefs.sidebar && $('watch7-sidebar')) {
  $('watch7-sidebar').style.display = 'none';
}
if (!self.options.prefs.discussion && $('watch-discussion')) {
  $('watch-discussion').style.display = 'none';
}
if (!self.options.prefs.views && $('watch8-sentiment-actions')) {
  $('watch8-sentiment-actions').style.display = 'none';
}
if (!self.options.prefs.actions && $('watch8-secondary-actions')) {
  $('watch8-secondary-actions').style.display = 'none';
}
if (!self.options.prefs.views && !self.options.prefs.actions && $('watch8-action-buttons')) {
  $('watch8-action-buttons').style.display = 'none';
}
if (!self.options.prefs.details && $('action-panel-details')) {
  $('action-panel-details').style.display = 'none';
}
if (!self.options.prefs.header && $('masthead-positioner')) {
  $('masthead-positioner').style.display = 'none';
}
if (!self.options.prefs.header && $('masthead-positioner-height-offset')) {
  $('masthead-positioner-height-offset').style.display = 'none';
}
if ($('autoplay-checkbox')) {
  if ($('autoplay-checkbox').checked && !self.options.prefs.playlist) {
    $('autoplay-checkbox').click();
  }
  if (!$('autoplay-checkbox').checked && self.options.prefs.playlist) {
    $('autoplay-checkbox').click();
  }
}
