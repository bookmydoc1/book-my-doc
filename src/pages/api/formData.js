import dbConnect from '../../../lib/mongodb';
import FormData from '../../../lib/models/FormData';

export default async function handler(req, res) {
  console.log('req.method', req.method);
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    await dbConnect();

    const { doctorName, clinicName, mobileNumber, email, type } = req.body;

    if (!doctorName || !email || !clinicName || !mobileNumber || !type) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const formData = new FormData(req.body);

    const savedData = await formData.save();

    res.status(201).json({ message: 'Form data stored successfully', data: savedData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
