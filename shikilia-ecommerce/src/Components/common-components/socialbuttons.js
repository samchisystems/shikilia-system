import Firebase, { UNAUTHENTICATED, AUTHENTICATED_ANONYMOUSLY }  from '.config/firebase';
import AuthStateProvider from '.config/AuthStateContext';
import { useAuthStateContext } from '.config/AuthStateContext';


const LoginExample = ({}) => {
  const { authState,  signInWithFacebook, signInWithGoogle, signOut } = useAuthStateContext();
  const userIsLoggedIn = authState.status !== UNAUTHENTICATED && authState.status !== AUTHENTICATED_ANONYMOUSLY;
  return (
    <div>
      {!userIsLoggedIn ? <div>
        <button onClick={signInWithGoogle}>
          Log in with Google
        </button>
        <button onClick={signInWithFacebook} style={{margin: "20px"}}>
          Log in with Facebook
        </button>
      </div>
      : <button onClick={signOut}>
        Log out {authState?.user?.displayName}
      </button> }
  </div>)
}
export default LoginExample;