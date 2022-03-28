import { FC } from 'react';
import SignIn from './screens/SingIn'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboards from './screens/Dashboards';

const App: FC = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="App">
      {isAuthenticated ? <Dashboards /> : <SignIn />} 
    </div>
  );
}

export default App;
