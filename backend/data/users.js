import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exampale.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Thathsara Panduka",
    email: "panduka@exampale.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Do",
    email: "jhon@exampal.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
