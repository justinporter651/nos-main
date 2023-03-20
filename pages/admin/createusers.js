import {faker} from '@faker-js/faker';
import {useEffect} from 'react';
import randomId from 'random-id';
import {firestore} from '../../lib/firebase';

export default function page({}) {
  let randomFirstName;
  let randomLastName;
  let randomUserName;
  useEffect(() => {
    for (let i = 1; i < 50; i++) {
      randomFirstName = faker.name.firstName();
      randomLastName = faker.name.lastName();

      randomUserName = faker.internet.userName(randomFirstName, randomLastName);

      const randomconst = randomId(30, 'aA0');
      firestore
        .collection('user')
        .doc(`${randomconst}`)
        .set({
          displayName: randomFirstName.concat(' ', randomLastName),
          username: randomUserName,
        });
    }
  }, []);
  return <main></main>;
}
