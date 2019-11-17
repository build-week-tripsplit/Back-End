module.exports = {
  checkUser
};

function checkUser(user) {
  let errors = [];
  let { username, password, email, first_name, last_name } = user;

  //=================CHECK THAT REQUIRED FIELDS EXIST=================//
  if (!username) {
    errors.push("must provide a username");
  }

  if (!password) {
    errors.push("must provide a password");
  }

  if (!email) {
    errors.push("must provide an email");
  }

  //============================CHECK TYPES============================//
  if (typeof username !== "string") {
    errors.push("username must be a string");
  }

  if (typeof email !== "string") {
    errors.push("email must be a string");
  }

  if (typeof password !== "string") {
    errors.push("password must be a string");
  }

  //=======================CHECK CHARACTERS & LENGTH=======================//
  if (
    username.match(/[A-Z-0-9_]/gi).length < username.length ||
    username.length < 4 ||
    username.length > 25
  ) {
    errors.push(
      "username may only contain alphanumeric characters and underscore and be 4-25 characters long"
    );
  }

  if (password.includes(" ") || password.length < 8) {
    errors.push(
      "password may not contain spaces and must be at least 8 characters long"
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("please provide a valid email address");
  }

  //=============IF FIRST_NAME IS PROVIDED, CHECK ALL OF THE ABOVE=============//
  if (first_name) {
    if (typeof first_name !== "string") {
      errors.push("first_name must be a string");
    }

    if (
      first_name.match(/[A-Z]/gi).length < first_name.length ||
      first_name.length > 24
    ) {
      errors.push(
        "first_name may only contain alphabetic characters and be under 25 characters long"
      );
    }
  }

  //=============IF LAST_NAME IS PROVIDED, CHECK ALL OF THE ABOVE=============//
  if (last_name) {
    if (typeof last_name !== "string") {
      errors.push("last_name must be a string");
    }

    if (
      last_name.match(/[A-Z]/gi).length < last_name.length ||
      last_name.length > 24
    ) {
      errors.push(
        "last_name may only contain alphabetic characters and be under 25 characters long"
      );
    }
  }

  //RETURN OBJECT WITH isSuccessful PROPERTY, TRUE IF NO ERRORS OCCUR, FALSE IF THEY DO
  return { isSuccessful: errors.length ? false : true, errors: errors };
}
