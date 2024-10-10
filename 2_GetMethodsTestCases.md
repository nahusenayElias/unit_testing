## Methods

### **get_info(searchKey)**

searches the product matching the searchKey and if match is found returns the info object otherwise null is returned

### Test 1: Should return colors for ID 1

> Parameters:

```js
const defaultData = new DefaultData();
defaultData.getColorsById(1);
```

> > searchKey is the ID of the product

```js

```

> Returns:
>
> > returns the info object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

```json
["black", "yellow", "red"];
```

### Test 2: should throw error for invalid ID in getColorsById

> > Invalid Id request returns :

> > Parameter:

```js
expect(() => defaultData.getColorsById(10)).

```

> > Returns:

```js
toThrow("Item with ID 10 not found");
```

### Test 3: should return price for ID 2

> > Returns price for `'Id 2'``

> > parameter

```js
defaultData.getPriceById(2)).toEqual(25)
```

### Test 4: should throw error for invalid ID in getPriceById

> > Returns error for `'Invalid id'``

```js
if (!item) {
  throw new Error("nothing found with given searchValue");
}
return item.price;
```

### Test 5: should return manufacturer for ID 4 | Test 6: should return manufacturer for ID 5

> > Test5 and 6: request for Id 4 and 5. Then return `'Manufacturer'`

```js
getManufacturerById(id) {
    const item = this.getItemById(id);
    return item.manufacturer;
  }

```

### Test 7: should throw error for invalid ID in getManufacturerById

> > Returns for `'invalid ID'` request:

```js
getManufacturerById(999);
```

### Test 8: should return info for ID 3

> > Returns `'info'` for `'ID 3'`

### Test 9: should return empty object for ID 5 with no info

> > Return empty object for `'ID 5'`

### Test 10: should throw error for invalid ID in getInfoById

> > Throw error for invalid `'ID'`

### Test 11: should return price for ID 1

> > Return price for `'ID 1'`

### Test 12: should throw error for invalid ID

> > Throws error for invalid `'ID'`

**Test Cases to check: True or False**

> > The following test cases returns true or false.

### Test 1: should return true for ID 1 with non-empty info

> > test cases to check `'Id'` and then to equal it with boolean value.

```bash
defaultData.hasNonEmptyInfo(1)).toEqual(true);
```

### Test 2: should return true for ID 3 with non-empty info

> > test cases to check `'Id'` and then to equal it with boolean value.

```bash
defaultData.hasNonEmptyInfo(3)).toEqual(true);
```

### Test 3: should return false for ID 5 with no info object

> > test cases to check `'Id'` and then to equal it with boolean value.

```bash
defaultData.hasNonEmptyInfo(5)).toEqual(false);
```

### Test 4: should return false when searchKey is missing

> > test case to check if `'Id'` is missing and then to equal it with boolean value `'true'`.

```bash
defaultData.hasNonEmptyInfo()).toEqual(true);
```

### Test 5: should return false for invalid ID

> > test case to check if `'Id'` is invalid and then to equal it with boolean value `'true'`.

```bash
defaultData.hasNonEmptyInfo(999)).toEqual(false);
```

### Test 6: should return the product object for ID 1

> > Return object of "Id 1".

```js
test("Test 6: should return the product object for ID 1", () => {
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
```

### Test 7: should return the product object for ID 5

> > returns product object for `'Id 5'`.

```js
test("Test 7: should return the product object for ID 5", () => {
  const product = {
    ID: 5,
    type: "monitor",
    price: 36,
    manufacturer: "Ocean",
    colors: ["black", "white", "yellow"],
  };
  expect(defaultData.get_a_product_matching_ID(5)).toEqual(product);
});
```

### Test 8: should return null for non-existent ID

> > Returns null

### Test 9: should throw error when searchKey is missing



```js
 get_manufacturers_of_products_by_type(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      throw new Error("missing parameter");
    }
```
>> returns missing parameter

**Test get_manufacturers_of_products_by_type method**

### Test 1: should return manufacturers for 'radio' type

>> Parameter:

```js
 defaultData.get_manufacturers_of_products_by_type("radio")
      ).toEqual(manufacturers)
```

>> returns 'radio'.

### Test 2: should return manufacturers for 'monitor' type

>>Parameter:

```js
 defaultData.get_manufacturers_of_products_by_type("monitor")
      ).toEqual(manufacturers);
```
>> returns 'monitor'

### Test 3: should return an empty array for non-existent type

>>Parameter:
```js
 defaultData.get_manufacturers_of_products_by_type("television")
      ).toEqual([]);
```

>> returns '[]'


### Test 4: should throw error when searchKey is missing

```js
  get_manufacturers_of_products_by_type(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      throw new Error("missing parameter");
    }
```
