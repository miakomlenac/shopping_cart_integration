
const axios = require('axios');
const { ProductUpdateRequest, ProductUpdateResponse } = require('./entities.js');


async function createProduct(product) {
    const request = new ProductUpdateRequest(
        API_KEY,
        product,
        'InsertOrUpdate',
        'shoping_card_integration'
    )
    console.log('request: ' + JSON.stringify(request));
    let data = await axios.post(
        'https://api.megaventory.com/v2017a/Product/ProductUpdate',
        request
    ).then(function (response) {
        console.log('response.status: ' + response.status);
        console.log('response.statusText: ' + response.statusText);
        if(response.status == 200) {
            console.log('response.data: ' + JSON.stringify(response.data));
            return response.data;
        }
    }).catch(function (error) {
        console.error('Error creating product: ', error);
        throw error;
    });
    return data;
}


module.exports = { createProduct };
