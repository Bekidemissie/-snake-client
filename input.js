const { MOVES , MESSAGES } = require('./constants');

let connection;
const setupInput = function (conn) {
  console.log("stupinput");
  connection = conn;
  const stdin = process.stdin;
  console.log("")
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

const handleUserInput = function (key) {
  console.log("the key ", key);
  if (key === '\u0003') process.exit();
  if (MOVES[key]) connection.write(`Move: ${MOVES[key]}`);
  if (MESSAGES[key]) connection.write(`Say: ${MESSAGES[key]}`);
};

module.exports = { setupInput };
