

# Hi. I'm Pinkles.

I'm a small boilerplate for modern web projects. Or, to put it another way, I'm a curated set of front-end development tools. I'm what you copy into your root directory for a fresh project.

I require [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/).

I Support E8+, Firefox, Chrome, Safari.

# Here's what I provide (and why):

## A set of common CSS utility classes

[HTML5 Boilerplate](http://html5boilerplate.com) provides some wonderful CSS utility classes. I've gone through and removed the ones that are 1) too aesthetically opinionated 2) rely on IE6&7 browser hacks (example: `*text-indent: -9999px;`), or 3) are duplicated by Compass (example: Image replacement utility class).

## A grid framework

I surveyed a _lot_ of CSS3 grid frameworks with a specific list of requirements: 

* The framework must must flexible, zoomable, responsive, and support nested grids.
* The framework must be easily modifiable and intuitive to learn.
* The framework can't be heavy handed about the number of columns, widths of gutters, etc.
* The framework must not inject its own framework for media queries and must play nicely with the ones I'm using (below).
* The framework shouldn't litter the markup with oddities like `.alpha` and `.omega`
* The framework should allow me to create columns left-to-right or right-to-left regardless of which order they appear in the markup.
* The framework should preferably be written in SASS. (bonus points)

I looked at Zurb's [Foundation 4](http://foundation.zurb.com/grid.php), Twitter's [Bootstrap](http://twitter.github.com/bootstrap/scaffolding.html#gridSystem), Skeleton's [Grid System](http://www.getskeleton.com/#grid), [Less Framework 4](http://lessframework.com/), and even more powerful grid-creation tools like the venerable [Susy](http://susy.oddbird.net/).

In the end, I learned it comes down to this: can you use `box-sizing: border-box;` or not? IE8+, webkit, and gecko support it. If those are the browsers you're targeting, then for the love of god **USE IT**. [Here's a simple explanation why](http://learnlayout.com/box-sizing.html). Here's how I'm using it:

```scss
* { @include box-sizing(border-box);}
```

Crazy, right? If you're able to use this one simple line, your life will change. And your %-based grid framework gets really really simple. In the end I found that when I'm able to use the border-box box model, all I need to do to create a responsive grid framework _that fulfills all the requirements listed above_ is a simple mixin:

```scss
// grid( number-of-columns, columns-to-span, go-right-to-left? )
@mixin grid($gr-cols, $gr-span, $gr-reverse: false) {
	width: (100%/$gr-cols*$gr-span);
	@if $gr-reverse { float:right; } @else { float:left;}
}
```

The added bonus here is that you can target all your grid directives from the SASS side of things. 

Here's some sample markup for a 3 column left-to-right grid:

```html
<div class="whatever-classname">
	<div>
		<p>First 33% column</p>
	</div>
	<div>
		<p>Second 33% column</p>
	</div>
	<div>
		<p>Last 33% column</p>
	</div>
</div>
```

The SCSS for this would be:

```scss
.whatever-classname {
	@include clearfix;
	> div {
		@include grid(3,1); // 3 column grid, this div spans 1 column.
		padding:2em; // Want to add gutters? No problem thanks to border-box!
	}
}
```

## Cross-browser normalized styles

Nicolas Gallagher's [Normalize.css](https://github.com/necolas/normalize.css) needs no introduction. It makes sense and it's not aesthetically opinionated, save for one area: headings. I've changed these so that all `h1` type elements are simply `font-size:1em`. I've also gone through and **removed all the IE star hacks**. Since we're not targeting IE<8, I'd rather not take the risk of tripping up minifiers or SASS compilers you might be using (I've seen it happen).

## Responsive breakpoints

Anthony Short's [comprehensive collection](https://gist.github.com/anthonyshort/2028061) media-query breakpoints is stellar. Why? A few reasons. 

1) Unlike [Bootstrap's breakpoints](http://twitter.github.com/bootstrap/scaffolding.html#responsive) they don't dictate a way of designing. There is no "default" screen width and then a set of overrides. Having worked with.

2) Spanning across multiple breakpoints. Cascades like this are useful: `tablet-landscape-and-below`. It means you're not having to constantly restate your styles for different media queries, as with frameworks like [Less Framework 4](http://lessframework.com/).

The version I've included is a variation of Anthony's work, by [Paul Satmtiou](https://gist.github.com/stammy/4442615). Paul's version defines breakpoint widths in ems instead of pixels. Read Paul's explanation [here](http://paulstamatiou.com/responsive-retina-blog-development-part-1) under the section: "It's all relative (why you should use ems for breakpoints)."

## CSS3 animation framework

Dan Eden's [Animate.css](http://daneden.me/animate) is brilliant.

## "Font Awesome" iconic font library

Having quick access to basic shapes is a good thing. I think of these as an extension to [HTML5's collection of entities](http://dev.w3.org/html5/html-author/charref). 

I try to not be too opinionated on things aesthetically. In fact, some of HTML5's boilerplate has been removed because it was too aesthetically opinionated. However, I'll make an exception for Dave Gandy's [Font Awesome](http://fortawesome.github.com/Font-Awesome/) iconic font library. It was originally made for [Bootstrap](http://twitter.github.com/bootstrap/) and it's well maintained.
