### Installing PostgreSQL

1. Download Homebrew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` <-- that command works on MacOSX 10.7 and later
2. Run `brew update && brew install postgresql` in a terminal to install psql
3. Run `brew services start postgresql` in a terminal to start psql in the background
4. Run `postgres -V` in a terminal to verify you have it installed. Should see a version number

Woohoo, psql is installed. Now let's configure it

### Configuring PostgreSQL

1. `sudo psql postgres` in terminal to enter the `psql` command line
2. `CREATE ROLE yourcoolusername WITH LOGIN PASSWORD 'password in quotes' WITH SUPERUSER;` remember to end every SQL command with a semicolon
3. That command ^^^ will create a superuser that has complete control over your postgres environment. It's fine to use for development but you need to be more careful with production (luckily this stuff is largely configured for you on hosting services)

Let's create a database!

### Creating a database and stuff

1. Run `psql -U yourcoolusername -p` to login to psql with your new account. You'll be prompted to enter the password you created previously.
2. Run `CREATE DATABASE mycooldb` to make a database.
3. Run 'use mycooldb;` so that you don't have to specifiy the db name every single time.
4. Run SQL commands to your heart's content.

### Tools

MySQL Workbench is a free GUI for managing your db's https://www.mysql.com/products/workbench/

## ToDo for API

- when posting a trip, check the user ids in the users array
- when posting an expense, check the user ids in the users array
- create PUT endpoint for users
- create PUT endpoint for expense that automatically updates the expense users amounts
- DELETE user from an expense adjust the expense users amount

* unify all endpoints to be used the same way
* take logic out of the model, only use it in the router
* make new migration to delete trip_users columns that repeat
