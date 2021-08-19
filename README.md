# API Suite Portal's UI Extensions Template

## About

This repository contains a template for API Suite Portal's UI Extensions. This template can be used to kickstart the development of pages and visual elements that one might wish to insert into API Suite's Portal.

For more high-level documentation regarding these UI Extensions, please refer to the [UI Extensions documentation in Confluence](https://cloudoki.atlassian.net/wiki/spaces/AS/pages/275054593/UI+Extensions).

## Development

### Hooks

UI Extensions **hook** into the rendering process of API Suite's Portal by implementing specific interfaces for each type of hook:

#### Menu

The **Menu** hook makes it possible to add new entries to the Portal's different menus.

Check the `hooks/menu.ts` file for an example.

#### Pages

The **Pages** hook makes it possible to **add** new pages - with any given URI - to the Portal.

Check the `hooks/pages.ts` file for an example.

#### Sections

The **Sections** hook makes it possible to add new sections to pre-defined regions of the Portal (e.g., add a shopping section before, in, or after a page's contents).

Check the `hooks/sections.ts` for an example.

### Locally using the UI Extension

While developing a UI Extension, you might want to test it in API Suite's Portal. To do so, you must build it, and then install it in the Portal.

#### Building the UI Extension

To prep your UI Extension for Portal use, run the following command:

```
npm run build
```

To allow for the Portal to react to UI Extension changes, run the following command, as it automatically generates a new build upon detecting changes:

```
npm run build:watch
```

Before running any of the above commands, however, you need to add the extension's main component to your `index.ts` exports if you want the library to export the component.

#### Installing the UI Extension in the Portal

To install your UI Extension in the Portal, you need to run the following command in the Portal:

```
npm i --save "path-to-extension-folder/dev-symlink-target"
```

The reason for referencing the `dev-symlink-target` folder is because `dev-symlink-target` itself only references the `package.json` file, and the `build` folder. It leaves the `node_modules` folder out, which allows us to use the same React instance that is installed by the API Suite's Portal for both the portal **and** the extension.

### Testing

```
npm run test
```

### Releasing a new UI Extension version

To release a new version of your UI Extension, use [npm's version command](https://docs.npmjs.com/cli/version).

For instance, to create a patch release, run:

    npm version patch

This will automatically build the UI Extension, increment its version's patch field, commit these new changes, tag that commit, and ultimately push it to that UI Extension's associated repository.

### Hosting via GitHub

We recommend that you host the component library using NPM. That being said, if you don't want to use NPM, you can use GitHub to host it instead.

First, you'll need to remove `build/` from the `.gitignore` file. Then, you'll need to build the component library by running `npm run build`. Following this, you'll need to add, commit, and push the contents of this new `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

Once all of this is done, you can install your library into other projects by running:

```
npm i --save github:Cloudoki/apisuite-ui-extension-template#branch-name
```

## Stack

- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Acknowledgments

The repository is based on a stripped-down version of a React Component Library project skeleton. For more info on it:

* [Repo](https://github.com/HarveyD/react-component-library)
* [Blog post](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

It also features:

- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library), enabling testing of the components

