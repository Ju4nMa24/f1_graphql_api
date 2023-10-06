// Añadir los imports
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayground from 'graphql-playground-middleware-express';
import schema from './schema';
import dataSources from './data';

async function init() {
    // Inicializamos la aplicación express
    const app = express();

    // Añadimos configuración de Cors y compression
    app.use(cors());

    app.use(compression());

    // Inicializamos el servidor de Apollo
    const server = new ApolloServer({
        schema,
        introspection: true, // Necesario
        dataSources: (): any => ({
            seasonsData: new dataSources.SeasonsData(), // Crea una instancia de SeasonsData y asígnale un nombre a esta fuente de datos
            races: new dataSources.RacesData(),
            drivers: new dataSources.DriversData(),
            circuits: new dataSources.CircuitsData()
        })
    });

    server.applyMiddleware({ app });

    app.use('/', expressPlayground({
        endpoint: '/graphql'
    }));

    const PORT = process.env.PORT || 5000;

    const httpServer = createServer(app);

    httpServer.listen({ port: PORT }, (): void => console.log(`http://localhost:${PORT}/graphql`));
}

init();