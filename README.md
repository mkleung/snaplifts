Snaplifts React Native App

- [x] Setting up a React Native Web Project
- [x] Setting Up React Native Hooks
- [x] Setting Up a React Native Web Monorepo
- [ ] Configuring React Native for Yarn Workspaces
- [ ] How to use Mobx with React Hooks
- [ ] Navigation in React Native Web
- [ ] Styling a Component in React Native Web
- [ ] Mobx Root Store
- [ ] Workout Timer with Mobx
- [ ] React Router with React Native Web
- [ ] How to Persist Mobx Stores
- [ ] Storing and Displaying Workout History
- [ ] React Router Params in React Native Web
- [ ] Floating Action Button React Native Web
- [ ] Deploy React Native Web to Netlify


https://youtu.be/_CBYbEGvxYY?t=990



Notes
=====

### Creating the React Web Project

```> yarn create react-app web --typescript```

```> yarn add react-native@0.55.4 react-native-web@0.10.0 react-art@16.8.2```

```> yarn add -D @types/react-native@0.55.4```  

To run:

```> yarn start ```

Go to localhost:3000


### creating the React Native Mobile App

Install React native cli

``` > npm i -g react-native-cli ```

``` > react-native init app --template typescript ```

``` > npm i react@16.8.2 react-native@0.59.0 ```

To run, use two different terminals

```> yarn start ```

```> npm run android  ```

https://www.youtube.com/watch?v=uhuoTcbquic


### MonoRepo

```> npm init```

Add this to package.json
```
{
  "private": true,
  "name": "snaplifts",
  "version": "1.0.0",
  "description": "Snaplifts React Native App",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "workspaces": [
    "packages/*"
  ]
}

```

Remove all node_modules

```> rm -rf packages/*/node_modules/```

```> yarn```

Add react and react native inside common

```> yarn add react-native@0.59.0 react@16.8.2```

```> yarn add -D typescript@3.3.3 @types/react-native@0.57.36  ```

Create a tsconfig file

Inside common/package.json
 ```
 "scripts": {
    "build": "tsc"
  }
  ```


```> yarn build```