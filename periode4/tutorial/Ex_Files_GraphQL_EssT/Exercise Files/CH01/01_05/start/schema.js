import { buildSchema } from 'graphql';

const schema = buildSchema(`
    # Definder hvad en friend er.
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Query {
        friend: Friend
    }
`)

export default schema;
