
import './App.scss';
import Home from './component/Home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Shose from './component/Shose/Shose';
import Combo from './component/Combo/Combo';
import Gym from './component/Gym/Gym';
import Everyproduct from './component/Everyproduct/Everyproduct';
import Structure from './component/Structure/Structure';
import Hero from './component/Hero/Hero';

const App =() => {
  
const router = createBrowserRouter([
  {
    path:'/',   
    element:<Structure />,
   children:[
    {
      path:'/',
      element:<Home/>,
    },
 
    {
    path:'/Shose',
    element:<Shose />,
    
  },
  {
    path:'/Gym',
    element:< Gym />,
    
  },
  {
    path:'/Combo',
    element:<Combo />,
    
  },
  {
    path:'/Everyproduct',
    element:<Everyproduct />,
    
  } 
   ]},
  


])

  return <RouterProvider router={router}/>
}


export default App
