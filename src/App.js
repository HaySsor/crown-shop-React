import Navigation from './pages/navigation/navigation.component.jsx'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return <Navigation />
}
export default App;
