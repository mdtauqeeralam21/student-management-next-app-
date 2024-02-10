export default async function handler(req, res) {
    const {id} = req.query;
    if (req.method === 'PUT') {
      const { fullName, email, degree,branch , yearOfPased, description,photoUrl } = req.body;
  
      try {
        const response = await fetch(`https://node-server-vercel.onrender.com/api/alumnis/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, email,degree,branch, yearOfPased, description,photoUrl }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update data in JSON Server');
        }
  
        const responseData = await response.json();
        res.status(200).json(responseData);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Only PUT requests are allowed' });
    }
  }
  