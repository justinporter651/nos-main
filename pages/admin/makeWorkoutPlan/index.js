import {useState, useEffect, useCallback} from 'react';
import debounce from 'lodash.debounce';
import {useRouter} from 'next/router';
import {useClients} from '../../../lib/hooks';
import {ClientsContext} from '../../../lib/context';

function findUsersByDisplayName(users, searchString) {
  const firstNameMatches = [];
  const lastNameMatches = [];
  const displayNameMatches = [];

  for (const user of users.users) {
    if (user.displayName && typeof user.displayName === 'string') {
      const lowerDisplayName = user.displayName.toLowerCase();
      const lowerSearchString = searchString.toLowerCase();

      if (lowerDisplayName.includes(lowerSearchString)) {
        const [firstName, lastName] = lowerDisplayName.split(' ');

        if (firstName.startsWith(lowerSearchString)) {
          firstNameMatches.push(user);
        } else if (lastName && lastName.startsWith(lowerSearchString)) {
          lastNameMatches.push(user);
        } else {
          displayNameMatches.push(user);
        }
      }
    }
  }
  const sortedUsers = firstNameMatches.concat(lastNameMatches, displayNameMatches);
  return sortedUsers;
}

const SearchUsers = () => {
  const clientsData = useClients(ClientsContext);
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const fetchUsers = useCallback(
    debounce((clientsDa, text) => {
      const userArray = findUsersByDisplayName(clientsDa, text);
      setUsers(userArray);
    }, 500),
    []
  );

  useEffect(() => {
    if (!clientsData.loading && clientsData.users.length > 0) {
      if (!clientsData.error) {
        if (searchText) {
          fetchUsers(clientsData, searchText);
        } else {
          setUsers([]);
        }
      } else console.log(clientsData.error);
    }
  }, [clientsData.loading, clientsData.users, searchText]);

  const handleUserClick = (e, user) => {
    e.preventDefault();
    router.push(`/admin/makeWorkoutPlan/${user.id}`);
  };

  return (
    <div>
      <input
        type='text'
        value={searchText}
        onChange={e => {
          e.preventDefault();
          setSearchText(e.target.value);
        }}
        placeholder='Search users by display name'
      />
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={e => handleUserClick(e, user)}>
            {user.displayName} <span className='grayText'>({user.username})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUsers;
