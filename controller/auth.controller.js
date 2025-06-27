import { HTTP_STATUS } from "../constants/httpStaus.js";
import { AuthService } from "../service/auth.service.js";
import { ApiError } from "../utils/apiError.js";

export async function registerUser(req, res) {
    try {
        const { username, email, fullname, password, bio } = req.body;
        const response = await AuthService.signup({ username, email, fullname, password, bio })
        return res.status(HTTP_STATUS.CREATED).json({ success: true, message: "signup success!", data: response })

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message })
        }
        return res
            .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
            .json({ success: false, message: error?.message || 'Internal server error' })
    }

}

export async function login(req, res) {
    try {
        const { username, password } = req.body
        const response = await AuthService.login({ username, password })

        return res.status(HTTP_STATUS.OK).json({ success: true, message: 'login success!', data: response })

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message })
        }
        return res
            .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
            .json({ success: false, message: error?.message || 'Internal server error' })

    }
}