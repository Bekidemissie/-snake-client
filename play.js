const net = require("net");
const client = require( "./client");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost' ,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
    connect();
