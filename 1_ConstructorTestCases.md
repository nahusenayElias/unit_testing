# Constructor test case

## **constructor(jsondata)**

The test case passed as undefined or null json data. As a result it throws `'Data missing'`

### Test 1: Missing parameter throw an exception

> Parameters: Promise to reject and return error.
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

```js
return expect(
      Promise.reject(new Error("product data missing"))
    ).rejects.toThrow("product data missing");
  });
```

> Throws: `'Data missing'`
>
> > If the parameter is missing, constructor throws an error
