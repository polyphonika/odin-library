### Outline for small library app

- [x] Loop through the library array and display each book either as a card or table
- [x] Have a "New book" button that brings up a form allowing users to ad a new book
- - [x] As modal, sideform or permanent form on page?
- - [x] Add functionality so that the form submits and the data is added to the array. At this point the table is redrawn.
- [x] Have a button for each book that allows you to delete it
- [x] Have a button for each book that allows you toggle its read/unread status

### Next actions

- [x] Design basic HTML/CSS. Decide cards or table
- - [x] Add HTML as example for styling.
- - [x] Work on styling. Start with reset. 
- - [] Move to JS
- [x] Decide if using modal, sideform or permanent form
- [x] Design JS functionality, DOM manipulation etc
- [x] Bells and whistles
- [] Check community
- [] Done!

### Notes and ideas
- "+" button that extends to "add new book" with animation on hover
- Blur out the rest of the page when sidebar is active
- Set a max width for containers
- Static table header
- Gradients, colour palettes
- https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables#row-details
- https://stackoverflow.com/questions/70475065/how-do-i-use-variable-fonts-with-google-fonts
- https://tailwindcss.com/docs/customizing-colors
- https://uicolors.app/create

### Next immediate actions
- [x] Style header as top block, full width, but with flex container inside or grid so that it doesn't extend entirely across the page.
- - [x] Apply the same rules to the table width so it has a max width
- - [x] Add svg logo
- [x] Move the button into the table card, similar to Tailwind example
- [x] Ask ChatGPT _and_ Claude how to work on the sidebar without distraction and breaking the overall page. Should we just add the semantic HTML first?
- [x] Build sidebar menu

### Working on delete button
- [x] Use console log to see how we can remove from an array
- [x] Create a function, see if from console we can remove a given id
- [x] Attach to button
- [x] Redraw

