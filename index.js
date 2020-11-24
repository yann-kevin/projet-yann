var fs = require('fs');
var path = require('path');
var filename = "products.json";
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});

function getAllProducts() {
    fs.readFile(path.join(__dirname, filename), (err, data) => {
        if (err) return console.log(err);
        console.log("Bienvenue, voici les produits disponibles");
        try {
            var books = JSON.parse(data);
            books.forEach((book) => {
                console.log(" X " + book.id + " - " + book.name + " / " + book.EUR_price + "€ / " + book.orders_counter);
            });
        } catch (e) {
            console.log(e);
            return
        }
    });
}

function orderProductById(id) {
    fs.readFile(path.join(__dirname, filename), (err, data) => {
        if (err) return console.log(err);
        try {
            var books = JSON.parse(data);
            var bookUrl = "";
            books.map((book) => {
                if (id === book.id) {
                    book.orders_counter = book.orders_counter + 1;
                    bookUrl = book.file_link;
                    return book;
                }
            });

            var data = JSON.stringify(books, null, 2);

            fs.writeFile(path.join(__dirname, filename), data, function (err) {
                if (err) return console.log(err);
                console.log('Commande terminée, voici votre fichier', bookUrl);
            });
        } catch (e) {
            console.log(e);
            return
        }
    });
}

getAllProducts();
rl.on('line', function (line) {
    console.log('I want ', line.toString());
    orderProductById(line.toString());
});