import express from 'express';
import mongoose from 'mongoose';
import shortUrl from './models/shortUrl.js';
const app = express();
mongoose.connect('mongodb+srv://user1:abc@cluster0.cbxo2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));


app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
  try {
    const shortUrls = await shortUrl.find();
    res.render('index', { shortUrls: shortUrls });
  } catch (error) {
    console.error('Error fetching URLs:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/shortUrls', async (req,res) => {
  await shortUrl.create({full: req.body.fullUrl});
  res.redirect('/')
})

app.get('/:shorturl',async (req,res) => {
  const shortUrlf = await shortUrl.findOne({ short: req.params.shorturl});
  if(shortUrlf == null ) return res.sendStatus(404);

  shortUrlf.clicks++;
  shortUrlf.save();
  res.redirect(shortUrlf.full);
})
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });

