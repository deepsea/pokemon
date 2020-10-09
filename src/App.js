import React from 'react';
import './App.css';
import AppolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';

function App() {
    const client = new AppolloClient({
        // uri: 'https://graphql-pokemon.now.sh',
        uri: 'http://localhost:5000',
    });

    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer />
            </main>
        </ApolloProvider>
    );
}

export default App;
