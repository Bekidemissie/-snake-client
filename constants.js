const IP = 'localhost';
const PORT = 50541;
const INITIALS = "BEK";
const MOVES = {
  w: "up",
  a: "left",
  s: "down",
  d: "right",
};

const MESSAGES = {
  '1': 'Say: go go go',
  '2': 'Say: I can\'t be defeated!',
  '3': 'Say: mm mm mm',
  '4': 'Say: ❤️❤️❤️',
  '5': 'Say: YOU GOT IT'
};

module.exports = {
  IP,
  PORT,
  MOVES,
  MESSAGES,
  INITIALS
};