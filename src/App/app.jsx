import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import WorkPage from '../pages/work-page/work-page';
import NavHeader from '../components/nav-header/nav-header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/work/:id',
    element: <WorkPage/>
  }
]);

const App = () => {
  return (
    <>
      <NavHeader></NavHeader>
      <RouterProvider router={router} />
    </>
  )
}

export default App;