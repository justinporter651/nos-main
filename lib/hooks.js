import {auth, firestore} from '../lib/firebase';
import {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [adminLevel, setAdminLevel] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot(doc => {
        setUsername(doc.data()?.username);
        setAdminLevel(doc.data()?.adminLevel);
      });
    } else {
      setUsername(null);
      setAdminLevel(null);
    }

    return unsubscribe;
  }, [user]);

  return {user, username, adminLevel};
}

export const useClients = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('making the call to firebase for users...');
    const unsubscribe = firestore.collection('user').onSnapshot(
      querySnapshot => {
        const usersData = [];
        querySnapshot.forEach(doc => {
          usersData.push({id: doc.id, ...doc.data()});
        });
        console.log('Done With Call!');
        setUsers(usersData);
        console.log(usersData);
        setLoading(false);
      },
      error => {
        setError(error);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return {users, loading, error};
};
