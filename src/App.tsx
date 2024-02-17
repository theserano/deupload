import { lazy, Suspense, useEffect } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLoad from './components/Loading/PageLoad';
import { useState } from 'react';


const Home = lazy(() => import("./pages/Home/Home"))


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);


function App() {

const [load, setLoad] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoad(false)
  }, 2500)
},[])


  return (
    <div className='App'>
      {
      load ? <PageLoad/> : 
      <Suspense fallback={<PageLoad />}>
        <RouterProvider router={router} />  
      </Suspense>
    }
    </div>
  )
}

export default App
