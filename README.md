
To be completed

- [ ] Firebase Connection
- [ ] Authentication
- [ ] React Native Apps


### Upload react app to github pages

> npm install gh-pages

 add "homepage" : "https://test.github.io/folder" into package.json

Then add into scripts

```
"scripts": {    
   "start": "react-scripts start",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   "build": "react-scripts build",
   "test": "react-scripts test",
   eject": "react-scripts eject"
},
```

Push 
npm run deploy