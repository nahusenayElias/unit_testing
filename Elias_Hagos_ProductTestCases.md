# DefaultData Test Cases

## Test of: Data Missing

### Test 1: Missing parameter throw an exception

>> Description: Verifies that an error is thrown when product data is missing.
- **Expected Outcome**: Rejects with an error "product data missing".

## Testing of: getPriceById, getManufacturerById, getInfoById

### Setup
- Initializes a new instance of `DefaultData` before each test.

### Test 1: Should return colors for ID 1

>> Description: Checks if the correct colors are returned for product ID 1.
- **Expected Outcome**: Returns `["black", "yellow", "red"]`.

### Test 2: Should throw error for invalid ID in getColorsById

>> Description: Verifies that an error is thrown for an invalid ID in getColorsById.
- **Expected Outcome**: Throws an error "Item with ID 10 not found".

### Test 3: Should return price for ID 2

>> Description: Checks if the correct price is returned for product ID 2.
- **Expected Outcome**: Returns `25`.

### Test 4: Should throw error for invalid ID in getPriceById

>> Description: Verifies that an error is thrown for an invalid ID in getPriceById.
- **Expected Outcome**: Throws an error "nothing found with given searchValue".

### Test 5: Should return manufacturer for ID 4

>> Description: Checks if the correct manufacturer is returned for product ID 4.
- **Expected Outcome**: Returns "Antony Lee & junior".

### Test 6: Should return manufacturer for ID 5

>> Description: Checks if the correct manufacturer is returned for product ID 5.
- **Expected Outcome**: Returns "Ocean".

### Test 7: Should throw error for invalid ID in getManufacturerById

>> Description: Verifies that an error is thrown for an invalid ID in getManufacturerById.
- **Expected Outcome**: Throws an error "Item with ID 999 not found".

### Test 8: Should return info for ID 3

>> Description: Checks if the correct info object is returned for product ID 3.
- **Expected Outcome**: Returns `{ comments: "old model", model: "VIP", energyclass: "E" }`.

### Test 9: Should return empty object for ID 5 with no info

>> Description: Verifies that an empty object is returned for a product with no info.
- **Expected Outcome**: Returns `{}`.

### Test 10: Should throw error for invalid ID in getInfoById

>> Description: Verifies that an error is thrown for an invalid ID in getInfoById.
- **Expected Outcome**: Throws an error "Item with ID 7 not found".

### Test 11: Should return price for ID 1

>> Description: Checks if the correct price is returned for product ID 1.
- **Expected Outcome**: Returns `15`.

### Test 12: Should throw error for invalid ID

>> Description: Verifies that an error is thrown for an invalid ID in getPriceById.
- **Expected Outcome**: Throws an error "nothing found with given searchValue".

## Test method to check whether true, false, null and/or return object of the info given

### Test 1: Should return true for ID 1 with non-empty info

>> Description: Checks if hasNonEmptyInfo returns true for a product with non-empty info.
- **Expected Outcome**: Returns `true`.

### Test 2: Should return true for ID 3 with non-empty info

>> Description: Checks if hasNonEmptyInfo returns true for another product with non-empty info.
- **Expected Outcome**: Returns `true`.

### Test 3: Should return false for ID 5 with no info object

>> Description: Verifies that hasNonEmptyInfo returns false for a product with no info.
- **Expected Outcome**: Returns `false`.

### Test 4: Should return false when searchKey is missing

>> Description: Checks if hasNonEmptyInfo returns false when no searchKey is provided.
- **Expected Outcome**: Returns `false`.

### Test 5: Should return false for invalid ID

>> Description: Verifies that hasNonEmptyInfo returns false for an invalid ID.
- **Expected Outcome**: Returns `false`.

### Test 6: Should return the product object for ID 1

>> Description: Checks if get_a_product_matching_ID returns the correct product object for ID 1.
- **Expected Outcome**: Returns the complete product object for ID 1.

### Test 7: Should return the product object for ID 5
>> Description: Checks if get_a_product_matching_ID returns the correct product object for ID 5.
- **Expected Outcome**: Returns the complete product object for ID 5.

### Test 8: Should return null for non-existent ID

>> Description: Verifies that get_a_product_matching_ID returns null for a non-existent ID.
- **Expected Outcome**: Returns `null`.

### Test 9: Should throw error when searchKey is missing

>> Description: Checks if get_a_product_matching_ID throws an error when no searchKey is provided.
- **Expected Outcome**: Throws an error "missing parameter".

## Test to get manufacturers: type, empty array, error for missing search key

### Test 1: Should return manufacturers for 'radio' type

>> Description: Checks if get_manufacturers_of_products_by_type returns correct manufacturers for 'radio'.
- **Expected Outcome**: Returns `["Leila Hökki & co", "Products inc."]`.

### Test 2: Should return manufacturers for 'monitor' type

>> Description: Checks if get_manufacturers_of_products_by_type returns correct manufacturers for 'monitor'.
- **Expected Outcome**: Returns `["Ocean"]`.

### Test 3: Should return an empty array for non-existent type

>> Description: Verifies that get_manufacturers_of_products_by_type returns an empty array for a non-existent type.
- **Expected Outcome**: Returns `[]`.

### Test 4: Should throw error when searchKey is missing

>> Description: Checks if get_manufacturers_of_products_by_type throws an error when no searchKey is provided.
- **Expected Outcome**: Throws an error "missing parameter".

## Test method to check if parameter is missing

### Test 1: One parameter missing

>> Description: Verifies that an error is thrown when one parameter is missing.
- **Expected Outcome**: Throws an error "missing parameter".

### Test 2: Two parameters missing

>> Description: Verifies that an error is thrown when two parameters are missing.
- **Expected Outcome**: Throws an error "missing parameter".

### Test 3: All parameters missing

>> Description: Verifies that an error is thrown when all parameters are missing.
- **Expected Outcome**: Throws an error "missing parameter".