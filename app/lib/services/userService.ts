import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/models';
const bcrypt = require('bcrypt');


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
  getUser,
  loginUser
};