const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: 'localhost' ,
      port: 50541 // PORT number here,
    });
  conn.setEncoding("utf8");
  return conn;
}
   
    
    module.exports =  { con : connect,};