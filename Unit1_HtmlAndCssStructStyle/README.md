# Notes
These will be notes for Unit 1.
HTML and CSS: Structure and style

## Lesson 1: Frontend first steps
- simple intro on HTML: Hyper Text markup language
- Also for CSS: Cascading style sheets
- Usage of repl.it and Sublime text to write and run code.
	- codepen is also recommended

## Lesson 2: HTML the Right Way
- HTMl: take content and wrap in appropiate tags
- Describing the difference between elements, tags, and attributes
	- ```HTML 
		<div class="foo-class">
		  <p>This is a paragraph with <a href="https://somewhere.com">a link</a> in it.</p>
		  <p id="second-paragraph">This is the second paragraph</p>
		</div>
	```
	- **elements** : div, p, a
		- element usually consists of some content wrapped by open and closing tags
		- exceptions are `img` and some others
	- **tags** : < > and </ > mark beginning and end of element
	- **attributes** : class="foo-class" and id="second-paragraph" and ...
		- setting properties on an HTML element
- Explaining what is meant when people say HTML is about structure (vs. style or behavior)
	1. HTML specifies each and every one of its elements
		- visible (p and img) and not visible for humans (meta)
	2. specifies hierarchical relationship between elements in a doc
		- tree is a series of nodes with `<html>` as root
		- nodes above are **parents**, nodes next to each other **siblings**, nodes under **children**
- Explaining and using semantic HTML
	- **semantic**: when elements used to represent our content reinforce meaning of content
	- preferable since helps browsers, web-crawlers, screen readers, and collabs better understand
- Inspecting and manipulating HTML using Developer Tools
	- Chrome: CMD+Shift+C or opening up manually from 3 dots-> moreTools-> Developer Tools
	- if you ctrl+Rclick in dev console you can edit the HTML, then click away to see results
- Learning new HTML elements
	- anchor, image, header, video
- Taking content and structuring it into well-formed, semantic HTML
- Explaining what a11y is and describing and following basic a11y best practices
	- a11y (two 1's) stands for accessibility
	- practice making web pages accessible to both able-bodied and disabled users
		- we'll mainly focus on visually impaired
		- it also help web crawlers find and index content on the web to have it appear on search results
	- Logical content structure makes easier for screen readers to nav and understand
	- make sure to tell which language it's reading, usually placed in `<html lang="en">` tag
	- ARIA ("Accessible Rich Internet Applications"): web accessibility interface
		- helps those who uses it to understand and use websites
	- `role` tells the browser what each content is for and helps screen readers understand
		- best used for newer HTML5 sectioning 
			- e.g.: header, main, nav, footer
	- Conclusion: 
		- semantic HTML
		- lan attrib. on HTML tag
		- set the role attribute are appropiate locations

## CSS the Right Way
- Describing the different parts of a CSS ruleset (the selector, the declaration block, declarations, properties, values)
	- **ruleset**
		- ``` HTML
			input {
				display: block;
				font-family: 'Proxima Nova W01', sans-serif;
				font-weight: 400;
				font-style: normal;
				height: 45px;
				width: 420px;
				min-width: 210px;
				max-width: 100%;
				padding: 6px 1em 5px;
				border: 1px solid #d0d2d5;
				border-radius: 3px;
				font-size: 15px;
				line-height: 30px;
				color: #404853;
				box-shadow: inset 0 3px 7px #f6f7f7;
			}
		```
		- describes how input elements should look
	- **selector**
		- `input` , is the element or elements that will be targeted by declarations that follows 
	- **declarationblock**
		- follows selector and is a block of delcarations contained within `{ }`
	- **declarations**
		- consists of a property and value it is to be set to
		- example: `display: block;`
	- **property**
		- has a range of valid values
			- for example, width can be set with 150px, 50%, or auto
	- **values**
- Explaining what is meant when people say CSS is about presentation (vs. structure or behavior)
	- CSS controls visual aspects of content on page (color, fonts, size, etc..)
	- Also avoid using inline styling, best practice for HTML for structure, CSS for presentation
		- refered as *separation of concerns* 
- Explaining the box model
	- most elements on a web page are rectangular boxed
		- space taken by element determined by width, height, padding, border and margin
		- normally everything will add up for total width
		- if we want model to respect width that was set, use `box-sizing`
- Inspecting and manipulating CSS using Developer Tools
- Learning new CSS properties
- Solving basic CSS problems like setting background colors, font colors, width, height, etc.
- Using a wide variety of CSS selectors to target HTML elements
	- Look for the t004_CssSelectorsSamples.css
	- there's also pseudo elements and pseudo-classes
		- pseudo-elements:  p::first-letter
			- targets specific parts of the document
		- pseudo-classes:  div.foo:hover {...}
			- targets specific states of the document
- **Specificity** : when there are multiple style rules targeting same element, there will be conflicts
	- browser will choose the one with high specificity
- **cascade** : process browser follow to determine which CSS values gets applied for all prop. on given ele.
- Viewing HTML without CSS can be viewed differently depending on the browser
	- CSS reset with [Meyer Rest](https://meyerweb.com/eric/tools/css/reset/reset.css)
	- [normalize.css](https://necolas.github.io/normalize.css/) is a css library that normalize subset of browser elements to be consistent between browsers