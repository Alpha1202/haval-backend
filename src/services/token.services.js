import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

export const createToken = async(payload, expiresIn) => {
	const token = await jwt.sign(payload, secret, { expiresIn });
	return token;
};

export const verifyToken = async(token) => {
	return jwt.verify(token, secret);
};
