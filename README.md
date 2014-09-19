#jquery-textlimit [![Build Status](http://img.shields.io/travis/cfreear/jquery-textlimit.svg?branch=master&style=flat-square)](https://travis-ci.org/cfreear/jquery-textlimit)

A simple plugin to restrict text inputs to specific word and/or character limits.

##Usage
###Options
```javascript
$('#mytext').textlimit({wordlimit:5});
```
###Data variables
Using data variables allows you to specify the options for inputs individually:
```html
<input class="textlimit" name="input_one" type="text" data-wordlimit="5"/>
<input class="textlimit" name="input_two" type="text" data-wordlimit="20"/>
```
Initialised by:
```javascript
$('.textlimit').textlimit();
```

##License
[unlicense.org](http://unlicense.org/UNLICENSE)
