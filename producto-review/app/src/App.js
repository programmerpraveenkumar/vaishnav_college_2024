import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import AddReview from './pages/AddReview';
import AdminLogin from './pages/Admin/AdminLogin';
import Approval from './pages/Admin/Approval';

const routerConfig = createBrowserRouter([
  {path:"/","element":<Home/>},
  {path:"/home","element":<Home/>},
  {path:"/review","element":<AddReview/>},
  {path:"/login","element":<Login/>},
  {path:"/detail","element":<Detail/>},
  {path:"/home","element":<Home/>},
  {path:"/admin","element":<AdminLogin/>},
  {path:"/adminApproval","element":<Approval/>},
])
function App() {

  return (
    <div>
      <h1>learn react</h1>
    <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
