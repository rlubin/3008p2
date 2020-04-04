react server @ localhost:3000
logging server @ localhost:8080

logging only works when using prod setup

setup:
npm i

dev(use react server):
npm start

prod(use logging server):
npm run build
node server.js

// when using dev setup, will send 2 post requests of user data
// when in prod setup, sends 1 post request of user data
