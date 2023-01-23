import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const user_id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const user_with_id = {
    ...user,
    id: user_id,
  };
  users.push(user_with_id); // req.body is basically everything the user types in
  res.send(`User with the name ${user.first_name} added to the database.`);
};

export const getSpecificUser = (req, res) => {
  const id = req.params.id;
  const found = users.find((user) => user.id == id);
  res.send(found);
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id != id); // this function keeps all values that are true so we phrase it like this
  // eg if user.id = 123, and id = 123, return val is false, and it will not be stored in the array anymore
  res.send(`User with the id ${id} has been deleted from the database.`);
};

// Difference between patch and put
// If u have info and wana change some of it, you use patch - partially change
// If u completely wana overwrite it, you use put
// In our case, we just wana allow users to change a few deets eg name , so we use patch

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age } = req.body;

  const user_to_be_updated = users.find((user) => user.id == id);

  if (first_name) {
    user_to_be_updated.first_name = first_name;
  }
  if (last_name) {
    user_to_be_updated.last_name = last_name;
  }
  if (age) {
    user_to_be_updated.age = age;
  }

  res.send(`User with the id ${id} has been updated.`);
};
