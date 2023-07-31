# Simple image gallery using the Imgur API

This is a simple SPA that connects to a [backend](https://github.com/leoperez-dev/gallery-backend) in order to fetch the images.

Its's made using:
- Vite + React + Typescript
- styles using plain css modules for simplicity.
- Redux Toolkit for state management
- ESlint for code linting
- Prettier for code formatting

[Visit deployed site](https://gallery-frontend.onrender.com/)

## Features
- Browse Imgur's gallery sections (Hot, Top, User)
- Sort images by viral, top, time, rising (only available for user section)
- Specify a time window (day, week, month, all) when in the Top section
- Preview images in low quality thumbnails
- Expand an image showing it's full resolution version, also upvotes, downvotes, and score

## Build instructions
- Clone repository
- Install dependencies `npm install`
- Create a .env file specifying the backend url, (see .example.env)

## Commands
- start dev server `npm run dev`
- run tests `npm run test`
- build project `npm run build`
- lint `npm run lint`

## TODO
A list of some improvements to make given the time
- improve ui/design using a design system
- implement a proper masonry layout
- implement infinite scroll pagination with a virtualized list
- implement skeleton loading for images
- show all album images, not just the cover
  
  
