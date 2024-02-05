export default async function handler(req, res) {
    
    const { id } = req.query;
    if (req.method === 'GET') {
      try {
        const response = await fetch(`https://my-json-server-zeta.vercel.app/api/alumnis/${id}`);

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Only GET requests are allowed' });
    }
  }