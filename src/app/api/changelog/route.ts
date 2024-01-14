import { pool } from "@/utils/db/db"


export const GET = async (req: Request) => {
    try {
        const logs = await pool.query('SELECT * FROM changelog ORDER BY id DESC LIMIT 5')
        return Response.json(logs.rows);
    } catch (error: any) {
        console.log(error.message)
        return Response.json({ error: error.message }, { status: 500 })
    }
}