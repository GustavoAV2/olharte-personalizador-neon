import { sql } from '@vercel/postgres';
import { User } from './models';
import { encryptValue } from './tools'; 


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
        const encryptedPassword = await encryptValue(password);
        if (userFound.password == encryptedPassword){
            localStorage.setItem('credential', 'teste');
            return true;
        }
    }
    return false;
}