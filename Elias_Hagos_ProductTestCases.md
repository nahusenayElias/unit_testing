# Product Class API

## Constructor

### **constructor(jsondata)**
Initializes the `ProductStorage` object with JSON data.

> **Parameters:**
> - `jsondata`: A JSON string representing the data storage object.

> **Returns:**
> - Initializes the object if valid JSON is provided.

> **Throws:**
> - If the parameter is missing or invalid, the constructor throws an error `'data storage missing'`.

---

## Methods

### **get_info(searchKey)**
Searches for a product matching the `searchKey` (ID) and returns the associated info object. If no match is found, it returns null.

> **Parameters:**
> - `searchKey`: The ID of the product.

> **Returns:**
> - Returns the info object of the product matching the `searchKey`. If no product is found or if `searchKey` is missing, null will be returned.

---

### **get_Price(ID)**
Retrieves the price of a product based on its ID.

> **Parameters:**
> - `ID`: The ID of the product whose price is to be returned.

> **Returns:**
> - Returns the price of a product matching the given ID.

> **Throws:**
> - If no product with the given ID is found, it throws an exception `'nothing found with given searchValue'`.

---

### **has_info(searchKey)**
Checks if a product has an info object based on its ID.

> **Parameters:**
> - `searchKey`: The ID of the product to be searched.

> **Returns:**
> - Returns true if the product matching the `searchKey` has a non-empty info object; otherwise, returns false. If `searchKey` is missing, false will be returned.

---

### **get_a_product_matching_ID(searchKey)**
Searches for a product using its unique ID (the primary key).

> **Parameters:**
> - `searchKey`: The primary key ID of the product.

> **Returns:**
> - Returns the complete product object matching the ID or null if there is no match.

> **Throws:**
> - If `searchKey` is missing, it throws an exception `'missing parameter'`.

---

### **get_manufacturers_of_products_by_type(searchKey)**
Returns an array of manufacturers for products matching a specified type.

> **Parameters:**
> - `searchKey`: The type of products to filter by.

> **Returns:**
> - Returns an array of manufacturers for products matching the specified type or an empty array if no matches are found.

> **Throws:**
> - If `searchKey` is missing, it throws an exception `'missing parameter'`.