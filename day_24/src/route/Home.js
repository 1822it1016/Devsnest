import React, {useContext} from 'react';
import Context from '../Context/AuthContext'

export default function Home() {
  const logger = useContext(Context)
  return (
    <div>
      <h1>Home</h1>
      <div>
        {
          logger.loggedIn?"You can access Dashboard":"Login to access dashboard and profile"
        }
      </div>
      {
        logger.loading?
          logger.loggedIn?
            <button>Logging Out</button> :
            <button>Logging In</button>:
          logger.loggedIn?
            <button onClick={() => logger.logout()}>Logout</button> :
            <button onClick={() => logger.login()}>Login</button>
      }
    </div>
  );
}

