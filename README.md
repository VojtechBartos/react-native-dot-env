# React Native dotenv

Add `.env` support to your react-native application without including credentials in JavaScript bundle.

[![npm version](https://img.shields.io/npm/v/react-native-dot-env.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dot-env)
[![npm downloads](https://img.shields.io/npm/dt/react-native-dot-env.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dot-env)

Package that loads environment variables from a `.env` file into `process.env`. Credentials are not included in the JavaScript bundle, instead credentials that are bundled in the native app are exposed to the Javascript. It's a much more secure way for you application to access credentials, especially when JavaScript bundles are being remotely downloaded. You can easily use `.env` file and let build process create platform specific configuration files.

**NOTE: Android not supported yet, feel free to contribute :)**

## Installation

```sh
yarn add react-native-dot-env
# or
npm install --save react-native-dot-env
```

### Automatically link

```sh
react-native link react-native-dot-env
```

### Manually link

#### iOS with CocoaPods

Add the following line to your build targets in your `Podfile`

`pod 'RNDotEnv', :path => '../node_modules/react-native-dot-env/ios'`

Then run `pod install`

#### Android

Sorry, Android is not supported yet.

## Getting started

1. Create a new React Native App

  ```sh
  react-native init SimpleApp
  cd SimpleApp
  ```

2. Install the latest version of react-native-dot-env

  ```sh
  yarn add react-native-dot-env
  # or via npm
  # npm install --save react-native-dot-env
  react-native link react-native-dot-env
  ```

3. Create .env file(s) and add them to .gitignore

  ```sh
  echo "API_URL=http://localhost" > .env
  touch ios/.env.plist
  echo ".env*" >> .gitignore
  ```

4. Add newly created `.env.plist` to Xcode project

  - `open ios/SimpleApp.xcodeproj`
  - In Project navigator right click on project `SimpleApp` (root item) and choose `Add Files to "SimpleApp"`
  - Add the newly created `.env.plist` (in MacOS you can show hidden files with `⌘+shift+.`)

  ![Add file](docs/add_file.png)

5. Add `Run script` in Project `Build phases`

  - It has to be before `Copy Bundle resources` (see image)

  ```sh
  node ../node_modules/react-native-dot-env/cli.js -e ../.env -d $SRCROOT
  ```

  ![Build phases](docs/build_phases.png)

6. Add to application source code

  ```js
  import dotenv from 'react-native-dot-env'

  dotenv()

  console.log(process.env)
  ```

7. Run App

  ```sh
  react-native run-ios
  ```
