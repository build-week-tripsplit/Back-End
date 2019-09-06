# Trip Split - Back-End

Instead of scrambling at the end of a trip or a dinner to figure out who pays for what, Trip Split keeps things simple. Everything is divided equally and there’s no more guessing game involved. No need to whip out the calculator on your iPhone after an uber ride and you can plan out trips in advance so you’re always on budget.

[**Product Canvas Document**](https://docs.google.com/document/d/1eoyBH13hhQFvpHTtV978ntf0xoMhakGSofl6rWgmx8g/edit?usp=sharing)

---

## **API Documentation**

**BASE URL** https://tripsplit-backend.herokuapp.com

- Attach endpoints to the Base URL to hit them with HTTP Requests.

### **Table of Contents**

#### NON-PROTECTED ENDPOINTS

| Links                                   | Endpoints            |
| --------------------------------------- | -------------------- |
| [POST Registration](#post-registration) | `/api/auth/register` |
| [POST Login](#post-login)               | `/api/auth/login`    |

#### PROTECTED ENDPOINTS

> **All EndPoints listed below require a `token`! Send an `authorizatoin header` with the token provided upon login.**

| Links                                               | Endpoints                    |
| --------------------------------------------------- | ---------------------------- |
| [GET All Users](#get-all-users)                     | `/api/users`                 |
| [GET User by ID](#get-user-by-id)                   | `/api/users/:id`             |
| [GET User by Username](#get-user-by-username)       | `/api/users/getby/:username` |
| [GET All Trips](#get-all-trips)                     | `/api/trips`                 |
| [GET Trip by ID](#get-trip-by-id)                   | `/api/trips/:id`             |
| [GET All Expenses](#get-all-expenses)               | `/api/expenses`              |
| [GET Expense by ID](#get-expenses-by-id)            | `/api/expenses/:id`          |
| [GET Trips by User ID](#get-trips-by-user-id)       | `/api/trips/user/:id`        |
| [GET Expenses by User ID](#get-expenses-by-user-id) | `/api/expenses/user/:id`     |
| [POST Trip](#post-trip)                             | `/api/trips`                 |
| [POST Expense](#post-expense)                       | `/api/expenses`              |
| [PUT Trip by ID](#put-trip-by-id)                   | `/api/trips/:id`             |
| [PUT Expense by ID](#put-expense-by-id)             | `/api/expenses/:id`          |
| [DELETE Trip by ID](#delete-trip-by-id)             | `/api/trips/:id`             |
| [DELETE Expense by ID](#delete-expense-by-id)       | `/api/expenses/:id`          |

<!-- | [POST Trip User](#post-trip-user)                   | `/api/trips/user`            | -->

---

### [POST] Registration

#### URL: https://tripsplit-backend.herokuapp.com/api/auth/register

**Payload:** _an object with the following credentials:_

> **Required:** `username`, `email`, & `password`

```json
{
  "username": "newUsername",
  "password": "newPassword",
  "email": "johndoe@gmail.com",
  "first_name": "John",
  "last_name": "Doe"
}
```

**Return:** _an object with the user credentials provided in the request body_

```json
{
  "id": 1,
  "username": "newUsername",
  "password": "hashedPassword",
  "email": "johndoe@gmail.com",
  "first_name": "John",
  "last_name": "Doe"
}
```

[Back to Top](#table-of-contents)

---

### [POST] Login

#### URL: https://tripsplit-backend.herokuapp.com/api/auth/login

**Payload:** _an object with the following:_

```json
{
  "username": "newUsername",
  "password": "newPassword"
}
```

**Return:** _an object with a welcome message, authentication token, and user info. Save this token to local storage (or similar). This token will be required for all HTTP requests below (protected endpoints)._

```json
{
  "message": "Welcome newUsername!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Im5ld1VzZXI0IiwiaWF0IjoxNTY3MTAwNTAzLCJleHAiOjE1NjcxODY5MDN9.BrCNULMh7pLMFGzY6HyX5CK_tA7ek8bUQSFiWkrPBQQ",
  "user_id": 5,
  "username": "newUsername",
  "email": "johndoe@gmail.com",
  "first_name": "John",
  "last_name": "Doe"
}
```

[Back to Top](#table-of-contents)

---

### [GET] All Users

#### URL: https://tripsplit-backend.herokuapp.com/api/users

**Return:** _an array of registered user objects_

```json
[
  {
    "id": 1,
    "username": "user1",
    "password": "hashedPassword",
    "email": "user1@gmail.com",
    "first_name": "Bob",
    "last_name": "Smith"
  },
  {
    "id": 2,
    "username": "user2",
    "password": "hashedPassword",
    "email": "user2@gmail.com",
    "first_name": null,
    "last_name": null
  }
];
```

[Back to Top](#table-of-contents)

---

### [GET] User by id

#### URL: https://tripsplit-backend.herokuapp.com/api/users/:id

> Place the id of the user which you are requesting data for in the url parameter `:id`

**Return:** _the user object._

```json
{
  "id": 1,
  "username": "user1",
  "password": "hashedPassword",
  "email": "user1@gmail.com",
  "first_name": "Bob",
  "last_name": "Smith"
}
```

[Back to Top](#table-of-contents)

---

### [GET] User by Username

#### URL: https://tripsplit-backend.herokuapp.com/api/users/getby/:username

> Place the username of the user which you are requesting data for in the url parameter `:username`

**Return:** _the user object._

```json
{
  "id": 1,
  "username": "user1",
  "email": "user1@gmail.com",
  "password": "hashedPassword",
  "first_name": "Bob",
  "last_name": "Smith"
}
```

[Back to Top](#table-of-contents)

---

### [GET] All Trips

#### URL: https://tripsplit-backend.herokuapp.com/api/trips

**Return:** _all trips in **an array of objects** as follows:_

```json
[
  {
    "id": 1,
    "title": "Paris Business Trip",
    "description": "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    "location": "Paris, France",
    "start_date": "2019-07-15T05:00:00.000Z",
    "end_date": "2019-07-20T05:00:00.000Z",
    "complete": true
  },
  {
    "id": 2,
    "title": "Bali Vaca!",
    "description": "Relaxing with friends and checking out from responsibilities.",
    "location": "Bali, Indonesia",
    "start_date": "2019-07-20T05:00:00.000Z",
    "end_date": "2019-07-30T05:00:00.000Z",
    "complete": true
  },
  {
    "id": 3,
    "title": "Family Adventure to DisneyLand",
    "description": "Loading everyone up for some family fun with Disney!",
    "location": "Orlando, Florida",
    "start_date": "2019-08-10T05:00:00.000Z",
    "end_date": "2019-08-14T05:00:00.000Z",
    "complete": true
  }
];
```

[Back to Top](#table-of-contents)

---

### [GET] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

**Return:** _the trip object along with an array of ids for the users going on that trip._

```json
{
  "id": 2,
  "title": "Bali Vaca!",
  "description": "Relaxing with friends and checking out from responsibilities.",
  "location": "Bali, Indonesia",
  "start_date": "2019-07-20T05:00:00.000Z",
  "end_date": "2019-07-30T05:00:00.000Z",
  "complete": true,
  "users": [3, 4, 5]
}
```

[Back to Top](#table-of-contents)

---

### [GET] All Expenses

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses

**Return:** _all expenses in **an array of objects** as follows:_

> `trip_id` references which trip the expense _belongs_ to.

```json
[
  {
    "id": 1,
    "title": "Hotel - Entire Trip",
    "category": "Lodging",
    "amount": 2500,
    "date": "2019-07-15T05:00:00.000Z",
    "trip_id": 1,
    "complete": true
  },
  {
    "id": 2,
    "title": "Food - Entire Trip",
    "category": "Food/Beverage",
    "amount": 550,
    "date": "2019-07-15T05:00:00.000Z",
    "trip_id": 1,
    "complete": true
  },
  {
    "id": 3,
    "title": "Drinks in the Hotel Lounge",
    "category": "Food/Beverage",
    "amount": 80,
    "date": "2019-07-15T05:00:00.000Z",
    "trip_id": 1,
    "complete": true
  }
];
```

[Back to Top](#table-of-contents)

---

### [GET] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/:id

> Place the id of the expense in the url parameter `:id`

**Return:** _the expense object as follows:_

```json
{
  "id": 1,
  "title": "Hotel - Entire Trip",
  "category": "Lodging",
  "amount": 2500,
  "date": "2019-07-15T05:00:00.000Z",
  "trip_id": 1,
  "complete": true
}
```

[Back to Top](#table-of-contents)

---

### [GET] Trips By User ID

### URL: https://tripsplit-backend.herokuapp.com/api/trips/user/:id

**Return:** _an **array of objects** displaying a list of each trip for a specified user._

> Place the id of the user which you are requesting trips data for in the url parameter `:id`

```json
[
  {
    "id": 2,
    "trip_id": 1,
    "user_id": 2,
    "title": "Paris Business Trip",
    "description": "Going to Paris for business meetings and week-long conferences. Representing our local branch of the company.",
    "location": "Paris, France",
    "start_date": "2019-07-15T05:00:00.000Z",
    "end_date": "2019-07-20T05:00:00.000Z",
    "complete": true
  },
  {
    "id": 16,
    "trip_id": 6,
    "user_id": 2,
    "title": "Konnichiwa!",
    "description": "Heading to Japan! Couple's trip.",
    "location": "Tokyo, Kyoto, Osaka",
    "start_date": "2019-09-30T05:00:00.000Z",
    "end_date": "2019-10-12T05:00:00.000Z",
    "complete": false
  }
]
```

[Back to Top](#table-of-contents)

---

### [GET] Expenses By User ID

### URL: https://tripsplit-backend.herokuapp.com/api/expenses/user/:id

**Return:** _an **array of objects** displaying a list of each expense for a specified user._

> Place the id of the user which you are requesting expenses data for in the url parameter `:id`

```json
[
  {
    "id": 2,
    "expense_id": 1,
    "user_id": 2,
    "amount": 1250,
    "title": "Hotel - Entire Trip",
    "category": "Lodging",
    "date": "2019-07-15T05:00:00.000Z",
    "complete": true,
    "trip_id": 1
  },
  {
    "id": 4,
    "expense_id": 2,
    "user_id": 2,
    "amount": 275,
    "title": "Food - Entire Trip",
    "category": "Food/Beverage",
    "date": "2019-07-20T05:00:00.000Z",
    "complete": true,
    "trip_id": 1
  },
  {
    "id": 6,
    "expense_id": 3,
    "user_id": 2,
    "amount": 40,
    "title": "Drinks in the Hotel Lounge",
    "category": "Food/Beverage",
    "date": "2019-07-20T05:00:00.000Z",
    "complete": true,
    "trip_id": 1
  },
  {
    "id": 41,
    "expense_id": 15,
    "user_id": 2,
    "amount": 500,
    "title": "Hotel",
    "category": "Lodging",
    "date": "2019-09-30T05:00:00.000Z",
    "complete": false,
    "trip_id": 6
  },
  {
    "id": 45,
    "expense_id": 16,
    "user_id": 2,
    "amount": 2100,
    "title": "Flights - Round Trip",
    "category": "Transportation",
    "date": "2019-09-30T05:00:00.000Z",
    "complete": false
  }
]
```

[Back to Top](#table-of-contents)

---

### [POST] Trip

#### URL: https://tripsplit-backend.herokuapp.com/api/trips

**Payload:** _an object with the following:_

- a property `trip` that contains the trip object of which will be inserted into the database
- a `users` array, containing the user `id`s that are attending this trip

**title & users are REQUIRED**

```json
{
  "trip": {
    "title": "Test!",
    "description": "Going on a trip to a place!",
    "location": "Test City",
    "start_date": "2019-09-02",
    "end_date": "2019-09-05"
  },
  "users": [3, 5, 7]
}
```

**Return:** _the complete trip object (`id` is automatically generated, `complete` has a default value of `false`)_

```json
{
  "id": 8,
  "title": "Test!",
  "description": "Going on a trip to a place!",
  "location": "Test City",
  "start_date": "2019-09-02T05:00:00.000Z",
  "end_date": "2019-09-05T05:00:00.000Z",
  "complete": false
}
```

[Back to Top](#table-of-contents)

---

### [POST] Expense

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses

**Payload:** _an object with the following:_

- a property `expense` that contains the expense object of which will be inserted into the database
- a `users` array, containing the user `id`s that are splitting this expense

**`title`, `users`, and `trip_id` are REQUIRED**

> `trip_id` is to let the database know which trip the expense _belongs_ to.
> This endpoint will create a new `expense`, but will also create new expences for each user passed into the `users` array
> The total `amount` of the expense will be divided evenly between each `user`, and this split amount will be stored for each user

```json
{
  "expense": {
    "title": "Takoyaki Party!",
    "category": "Food/Beverage",
    "amount": 100.0,
    "date": "2019-10-01",
    "trip_id": 6
  },
  "users": [1, 2, 6, 7]
}
```

**Return:** _the complete expense object (`id` is automatically generated, `complete` has a default value of `false`)_

```json
{
  "id": 17,
  "title": "Takoyaki Party!",
  "category": "Food/Beverage",
  "amount": 100,
  "date": "2019-10-01T05:00:00.000Z",
  "trip_id": 6,
  "complete": false
}
```

[Back to Top](#table-of-contents)

---

<!-- ### [POST] Trip User

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/user

**Payload:** _an object as follows:_

```json
{
  "trip_id": 1,
  "user_id": 1,
  "title": "Paris Bussiness Trip",
  "location": "Paris, France",
  "start_date": 1560643200,
  "end_date": 1561248000
}
```

Returns:

```json

```

[Back to Top](#table-of-contents)

--- -->

### [PUT] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

**Payload:** _an object with the properties you'd like to make changes to and the values of those changes._

> `id` cannot be changed
> types must reamain the same, i.e. `complete` will accept a boolean value, `title` will accept a string, etc.

```json
{
  "title": "Updated Title",
  "end_date": "2019-09-06"
}
```

**Return:** _the complete trip object, including the changes made in the request._

```json
{
  "id": 9,
  "title": "Updated Title",
  "description": "Attending Lambda School Event",
  "location": "Salt Lake City",
  "start_date": "2019-09-02T05:00:00.000Z",
  "end_date": "2019-09-06T05:00:00.000Z",
  "complete": false
}
```

[Back to Top](#table-of-contents)

---

### [PUT] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/:id

**Payload:** _an object with the properties you'd like to make changes to and the values of those changes._

> `id` cannot be changed
> types must reamain the same, i.e. `complete` will accept a boolean value, `title` will accept a string, etc.

```json
{
  "title": "Updated Title",
  "complete": true
}
```

**Return:** _the complete expense object, including the changes made in the request._

```json
{
  "id": 18,
  "title": "Updated Title",
  "category": "Food/Beverage",
  "amount": 100,
  "date": "2019-10-01T05:00:00.000Z",
  "trip_id": 6,
  "complete": true
}
```

[Back to Top](#table-of-contents)

---

### [DELETE] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

> id from params will select the trip object to be deleted

**Return:** _1 means true_

```json
{
  "removed": 1
}
```

[Back to Top](#table-of-contents)

---

### [DELETE] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/6

> id from params will select the expense object to be deleted

**Return:** _1 means true_

```json
{
  "removed": 1
}
```

[Back to Top](#table-of-contents)

---
