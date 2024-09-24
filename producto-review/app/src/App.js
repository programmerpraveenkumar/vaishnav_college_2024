import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import AddReview from './pages/AddReview';

const routerConfig = createBrowserRouter([
  {path:"/","element":<Home/>},
  {path:"/home","element":<Home/>},
  {path:"/review","element":<AddReview/>},
  {path:"/login","element":<Login/>},
  {path:"/detail","element":<Detail/>},
  {path:"/home","element":<Home/>},
])
function App() {

  return (
    <RouterProvider router={routerConfig}></RouterProvider>
  );
}

export default App;
