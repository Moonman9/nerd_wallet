const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Geek {
        _id: ID
        fullname: String
        username: String
        email: String
        orders: [Purchased]
    }
    type Purchased {
        _id: ID
        artifacts: [Artifacts]
        purchaseDate: String
    }
    type Class {
        _id: ID
        name: String
    }
    type Artifact {
        _id: ID
        name: String
        description: String
        image: String
        quantitiy: Int
        price: Float
        category: Class
    }
    type Auth {
        token: ID
        user: Geek
    }
    type Query {
        categories: [Class]
        artifacts(class: ID, name: String): [Artifact]
        artifact(_id: ID!): Artifact
        user: Geek
        order(_id: ID!): Purchased
        checkout(artifacts: [ID]!): Checkout
    }
    type Checkout {
        session: ID
    }
    type Mutation {
        addUser(fullname: String!, username: String!, email: String!, password: String!): Auth
        addOrder(artifacts: [ID]!): Purchased
        updateGeek(fullname: String, userame: String, email: String, password: String): Geek
        updateArtifact(_id: ID!, quantity: Int!): Artifact
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;