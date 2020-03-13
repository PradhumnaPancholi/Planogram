# This apps let to manage projects with real-time capabilities.

[Live Demo](https://planogram.netlify.com/)

## Stack:-

1. React
2. Redux
3. Firebase.
4. Cloud functions.

## Features:-

1. Firebase email auth.
2. Create a prject.
3. Get real-time updates (User Creation, Project creation).

## Architecture/Design:-

The app is built completely using functional components to keep code cleener. Apart from that, each component handle just one functionality for provide seperation of concern. Everything the is related to visual change is handled by component level state, while everything else is handled by application level state using redux to have single source of truth.