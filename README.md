# Anicons Library
Import and use animated icons on your website! These animated icons are inspired by Google's Material Design.

You'll find a lot of examples on how to customize & use Anicons in this [folder](DEMO).

## How to use Anicons:
### 1. The best way to use the Anicons library is by importing it in your [sass file](DEMO/mystyles.sass):
```sass
@import link/to/anicons.sass

(code for your customized icons)
```
You can change the icon color and size:
```sass
.myicon
  +color(green) // Just use the color() mixin!
  font-size: 8px // Just use the font-size property!
```
### 2. Link to the compiled sass in your [html file](DEMO/mypage.html):
```html
<link href="link/to/my-customized-icons.css" rel="stylesheet" type="text/css">
```

### 3. Add the Anicons into your [html file](DEMO/mypage.html):
```html
<i class="anico menu close"></i>
```
You can use the s1, s2, s3, s4, s5, or s6 class to change the icon lineweight:
```html
<i class="anico menu close s4"></i>
```

### 4. Add your choice of javascript to toggle the icons in your [javascript file](DEMO/myscripts.js):
```javascript
$('.anico').click(function() {
  $(this).toggleClass('toggle');
});
```
