# Policy version control system

## Tech Stack
- **Framework**: NextJS
  - **Frontend**: ReactJS
  - **Backend**: NodeJS
- **Styles**: Tailwind css, headlessui and heroicons
- **Programming language**: Typescript

## Requirements
- **Node version:** 18.x.x

## Development

### Branching strategy
In order to add a new feature to the project create a new branch from the `main` branch, commit the new code and create a PR from the new branch to the `main` branch.

### Local development
To run the project locally:

1. Clone the project
2. Open the project's root folder in the terminal
3. Run `npm install`
4. Create a copy of the `.env` file named `.env.local` and change the environment variables accordingly
5. Run `npm run dev`
6. Open your browser on `http://localhost:3000/`

### Recommended vscode libraries

It is recommended to install the libraries listed in the `.vscode/extensions.json` file.

### Commit strategy
To successfully commit changes the commit massage **MUST** follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention.

The project uses `git hooks` that will verify **code format** using **prettier** and **eslint**, additionally, it will check the Typescript types and run the unit tests.

If any of this processes fail it won't allow to commit any changes and will output an error message in the console with more information about how to fix the issue.

### Backend development

Using the NextJS framework provides the ability to develop the backend project within this repository using [NextJS Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

The project has installed `drizzle-orm`, it is a ORM library that allows the developers to work with the common databases such as: postgres, mysql, etc. Additionally, it has the `drizzle-kit` allowing the ability to create database migrations automatically.
