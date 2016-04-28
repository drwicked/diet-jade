# diet-pug

Forked from [https://github.com/mnzt/diet-jade](mnzt's repo).

Pug template engine plugin for [diet][2] based on [Pug][1]. Support for sending data to view through `$.data.PARAM` and displayed via `#{PARAM}`.

## **Learn about Pug**:
Learn how to use it at the engine's website:
- **Website:** [http://jade-lang.com/](http://jade-lang.com/)

## **Install**

```
npm install diet-pug
```

[![NPM](https://nodei.co/npm/diet-jade.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/diet-jade/)

## **Example Usage**
**index.js**

```js
// Require Diet server
var server = require('diet')
// Require diet-pug plugin
var pug = require('diet-pug')({path: app.path + '/static/pug/'})

// Instantiate server
var app = server()
// Set server listening port
app.listen('http://localhost:8000')

// Assign jade plugin to the header
app.header(pug)

// Create a route
app.get('/', function($) {
  // Render pug file! this will render ./yourConfiguredDirectory/index.pug
  $.data.message = 'This is awesome!'
  $.render('index')
})

app.get('/profile', function ($) {
  // Render pug file! this will render ./.../yourConfiguredDirectory/profile.pug
  $.render('profile')
})
```

**~/.../static/pug/index.pug**

```
p Received message: #{message}
```


## **File Rendering**

```js
$.render('yourFile') // will serve yourConfiguredDirectory/yourFile.pug

$.render('yourFile.pug') //wil serve yourConfiguredDirectory/yourFile.pug
```

## **License**
Please refer to [The License](./license).

[1]: http://jade-lang.com/
[2]: http://dietjs.com/
