# HOW TO

## setup:

```
npm i
```

## to test on your machine (dev):

- in App.js change fetch URL to https://localhost:8000/log

```
npm start
```

- in server.js change listen log to https://localhost:8000

```
node server.js
```

## to run on carleton openstack (prod):

- in App.js change fetch URL to https://comp3008-w20.scs.carleton.ca/comp3008_47/log

```
npm run build
```

- in build folder change all instances of /static to /comp3008_47/static and /manifest to /comp3008_47/manifest
- in server.js change listen log to https://comp3008-w20.scs.carleton.ca/comp3008_47

```
node sever.js
```

// when using dev setup, will send 2 post requests of user data

// when in prod setup, sends 1 post request of user data

# FILES

### public/

contains basic files for the website, created by create-react-app

### src/

contains all of the js files that are used to created the react app, by from create-react-app

### src/App.js, src/Create.js, src/Test.js

conatin the code for the react app that we created

### log.csv

contains all of the information about each paricipants password scheme attempts

### server.js

is the code for the server that serves our react app
