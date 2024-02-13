import { sql } from '@vercel/postgres';
import { Font } from '@/app/lib/models';
import { generateUUID } from '../tools';

async function getFonts() {
    try {
        const fontQuery = await sql`SELECT * FROM fonts`;
        let fonts = [];
        for (let i = 0; i > fontQuery.rowCount; i++){
            fonts.push(fontQuery.rows[i] as Font);
        }
        return fonts;
    } catch (error) {
        throw new Error('Failed to fetch fonts.');
    }
}

async function postFont(font: Font) {
    try {
        await sql`INSERT INTO fonts (Id, , Name, Weight)
        VALUES (${generateUUID()}, ${font.name}, ${font.weight});`;
    } catch (error) {
        throw new Error('Failed to post font.');
    }
}

async function deleteFont(id: string) {
    try {
        const font = await sql`DELETE FROM fonts WHERE Id = ${id};`;
        return font.rows[0];
    } catch (error) {
        throw new Error('Failed to delete font.');
    }
}

export const fontService = {
    getFonts,
    postFont,
    deleteFont
};
