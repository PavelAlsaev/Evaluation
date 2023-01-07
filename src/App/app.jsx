import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import WorkPage from '../pages/work-page/work-page';
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
