// Chrome-specific dependencies.
// TODO: Convert to typescript
'use strict';

var ui = chrome.extension.getBackgroundPage().ui;
var core = chrome.extension.getBackgroundPage().core;
var model = chrome.extension.getBackgroundPage().model;
var roster = chrome.extension.getBackgroundPage().roster;
console.log('Loaded dependencies for Chrome Extension.');
