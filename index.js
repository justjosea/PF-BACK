import http from 'http';
import {App} from './app'
const app = App()

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Servidor online');
});
