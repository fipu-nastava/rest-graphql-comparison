import express from 'express';
const { ApolloServer, gql } = require('apollo-server-express');
import data from './store';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
        studenti: [Student]
        student(jmbag: ID!): Student
        rezultatiIspita(datum: String!, kolegij: ID!): Ispit
    }
    type Student {
        jmbag: ID!
        ime: String
        prezime: String
    }
    type Izvedba {
        ak_god: ID!
        kolegij: Kolegij!
        students: [Student]
    }
    type Kolegij {
        sifra: ID!
        naziv: String!
        semestar: String
    }
    type Ispit {
        kolegij: Kolegij!
        datum: String!
        ocjene: [Ocjena]
    }
    type Ocjena {
        ocjena: Int
        student: Student!
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        studenti: () => data,
        rezultatiIspita: (root, args, context, info) => {
            return data.ispiti[0];
        },
        student: (root, args, context, info) => {
            let results = data.studenti.filter((s) => s.jmbag == args.jmbag);
            if (results && results.length > 0) {
                return results[0];
            }
        },
    },
};

const app = express(); // instanciranje aplikacije
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const port = 3100; // port na kojem će web server slušati

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
