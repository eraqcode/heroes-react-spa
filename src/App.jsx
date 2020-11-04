import { Fragment, useReducer, useEffect } from "react";
import { AuthContext } from "./auth/authContext";
import { AuthReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";


function App() {

  const init = () => {
    return JSON.parse( localStorage.getItem( 'user' ) ) || ''
  }

  const [user, dispatch] = useReducer(AuthReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <Fragment>
      
      <AuthContext.Provider value={{
        user,
        dispatch
      }}>
        <AppRouter/>
      </AuthContext.Provider>
            
    </Fragment>
  );
}

export default App;
