import { HTTP_STATUS } from "../constants/httpStaus.js";
import { UserRepo } from "../repo/user.repo.js";
import { ApiError } from "../utils/apiError.js";
import bcrypt from "bcryptjs";
import { JWTService} from "./jwt.service.js";
export class AuthService {


    static async signup({ username, email, fullname, password, bio }) {

        const userByUsername = await UserRepo.getUserByUsername(username);
        if (userByUsername) {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'user already exist');

        }
        const hashp = await bcrypt.hash(password, 10);
        const user = await UserRepo.createUser({ username, email, fullname, password: hashp, bio })

        return {
            fullname: user.fullName,
            email: user.email,
            username: user.username,
            ...(user.bio && { bio: user.bio })
        }


    }

    static async login({ username, password }) {

        const user = await UserRepo.getUserByUsername(username);
        if (!user) {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, "user doesn't exists");
        }
        const isPtrue = await bcrypt.compare(password, user.passwordHash);
        if (!isPtrue) {
            throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid credentials')
        }
        const token = JWTService.createToken({ fullName: user.fullName, username: user.username, user_id: user._id })
        return {token};

    }
}