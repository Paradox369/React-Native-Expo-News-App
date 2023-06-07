# Title

React Native News App

## Definition

A Cryptocurrency news app in react native expo. It helps crypto traders get quick new on what is going on in
in the crypto environment

## Components

- Navbar

  Returns a stylized Appbar component with a heading of "Home"

- Loading
  returns a view component with contents just saying "Loading..."

- Text
  acomponent for displaying text

- ScrollView
  enables the scrolling of information.
  Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

- Card
  enables the display of relevant content.
  Cards contain content and actions about a single subject.

- Image
  A component for displaying different types of images, including network images, static resources, temporary
  local images, and images from local disk, such as the camera roll.

## Screens

- Home Screen

  Returns a view component.
  the query is fetched asynchronously from the API link using axios and returned as an array of responses.
  this component is stateful.
  during the query fetch, a Loading component is displayed till the query is carried out

## IMPORTANT NOTE

the api link takes only the current date!!! make sure to update it in ./screens/HomeScreen/index.js
