# Dynamic Labs' React SDK

![Demo](https://user-images.githubusercontent.com/1596208/224532010-75f90ab4-6151-4e07-8452-fbef87b6a210.jpg)

Welcome to Dynamic! We're so excited that you're here!

## What is Dynamic?

Dynamic offers smart and beautiful login flows for crypto-native users, simple onboarding flows for everyone else, and powerful developer tools that go beyond authentication.

## Product walkthrough

Want a quick overview of some of the powerful features Dynamic offers? check out our product walkthrough video below.

<a href="https://www.youtube.com/watch?v=LKP-aJOTxfw
" target="_blank"><img src="https://user-images.githubusercontent.com/1596208/224676777-5f6ffad2-f2c3-4f49-bc4e-a8643da777cd.jpg"
alt="Product walkthrough video" width="1280" /></a>

## Getting started

Getting started with Dynamic is simple, and [you can read the full guide here](https://docs.dynamic.xyz/docs/getting-started-with-dynamic).

Here is a shoterned version of the getting started guide:

1. [Create your Dynamic account and grab an Environment ID](https://app.dynamic.xyz).
2. Install this npm package
3. Configure the SDK

```js
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: 'ID',
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
```

## Feedback

Dynamic strives to help you build innovative experiences, meaning we're always adding new features. You can [Join our Slack community](https://www.dynamic.xyz/slack)., [follow us on twitter](https://twitter.com/dynamic_xyz) or check out our [change log](https://www.dynamic.xyz/changelog) to see the latest and greatest from us.

## Documentation

**Get started [here](https://docs.dynamic.xyz/docs).**
