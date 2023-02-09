import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';
import { Header, Footer } from './components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts,getAllUsers } from './features';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="dark:bg-slate-900">
      <Header />
      <AppRoutes />
      <ToastContainer
        className="toastify"
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
