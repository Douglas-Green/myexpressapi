
# My Express API

This app is a simple RESTful API built with Express.js and MySQL. It allows users to manage a collection of characters with basic CRUD (Create, Read, Update, Delete) operations. The API also logs requests to a database, enabling users to track API usage.


## EndPoints

### GET /characters
    Returns a list of characters

### POST /characters
    Inserts a new character.
**Request Body**
```
{ 
    "name": "Character Name",
    "description": "Character Description"
}
```

### PUT /characters/
    Updates an existing character.
**Request Body**
```
{
    "name"; "Updated Name",
    "description": "Updated Description"
}
```
### DELETE /characters/
    Removes an existing character.


### GET /requests
    Returns a list of requests made to the server.

### ERROR HANDLING
- 404 ot Found: When an endpoint does not exist.
- 500 Internal Server Error: For unexpected server errors.
## Running the Project

1. Clone the repository:
```
git clone git@github.com:Douglas-Green/myexpressapi.git

cd myexpressapi
```
2. Install dependencies:
```
npm install
```
3. Create a '.env' file with your database configuration:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=myexpressapi
```
4. Start the server:
```
node server/index.js
```
5. Test the endpoints using a tool like Postan or curl


## Project Structure
```
my-express-api/
├── db/
│   ├── db.js
├── server/
│   ├── middleware/
│   │   ├── logRequests.js
│   ├── routes/
│   │   ├── characters.js
│   │   ├── requests.js
│   ├── index.js
├── package.json
├── README.md
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

