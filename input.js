const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

const stdin  = require("process");
let connection;
const setupInput = function (conn) {
   console.log("stupinput");
  connection = conn;
  const stdin = process.stdin;
  console.log("")
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
 console.log("the key ",key);
  if (key === '\u0003') {
    process.exit();
  }else if(key === "w"){
    console.log("Move: up - w") 
    connection.write('Move: up');
  }else if(key === "a"){
    console.log("Move: left - a")
    connection.write('Move: left');
  }else if(key === "s"){
    console.log("Move: down - s")
    connection.write('Move: down');
  }else if(key === "d"){
    console.log("Move: right - d")
    connection.write('Move: right');
  }else if(MESSAGES[key]){
  console.log(MESSAGES[key]);
  }
};

module.exports = {setupInput};
