




# Questions for 3rd meeting
- ~~camelCase or with dashes? follow the convention which is dashes in this case~~
- Look at tutor's revision after finishing unit 1 and go through them again!
- ask about usage of `<main>` 
	- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
  	- The HTML `<main>` element represents the dominant content of the `<body>` of a document, portion of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
- colors: preferable to use hex over rgb/rgba?
- margin shortcuts (assume applies same as padding)
	- `margin: 10px` applies to top, right, bottom, left
	- `margin: 5px 10px` applies to (5px top bottom) (10px left right)
	- `margin: 25px 50px 75px` applies to (top 25px) (left/right 50px) (bottom 75px)
- Do you have to memorize the float-grid css or just keep a reference file?

## Revisions
- display property drill: https://gist.github.com/thinkfulgist/7cb02fd99caf09490e567850b4e8dade
	- naming classes and separation of concerns
- position property: https://gist.github.com/thinkfulgist/926f34c98b63df95f78ab6debdecc770
	- https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
		- inheriting box-sizing
		- ```CSS
			html {
			  box-sizing: border-box;
			}
			*, *:before, *:after {
			  box-sizing: inherit;
			}
			<!-- Create a component class afterwards and it can have something different-->
		```
- float property: https://gist.github.com/thinkfulgist/ee777760618b03c99c0130da67370eb3/revisions
	- alternative to h3 tag provided in starter code. (p tag?)
	- What if an editor wants to add six more nebulas at 6 am in the morning? ... and she has no access to the CSS in your CMS (content management system)... Can you think of something that would hold up to this requirement without your intervention?
		- make 3 nebula class positions for nebula-left, nebula-middle, and nebula-right? //not as good
		- if we had a pattern of left and right we can use nth-child odd and even and have odds on left and evens on right side. 
	- is there any way you can give the image some room to breath from the text?
		- giving the image margins can keep it away from the text
	- Note each picture of the nebula scales up and down
		- removing % and giving images a fixed width and height?
		- issues is if image becomes too small to view.
		- Having it directly in the HTML giving a width and height
- from designs to code: https://gist.github.com/thinkfulgist/bcc66f91b615cea3d4077133628075aa/revisions
	- better tags
	- play around with more resilient solution
- challenge signup page: https://gist.github.com/thinkfulgist/c0570b8d7b232537810924c6735a38b5/revisions
	- screen reader tools and playing around with one



- Document flow: pos absolute etc..


## what we covered

Multiple H1s:
https://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824

Chrome Extensions I shared:

[Tota11y](http://khan.github.io/tota11y/) (validates your use of accessibility)
[Landmark Navigation](https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp?hl=en-GB) (lets you be a power user by jumping to landmarks)
[disable-HTML](https://chrome.google.com/webstore/detail/disable-html/lfhjgihpknekohffabeddfkmoiklonhm?hl=en-GB) (to disable CSS, JS, etc. Great for debugging if JS is cause of page issues by disabling them)
[Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn?hl=en) (important when meeting design requirements)