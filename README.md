# [Diners, Drive-ins & Dives Tracker](https://rocky-bayou-25901.herokuapp.com/)

Easily find restaurants featured on Food Network's most successful and popular show.

Now, fans can write private reviews and track the locations they visit.


## Overview

Triple D (Diners, Drive-ins & Dives) fans are not your typical foodie.  They are foodie fanatics!  It is not uncommon for fans to visit hundreds of different Triple D locations.

Until now, there was no easy way for Triple D fans to search locations and track the ones they visited.

Map Markers
* As you visit locations, write a review for each visit.  The map marker turns "green" indicating this is a visited location.
* Your reviews are private, and only you can see your reviews and visited locations.
* Non-visited restaurant location markers are Blue.
* Out of business locations are denoted by Red markers.

This project was also an exploration in implementing the third party react-google-maps library versus working directly with the native Google Map JavaScript API.

## Technology
### API
* Built and Populated API locations database from scratch.
* User Credentials are persisted on sign-up.
* User Passwords in database are encrypted via bcrypt.
* User Reviews and Visited flags persisted when review is saved.

### Front End
* React
* react-router
* Redux
* redux-thunk
* redux-form
* redux-modal
* react-google-maps

### Back End
* Node.js
* Express.js
* Express Router
* Express.js cors
* MongoDB (mLab)
* Mongoose

### Authentication
* bcryptjs
* jsonwebtoken
* passport
* passport-jwt
* passport-local

### Continuous Integration and Testing
* TravisCI
* mocha
* chai
