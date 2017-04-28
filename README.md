
# react-native-dot-env

## Getting started

`$ npm install react-native-dot-env --save`

### Mostly automatic installation

`$ react-native link react-native-dot-env`

### Manual installation


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
  # react-native-dot-env
