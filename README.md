This repository contains a reproduction for a bug of the [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) library when used to perform an implicit OpenId flow without requesting an access token.

## Steps

- `npm install`
- `npm start`
- Browse to http://localhost.8080
  You may want to use a private/incognito browser window to start without any previous authentication.
- Note how the application is not authenticated yet (isAuthenticated msut show _false_).
- Click the _Authorize_ button.
- On the identity provider page, login with username `dwho` and password `dwho`.
- The application is still not authenticated. That is the bug.
