# mattrememberedproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To inspect webpack's config for vuejs app
```
vue inspect output.js
```

### Troubleshooting
1. Travis CI
If you get the error as below:
```
API request failed.
Message: Invalid credentials provided.
Reference: 
failed to deploy
```
Try the steps below:
Go to Heroku Account
Manually copy the API Key and then paste it into command line:
For the ones hosted at travis-ci.com:
travis encrypt pasteAPIKeyHere --add deploy.api_key --pro
For the ones hosted at travis-ci.org:
travis encrypt pasteAPIKeyHere --add deploy.api_key --org

2. Check deployed files
Use the following commands:
```
heroku login
heroku run bash -a mattrememberedproject
$ ls
```
When you finish your commands and want to return to your terminal, run :
```
$ exit
```

3. Recover deleted file
If you want to recover deleted file, use:
```
git checkout HEAD^ server.js
```