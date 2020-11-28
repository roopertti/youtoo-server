# Youtoo Server

## Requirements

Install Docker, Node.js and NPM.

## Database config

First, `cd` into `./db`.

Windows: run `init_db.bat`.
Unix: run `./init_db`.

Above command creates a containerized PostgreSQL server which runs on port 5432 (or whatever you decide to run it on).

- To stop the server, run `docker stop youtoo-db`
- To start the server again, run `docker start youtoo-db`
- To remove the container, run `docker rm youtoo-db`

## Run server in development mode

Run command `yarn start` to run the server on http://localhost:8000.

## Build production bundle

To build production bundle, run command `yarn build`.