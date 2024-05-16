
class Product {
    constructor(ProductSKU, ProductDescription, ProductSellingPrice, ProductPurchasePrice) {
        this.ProductSKU = ProductSKU;
        this.ProductDescription = ProductDescription;
        this.ProductSellingPrice = ProductSellingPrice;
        this.ProductPurchasePrice = ProductPurchasePrice;
    }
}

class Contact {
    constructor(ContactName, ContactDepartment, ContactEmail, ContantIsPrimary) {
        this.ContactName = ContactName;
        this.ContactDepartment = ContactDepartment;
        this.ContactEmail = ContactEmail;
        this.ContantIsPrimary = ContantIsPrimary || false;
    }
}

class SupplierClient {
    constructor(SupplierClientName, mvContacts, SupplierClientBillingAddress, SupplierClientShippingAddress) {
        this.SupplierClientName = SupplierClientName;
        this.mvContacts = mvContacts;
        this.SupplierClientBillingAddress = SupplierClientBillingAddress;
        this.SupplierClientShippingAddress = SupplierClientShippingAddress;
    }
}

class ProductUpdateRequest {
    constructor(mvSupplierClient, mvGrantPermissionsToAllUser, mvRecordAction, mvInsertUpdateDeleteSourceApplication) {
        this.mvSupplierClient = mvSupplierClient;
        this.mvGrantPermissionsToAllUser = mvGrantPermissionsToAllUser;
        this.mvRecordAction = mvRecordAction;
        this.mvInsertUpdateDeleteSourceApplication = mvInsertUpdateDeleteSourceApplication;
    }
}


const mvContacts = [
    new Contact("Andrew Stevens", "A4 Papers/Printing", "andrew@a4printing.jp", true),
    new Contact("Maria Weems", "A4 Papers/Pictures")
];

const mvSupplierClient = new SupplierClient(
    "A4 Paper Supplier",
    mvContacts,
    "41st Trueroad, Inglewood CA",
    "93rd Kiwi Street, Las Vegas, Nevada"
);

const mvGrantPermissionsToAllUser = true;
const mvRecordAction = "Insert";
const mvInsertUpdateDeleteSourceApplication = "Magento";

const productUpdateRequest = new ProductUpdateRequest(
    mvSupplierClient,
    mvGrantPermissionsToAllUser,
    mvRecordAction,
    mvInsertUpdateDeleteSourceApplication
);


class ProductUpdateRequest {
    constructor(apikey, mvProduct, mvRecordAction, mvInsertUpdateDeleteSourceApplication) {
        this.apikey = apikey;
        this.mvProduct = mvProduct;
        this.mvRecordAction = mvRecordAction;
        this.mvInsertUpdateDeleteSourceApplication = mvInsertUpdateDeleteSourceApplication;
    }
}

class ProductUpdateResponse {
    constructor(mvProduct, ResponseStatus, entityID) {
        this.mvProduct = mvProduct;
        this.ResponseStatus = ResponseStatus;
        this.entityID = entityID;
    }
}

module.exports = { Product, SupplierClient, InventoryLocation,
    ProductUpdateRequest, ProductUpdateResponse, Contact, SupplierClient };
