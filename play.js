const net = require("net");
const myObject = require( "./client");
 myObject.connect;
console.log("Connecting ...");

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };