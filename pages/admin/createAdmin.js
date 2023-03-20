import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import {useUserData} from '../../lib/hooks';
import {UserContext} from '../../lib/context';
import Link from 'next/link';
import randomId from 'random-id';
import {firestore} from '../../lib/firebase';
import {doc, setDoc} from 'firebase/firestore';

export default function page({}) {
  const router = useRouter();
  const [returncontent, setreturnContent] = useState(<></>);
  const {user, adminLevel} = useContext(UserContext);
  const [adminLink, setAdminLink] = useState(<></>);

  async function createAdminLink(e) {
    e.preventDefault();
    const randomconst = randomId(30, 'aA0');
    setreturnContent(<a>https://trainnos.com/admin/signup/{randomconst}</a>);
    firestore.collection('adminkeys').doc(`${randomconst}`).set({});
  }

  const CreateAdminPage = () => {
    return (
      <button
        onClick={e => {
          createAdminLink(e);
        }}
      >
        Create an admin link
      </button>
    );
  };

  useEffect(() => {
    if (!user) {
      console.log("user isn't logged in!");
      console.log(user);
      setreturnContent(
        <div>
          <Link href={'/enter'}>You must be logged in to view this page!</Link>
          <div>Rerouting...</div>
        </div>
      );
    } else if (adminLevel != 3) {
      console.log("user isn't authorized!");
      console.log(user);
      setreturnContent(
        <div>
          <div>You aren't authorized to view this page!</div>
          <div>Rerouting...</div>
        </div>
      );
      setTimeout(() => {
        router.push('/enter');
      }, 2500);
    } else {
      setreturnContent(
        <div>
          <div>You Can view this page!</div>
          <CreateAdminPage />
        </div>
      );
    }
  }, [user]);
  return <main>{returncontent}</main>;
}
