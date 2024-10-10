**Test returns missing parameter**
>> In these test cases either one or two or all parameters are missing.

### Test 1: one parameter missing

> > One param missing: The test throws  `'one parameter missing'`


### Test 2: two parameters missing

> >two param missing: The test throws  `'two parameters missing'`

```js
get_a_product_matching_ID(searchKey) {
    if (searchKey === undefined || searchKey === null) {
      throw new Error("missing parameter");
    }

    const product = this.items.find((item) => item.ID === searchKey);

    return product || null;
  }
```

### Test 3: all parameters missing

> > all parameters missing:


```js
defaultData.get_manufacturers_of_products_by_type()).toThrow(
        "missing parameter"
      );
```
