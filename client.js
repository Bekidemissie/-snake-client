const net = require("net");
const { IP, PORT ,INITIALS } = require('./constants');


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(message, "data message");
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${INITIALS}`);
  });

  conn.on("end", () => {
    console.log('Server has disconnected');
  });

  return conn;
};

module.exports = { connect };
