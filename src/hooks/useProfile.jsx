import { useState } from 'react';

import { doc, updateDoc } from 'firebase/firestore';

import { db } from 'db/config';

import { useAuthContext } from './useAuthContext';

import { handleError } from 'helpers/error/handleError';

export const useProfile = () => {
  const {  dispatch } = useAuthContext();
  const [user, setUser] = useState({
    _id: "666ec5c338f11d4665e0b43c",
    uid: "666ec5c338f11d4665e0b43c",
    name: "Anil Kumar Mishra",
    lastName: "Mishra",
    email: "mishrasiddharth1999@gmail.com",
    phoneNumber: null,
    isVerified: false,
    password: "$2b$10$0iD3KETauzTX9rrvKcnj.u4DG27adyENaFHFQtgn4O6JXJDI93HC.",
    addresses: [],
    __v: 0,
  });


  const userRef = doc(db, 'users', user.uid);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const editProfile = async ({ name, lastName, phoneNumber = null }) => {
    setError(null);
    setIsLoading(true);
    try {
      await updateDoc(userRef, {
        name,
        lastName,
        phoneNumber,
      });

      dispatch({
        type: 'UPDATE_USER',
        payload: { name, lastName, phoneNumber },
      });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError(handleError(err));
      setIsLoading(false);
    }
  };

  return { editProfile, isLoading, error };
};
