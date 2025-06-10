const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
//const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const adminRoutes = require('./routes/adminRoutes');

require('dotenv').config();

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);
app.use('/api/admin', adminRoutes);

//app.use('/api/admin', authRoutes); // ✅ Admin login
app.use('/api/projects', projectRoutes);
app.use('/api', require('./routes/contactRoutes'));

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
