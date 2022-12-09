---
title: Creating, Testing, and Publishing React components with Vite
subtitle: Recently I switched from create-react-app (CRA) for creating and publishing
  react apps and components to rolling my own build solution using Vite, Vitest,
  and Typescript.
date: 2022-08-20
coverImage:
  - vite.png
tags:
  - posts
description: "Recently I switched from create-react-app (CRA) for creating and publishing
  react apps and components to rolling my own build solution using Vite, Vitest,
  and Typescript. "
---

![code studio]({{ hlp.sharp.img(['vite-test.png']) }})

Recently I switched from create-react-app (CRA) for creating and publishing react apps and components to rolling my own build solution using Vite, Vitest, and Typescript. CRA provided an excellent start for creating basic react applications, but it lacked the flexibility I needed to customize component development and builds to meet my specific needs. I've been hearing great things about Vite, So I decided to try it and was not disappointed. Here is a basic outline of what this involved; I will get into more details in a future post.

### Vite

> *Vite (French word for "quick", pronounced `/vit/`
, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects.

Vite.js is a super easy-to-use next-generation build tool from the creator of VUE Evan You. The build times are ridiculous (it’s fast), super simpler to config, and it improves the Frontend Developer experience making it a great replacement for the sometimes slow but very popular Webpack.

### Vitest

> Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests.

[Vitest](https://vitest.dev/) is a new addition to the application testing ecosystem from the Vite/Vue team, and like Vite, it brings a fast, modern, and simple testing experience to developers. Setup is fairly simple, couple of lines of code, to be honest, a nominal cost for the speed and features it provides.

 What's more is that if you use Jest, Chai, or React Testing Library and are concerned with having to learn a new API. Vitest test is compatible with these frameworks which is a huge plus. It also offers a UI to view and interact with your test/code in the browser, SWEET!!!

### Scaffold a React component with Vite

```bash
npm create vite@latest
# Select a framework >> react
# Select a variant >> react-ts
```

To create a new react component using Vite run `npm create vite @latest` and follow the on-screen prompts; select react from the framework option and typescript for variant the `react-ts` . I use npm, but you can switch out the commands with those of your preferred package manger tool.

 If you prefer to skip the prompts simply run `npm create vite@latest component-name -- --template react-ts`

Once created `CD` into the component folder and run `npm install` to download the required packages from NPM. Since I use a Lerna to manage my monorepo, I use the `lerna bootstrap` command to install and symlink dependencies. Be mindful of this if you are working with a mono-repo tool like NX or Turborepo, as package installs are usually handled by the toolset.

```json
// npm start
"scripts": {
    "start": "vite --open",
    ...
  },
```

Fire up the app in development by running `npm run dev` in your terminal to run and view your component. I usually edit my npm scripts to add a start command `"start": vite --open`; this is not necessary, just a personal preference.

### Testing with **Vitest**

```bash
# install required packages
npm i -D vitest jsdom c8
```

At the time of this writing, Vite does not come with `test` built in a minor oversight, hopefully, it will be added soon. Since we are going to need let's add it ourselves by running `npm i -D vitest @vitest/ui jsdom c8` , `JSDOM` is required for dom mocking and `C8` for code coverage, so we install those also.

```bash
# additional packages
npm i @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/react-test-renderer react-test-renderer
```

Add some additional plugins including the testing-library (jest-dom, react, and user-event), we will go into details about each one of these do later. Please run `npm start` to verify that everything went well with your installation.

### Vitest Setup

> *One of the main advantages of Vitest is its unified configuration with Vite. If present, `vitest` will read your root `vite.config.ts` to match with the plugins and setup as your Vite app. For example, your Vite **[resolve.alias](https://vitejs.dev/config/#resolve-alias)**  and **[plugins](https://vitejs.dev/guide/using-plugins.html)** configuration will work out-of-the-box.*
>

Okay, so we have now installed everything we need and confirmed that our react app is running in our dev environment. Let’s set up a basic test.

Create a new file in your `src/test` called `setup.ts` to add jest-dom support `@testing-library/jest-dom` support.

```tsx
import '@testing-library/jest-dom'

import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

Now let's add a config file for vitest. Create a new file in your root directory, name it `vitest.config.js`, and copy and paste the following code into the file. You can check the docs for [additional config info](https://vitest.dev/guide/#configuring-vitest)

```tsx
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // add jsdom
    setupFiles: './src/test/setup.ts', // setup includes
    coverage: { // config coverage
      reporter: ['text', 'html'], // generate coverage reports
      exclude: [ // dont test the following files
        'node_modules/',
        'src/test/setup.ts'
      ],
    },
  },
});
```

### Write your first test

We are going to write a simple test to see if our app renders correctly. Create a file in your src directory and name it `src/App.test.tsx` and copy and paste the code below into it.

```jsx
import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';

import App from '../App'
describe('App renders correctly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
})
```

You may need to modify `App.tsx` to include the `React` library, fixes any missing react errors.

```jsx
//import { useState } from 'react'
import React, { useState } from 'react'
```

Next, add a test command `vitest` to your npm scripts section in your `package.json`, and run `npm run test`. This will fire up your test in watch mode and output results in your console.

```json
"scripts": {
 "start": "vite --open",
 "dev": "vite",
 ...
 "test": "vitest"
},
```

Text output.

```bash
✓ src/App.test.tsx (1)

 Snapshots  1 written
Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  114ms

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

### Additional test scripts

Now let's add some additional test script utilities to leverage the benefits of Vitest

- `test:ui` open your test in the browser-based interactive interface provided by Vitest `"test:ui": "vitest --ui",`
- `test:coverage` allows you to view test coverage (watch mode disabled `--run` ) `"test:coverage": "vitest --run --coverage",`
- `test:ui:coverage` runs both UI/Coverage test in watch mode `"test:ui:coverage": "vitest --coverage"`

```json

"scripts": {
 "start": "vite --open",
 "dev": "vite",
 ...
 "test": "vitest"
 "test:ui": "vitest --ui",
 "test:coverage": "vitest --run --coverage",
 "test:ui:coverage": "vitest --ui --coverage"
},
```

### Package Build scripts

I use two build scripts; one for application builds and the other for creating my `npm` packages. The first `npm run build` comes with Vite out of the box. The second `npm run build:package` I create for packaging components for NPM.

Create a new file `vite.package.config.ts` in to root directory and copy and paste the code below into the new file. For more info on the config setting, [check out the docs here](https://vitejs.dev/config/).

```tsx
/** @format */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(
    {insertTypesEntry: true,}
  )],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  build: {
    outDir: resolve(__dirname, "./lib"),
    sourcemap: true,
    // minify: 'terser',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Component",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        compact: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }

      }
    }
  }
})
```

Next, add the following command to your scripts section of your `package.json` file  run `npm run build:package`

```json
"build:package": "tsc && vite build --config vite.package.config.ts",
```

```json
"scripts": {
 "start": "vite --open",
 "dev": "vite",
 ...
 "build": "tsc && vite build",
  "build:package": "tsc && vite build --mode package --config vite.package.config.ts",
},
```

### Publishing to NPM

Almost forgot we are going to publish to NPM, as such your `build:package` command should have thrown errors as we still need to make a couple more changes to the app. Create the file for your `build/lib/entry` parameter of your  `vite.package.config.ts`  file `src/index.ts`. The export should point to your component. Replace `component-name` with the name of your actual component.

```tsx
// index.ts

export { default as Component } from './components/component-name';
```

Next, add the following to your `package.json` file. These will point package users to the files they need to import when consuming your package(s).

```tsx
"main": "./lib/index.umd.cjs",
"module": "./lib/index.js",
"types": "./lib/index.d.ts",
"exports": {
  ".": {
    "import": "./lib/index.js",
    "require": "./lib/index.umd.cjs"
  }
},
```

Try running `npm run build:package` again. Everything should be working fine now.

```bash
> @fpkit/fp-button@0.2.2 build:package
> tsc && vite build --config vite.package.config.ts

vite v3.0.0 building for production...
✓ 11 modules transformed.
lib/manifest.json   0.10 KiB
lib/index.js        20.87 KiB / gzip: 6.20 KiB
lib/index.js.map    66.03 KiB
lib/manifest.json   0.10 KiB
lib/index.umd.cjs   14.23 KiB / gzip: 5.62 KiB
lib/index.umd.cjs.map 64.65 KiB

[vite:dts] Start generate declaration files...
[vite:dts] Declaration files built in 2179ms.
```

### Example Component

```tsx
import React from "react"

/* Defining the props that the Button component will take. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button.
   */
  type: "button" | "submit" | "reset"

  /**
   * Button label/content
   */
  children: React.ReactNode

  /**
   * Button styles and props
   */
  styles?: object

  /**
   * button classes
   */
  classes?: string

}

const Button = ({
  type,
  children,
  styles,
  disabled,
  classes,
  onClick,
  onMouseOver,

  ...props
}: ButtonProps) => {

 /**
  * If the button is not disabled, then call the onClick function
  */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!disabled) {
      onClick?.(e)
    }
  }

/* Returning a button element. */
  return (
    <button
      type={type}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
```

### Vite React Typescript Starter Template

I have created a Vite React Typescript starter template <https://github.com/shawn-sandy/vite-react-ts-kit> on github [click here to clone to your own repository](https://github.com/shawn-sandy/vite-react-ts-kit/generate)  or you can use [degit to copy](https://github.com/Rich-Harris/degit) to copy to you machine `degit shawn-sandy/vite-react-ts-kit`

### Resources/Links

 Please check out the links and resources below for additional info.

[Vite](https://vitejs.dev/) Next Generation Frontend Tooling. Get ready for a development environment that can finally catch up with you.

[Vitest](https://vitest.dev/) Blazing Fast Unit Test Framework. A Vite-native unit test framework. It's fast!

[Testing Library | Testing Library](https://testing-library.com/) Simple and complete testing utilities that encourage good testing practices

[Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

[Chai](https://www.chaijs.com/) Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
