var sql = require('sqlite3');
sql.verbose();

var db = new sql.Database(__dirname + '/database.db');

// Select dans la base de données
db.each("SELECT * from users", function(err, row){
    if (err){
        console.log(err);
    } else {
        console.log(row.nom + " à " + row.money + "€");
    }
});
