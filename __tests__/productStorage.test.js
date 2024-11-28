const ProductStorage = require('../productStorage');
const data = require('../datastorage.json');

describe('ProductStorage Class', () => {
  let product;

  beforeAll(() => {
    product = new ProductStorage(JSON.stringify(data));
  });

  test('Test 1. Constructor should throw error when data is missing', () => {
    expect(() => new ProductStorage()).toThrow('data storage missing');
  });

  describe('get_info method', () => {
    test('Test 1. Should return correct info for an existing product ID', () => {
      expect(product.get_info(1)).toEqual({
        comments: 'high quality',
        model: 'silver',
        energyclass: 'E'
      });
    });

    test('Test 2. Should return null for a non-existent product ID', () => {
      expect(product.get_info(99)).toBeNull();
    });

    test('Test 3. Should return null for a product without info property', () => {
      expect(product.get_info(5)).toBeNull();
    });

    test('Test 4. Should catch non-numeric searchKey', () => {
      expect(product.get_info('abc')).toBeNull();
    });
  });

  describe('get_Price method', () => {
    test('Test 1. Should return correct price for an existing product ID', () => {
      expect(product.get_Price(2)).toBe(25);
    });

    test('Test 2. Should throw error for non-existent product ID', () => {
      expect(() => product.get_Price(99)).toThrow('nothing found with given searchValue');
    });

    test('Test 3. Should catch value with non-numeric ID', () => {
      expect(() => product.get_Price('abc')).toThrow('nothing found with given searchValue');
    });

    test('Test 4. Should return number type for price', () => {
      expect(typeof product.get_Price(1)).toBe('number');
    });
  });

  describe('has_info method', () => {
    test('Test 1. Should return true for a product with info', () => {
      expect(product.has_info(1)).toBe(true);
    });

    test('Test 2. Should return false for a product without info', () => {
      expect(product.has_info(5)).toBe(false);
    });

    test('Test 3. Should return false for a non-existent product ID', () => {
      expect(product.has_info(99)).toBe(false);
    });

    test('Test 4. Should return false when searchKey is missing', () => {
      expect(product.has_info()).toBe(false);
    });
  });

  describe('get_a_product_matching_ID method', () => {
    test('Test 1. Should return correct product object for an existing ID', () => {
      expect(product.get_a_product_matching_ID(1)).toEqual(data[0]);
    });

    test('Test 2. Should return null for a non-existent product ID', () => {
      expect(product.get_a_product_matching_ID(99)).toBeNull();
    });

    test('Test 3. Should throw error when searchKey is missing', () => {
      expect(() => product.get_a_product_matching_ID()).toThrow('missing parameter');
    });
  });

  describe('get_manufacturers_of_products_by_type method', () => {
    test('Test 1. Should return correct manufacturers for an existing product type', () => {
      expect(product.get_manufacturers_of_products_by_type('radio')).toEqual(['Leila Hökki & co', 'Products inc.']);
    });

    test('Test 2. Should return an empty array for a non-existent product type', () => {
      expect(product.get_manufacturers_of_products_by_type('laptop')).toEqual([]);
    });

    test('Test 3. Should throw error when searchKey is missing', () => {
      expect(() => product.get_manufacturers_of_products_by_type()).toThrow('missing parameter');
    });

    test('Test 4. Should handle case sensitivity', () => {
      expect(product.get_manufacturers_of_products_by_type('RADIO')).toEqual(['Leila Hökki & co', 'Products inc.']);
    });
  });
});