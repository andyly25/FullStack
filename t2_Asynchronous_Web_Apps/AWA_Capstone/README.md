# Capstone
- learn how to create user flows to design your app
  - text-based design describing what your user sees, 
  - what they do with what they see, 
  - and what happens when they do it
- Create a MVP (minimum viable product)
  - code up prototype based on your designs and publish it
- getting user feedbacks to make improvements
- Style your app
- Clean up your app to make portfolio ready

## REQUIREMENTS
- Look at the [rubric](https://docs.google.com/spreadsheets/d/1PPlV2js16NNbxI6hcknxSptXyyto4onnUPPdML44aJU/edit#gid=1227063358) often
- The app should do something interesting
  - pulls in data from third party APIs and displays that data in some way to your user.
- Polished appearance for final version
  - implement a minimal, functional prototype of your app
    - use to get feedback on your app's features
  - Final version needs be polished
  - use [design checklist](https://gist.github.com/alfaraday/c54c3504b3bb14a879428e9939f6f430)
- Responsive
  - Should work for both mobile and desktop
- Accessibility
  - follow a11y best practices

## Choosing an API
- ... first what do I want to make? What do I want to convey?
  - I'm not that interested in music
  - informational sites maybe?
    - what kind?
  - something with Google APIs like Google Map?
  - Food and nutritional content?
  - Graphs and charts of something interesting?
  - Searching up news article of particular subject?
- Current idea:
  - Book recommendation site
    - can search by: ISBN/Book title, Author, genre
      - display book image, title, description, amazon link etc
      - offer recommendations of similar type?
    - Displays popular books list
      - can view by genres
  - Usage of nytimes books api: https://developer.nytimes.com/books_api.json#/README
  - usage of Google Books API to grab subject for our genres
  - create an add button to place interested books into a temp list