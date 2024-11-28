class ProductStorage {
  constructor(jsondata) {
    if (!jsondata) {
      throw new Error('data storage missing');
    }
    this.data = JSON.parse(jsondata);
  }

  get_info(searchKey) {
    const product = this.data.find(item => item.ID === searchKey);
    return product && product.info ? product.info : null;
  }

  get_Price(ID) {
    const product = this.data.find(item => item.ID === ID);
    if (!product) {
      throw new Error('nothing found with given searchValue');
    }
    return product.price;
  }

  has_info(searchKey) {
    if (searchKey === undefined) return false;
    const product = this.data.find(item => item.ID === searchKey);
    return !!(product && product.info && Object.keys(product.info).length > 0);
  }

  get_a_product_matching_ID(searchKey) {
    if (searchKey === undefined) {
      throw new Error('missing parameter');
    }
    return this.data.find(item => item.ID === searchKey) || null;
  }

  get_manufacturers_of_products_by_type(searchKey) {
    if (searchKey === undefined) {
      throw new Error('missing parameter');
    }
    return [...new Set(this.data
      .filter(item => item.type.toLowerCase() === searchKey.toLowerCase())
      .map(item => item.manufacturer))];
  }
}

module.exports = ProductStorage; // Ensure this matches the class name