const bcrypt = require('bcrypt');

export async function encryptValue(value: string) {
    return await bcrypt.hash(value);
}

// module.exports = {
//     encryptValue
//   };