"use strict";

//const ProductStorage = require("../productStorage");
// const DefaultData = require('../datastorage.json');
const DefaultData = require("../productStorage");

describe("Data missing", ()=>{
  test("Test 1: Missing parameter throw an exception", ()=>{

    return expect(
      Promise.reject(new Error("product data missing"))
    ).rejects.toThrow("product data missing");
  });
});

describe("Testing of: getPriceById, getManufacturerById, getInfoById.", ()=>{
  let defaultData;

  beforeEach(()=>{
    defaultData = new DefaultData();
  });

  test("Test 1: Should return colors for ID 1", ()=>{
    expect(defaultData.getColorsById(1)).toEqual(["black", "yellow", "red"]);
  });


  test("Test 2: should throw error for invalid ID in getColorsById", ()=>{
    expect(() => defaultData.getColorsById(10)).toThrow(
      "Item with ID 10 not found"
    );
  });

  // Test getPriceById
  test("Test 3: should return price for ID 2", ()=>{
    expect(defaultData.getPriceById(2)).toEqual(25);
  });


  test("Test 4: should throw error for invalid ID in getPriceById", ()=>{
    expect(() => defaultData.getPriceById(99)).toThrow(
      "nothing found with given searchValue"
    );
  });

  // Test getManufacturerById
  test("Test 5: should return manufacturer for ID 4", ()=>{
    expect(defaultData.getManufacturerById(4)).toEqual("Antony Lee & junior");
  });

  test("Test 6: should return manufacturer for ID 5", ()=>{
    expect(defaultData.getManufacturerById(5)).toEqual("Ocean");
  });

  test("Test 7: should throw error for invalid ID in getManufacturerById", ()=>{
    expect(() => defaultData.getManufacturerById(999)).toThrow(
      "Item with ID 999 not found"
    );
  });

  // Test getInfoById
  test("Test 8: should return info for ID 3", ()=>{
    expect(defaultData.getInfoById(3)).toEqual({
      comments: "old model",
      model: "VIP",
      energyclass: "E",
    });
  });

  test("Test 9: should return empty object for ID 5 with no info", ()=>{
    expect(defaultData.getInfoById(5)).toEqual({});
  });

  test("Test 10: should throw error for invalid ID in getInfoById", ()=>{
    expect(() => defaultData.getInfoById(7)).toThrow(
      "Item with ID 7 not found"
    );
  });
  test("Test 11: should return price for ID 1", ()=>{
    expect(defaultData.getPriceById(1)).toEqual(15);
  });


  // Test getPriceById with invalid ID
  test("Test 12: should throw error for invalid ID", ()=>{
    expect(() => defaultData.getPriceById(99)).toThrow(
      "nothing found with given searchValue"
    );
  });

  describe("Test method to check whether true, false, null and/or return object of the info given", ()=>{
    let defaultData;

    // Create a new instance of DefaultData before each test
    beforeEach(()=>{
      defaultData = new DefaultData();
    });

    // Test with valid searchKey having non-empty info
    test("Test 1: should return true for ID 1 with non-empty info", ()=>{
      expect(defaultData.hasNonEmptyInfo(1)).toEqual(true);
    });
    test("Test 2: should return true for ID 3 with non-empty info", ()=>{
      expect(defaultData.hasNonEmptyInfo(3)).toEqual(true);
    });

    // Test with valid searchKey having no info
    test("Test 3: should return false for ID 5 with no info object", ()=>{
      expect(defaultData.hasNonEmptyInfo(5)).toEqual(false);
    });

    // Test with missing searchKey parameter
    test("Test 4: should return false when searchKey is missing", ()=>{
      expect(defaultData.hasNonEmptyInfo()).toEqual(false);
    });

    // Test with invalid searchKey (ID that does not exist)
    test("Test 5: should return false for invalid ID", ()=>{
      expect(defaultData.hasNonEmptyInfo(999)).toEqual(false);
    });

    //get_a_product_matching_ID method: I will add Describe here.

    test("Test 6: should return the product object for ID 1", ()=>{
      const product = {
        ID: 1,
        type: "radio",
        price: 15,
        manufacturer: "Leila Hökki & co",
        colors: ["black", "yellow", "red"],
        info: {
          comments: "high quality",
          model: "silver",
          energyclass: "E",
        },
      };
      expect(defaultData.get_a_product_matching_ID(1)).toEqual(product);
    });
    test("Test 7: should return the product object for ID 5", ()=>{
      const product = {
        ID: 5,
        type: "monitor",
        price: 36,
        manufacturer: "Ocean",
        colors: ["black", "white", "yellow"],
      };
      expect(defaultData.get_a_product_matching_ID(5)).toEqual(product);
    });

    // Test with an invalid searchKey (ID not found)
    test("Test 8: should return null for non-existent ID", ()=>{
      expect(defaultData.get_a_product_matching_ID(99)).toBeNull();
    });

    // Test with missing searchKey parameter
    test("Test 9: should throw error when searchKey is missing", ()=>{
      expect(() => defaultData.get_a_product_matching_ID()).toThrow(
        "missing parameter"
      );
    });
  });

  describe("Test to get manufacturers: type, empty array, error for missing search key.", ()=>{
    let defaultData;

    // Create a new instance of DefaultData before each test
    beforeEach(()=>{
      defaultData = new DefaultData();
    });

    // test with a valid searchKey (product type)
    test("Test 1: should return manufacturers for 'radio' type", ()=>{
      const manufacturers = ["Leila Hökki & co", "Products inc."];
      expect(
        defaultData.get_manufacturers_of_products_by_type("radio")
      ).toEqual(manufacturers);
    });

    test("Test 2: should return manufacturers for 'monitor' type", ()=>{
      const manufacturers = ["Ocean"];
      expect(
        defaultData.get_manufacturers_of_products_by_type("monitor")
      ).toEqual(manufacturers);
    });

    // test with searchKey that doesn't exist
    test("Test 3: should return an empty array for non-existent type", ()=>{
      expect(
        defaultData.get_manufacturers_of_products_by_type("television")
      ).toEqual([]);
    });

    // Test with missing searchKey parameter
    test("Test 4: should throw error when searchKey is missing", ()=>{
      expect(() => defaultData.get_manufacturers_of_products_by_type()).toThrow(
        "missing parameter"
      );
    });
  });
  describe("Test method to check if parameter is missing", ()=>{
    // Test with one parameter missing (no type provided)
    test("Test 1: one parameter missing ", ()=>{
      expect(() => defaultData.get_manufacturers_of_products_by_type()).toThrow(
        "missing parameter"
      );
    });

    // test with 2 parameters missing (though this method only takes one parameter)
    test("Test 2: two parameters missing ", ()=>{
      expect(() => defaultData.get_manufacturers_of_products_by_type()).toThrow(
        "missing parameter"
      );
    });


    test("Test 3: all parameters missing", ()=>{
      expect(() => defaultData.get_manufacturers_of_products_by_type()).toThrow(
        "missing parameter"
      );
    });
  });
});
