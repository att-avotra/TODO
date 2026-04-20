import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AllTasks from '../pages/AllTasks';
import Create from '../pages/Create';
import Today from '../pages/Today';
import Upcomming from '../pages/Upcomming';
import Navbar from '../components/Navbar';

export function Routess() {
  return (
   <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<AllTasks/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/today' element={<Today/>}></Route>
      <Route path='/upcomming' element={<Upcomming/>}></Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}
