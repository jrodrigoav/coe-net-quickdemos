import { IUser } from "../interfaces/iuser";

export class User implements IUser {
    id: number = 0;
    name: string = "";
    username: string = "";
    email: string = "";
    website: string = "";
    constructor({ id, name, username, email, website }: { id: number; name: string; username: string; email: string; website: string; }) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.website = website;
    }
}
