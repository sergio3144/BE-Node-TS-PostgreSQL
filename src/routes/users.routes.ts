import { Router } from "express";
import { Request, Response } from "express";
import { pool } from "../db";
import { createUser, deleteUser, getUserById, getUsers, updateUserPut } from "../controllers/users.controllers";
const router = Router();

/** 
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The user's name
 *           example: John Doe
 *         email:
 *           type: string
 *           description: The user's email  
 *           example: john.doe@example.com
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the user was created
 *           example: 2024-01-01T00:00:00Z
 */

/** 
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [users]
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * 
 * */ 

router.get("/users", getUsers)


/**
 * @swagger
 * /users/{id}:
 *  get: 
 *    summary: Get a product by ID
 *    tags: 
 *        - Users
 *    description: Return a user based on its unique ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The user ID
 *        required: true
 *        schema:
 *          type: integer
 * 
 *    responses:
 *      '200':
 *        description: A user object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Internal server error
 */ 

router.get("/users/:id", getUserById)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: 
 *        - Users
 *     description: Returns a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "The user's name"
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: john.doe@example.com
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '409':
 *         description: Email already exists
 *       '500':
 *         description: Internal server error
 */

router.post("/users", createUser)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: 
 *        - Users
 *     description: Update a user based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The user ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "The user's name"
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: john.doe@example.com
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.put("/users/:id", updateUserPut)  

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: 
 *        - Users
 *     description: Delete a user based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The user ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User deleted successfully 
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               value: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

router.delete("/users/:id", deleteUser)



export default router