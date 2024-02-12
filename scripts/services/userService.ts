import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/models';
const bcrypt = require('bcrypt');


function authenticate(username: string, password: string) {
  if(username !== "admin" && password !== "admin") {
    return null;
  }

  const user = { 
    id: "9001",
    name: "Web Admin", 
    email: "admin@example.com"};

  return user; 
}


async function getUser(username: string) {
  try {
      const user = await sql`SELECT * FROM users WHERE username=${username}`;
      return user.rows[0] as User;
  } catch (error) {
      throw new Error('Failed to fetch user.');
  }
}

export async function loginUser(username: string, password: string){
  const userFound = await getUser(username);
  if (userFound.username == username){
      const encryptedPassword = await bcrypt.hash(password, 10);
      if (userFound.password == encryptedPassword){
          return userFound;
      }
  }
  return null;
}

export const userService = {
  authenticate,
};
