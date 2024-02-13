const { db } = require('@vercel/postgres');
const {
  users,
  fonts,
  colors,
  images
} = require('./placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, username, password)
        VALUES (${user.id}, ${user.name}, ${user.username}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedFonts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS fonts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        weight INT
      );
    `;

    console.log(`Created "fonts" table`);

    const insertedFonts = await Promise.all(
      fonts.map(async (font) => {
        return client.sql`
        INSERT INTO fonts (id, name, weight)
        VALUES (${font.id}, ${font.name}, ${font.weight})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedFonts.length} fonts`);

    return {
      createTable,
      fonts: insertedFonts,
    };
  } catch (error) {
    console.error('Error seeding fonts:', error);
    throw error;
  }
}


async function seedColors(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS colors (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        hexcode VARCHAR(30) NOT NULL
      );
    `;

    console.log(`Created "colors" table`);

    const insertedColors = await Promise.all(
      colors.map(async (color) => {
        return client.sql`
        INSERT INTO colors (id, hexcode)
        VALUES (${color.id}, ${color.hexcode})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedColors.length} colors`);

    return {
      createTable,
      colors: insertedColors,
    };
  } catch (error) {
    console.error('Error seeding colors:', error);
    throw error;
  }
}


async function seedImages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS images (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        path VARCHAR(255) NOT NULL,
        filename VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "images" table`);

    const insertedImages = await Promise.all(
      images.map(async (image) => {
        return client.sql`
        INSERT INTO images (id, path, filename)
        VALUES (${image.id}, ${image.path}, ${image.filename})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedImages.length} images`);

    return {
      createTable,
      images: insertedImages,
    };
  } catch (error) {
    console.error('Error seeding images:', error);
    throw error;
  }
}


async function seedConfigs(client) {
}


async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedFonts(client);
  await seedColors(client);
  await seedImages(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});