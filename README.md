# React-native dotenv

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

### Manually

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
  touch .env
  echo "API_URL=http://localhost"
  touch ios/.env.plist
  echo ".env*" >> .gitignore
  ```

4. Add newly created `.env.plist` to Xcode project
  1. open ios/SimpleApp.xcodeproj
  2. In Project navigator right click on project `SimpleApp` (root item) and choose `Add Files to "SimpleApp"`
  3. Add the newly created `.env.plist` (in MacOS you can show hidden file with `⌘+shift+.`)

5. Add `Run script` in Project `Build phases` (TODO add example image)

  ```sh
  node ../node_modules/react-native-dot-env/cli.js -e ../.env -d $SRCROOT
  ```

6. Run App

  ```sh
  react-native run-ios
  ```

<!--
### Mostly automatic installation

`$ react-native link react-native-dot-env`

### Manual installation


../node_modules/react-native-dot-env/cli.js -e ../.env -d $SRCROOT

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-dot-env` and add `RNDotEnv.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNDotEnv.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNDotEnvPackage;` to the imports at the top of the file
  - Add `new RNDotEnvPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-dot-env'
  	project(':react-native-dot-env').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-dot-env/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-dot-env')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNDotEnv.sln` in `node_modules/react-native-dot-env/windows/RNDotEnv.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNDotEnv;` to the usings at the top of the file
  - Add `new RNDotEnvPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNDotEnv from 'react-native-dot-env';

// TODO: What to do with the module?
RNDotEnv;
```
  # react-native-dot-env -->
