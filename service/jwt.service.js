import jwt from 'jsonwebtoken';

export class JWTService {
    static createToken(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });
    }

    static validateToken(token) {
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            console.log('decoded token', decodedToken);
            return decodedToken;
        } catch (err) {
            console.error('Invalid token:', err.message);
            throw new Error('Invalid or expired token'); 
        }
    }
}


