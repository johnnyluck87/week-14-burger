/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hamburger_db'
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createCnnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bm8jl051hyuwm7vz',
        password: 'smtkaightw1r6d2p',
        database: 'ngijeyizb5etgo4m',
    });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
