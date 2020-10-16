# Bowties & Books Client

This app allows users to set reading goals.
It also encourages users to "broaden their perspective" and read diversely by providing interesting reading prompts.

Here's the deployed version of `Bowties & Books`: (https://bookish-client.vercel.app/ "Bowties-and-Books"

### Demo Account:

- username: wildseed
- password: Password!123

## Table of Contents

- [Demo Account](#Demo-Account)
- [Storytime!](#Storytime!)
- [Quick App Demo](Quick-App-Demo)
- [A More Detailed Look](A-More-Detailed-Look)
- [Tech Stack:](#Tech-Stack:)
  - [Front End](#Front-End)
  - [Testing](#Testing)
  - [Production](#Production)
- [Getting Started!](#Getting-Started!)
  - [local setup](#local-setup)
- [Upcoming Features!](#Upcoming-Features!)
- [About Me](#About-Me)
  - [GitHub Profile](https://github.com/cabejackson)
  - [LinkedIn](https://www.linkedin.com/in/caleb-jackson-cabe/)
- [Special Thanks](#Special-Thanks)

## Storytime!

As an avid reader myself, I'm always looking for my next great read! This app can help users do just that, by challenging their reading tastes and prompting them to read books they might've otherwise never considered.

This app will prompt the user to declare how many books they plan to read in the month (or any time frame, like spring break for example). Now, let's say they chose 4 books! The user will then view TBR cards and click on the cards to reveal the prompts on the backside. These prompts could be like, "Read a book with an elder protagonist" or "Read an anthology". Again, these prompts encourage readers to read outside of their comfort zones, but if the user feels like, "oh I already read a ton of anthology books", then they can flip that card back over and click another one! After viewing these prompts, users can then jot down their reading goals and click "Save This Goal".

Saving their goals is advantageous, because it allows users to keep track of prompts they've already completed. Note: saving goals is only available for users that have created an account.

Fun tidbit:
Will the user be repeatedly shown the same TBR cards? No way, lol that's no fun! Each time the user logs in and navigates to the "Create" page, the TBR cards are randomly generator to ensure the same cards aren't shown.

For example if the user says "show me 2 TBR cards on Wednesday" like this:
[Wednesday](some-site)

Then on Thursday, the user says "show me 2 TBR cards" again different cards will be shown, like this:
[Thursday](some-site)

## Quick App Demo

![giphy](<iframe src="https://giphy.com/embed/AUJnEt2yVTnyfViugs" width="342" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/AUJnEt2yVTnyfViugs">via GIPHY</a></p>)

## A More Detailed Look

### These links show screenshots of my app with the components they're referencing labeled as well.

- [START HERE](some-site)
- [ABOUT](some-site)
- [LOGIN](some-site)
- [CREATE](some-site)
- [GOALS](some-site)

## Tech Stack:

### Front End

- React
  - Create React App
  - React Router
- HTML5
- CSS3

### Testing

- Jest (Smoke tests)

### Production

- Deployed via Vercel

## Getting Started!

Clone this repository to your local machine

```
git clone https://github.com/cabejackson/bookish.git bnb-client
```

Change directory into the cloned repository

```
cd bnb-client
```

Make a fresh start of the git history for this project

```
rm -rf .git && git init
```

Install the node dependencies

```
npm install
```

Follow the [setup](https://github.com/cabejackson/bookish-backend) instructions to get `Bowties & Books Server` up and running.

## quick start scripts.

Run the tests

```
npm t
```

Start the application

```
npm start
```

## Upcoming Features!

### The Developer described in the [About Me](#About-Me) is working to incorporate these next user stories!

- Returning users can edit their goals
- Users can view developer recommended books when viewing prompts

## About Me

_[GitHub Profile](https://github.com/cabejackson)
_[LinkedIn](https://www.linkedin.com/in/caleb-jackson-cabe/)

## Special Thanks

To Thinkful's Engineering Immersion Course TAs, instructors and my mentor (Praveen)!
