## Description

Example of the implementation of [google oauth2](https://developers.google.com/identity/protocols/oauth2) with [NestJs](https://nestjs.com/)

## Installation

```bash
$ npm ci
```

Complete the .env file

```dosini
# Example: 1234.apps.googleusercontent.com
AUTH_GOOGLE_KEY= ...

# Example: 1234
AUTH_GOOGLE_SECRET= ...

# Example: http://localhost:3000/oauth2/callback
GOOGLE_CALLBACK_URL= ...

# Example: http://localhost:4200
FRONTEND_URL= ...
```

[Obtain OAuth 2.0 credentials](https://developers.google.com/identity/protocols/oauth2#1.-obtain-oauth-2.0-credentials-from-the-dynamic_data.setvar.console_name-.)

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Usage

```bash
$ curl --location --request GET 'localhost:3000/oauth2/login/google'
```

## About me

- Author - [Malo Polese](https://www.linkedin.com/in/malo-polese/)
- Website - [malo-polese.fr](https://malo-polese.fr/)
