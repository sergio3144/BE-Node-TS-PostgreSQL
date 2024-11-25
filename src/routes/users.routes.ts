import { Router } from "express";
import { Request, Response } from "express";
import { pool } from "../db";
import { createUser, deleteUser, getUserById, getUsers, updateUserPut } from "../controllers/users.controllers";
const router = Router();

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", createUser)

router.delete("/users/:id", deleteUser)

router.put("/users/:id", updateUserPut)  

export default router