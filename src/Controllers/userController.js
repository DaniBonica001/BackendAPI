import * as userService from '../Services/userService.js';

export async function register(req, res, next) {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const token = await userService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
}

export async function getProfile(req, res, next) {
    try {
        const user = await userService.getProfile();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
