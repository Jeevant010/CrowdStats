# Dynamic Client SDK

Welcome to the Dynamic Client SDK - a powerful and flexible authentication solution for your applications.

## Overview

The Dynamic Client SDK provides a seamless way to integrate authentication and user management into your application. With an easy-to-use API and robust feature set, you can quickly implement secure authentication flows while maintaining a great user experience.

The SDK is designed to be lightweight yet powerful, giving you the tools you need without unnecessary bloat.

## Troubleshooting Initialization

If you are having issues with your client's initialization, try the following:

1. Disable `autoInitialize`:

```typescript
const client = createDynamicClient({ autoInitialize: false });
```

2. Initialize the client manually and handle the error:

```typescript
try {
  await initializeClient(client);
} catch (error) {
  console.log(error);
}
```
