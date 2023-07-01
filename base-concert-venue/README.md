# Popular Concert Venue

### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]

## Lesson 30. Setting up MSW with Next.js

npm i msw --save-dev

Create __tests__/__mocks__/msw/handlers.ts
import { rest } from "msw";

export const handlers = [];

Create __tests__/__mocks__/msw/server.ts
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

Edit jest.setup.ts
import { server } from "./__tests__/__mocks__/msw/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

## Lesson 31. Adding a MSW Handler

Auto-fill if go to /shows/ route
bandData.ts - lib/db/data/bandData.ts

generateBands() - in generateData()

api/shows.index.js isnt working in app. fix.


event - compiled client and server successfully in 131 ms (791 modules)
        Generating data...
                Generating bands...
                Generating shows...

