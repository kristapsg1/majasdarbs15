import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/home/Home";
import Cards from "./components/cards/Cards";
import Add from "./components/add/Add";
import Navbar from "./components/navbar/Navbar";
import Cardbyid from "./components/cardbyid/Cardbyid";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="cards" element={<Cards />} />
      <Route path="cards/:id" element={<Cardbyid /> } />
      <Route path="add" element={<Add />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
