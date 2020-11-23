var fs = require('fs');

fs.readFile(`${__dirname}/products.json` , (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    var books = JSON.parse(data);
    console.log(books)
});