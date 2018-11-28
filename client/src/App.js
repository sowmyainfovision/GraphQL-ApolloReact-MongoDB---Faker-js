import React, { Component } from 'react';
import './App.css';
import UsersListWithData from './components/UsersListWithData';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">Fetching the user details</div>
          <UsersListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;