import { useState } from 'react';

import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

import { db } from 'db/config';

import { useCheckoutContext } from './useCheckoutContext';
import { useAuthContext } from './useAuthContext';
import { useAddress } from './useAddress';

export const useCheckout = () => {
  const { dispatch } = useCheckoutContext();
  // const { user } = useAuthContext();
  const { createAddress } = useAddress();
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


  const checkoutSessionRef = doc(db, 'checkoutSessions', user.uid);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectPreviousStep = () => {
    dispatch({ type: 'SELECT_PREVIOUS_STEP' });
  };

  const selectStep = (index) => {
    dispatch({ type: 'SELECT_STEP', payload: index });
  };

  const submitShippingInfo = async (userInput) => {
    setError(null);
    setIsLoading(true);
    try {
      const { email, ...shippingAddress } = userInput;

      let formattedShippingAddress = shippingAddress;

      if (shippingAddress.value === 'new') {
        await createAddress({
          ...shippingAddress,
        });
      }

      await updateDoc(checkoutSessionRef, {
        email,
        shippingAddressId: formattedShippingAddress.id,
      });

      dispatch({
        type: 'SUBMIT_SHIPPING_INFO',
        payload: { email, shippingAddress: formattedShippingAddress },
      });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsLoading(false);
    }
  };

  const selectShippingOption = (option) => {
    let selectedOption;
    if (option === 'standard') {
      selectedOption = {
        standard: true,
        expedited: false,
      };
    } else {
      selectedOption = {
        standard: false,
        expedited: true,
      };
    }

    dispatch({ type: 'SELECT_SHIPPING_OPTION', payload: selectedOption });
  };

  const submitShippingOption = async ({ shippingOption, shippingCost = 0 }) => {
    setError(null);
    setIsLoading(true);
    try {
      await updateDoc(checkoutSessionRef, {
        shippingOption,
        shippingCost,
      });

      dispatch({ type: 'SUBMIT_SHIPPING_OPTION', payload: shippingCost });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsLoading(false);
    }
  };

  const deleteCheckoutSession = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await deleteDoc(checkoutSessionRef);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsLoading(false);
    }
  };

  return {
    selectPreviousStep,
    selectStep,
    submitShippingInfo,
    selectShippingOption,
    submitShippingOption,
    deleteCheckoutSession,
    isLoading,
    error,
  };
};
