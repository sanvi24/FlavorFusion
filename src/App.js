import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
// import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
      <Footer />

      {/* <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
