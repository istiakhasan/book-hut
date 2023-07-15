
import './App.css'
import {RouterProvider} from 'react-router-dom'
import routes from './routes/route'
import { useAppDispatch } from './redux/hook';
import {useEffect} from 'react'
import { setLoading, setUser } from './redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email as string));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
       <RouterProvider router={routes}/>
    </>
  )
}

export default App
