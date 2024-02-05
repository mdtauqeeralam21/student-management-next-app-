
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const response = await fetch('https://my-json-server-zeta.vercel.app/api/alumnis');
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Only GET requests are allowed' });
    }
  }
  