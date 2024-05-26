# Envest Global API Frontend

## Features

### Admin

-   Manage users
    -   Create user
    -   Update user (password, active)
    -   Get user list

### User

-   Manage API keys
    -   Create API key (title, description, end date)
    -   Delete API key

## Installation

### Requirements

-   Node.js (20x)

### Steps

1.  Clone the repository

```sh
git clone <repo-url/>
```

2.  Install dependencies

    ```bash
    npm install
    ```

3.  Start the development server

    ```bash
    npm start
    ```

4.  Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

5.  Build the project

    ```bash
    npm run build
    ```

## Development

You can use docker compose to start the production environment locally.

```bash
docker-compose up -d
```

## Commitlint

This project uses [commitlint](https://commitlint.js.org/) to enforce a commit message convention. The commit message convention is based on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
