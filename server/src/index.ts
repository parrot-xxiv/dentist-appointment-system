import express, { Request, Response, NextFunction } from 'express';
import prisma from './config/prisma';

const app = express();
const port = 3000;

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(204); // No Content
  } else {
    next(); // Call the next middleware
  }

}

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to set CORS headers
app.use(cors);

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany(); // Query all users
    res.json(users); // Respond with the users
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
