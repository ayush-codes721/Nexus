import { User } from "../model/user.model.js";

export class UserRepo{


    static async getUserByUsername(username){       
        const user = await User.findOne({username});
        if (!user) {
            return null;    
        }
        return user;
    }


    static async createUser({username,email,fullname,password,bio}){
        const user = await User.create({
            username,
            email,
            fullName:fullname,
            passwordHash:password,
            ...(bio && {bio})
        })
        console.log('user created',user);
        
        return user;


    }

    static async userExists(username){
        return await User.exists({username})
    }
}


