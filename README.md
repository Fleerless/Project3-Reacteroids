# Game Overview

Welcome to [Reacteroids](https://project3-reacteroids.herokuapp.com/)!! This is a rendition of the classic Asteroids game, remodeled as a _"freemium"_ game. 

![](client/public/ReacteroidsPlay.gif)

## There are two ways to play the game.

#### Without Progress Tracking
You can play the game without creating an account or logging in! Just click the red Play Game button on the home screen, or click the Game link in the NavBar. In this setting you will start out with no upgrades, and can acquire in game currency (credits) from asteroid kills. Credits will allow you to purchase upgrades in the Store. The game will track your progress until you close the window, or reload the page. When you close or reload the page, all progress is lost.

#### With Progress Tracking
You can also Signup to create a user account. When users play under their created account game data is saved to a database, and retrieved wach time they log in. This way they can keep track of their progress over several separate sessions. Additionally, registered Users are entered into the High Scores table, and can compete for bragging rights of the highest ever score.

## Store Overview
The store allows Users who have acquired enough credits to purchase upgrades. Currently there are two types of upgrades available, _change ship color_, and _increase bullet size_. The first purchase of each upgrade type is free, and each purchase gets more expensive, based on a built in multiplier. Users start with a black and white ship, and can change the color between 3 choices of color ways. Users also start with a default bullet size of 2. Each purchase of the bullet upgrade increases the bullet size by an additional 2 pixels. 

## How to Play

Click [here](https://project3-reacteroids.herokuapp.com) to play Reacteroids!

1. Clone this repository to your local machine, and navigate to its directory.
1. At any directory level, run `mongod`
1. **In a separate terminal window** cd into **client** and run `npm start`. The game will automatically open a window in your default browser and start the app.
1. In a **third terminal window** navigate to the **root** level of this directory run `node server.js`
1. _**NOTE:** Reloading the page will log you out and reset the game_

