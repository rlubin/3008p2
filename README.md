react server @ localhost:3000
logging server @ localhost:8080

must have logging server running to append to log.csv

setup:
npm i

dev(use react server):
npm start
node server.js

prod(use logging server):
npm run build
node server.js

// when using dev setup, will send 2 post requests of user data
// when in prod setup, sends 1 post request of user data
