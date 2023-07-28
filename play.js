const net = require("net");
const myObject = require( "./client");
 myObject.connect;
console.log("Connecting ...");

const setupInput = function () {
    const stdin = process.stdin;
    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }}