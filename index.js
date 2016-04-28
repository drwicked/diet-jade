const fs = require('fs');
const pug = require('pug')

/*
 * Usage:
 * var pug = require('diet-pug')({ path: app.path+'/static/pug' })
 *
 * app.header(pug)
 *
 * $.render('index') => $.render('index.pug')
 *
 */

module.exports = function(options) {
  var options = options || {}

  return function($) {
    $.render = function(filename) {
      $.header('Content-Type', 'text/html; charset=UTF-8')
      console.log(filename);
      filename ? (filename.indexOf('.pug')>-1 ? (options.file = filename) : (options.file = filename + '.pug')) : ($.error('No pug file specified'))
      var path = (options.path.slice(-1) === '/') ? options.path : options.path + '/'
      var fn = pug.compileFile(path + options.file, {
        pretty: true,
      })
      var html = fn($.data)
      // console.log(html);
      $.end(html)
    }
    $.return()
  }
}
