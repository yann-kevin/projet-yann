var fs = require('fs');
let books = JSON.parse(fs.readFileSync(`${__dirname}/products.json`, 'utf8'));

books.forEach((book)=>{
    console.log(JSON.stringify(book));
});