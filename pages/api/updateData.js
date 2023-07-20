export default async function handler(req, res) {
    if (req.method === 'PUT') {
      const { id, name, age, email } = req.body;
  
      try {
        // Make a PUT request to JSON Server with the updated data
        const response = await fetch(`http://localhost:9999/data/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age, email }),
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
  