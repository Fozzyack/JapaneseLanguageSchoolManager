import { Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export interface ExtendedSession extends Session {
    user: ExtendedUser | undefined;
}

export interface ExtendedUser extends AdapterUser {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    admin: boolean;
}