import { Request, Response } from "express";
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
export declare const getUserById: (req: Request, res: Response) => Promise<any>;
export declare const createUser: (req: Request, res: Response) => Promise<any>;
export declare const deleteUser: (req: Request, res: Response) => Promise<any>;
export declare const updateUserPut: (req: Request, res: Response) => Promise<any>;
