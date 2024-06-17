// import { useState } from 'react';

// import {
//   EmailAuthProvider,
//   linkWithCredential,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';
// import { doc, getDoc, deleteDoc, setDoc } from 'firebase/firestore';

// import { auth } from 'db/config';
// import { db } from 'db/config';

// import { useAuthContext } from './useAuthContext';
// import { useCartContext } from './useCartContext';

// import { handleError } from 'helpers/error/handleError';

// export const useAuth = () => {
//   const { user, dispatch: dispatchAuthAction } = useAuthContext();
//   const { dispatch: dispatchCartAction } = useCartContext();

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [defaultValue, setDefaultValue] = useState(false);

//   const signUp = async ({ name, lastName, email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ name, lastName, email });

//     try {
//       const credential = EmailAuthProvider.credential(email, password);

//       const userCredential = await linkWithCredential(
//         auth.currentUser,
//         credential
//       );

//       // if (!userCredential) {
//       //   throw new Error('No se pudo crear la cuenta');
//       // }

//       const user = userCredential.user;

//       const userData = {
//         name,
//         lastName,
//         email,
//         phoneNumber: null,
//         addresses: [],
//         isVerified: true,
//       };

//       await setDoc(doc(db, 'users', user.uid), userData);

//       dispatchAuthAction({ type: 'LOGIN', payload: { user, ...userData } });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//       setIsLoading(false);
//     }
//   };

//   const login = async ({ email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ email });

//     try {
//       dispatchCartAction({ type: 'IS_LOGIN' });
//       const anonymousUser = user;

//       const anonymousCartRef = doc(db, 'carts', anonymousUser.uid);
//       const anonymousCartDoc = await getDoc(anonymousCartRef);

//       await signInWithEmailAndPassword(auth, email, password);

//       // if (!userCredential) {
//       //   throw Error('Error');
//       // }

//       if (anonymousCartDoc.exists()) {
//         deleteDoc(doc(db, 'carts', anonymousUser.uid));
//       }
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//       dispatchCartAction({ type: 'IS_NOT_LOGIN' });
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     setError(null);
//     setIsLoading(true);
//     try {
//       await signOut(auth);
//       dispatchCartAction({ type: 'DELETE_CART' });
//       dispatchAuthAction({ type: 'LOGOUT' });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//       setIsLoading(false);
//     }
//   };

//   return { signUp, login, logout, isLoading, error, defaultValue };
// };






// import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';
// import { useCartContext } from './useCartContext';
// import { handleError } from 'helpers/error/handleError';

// export const useAuth = () => {
//   const { user, dispatch: dispatchAuthAction } = useAuthContext();
//   const { dispatch: dispatchCartAction } = useCartContext();

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [defaultValue, setDefaultValue] = useState(false);

//   const signUp = async ({ name, lastName, email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ name, lastName, email });

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, lastName, email, password }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to sign up');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async ({ email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ email });

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//       dispatchCartAction({ type: 'IS_LOGIN' });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//       dispatchCartAction({ type: 'IS_NOT_LOGIN' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const googleLogin = async () => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/auth/google-login', {
//         method: 'POST',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to login with Google');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/auth/logout', {
//         method: 'POST',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to logout');
//       }

//       dispatchCartAction({ type: 'DELETE_CART' });
//       dispatchAuthAction({ type: 'LOGOUT' });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { signUp, login, googleLogin, logout, isLoading, error, defaultValue };
// };




// import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';
// import { useCartContext } from './useCartContext';
// import { handleError } from 'helpers/error/handleError';

// export const useAuth = () => {
//   const { user, dispatch: dispatchAuthAction } = useAuthContext();
//   const { dispatch: dispatchCartAction } = useCartContext();

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [defaultValue, setDefaultValue] = useState(false);

//   const signUp = async ({ name, lastName, email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ name, lastName, email });

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, lastName, email, password }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to sign up');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async ({ email, password }) => {
//     setError(null);
//     setIsLoading(true);
//     setDefaultValue({ email });

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//       dispatchCartAction({ type: 'IS_LOGIN' });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//       dispatchCartAction({ type: 'IS_NOT_LOGIN' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const googleLogin = async (token) => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/auth/google-login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to login with Google');
//       }

//       const data = await response.json();
//       dispatchAuthAction({ type: 'LOGIN', payload: data });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/auth/logout', {
//         method: 'POST',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to logout');
//       }

//       dispatchCartAction({ type: 'DELETE_CART' });
//       dispatchAuthAction({ type: 'LOGOUT' });
//     } catch (err) {
//       console.error(err);
//       setError(handleError(err));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { signUp, login, googleLogin, logout, isLoading, error, defaultValue };
// };



import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useCartContext } from './useCartContext';
import { handleError } from 'helpers/error/handleError';
const baseUrl = "http://13.60.78.3:5000/"

export const useAuth = () => {
  const { user, dispatch: dispatchAuthAction } = useAuthContext();
  const { dispatch: dispatchCartAction } = useCartContext();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState(null);

  const signUp = async ({ name, lastName, email, password }) => {
    setError(null);
    setIsLoading(true);
    setDefaultValue({ name, lastName, email });

    try {
      const response = await fetch(`${baseUrl}api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, lastName, email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      dispatchAuthAction({ type: 'LOGIN', payload: data });
    } catch (err) {
      console.error(err);
      setError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    setError(null);
    setIsLoading(true);
    setDefaultValue({ email });

    try {
      const response = await fetch(`${baseUrl}api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      dispatchAuthAction({ type: 'LOGIN', payload: data });
      dispatchCartAction({ type: 'IS_LOGIN' });
    } catch (err) {
      console.error(err);
      setError(handleError(err));
      dispatchCartAction({ type: 'IS_NOT_LOGIN' });
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = async (token) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${baseUrl}api/auth/google-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error('Failed to login with Google');
      }

      const data = await response.json();
      dispatchAuthAction({ type: 'LOGIN', payload: data });
    } catch (err) {
      console.error(err);
      setError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${baseUrl}api/auth/logout`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to logout');
      }

      dispatchCartAction({ type: 'DELETE_CART' });
      dispatchAuthAction({ type: 'LOGOUT' });
    } catch (err) {
      console.error(err);
      setError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, login, googleLogin, logout, isLoading, error, defaultValue };
};
