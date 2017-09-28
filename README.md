# Full Stack Project - Front End

## Links:

[Pick-a-Winner Front End](https://mdcollins80.github.io/pick-a-winner/)

[Pick-a-Winner Back End](https://pick-a-winner-nfl.herokuapp.com/)

## Repositories:

This is the repo for the front end of the Pick-a-Winner football picks league, supported by a Rails [back end API](https://github.com/mdcollins80/pick-a-winner-api).

## What it does:

As a user, you can sign-up and sign-in to the application.  From there you are able to choose your predicted winner between two NFL teams for all 256 games of the NFL season.  On creation, your picks are stored in a database by the back-end Rails API.  You can retrieve those picks, update them, and delete them as you please.

## What it's built with:

The front end portion of this project was completed using:
- HTML
- CSS
- SASS
- Bootstrap
- JavaScript
- jQuery
- Handlebars
- AJAX

## Planning:

Wireframes and User Stories: [Imgur](https://i.imgur.com/2LzMuOa.jpg)

## Yet to Tackle:

There are a number of improvements and additions I have in mind for this project.

- Integrate a 3rd party API to update the Games' winning-team upon completion of the games.
- Add a standings section to display users' statistics, including a weekly correct pick count
- Validation to prevent users from submitting or editing picks after kickoff.
- Validation to prevent users from submitting multiple picks for the same game.
- Ability to see other user's picks after kickoff.
- Streamline the user experience by removing the input fields and substituting them with home and away team buttons to submit picks.
- Pick submission reminders/notifications as game time approaches.

## Project Story:

I picked this project because it is something I've managed for the past few years using Google Forms and Sheets.  I thought it would be fun and potentially useful for the future to convert that league over to a web app that users could use with more functionality and ease.

I initially spent too much time on an overly complex model.  I felt compelled to pour a lot of time in to the back end when, in fact, through the magic of Rails, I could have had that set up in a matter of minutes.  I scrambled for the past few days, then, to get the front end CRUD functionality up and running.  Despite scrambling, however, I methodically traversed the various parts of each CRUD route to ensure the app functions as expected.

I was able to get some semblence of my initial plan in place and am happy with this Version 1 functionality, but look forward to the opportunity to improve upon this product!
