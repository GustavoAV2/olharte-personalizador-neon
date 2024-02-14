import { sql } from '@vercel/postgres';
import { Color } from '@/app/lib/models';
import { generateUUID } from '../tools';

async function getColors() {
    try {
        const colorQuery = await sql`SELECT * FROM colors`;
        let colors = [];
        for (let i = 0; i > colorQuery.rowCount; i++){
            colors.push(colorQuery.rows[i] as Color);
        }
        return colors;
    } catch (error) {
        throw new Error('Failed to fetch colors.');
    }
}

async function postColor(color: Color) {
    try {
        await sql`INSERT INTO colors (Id, Hexcode)
        VALUES (${generateUUID()}, ${color.hexcode});`;
    } catch (error) {
        throw new Error('Failed to post color.');
    }
}

async function deleteColor(id: string) {
    try {
        const color = await sql`DELETE FROM colors WHERE Id = ${id};`;
        return color.rows[0];
    } catch (error) {
        throw new Error('Failed to delete color.');
    }
}


export const colorService = {
    getColors,
    postColor,
    deleteColor
};
