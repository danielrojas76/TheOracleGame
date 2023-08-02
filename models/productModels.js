const fs = require('fs');
const path = require('path');

const modelo = {
    findAll: () => {
        const jsonData = fs.readFileSync(path.join(__dirname, '../dirname/products.json'))
    }
    
}