// import { useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { useAuth } from 'hooks/useAuth';
// import { useToast } from 'hooks/useToast';

// import { Loader } from 'components/common';

// import styles from './index.module.scss';

// const LoginPage = () => {
//   const { state: routerState } = useLocation();

//   const { login, isLoading, error, defaultValue } = useAuth();
//   const { sendToast } = useToast();

//   const emailInput = useRef();
//   const passwordInput = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await login({
//       email: emailInput.current.value,
//       password: passwordInput.current.value,
//     });
//   };

//   useEffect(() => {
//     if (error) {
//       sendToast({ error: true, content: { message: error.message } });
//     }
//   }, [error]);

//   return (
//     <>
//       {isLoading && <Loader />}
//       {!isLoading && (
//         <>
//           <section className={styles.nav_section}></section>
//           <section className={styles.section}>
//             <div className={styles.container}>
//               <div className={`${styles.wrapper} main-container`}>
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                   <h2 className={styles.title}>Log into your account</h2>
//                   <label className={styles.label}>
//                     <span>Email:</span>
//                     <input
//                       defaultValue={defaultValue?.email || ''}
//                       className={styles.input}
//                       type="email"
//                       placeholder="yourname@email.com"
//                       required
//                       ref={emailInput}
//                     />
//                   </label>
//                   <label className={styles.label}>
//                     <span>Password:</span>
//                     <input
//                       className={styles.input}
//                       type="password"
//                       required
//                       ref={passwordInput}
//                     />
//                   </label>
//                   <button className={styles.button} type="submit">
//                     Login
//                   </button>
//                 </form>
//                 <p className={styles.no_account}>
//                   New to Siya Fashion Hub?{' '}
//                   <Link to="/account/signup" state={routerState}>
//                     Create account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default LoginPage;









// import { useRef, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";
// import { useToast } from "hooks/useToast";
// import { Loader } from "components/common";
// import styles from "./index.module.scss";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const LoginPage = () => {
//   const { state: routerState } = useLocation();
//   const { login, googleLogin, isLoading, error, defaultValue } = useAuth();
//   const { sendToast } = useToast();

//   const emailInput = useRef();
//   const passwordInput = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login({
//       email: emailInput.current.value,
//       password: passwordInput.current.value,
//     });
//   };

//   const handleGoogleLogin = async () => {
//     await googleLogin();
//   };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [url, setUrl] = useState("");
//   const [loginStatus, setLoginStatus] = useState(false);

//   const responseGoogle = (response) => {
//     console.log(response);
//     setName(response.profileObj.name);
//     setEmail(response.profileObj.email);
//     setUrl(response.profileObj.imageUrl);
//     setLoginStatus(true);
//   };
//   const logout = () => {
//     console.log("logout");
//     setLoginStatus(false);
//   };

//   useEffect(() => {
//     if (error) {
//       sendToast({ error: true, content: { message: error.message } });
//     }
//   }, [error]);

//   return (
//     <>
//       {isLoading && <Loader />}
//       {!isLoading && (
//         <>
//           <section className={styles.nav_section}></section>
//           <section className={styles.section}>
//             <div className={styles.container}>
//               <div className={`${styles.wrapper} main-container`}>
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                   <h2 className={styles.title}>Log into your account</h2>
//                   <label className={styles.label}>
//                     <span>Email:</span>
//                     <input
//                       defaultValue={defaultValue?.email || ""}
//                       className={styles.input}
//                       type="email"
//                       placeholder="yourname@email.com"
//                       required
//                       ref={emailInput}
//                     />
//                   </label>
//                   <label className={styles.label}>
//                     <span>Password:</span>
//                     <input
//                       className={styles.input}
//                       type="password"
//                       required
//                       ref={passwordInput}
//                     />
//                   </label>
//                   <button className={styles.button} type="submit">
//                     Login
//                   </button>
//                 </form>
//                 {/* <button className={styles.google_button} onClick={handleGoogleLogin}>
//                   Login with Google
//                 </button> */}

//                 <GoogleLogin
//                   clientId="1065253728899-3ghn2gv5b3qg6djp91rg3e022h1d16b2.apps.googleusercontent.com"
//                   buttonText="Login"
//                   onSuccess={responseGoogle}
//                   onFailure={responseGoogle}
//                   cookiePolicy={"single_host_origin"}
//                 />

//                 <p className={styles.no_account}>
//                   New to Siya Fashion Hub?{" "}
//                   <Link to="/account/signup" state={routerState}>
//                     Create account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default LoginPage;








import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useToast } from 'hooks/useToast';
import { Loader } from 'components/common';
import styles from './index.module.scss';
import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
  const { state: routerState } = useLocation();
  const { login, googleLogin, isLoading, error, defaultValue } = useAuth();
  const { sendToast } = useToast();

  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    await googleLogin(token);
  };

  useEffect(() => {
    if (error) {
      sendToast({ error: true, content: { message: error.message } });
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <section className={styles.nav_section}></section>
          <section className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.wrapper} main-container`}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.title}>Log into your account</h2>
                  <label className={styles.label}>
                    <span>Email:</span>
                    <input
                      defaultValue={defaultValue?.email || ''}
                      className={styles.input}
                      type="email"
                      placeholder="yourname@email.com"
                      required
                      ref={emailInput}
                    />
                  </label>
                  <label className={styles.label}>
                    <span>Password:</span>
                    <input
                      className={styles.input}
                      type="password"
                      required
                      ref={passwordInput}
                    />
                  </label>
                  <button className={styles.button} type="submit">
                    Login
                  </button>
                </form>
                {/* <GoogleLogin
                  clientId="1065253728899-3ghn2gv5b3qg6djp91rg3e022h1d16b2.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                /> */}
                <p className={styles.no_account}>
                  New to Siya Fashion Hub?{' '}
                  <Link to="/account/signup" state={routerState}>
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default LoginPage;
