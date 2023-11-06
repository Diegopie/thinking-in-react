import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import generateId from '../src7/utils/idGenerator.js'

const app = express();
const port = '8000';

// Middle Ware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

// Data
const TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

// Routes go here

// Send All Data
app.get('/api/invoice', (req, res) => {
  res.json(TEST_DATA);
});

app.post('/api/invoice', (req, res) => {
  const { description, rate, hours } = req.body;

  const newItem = {
    id: generateId(),
    // If no value is provided in req.body, use default values
    description: description || '',
    rate: Number(rate) || 0,
    hours: Number(hours) || 0,
  };

  TEST_DATA.push(newItem);
  res.json(newItem);
});

app.put('/api/invoice/:id', (req, res) => {
  const { id } = req.params;
  const { description, rate, hours } = req.body;

  const index = TEST_DATA.findIndex((item) => item.id === Number(id));
  const item = TEST_DATA[index];

  // Only update the values that are provided in req.body
  item.description = description || item.description;
  item.rate = Number(rate) || item.rate;
  item.hours = Number(hours) || item.hours;

  res.json(item);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));