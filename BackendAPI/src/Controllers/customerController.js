import * as userService from '../Services/customerService.js';

export async function login(req, res, next) {
    try {
        const token = await userService.login(req.body);
        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
}

export async function register(req, res, next) {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

export async function resetPassword(req, res, next) {
    try {
        const response = await userService.resetPassword(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

export async function getProfile(req, res, next) {
    try {
        const user = await userService.getProfile(req.user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export async function updateProfile(req, res, next) {
    try {
        const user = await userService.updateProfile(req.user,req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
