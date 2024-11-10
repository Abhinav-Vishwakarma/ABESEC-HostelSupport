import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the directory name of the current module (app.js)
const __filename = fileURLToPath(import.meta.url); // Get the current file's URL
const __dirname = path.dirname(__filename); // Get the directory name of the current file

// Load environment variables from the main directory
dotenv.config({ path: '../.env' });

const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure views are in src/views

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public'))); // Serve from the root "public" folder

// Middleware to parse URL-encoded form data (like form submissions)
app.use(express.urlencoded({ extended: true }));

// Root route to render the login page
app.get('/', (req, res) => {
  res.render('login'); // Ensure you have a 'login.ejs' file in 'src/views'
});


//dashboard
app.post("/api/login",(req,res)=>{
  res.render('dashboard')
})

app.get('/content/:page', (req, res) => {
  const page = req.params.page;
  res.render(page, { data: 'Your dynamic data here' }); // Pass any data you need to the view
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
