import { pool } from "../db"
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.json(rows);
}

export const getUserById =  async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1',[id])
    
    if(rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(rows[0])
    
  } catch (error) {
    
  }
}

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = req.body
    const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [ user.name, user.email ])
    
    return res.status(201).json(
      { 
        message: 'User created',
        user: rows[0]  
      },
    )
  } catch (error) {
    if(error?.code === '23505') {
      return res.status(409).json({ message: 'Email already exists' })
    }
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id])
  
  if(rowCount=== 0) {
    return res.status(404).json({ message: 'User not found' })
  }
  return res.json({ message: 'User deleted' })
}

export const updateUserPut = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const user = req.body;

  const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [user.name, user.email, id])
  return res.json( rows[0] )
}