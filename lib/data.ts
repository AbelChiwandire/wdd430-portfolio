import { sql } from '@vercel/postgres';

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
    updatedAt: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const result = await sql<User>`
        SELECT * FROM users WHERE email = ${email}
    `;
    return result.rows[0] ?? null;
}