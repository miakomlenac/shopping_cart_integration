
const { Product, SupplierClient, InventoryLocation } = require('./entities.js');
const { createProduct } = require('./megaventory_api.js');

async function main() {
    let nikeShoes = new Product('1112256', 'Nike shoes', 99.99, 44.99);
    console.log('nikeShoes: ' + JSON.stringify(nikeShoes));
    let adidasShoes = new Product('1112248', 'Adidas shoes', 99.99, 44.99);
    console.log('adidasShoes: ' + JSON.stringify(adidasShoes));

    let client = new SupplierClient('babis', 'babis@exampletest.com', 'Example 8, Athens', '1235698967');
    console.log('client: ' + JSON.stringify(client));
    let supplier = new SupplierClient('odysseus', 'odysseus@exampletest.com', 'Example 10, Athens', '1235698988');
    console.log('supplier: ' + JSON.stringify(supplier));

  

    try {
        nikeShoes = await createProduct(nikeShoes);
        console.log('nikeShoes: ' + JSON.stringify(nikeShoes));
        adidasShoes = await createProduct(adidasShoes);
        console.log('adidasShoes: ' + JSON.stringify(adidasShoes));

        client = await createSupplierClient(client);
        console.log('client: ' + JSON.stringify(client));
        supplier = await createSupplierClient(supplier);
        console.log('supplier: ' + JSON.stringify(supplier));
        

        console.log('Entities created successfully.');
    } catch (error) {
        console.error('Error creating entities:', error);
    }
}

main();
