import React from 'react';
import { gql, graphql } from 'react-apollo';

import { UsersListQuery } from './UsersListWithData';

const AddUser = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { name: evt.target.value },
        refetchQueries: [ { query: UsersListQuery }],
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };

  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const addUserMutation = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;


const AddUserWithMutation = graphql(
  addUserMutation,
)(AddUser);

export default AddUserWithMutation;