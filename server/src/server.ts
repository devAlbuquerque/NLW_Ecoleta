import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

// Para que o express entenda o corpo da requisição em formato json
app.use(cors());
app.use(routes);
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

/* app.post('/users', (request, response) => {
    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
}); */

/*app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});*/

/*app.get('/', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filteredUsers);
});*/

/*const users = [
    'Nome1',
    'Nome2',
    'Nome3',
    'Nome4'
];*/