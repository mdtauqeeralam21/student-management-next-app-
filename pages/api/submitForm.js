export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
  
      console.log('Form data received:', formData);
  
      res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }