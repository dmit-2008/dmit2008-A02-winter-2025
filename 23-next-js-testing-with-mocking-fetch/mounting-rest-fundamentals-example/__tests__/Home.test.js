/*
WE're mocking out the rest api.
- isomorphic-fetch
  - fetch on node and fetch on the browser are different
  this package essentially bridge the gap
- msw (docs https://mswjs.io/)
  - allows you to mock the backend of your application
- jest-fixed-jsdom
  - next.js didn't take testing the api seriously
  - msw doesn't work perfect with next.js so we need to modify
  the jest.config.js to use this in their testEnvironment

*/
import 'isomorphic-fetch'
// make the node and browser fetch consistent

// this used to render the component
// complex state changes and select items with screen
import {render, act, screen} from '@testing-library/react'

// the matchers
import '@testing-library/jest-dom'