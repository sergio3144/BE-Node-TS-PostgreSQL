CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users (name, email) 
  VALUES 
    ('Sergio Gonzalez', 'sergio@gmail.com'),  
    ('Jhan Doe', 'jane@gmail.com')

SELECT * FROM users