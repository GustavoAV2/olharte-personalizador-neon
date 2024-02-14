import { sql } from '@vercel/postgres';
import { Image } from '@/app/lib/models';
import { generateUUID } from '../tools';

async function getImages() {
    try {
        const imageQuery = await sql`SELECT * FROM images`;
        let images = [];
        for (let i = 0; i > imageQuery.rowCount; i++){
            images.push(imageQuery.rows[i] as Image);
        }
        return images;
    } catch (error) {
        throw new Error('Failed to fetch images.');
    }
}

async function postImage(image: Image) {
    try {
        await sql`INSERT INTO images (Id, Filename, Path)
        VALUES (${generateUUID()}, ${image.filename}, ${image.path});`;
    } catch (error) {
        throw new Error('Failed to post image.');
    }
}

async function deleteImage(id: string) {
    try {
        const images = await sql`DELETE FROM images WHERE Id = ${id};`;
        return images.rows[0];
    } catch (error) {
        throw new Error('Failed to delete images.');
    }
}


export const imageService = {
    getImages,
    postImage,
    deleteImage
};
