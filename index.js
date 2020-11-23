var fs = require('fs');
var path = require('path');
var filename = "products.json";

fs.readFile(path.join(__dirname, filename) , (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    var books = JSON.parse(data);
    console.log(books)
});