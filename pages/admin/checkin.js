import {ClientsContext} from '../../lib/context';
import {useClients} from '../../lib/hooks';
import {useState, useEffect, useCallback} from 'react';
import debounce from 'lodash.debounce';
import moment from 'moment';
import {firestore} from '../../lib/firebase';

export default function page({}) {
  const clientsData = useClients(ClientsContext);
  const [searchText, setSearchText] = useState('');
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    if (!clientsData.loading && clientsData.users.length > 0) {
      if (!clientsData.error) {
        if (searchText) {
          fetchUsers(clientsData, searchText);
        } else {
          setSuggestedUsers([]);
          setOtherUsers([]);
        }
      } else console.log(clientsData.error);
    }
  }, [clientsData.loading, clientsData.users, searchText]);

  useEffect(() => {}, []);

  const fetchUsers = useCallback(
    debounce(async (clientsDa, text) => {
      console.log('findingUsers');
      const {suggestedUsers, otherUsers} = await findUsersByDisplayName(clientsDa, text);
      console.log('Suggested Users:', suggestedUsers);
      console.log('Other Users:', otherUsers);
      setSuggestedUsers(suggestedUsers);
      setOtherUsers(otherUsers);
    }, 500),
    []
  );

  async function findUsersByDisplayName(users, searchString) {
    const today = moment().format('YYYY-MM-DD');
    const suggestedUsers = [];
    const otherUsers = [];

    for (const user of users.users) {
      if (user.displayName && typeof user.displayName === 'string') {
        const lowerDisplayName = user.displayName.toLowerCase();
        const lowerSearchString = searchString.toLowerCase();

        if (lowerDisplayName.includes(lowerSearchString)) {
          // Fetch attendance data for the user
          console.log(user.id);
          const attendanceDoc = await firestore.collection('attendances').doc(user.id).get();

          const attendanceData = attendanceDoc.data();

          // Check if attendance data exists and the value for the current day is true
          const isSuggestedUser = attendanceData && attendanceData[today] === true;

          if (isSuggestedUser) {
            suggestedUsers.push(user);
          } else {
            otherUsers.push(user);
          }
        }
      }
    }

    return {suggestedUsers, otherUsers};
  }

  return (
    <>
      <input
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
        type='text'
      ></input>
      <div className='usersDiv'>
        Suggested:
        {suggestedUsers.map(user => (
          <div key={user.id} className='suggestedUser'>
            {user.displayName} <span className='grayText'>({user.username})</span>
          </div>
        ))}
        Others
        {otherUsers.map(user => (
          <div key={user.id} className='otherUser'>
            {user.displayName} <span className='grayText'>({user.username})</span>
          </div>
        ))}
      </div>
    </>
  );
}
