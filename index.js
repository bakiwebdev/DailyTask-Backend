import 'dotenv/config';
import app from './app.js'

const PORT = 5000;

app.listen( process.env.PORT || PORT, () => { console.log(`Server started on port ${PORT}`)})