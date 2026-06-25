// modern-notes.js — Modern insights registry
// Each unit registers its own notes in its unitN.js file via MODERN_NOTES['N-X'] = {...}
// Keyed by "unitId-conceptIndex" (0-based).
// The HTML renderer checks MODERN_NOTES[key] and appends it to the concept card.
var MODERN_NOTES = {};
