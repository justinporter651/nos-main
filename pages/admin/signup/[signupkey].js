import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {firestore} from '../../../lib/firebase';

const Post = () => {
  const [contentReturn, setContentReturn] = useState(<div>Waiting on server...</div>);
  const router = useRouter();
  const {signupkey} = router.query;
  useEffect(() => {
    ValidateKey(signupkey, setContentReturn);
  }, [signupkey]);
  return <div>{contentReturn}</div>;
};

const ValidateKey = async (signupkey, setContentReturn) => {
  if (signupkey) {
    try {
      const docRef = firestore.collection('adminkeys').doc(signupkey);
      const docSnapshot = await docRef.get();

      if (docSnapshot.exists) {
        setContentReturn(<div>You have a valid key!</div>);
      } else {
        setContentReturn(<div>No valid key!</div>);
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  } else {
    return;
  }
};

export default Post;
