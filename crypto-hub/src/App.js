import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Nav/NavBar";
import NewsPanel from "./components/Dashboard/NewsPanel";
import AllNews from "./components/News/AllNews";
import Coin from './components/Coins/Coin'

function App() {
  return (
    <div className="flex flex-col flex-nowrap h-100v bg-gray-100 w-screen lg:w-4/5 lg:h-80v lg:my-16 lg:mx-auto lg:flex-row">
      <NavBar />
      <Routes>
        <Route path='/' element={
          <>
            <Dashboard />
            <NewsPanel />
          </>}
        />
        <Route path='/news' exact element={<AllNews />} />
        <Route path='/coin/:id' element={<Coin />} />

      </Routes>
    </div>
  );
}

export default App;

// 8ff03db20532472fa714d887012e8021