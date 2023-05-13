# Riskjack

## Introduction

Riskjack is a **work-in-progress**, full-stack web application where two players can play a modified, chaotic version of Blackjack online.

## Developer Instructions

_Since this project will be changing frequently, the instructions may change as the project is built._

If you're forking the repository and contributing to the project, there are a few things you'll need to do so that you can test the app locally.

Make sure to run `npm install` in both the `client/` and `server/` directory to install the necessary packages from `Node.js`.

1. If you're on **Windows**, you must install WSL (WSL is essentially just having a virtual version of Ubuntu on your machine.) Follow this article to set it up correctly: [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

Additionally, you might want to consider installing **zsh** to make the process of using WSL easier. This article will take you through a simple installation process: [Oh My Zsh](https://ohmyz.sh/)

2. Install Redis on your machine. The installation method varies by operating system, so you should refer to the official Redis documentation for installation: [Installing Redis](https://redis.io/docs/getting-started/installation/)

3. Set up environment variables. In the `server/` directory for the project, create a `.env` file and provide two values: `REDIS_URL`, which points to the URL where your local instance of Redis is running (`127.0.0.1` is the same as `localhost`); And `REDIS_PORT`, signaling which port of `localhost` should be used to run Redis. `6379` is the default for local instances of Redis.

`.env`:

```env
REDIS_URL=127.0.0.1
REDIS_PORT=6379
```

4. Navigating to the `server/` directory in your terminal, make sure to run `nodemon index.js` to serve the backend. The backend is built on `express`.

Once you've completed each step and ensure that Redis and Express are up and running, you can write `npm run dev` in the `client/` directory with your terminal to run the front-end. You should be able to run the app locally from there.

If you ave any issues during the setup process, refer to the [Redis documentation](https://redis.io/docs/) or send me a message.
