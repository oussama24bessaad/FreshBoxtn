import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@me.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Oussama Bessaad',
    email: 'bessaad@me.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Oussama Bessaad',
    email: 'oussama24bessaad@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
