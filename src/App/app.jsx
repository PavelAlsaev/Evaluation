import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import WorkPage from '../pages/work-page/work-page';
import RatingPageArt from '../pages/rating-page/rating-page-art';
import RatingPageComix from '../pages/rating-page/rating-page-comix';
import RatingPageText from '../pages/rating-page/rating-page-text';
import NavHeader from '../components/nav-header/nav-header';

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
         path='/work/:id' 
         element={<WorkPage />}
        />
        <Route
        path='/ratingart'
        element={<RatingPageArt />}
        />
        <Route 
        path='/ratingcomix'
        element={<RatingPageComix />}
        />
        <Route 
        path='/ratingtext'
        element={<RatingPageText />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
