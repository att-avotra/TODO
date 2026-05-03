import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "../pages/AllTasks";
import Create from "../pages/Create";
import Today from "../pages/Today";
import Upcoming from "../pages/Upcomming";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export function Routess() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<AllTasks />} />
              <Route path="/create" element={<Create />} />
              <Route path="/today" element={<Today />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
