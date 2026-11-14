# Starry Gallery API

**Github repo:** [https://github.com/Z034/ecommerce--store.git/backend](https://github.com/Z034/ecommerce--store/tree/main/backend)

## Application description

Starry Gallery API is the backend of the Starry Gallery online art store built in TD-TP 2 (React and Redux). It is a REST API with Node.js, Express and MongoDB. It stores the paintings and the users in a database, lets users register and log in, and protects the product management endpoints with JWT authentication and OAuth 2.0 (Google). Rate limiting protects the API against excessive requests and brute-force logins.

## Technologies used

- Node.js (ES modules)
- Express.js 5
- MongoDB (local Community Server or MongoDB Atlas) with Mongoose
- bcryptjs (password hashing)
- jsonwebtoken (JWT)
- OAuth 2.0 / OpenID Connect with Google (Authorization Code flow with PKCE)
- express-rate-limit
- cors, dotenv
- Thunder Client (API testing)
- Git / GitHub


## Project structure


```
backend/
├── config/
│   └── db.js                  MongoDB connection
├── controllers/
│   ├── authController.js      register and login
│   └── productController.js   product CRUD
├── middleware/
│   ├── authMiddleware.js      JWT / Google token verification
│   ├── errorMiddleware.js     404 and global error handler
│   └── rateLimiter.js         general and login limiters
├── models/
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── API tests screenshots/               API test screenshots
├── seed.js                    sample products
├── server.js                  application entry point
├── .env.example
└── package.json
```


## Database models

**Product** (collection `products`)

| Field | Type | Rules |
|---|---|---|
| name | String | required |
| description | String | required |
| price | Number | required, minimum 0 |
| category | String | required |
| imageUrl | String | required |
| stock | Number | required, minimum 0 |
| artist | String | optional |
| year | Number | optional |
| createdAt, updatedAt | Date | automatic |


**User** (collection `users`)

| Field | Type | Rules |
|---|---|---|
| name | String | required |
| email | String | required, unique, lowercase, valid format |
| passwordHash | String | required, bcrypt hash, hidden from queries by default |
| createdAt, updatedAt | Date | automatic |



## API endpoints

| Method | Endpoint | Purpose | Access |
|---|---|---|---|
| POST | /api/auth/register | Register a new user | Public |
| POST | /api/auth/login | Log in and receive a JWT | Public (5 requests per 15 min per IP) |
| GET | /api/auth/me | Return the authenticated identity | Token required |
| GET | /api/products | Retrieve all products | Public |
| GET | /api/products/:id | Retrieve one product | Public |
| POST | /api/products | Create a product | Token required |
| PUT | /api/products/:id | Update a product | Token required |
| DELETE | /api/products/:id | Delete a product | Token required |


**Error format:** every error returns JSON in the same shape:

```json
{ "message": "Description of the problem" }
```

**Example: create a product** (`POST /api/products`)

```json
{
  "name": "Test Painting",
  "description": "A painting used to test the API.",
  "price": 1000,
  "category": "Others",
  "imageUrl": "/images/test.jpg",
  "stock": 3
}
```



## JWT authentication

1. The user registers with `POST /api/auth/register`. The password is hashed with bcrypt (10 salt rounds) before being saved.
2. The user logs in with `POST /api/auth/login`. The server compares the password with the stored hash using bcrypt.
3. If the credentials are valid, the server signs a JWT containing the user id, using the `JWT_SECRET` environment variable. The token expires after one hour, and it is returned to the client.
4. For protected requests, the client sends the token in the header:
   `Authorization: Bearer <JWT_TOKEN>`
5. The `authMiddleware` extracts the token and verifies its signature and expiry. If it is valid, the request continues. Otherwise the API answers `401 Unauthorized`.

An unknown email and a wrong password return the same message, so that attackers cannot find out which emails are registered.


## OAuth 2.0 (Google)

Protected endpoints also accept an OAuth 2.0 access token issued by Google.

- Flow: OpenID Connect, Authorization Code with PKCE, tested in Thunder Client.
- Scope: `openid email profile`.
- The middleware checks the token with Google's `tokeninfo` endpoint and verifies that it was issued for this application (`aud` equals `GOOGLE_CLIENT_ID`).
- A token that is missing, invalid, or issued for another application returns `401 Unauthorized`.
- The client secret is configured only in Thunder Client and is not part of this project.


## Rate limiting

Implemented with `express-rate-limit`:

| Scope | Limit |
|---|---|
| All `/api` routes | 100 requests per 15 minutes per IP |
| `POST /api/auth/login` | 5 requests per 15 minutes per IP |


## CORS

The API accepts browser requests only from the origins listed in `CLIENT_ORIGIN` (by default the React development server, `http://localhost:5173`). Tools without an Origin header, such as Thunder Client, are accepted.



## Installation and running

Requirements: Node.js 18.11 or newer, and MongoDB (local or Atlas).

```bash
git clone https://github.com/Z034/ecommerce-store.git
cd ecommerce-store/backend
npm install
```

Create the environment file, then:

```bash
npm run seed    # fill the database with 8 sample paintings
npm run dev     # start the API with auto-reload (node --watch)
```


## MongoDB and environment variables

Copy `.env.example` to `.env` and fill in the values:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_local_secret
CLIENT_ORIGIN=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_oauth_client_id
```



## Tests and screenshots

All tests were run with Thunder Client. Screenshots are in the `screenshots` folder.



