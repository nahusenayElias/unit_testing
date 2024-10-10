module.exports = class DefaultData {
  constructor() {
    this.items = [
      {
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
      },
      {
        ID: 2,
        type: "stereo",
        price: 25,
        manufacturer: "Ocean",
        colors: ["white", "black", "green"],
        info: {
          comments: "no comments",
          model: "XL",
          energyclass: "A++",
        },
      },
      {
        ID: 3,
        type: "radio",
        price: 123,
        manufacturer: "Products inc.",
        colors: ["yellow", "green", "white"],
        info: {
          comments: "old model",
          model: "VIP",
          energyclass: "E",
        },
      },
      {
        ID: 4,
        type: "moccamaster",
        price: 36,
        manufacturer: "Antony Lee & junior",
        colors: ["blue", "white", "yellow"],
        info: {
          comments: "high quality",
          model: "silver",
          energyclass: "C",
        },
      },
      {
        ID: 5,
        type: "monitor",
        price: 36,
        manufacturer: "Ocean",
        colors: ["black", "white", "yellow"],
      },
    ];
  }

  // getItemById
  getItemById(id) {
    const item = this.items.find((item) => item.ID === id);
    if (!item) {
      throw new Error(`Item with ID ${id} not found`);
    }
    return item;
  }

  // getColorsByID
  getColorsById(id) {
    const item = this.getItemById(id);
    return item.colors;
  }

  // get price by ID
  getPriceById(id) {
    const item = this.getItemById(id);
    return item.price;
  }

  // get manufacturer by ID
  getManufacturerById(id) {
    const item = this.getItemById(id);
    return item.manufacturer;
  }

  // get info by ID
  getInfoById(id) {
    const item = this.getItemById(id);
    return item.info || {};
  }
  // method to get price by ID
  getPriceById(id) {
    const item = this.items.find((item) => item.ID === id);
    if (!item) {
      throw new Error("nothing found with given searchValue");
    }
    return item.price;
  }


  hasNonEmptyInfo(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      return false;
    }

    const item = this.items.find((item) => item.ID === searchKey);

    if (!item || !item.info || Object.keys(item.info).length === 0) {
      return false;
    }

    return true;
  }

  get_a_product_matching_ID(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      throw new Error("missing parameter");
    }

    const product = this.items.find((item) => item.ID === searchKey);

    return product || null;
  }

  get_manufacturers_of_products_by_type(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      throw new Error("missing parameter");
    }

    const manufacturers = this.items
      .filter((item) => item.type === searchKey)
      .map((item) => item.manufacturer);

    return manufacturers;
  }
};


