import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

// resolver is a fnction that returns the data we need when we make a querry.
const root = { hello: () => "Hi, I'm Manny"  };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root, // Her bliver vores root resolvet when we are calling the querry.
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));