import {rListUsers} from "../repo/rListUsers";
import {User} from "../shared/types";

export const sListUsers = async ():Promise<User[]>=>{
    return  await rListUsers()
}