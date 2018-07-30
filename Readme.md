# n-utility

  a collection of normal utility

## install
 
```bash
  npm install n-utility
```

## Usage

```js
  const util = require('n-utility')
```

### md5

```js
  util.md5("nian")  // "d5e1c22f261c7dd151448e6b86fac8bf"
  util.md5("nian", "base64") //
```

### sha1

```js
  util.sha1("nian") // "22683fb1d93c5d687e941e3d74ff0db0477aae54"
```

### sha256

```js
  util.sha256("nian") //"9850fdca22f422d915e2f282285378719ecea4770c7206b6cc37cd9e3d4968f3"
```

### encode and decode

```js
  // base64encode 
  util.base64encode("你好 hello world") //
  // base64decode
  util.base64decode("你好 hello world") //
```

### randomString

```js
  util.randomString() // a 16 length random string
  util.randomString(10, [0, 1, 2, 3, 4, 5]) // a 10 length random string and char in [0, 1, 2, 3, 4, 5]
```

### random

```js
  util.random(15) // a random number between 0 and 15
  util.random(-20, 100) // a random number between -20 and 100
```

## reference

[utility](https://github.com/node-modules/utility)

## License
[MIT](LICENSE.txt)