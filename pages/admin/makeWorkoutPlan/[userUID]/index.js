import {ClientsContext} from '../../../../lib/context';
import {useClients} from '../../../../lib/hooks';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import moment from 'moment';
import {firestore} from '../../../../lib/firebase';

export default function page({}) {
  const clients = useClients(ClientsContext);
  const [clientref, setClientRef] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const router = useRouter();
  const {userUID} = router.query;

  const daysOfWeek = [
    {label: 'S', value: 0},
    {label: 'M', value: 1},
    {label: 'T', value: 2},
    {label: 'W', value: 3},
    {label: 'TR', value: 4},
    {label: 'F', value: 5},
    {label: 'S', value: 6},
  ];

  const toggleDay = dayValue => {
    setSelectedDays(prevSelectedDays => {
      if (prevSelectedDays.includes(dayValue)) {
        return prevSelectedDays.filter(day => day !== dayValue);
      } else {
        return [...prevSelectedDays, dayValue];
      }
    });
  };

  const onButtonClick = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    if (!clients.loading) {
      if (!clients.error) {
        console.log('clients received!');
        console.log(clients.users);
        for (const client of clients.users) {
          if (client.id == userUID) {
            console.log('Found the client: ', client);
            setClientRef(client);
          }
        }
      } else {
        console.log(clients.error);
      }
    } else {
      console.log('still fetching clients');
    }
  }, [clients.users, clients.loading]);

  return (
    <div>
      <button onClick={onButtonClick}>Toggle buttons</button>
      {showButtons && (
        <div className='button-group'>
          {daysOfWeek.map(day => (
            <button
              key={day.value}
              className={`circular-button ${
                selectedDays && selectedDays.includes(day.value) ? 'selected' : ''
              }`}
              onClick={() => {
                toggleDay(day.value);
              }}
            >
              {day.label}
            </button>
          ))}
          <button
            onClick={() => {
              if (clientref) {
                console.log(clientref);
                SetUsersAttendanceArray(clientref, selectedDays);
              } else console.log("client ref isn't set yet");
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

const SetUsersAttendanceArray = async (clientRe, weekdayNumbers) => {
  console.log(clientRe);
  const yearMonthValue = moment().format('YYYY-MM');

  const daysInMonth = moment().daysInMonth();
  const currentDate = moment().startOf('month');
  const dateObjects = [];

  for (let i = 0; i < daysInMonth; i++) {
    dateObjects.push(moment(currentDate).add(i, 'days'));
  }

  const booleanArray = dateObjects.map(date => {
    const dayOfWeek = date.day();
    return weekdayNumbers.includes(dayOfWeek);
  });

  const attendanceMap = dateObjects.reduce((acc, date, index) => {
    const dateString = date.format('YYYY-MM-DD');
    acc[dateString] = booleanArray[index];
    return acc;
  }, {});

  const ref = firestore.collection('attendances').doc(clientRe.id);
  console.log(clientRe);
  await ref.set(
    {[yearMonthValue]: attendanceMap, userInfo: {displayName: clientRe.displayName}},
    {merge: true}
  );
};
