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
	- **elements**: div, p, a
		- element usually consists of some content wrapped by open and closing tags
		- exceptions are `img` and some others
	- **tags**: < > and </ > mark beginning and end of element
	- **attributes**: class="foo-class" and id="second-paragraph" and ...
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