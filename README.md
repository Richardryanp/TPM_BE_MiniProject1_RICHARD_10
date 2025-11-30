#Coffee Catalog
##A simple Express.js API that provides a catalog of coffee types and allows adding new items. Data is stored in a JSON file without a database.

## Setup

1. Clone the project and navigate into the folder:
=> cd TPMweek1

2. Install dependencies:
=> npm install

3. Create a .env file:
=> PORT=3000

4. Start the server:
=> npm start


## Routes

GET /
=> Returns a welcome message.

GET /api/coffees
=> Returns all coffee items in JSON format.

POST /api/coffees
=> Adds a new coffee item.
Body example:
  {
    "name": "Latte",
    "sugar": "Normal"
  }

