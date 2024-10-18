import { useEffect, useState } from 'react'
import './App.css'

interface User {
  username: string
}

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>users</div>
      <ol>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ol>
      <div>
        make sure backend is setup and running
      </div>
    </>
  )
}

export default App
