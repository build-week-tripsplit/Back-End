# Trip Split - Back-End

Instead of scrambling at the end of a trip or a dinner to figure out who pays for what, Trip Split keeps things simple. Everything is divided equally and there’s no more guessing game involved. No need to whip out the calculator on your iPhone after an uber ride and you can plan out trips in advance so you’re always on budget.

[_Product Canvas_](https://docs.google.com/document/d/1eoyBH13hhQFvpHTtV978ntf0xoMhakGSofl6rWgmx8g/edit?usp=sharing)

---

## API Documentation

**BASE URL** https://tripsplit-backend.herokuapp.com

- Attach endpoints to the Base URL to hit them with HTTP Requests.

#### NON-PROTECTED ENDPOINTS

| Links                                   | Endpoints            |
| --------------------------------------- | -------------------- |
| [POST Registration](#post-registration) | `/api/auth/register` |
| [POST Login](#post-login)               | `/api/auth/login`    |

### [POST] Registration

#### URL: https://tripsplit-backend.herokuapp.com/api/auth/register

Payload: an object with the following, first_name and last_name are optional.

```javascript
{
  "username": "newUsername",
  "password": "newPassword",
  "email" : "johndoe@gmail.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

Returns: an object with user id, username, password, and email. If fist_name and/or last_name were included in the request body, they will also be returned here. The returned password will be hashed, ignore it 😄

```javascript
{
  "id": 1,
  "username": "newUsername",
  "password": "hashedPassword",
  "email": "johndoe@gmail.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

### [POST] Login

#### URL: https://tripsplit-backend.herokuapp.com/api/auth/login

Payload: an object with the following.

```javascript
{
  "username": "newUsername",
  "password": "newPassword"
}
```

Returns: an object with a message and authentication token. Save this token to local storage (or similar). This token will be required for all HTTP requests below (protected endpoints).

```javascript
{
  "message": "Welcome John!",
  "token": "some crazy string of letters and numbers"
}
```

---

---

#### PROTECTED ENDPOINTS

#### All EndPoints below require a token!

| Links                                               | Endpoints                |
| --------------------------------------------------- | ------------------------ |
| [GET All Users](#get-users)                         | `/api/users`             |
| [GET User by ID](#get-user-by-id)                   | `/api/users/:id`         |
| [GET All Trips](#get-trips)                         | `/api/trips`             |
| [GET Trip by ID](#get-trip-by-id)                   | `/api/trips/:id`         |
| [GET All Expenses](#get-expenses)                   | `/api/expenses`          |
| [GET Expense by ID](#get-expenses-by-id)            | `/api/expenses/:id`      |
| [GET Trips by User ID](#get-trips-by-user-id)       | `/api/trips/user/:id`    |
| [GET Expenses by User ID](#get-expenses-by-user-id) | `/api/expenses/user/:id` |
| [POST Trip](#post-trip)                             | `/api/trips`             |
| [POST Expense](#post-expense)                       | `/api/expenses`          |
| [POST Trip User](#post-trip-user)                   | `/api/trips/user`        |
| [PUT Trip by ID](#put-trip-by-id)                   | `/api/trips/:id`         |
| [PUT Expense by ID](#put-expense-by-id)             | `/api/expenses/:id`      |
| [DELETE Trip by ID](#delete-trip-by-id)             | `/api/trips/:id`         |
| [DELETE Expense by ID](#delete-expense-by-id)       | `/api/expenses/:id`      |

### [GET] All Users

#### URL: https://tripsplit-backend.herokuapp.com/api/users

Returns: an array of registered user objects.

```javascript
[
  {
    id: 1,
    username: "user1",
    password: "hashed password",
    email: "user1@gmail.com",
    firstName: "Bob",
    lastName: "Smith"
  },
  {
    id: 2,
    username: "user2",
    password: "hashed password",
    email: "user2@gmail.com",
    firstName: null,
    lastName: null
  }
];
```

---

### [GET] Users by id

#### URL: https://tripsplit-backend.herokuapp.com/api/users/:id

Returns: the user object.

```javascript
    {
      "id": 1,
      "username": "user1",
      "password": "hashed password",
      "email": "user1@gmail.com",
      "firstName": "Bob",
      "lastName": "Smith"
    }
```

---

### [GET] All Trips

#### URL: https://tripsplit-backend.herokuapp.com/api/trips

Returns: all trips in **an array of objects** with as follows:

```javascript
[
  {
    id: 1,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    location: "Paris, France",
    start_date: 1560643200,
    end_date: 1561248000,
    complete: true
  },
  {
    id: 2,
    title: "Bali Vaca!",
    description: "Relaxing with bae and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1569542400,
    end_date: 1569974400,
    complete: false
  },
  {
    id: 3,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: 1570665600,
    end_date: 1570924800,
    complete: false
  }
];
```

---

### [GET] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

Returns: the trip object.

```javascript
{
  "id": 2,
  "title": "Bali Vaca!",
  "description": "Relaxing with bae and checking out from responsibilities.",
  "location": "Bali, Indonesia",
  "start_date": 1569542400,
  "end_date": 1569974400,
  "complete": false
}
```

---

### [GET] Expenses

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses

Returns: all expenses in **an array of objects** as follows:

> `trip_id` references which trip the expense _belongs_ to.

```javascript
[
  {
    id: 1,
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 2500,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    id: 2,
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 2300,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    id: 3,
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 60,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    id: 4,
    title: "Hotel Expense",
    category: "Lodging",
    amount: 300,
    date: 1569974400,
    trip_id: 2,
    complete: false
  },
  {
    id: 5,
    title: "Flight - Roundtrip for Two",
    category: "Transportation",
    amount: 2600,
    date: 1569974400,
    trip_id: 2,
    complete: false
  }
];
```

---

### [GET] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/:id

Returns: the expense object as follows:

```javascript
{
  "id": 1,
  "title": "Hotel - Entire Trip",
  "category": "Lodging",
  "amount": 2500,
  "date": 1561248000,
  "trip_id": 1,
  "complete": true
}
```

---

### [GET] Trips By User ID

### URL: https://tripsplit-backend.herokuapp.com/api/trips/user/:id

Returns: an **array of objects** displaying a list of each trip for a specified user.

```javascript
[
  {
    id: 1,
    trip_id: 1,
    user_id: 1,
    title: "Paris Bussiness Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    location: "Paris, France",
    start_date: 1560643200,
    end_date: 1561248000,
    complete: true
  },
  {
    id: 2,
    trip_id: 5,
    user_id: 1,
    title: "Summer Vaca!",
    description: null,
    location: "Carribean Cruise",
    start_date: 1560643200,
    end_date: 1561248000,
    complete: false
  }
];
```

---

### [GET] Expenses By User ID

### URL: https://tripsplit-backend.herokuapp.com/api/expenses/user/:id

Returns: an **array of objects** displaying a list of each expense for a specified user.

```javascript
[
  {
    id: 2,
    expense_id: 6,
    user_id: 2,
    amount: 20,
    title: "Hostel for the Week",
    category: "Lodging",
    date: 1569542400,
    complete: false
  },
  {
    id: 5,
    expense_id: 7,
    user_id: 2,
    amount: 25,
    title: "Beach Party!",
    category: "Entertainment",
    date: 1569542400,
    complete: false
  }
];
```

---

### [POST] Trip

#### URL: https://tripsplit-backend.herokuapp.com/api/trips

Payload: an object with the following:

**title & user_id are REQUIRED**

```javascript
{
	"title": "New Trip",
	"description": "A trip to a place!",
	"location": "Over there",
	"start_date": 1569542454,
  "end_date": 1569974454
}
```

Returns: the complete trip object (`id` is automatically generated, `complete` has a default value of `false`)

```javascript
{
  "id": 5,
  "title": "New Trip",
  "description": "A trip to a place!",
  "location": "Over there",
  "start_date": 1569542454,
  "end_date": 1569974454,
  "complete": false
}
```

---

### [POST] Expense

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses

Payload: an object with the following:

- a property `expense` that contains the expense object of which will be inserted into the database
- a `users` array, containing the user `id`s that are splitting this expense

**title, users, and trip_id are REQUIRED**

> `trip_id` is to let the database know which trip the expense _belongs_ to.
> This endpoint will create a new instance of `expense`, but will also create new instances of user expences for each user passed into the `users` array
> The `amount` of the expense will be divided evenly between each `user`

```javascript
{
	"expense": {
			"title": "Hotel - Weekend Stay",
	    "category": "Lodging",
			"amount": 400.00,
			"date": 1569542400,
			"trip_id": 2
	},
	"users": [1, 3]
}
```

Returns: the complete expense object (`id` is automatically generated, `complete` has a default value of `false`)

```javascript
{
  "id": 8,
  "title": "Hotel - Weekend Stay",
  "category": "Lodging",
  "amount": 400,
  "date": 1569542400,
  "trip_id": 2,
  "complete": false
}
```

---

### [POST] Trip User

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/user

Payload: an object as follows:

```javascript
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

```javascript
```

---

### [PUT] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

Payload: an object with the properties you'd like to make changes to and the values of those changes.

> `id` cannot be changed
> types must reamain the same, i.e. `complete` will accept a boolean value, `title` will accept a string, etc.

```javascript
{
  "title": "Updated Title",
  "description": "Updated Description",
  "start_date": 1569542454,
  "complete": true
}
```

Returns: the complete trip object, including the changes made in the request.

```javascript
{
  "id": 4,
  "title": "Updated Title",
  "description": "Updated Description",
  "location": "Updated",
  "start_date": 1569542454,
  "end_date": 1569974454,
  "complete": true
}
```

---

### [PUT] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/:id

Payload: an object with the properties you'd like to make changes to and the values of those changes.

> `id` cannot be changed
> types must reamain the same, i.e. `complete` will accept a boolean value, `title` will accept a string, etc.

```javascript
{
  "title": "Updated Title",
  "category": "Updated Category",
  "amount": 56.50,
  "complete": true
}
```

Returns: the complete expense object, including the changes made in the request.

```javascript
{
  "id": 8,
  "title": "Updated Title",
  "category": "Updated Category",
  "amount": 56.5,
  "date": 1569542400,
  "trip_id": 3,
  "complete": true
}
```

---

### [DELETE] Trip By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/trips/:id

> id from params will select the trip object to be deleted

Returns: 1 means true

```javascript
{
    "removed": 1
}
```

---

### [DELETE] Expense By ID

#### URL: https://tripsplit-backend.herokuapp.com/api/expenses/6

> id from params will select the expense object to be deleted

Returns: 1 means true

```javascript
{
    "removed": 1
}
```

---
