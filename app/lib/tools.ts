import {v4 as uuidv4} from 'uuid';
const bcrypt = require('bcrypt');

export async function encryptValue(value: string) {
    return await bcrypt.hash(value);
}

export function generateUUID() {
    let myuuid = uuidv4();
    return myuuid;
}
