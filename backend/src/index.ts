import http from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT);

server.on('listening', () => {
  console.log('Listening on port ' + process.env.PORT);
});

server.on('error', (error) => {
  console.log('Server Error: ' + error);
});
