import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import WorkPage from '../pages/work-page/work-page';
import NavHeader from '../components/nav-header/nav-header';
import RatingPage from '../pages/rating-page/rating-page';
import AddWorkPage from '../pages/add-work-page/add-work-page';

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader></NavHeader>
      <Routes>
        <Route
          path='/' 
          element={<MainPage />}
        />
        <Route
          path='/list/:tag/:author?' 
          element={<MainPage />}
        />
        <Route
          path='/work/:id' 
          element={<WorkPage />}
        />
        <Route
          path='/rating/:tag'
          element={<RatingPage />}
        />
        <Route
          path='/publish'
          element={<AddWorkPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
