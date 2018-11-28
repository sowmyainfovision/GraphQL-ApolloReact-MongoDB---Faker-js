import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddUser from './AddUser';

const UsersList = ({ data: {loading, error, users }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
        { users.map( usr => 
        (<div key={usr.id} className="channel">
        <table>
          <tr>
        <td>{usr.name} </td><br></br><br></br>
        <td> {usr.email}</td>
        </tr>
        </table>
        </div>)
      )}
    </div>
  );
};

export const usersListQuery = gql`
  query usersListQuery {
    users {
      id
      name
      email
    }
  }
`;

export default graphql(usersListQuery, {
  options: { pollInterval: 15000 },
})(UsersList);


