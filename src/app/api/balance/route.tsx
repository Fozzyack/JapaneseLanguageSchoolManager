import { ExtendedSession } from "@/types/nextauthvars"
import { pool } from "@/utils/db/db"
import { getServerSession } from "next-auth"
import { options } from "../auth/[...nextauth]/options"


export const GET = async (req: Request) => {
    try {
        const session = await getServerSession(options) as ExtendedSession
        const sql = `SELECT balance FROM balance WHERE "userId" = $1`
        const balance = await pool.query(sql, [session.user?.id])
        return Response.json(balance.rows[0])
    } catch (error: any) {
        console.log(error.message)
        return Response.json({error: error.message}, {status: 500})
    }
}