export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { fullName,
      email,
      degree,
      branch,
      yearOfPassed,
      description,
      photoUrl, } = req.body;
  
      const newData = { 
        fullName,
        email,
        degree,
        branch,
        yearOfPassed,
        description,
        photoUrl };
  
      try {
        const response = await fetch('http://localhost:9999/student', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
  
        const responseData = await response.json();
        res.status(200).json(responseData);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Only POST requests are allowed' });
    }
  }
  