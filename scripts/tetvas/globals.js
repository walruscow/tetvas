/*******************************************************
 * Global values
 *******************************************************/

define([], function() {

  var Globals = {};

  // Canvases to use
  Globals.canvas = document.getElementById('tetvas');
  Globals.ctx = canvas.getContext('2d');

  // Key constants
  Globals.UP_ARROW = 38;
  Globals.DOWN_ARROW = 40;
  Globals.LEFT_ARROW = 37;
  Globals.RIGHT_ARROW = 39;

  Globals.SPACE_BAR = 32;
  Globals.SHIFT_KEY = 16;
  Globals.CTRL_KEY = 17;

  Globals.P_KEY = 80;
  Globals.X_KEY = 88;
  Globals.Z_KEY = 90;

  // Constants for Blocks
  Globals.GRID_SIZE = 15;
  Globals.GRID_OFFSET = {
    x : { start : 90, end : 90 },
    y : { start : 2, end : 2}
  };

  // Initial speed of the game ticker
  Globals.START_SPEED = 1000;

  // Colours for shapes
  Globals.SHAPE_FILLS = {
    'I' : '#00ffff',
    'O' : '#ffff00',
    'T' : '#ff00ff',
    'J' : '#0000ff',
    'L' : '#ffa500',
    'S' : '#00ff00',
    'Z' : '#ff0000'
  };

  return Globals;
});
