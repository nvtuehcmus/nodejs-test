
import db from "../modal/db"
import {User} from "../shared/types";


export const rListUsers = async ():Promise<User[]>=>{
    const connector = await db.db(process.env.DB);
    const collection = await connector.collection(process.env.COLLECTION??"");
    const users = await collection.find({token:{$ne:null}}).limit(100).toArray();
    return users.map(user=>(
        {
            address:user?.address,
            email:user.email,
            firstName:user.first_name,
            lastName:user.last_name,
            userName:user.user_name
        }
    ))
}

