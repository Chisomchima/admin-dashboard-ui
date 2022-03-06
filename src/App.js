import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Products from "./pages/products/Products";
import Newproduct from "./pages/newproduct/Newproduct";

function App() {
  return (
  <BrowserRouter>
  
      <Topbar />

      <div className="container">
        <Sidebar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userid" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:productid" element={<Products />}></Route>
          <Route path="/newproduct" element={<Newproduct />}></Route>
        </Routes>
        
      </div>
  </BrowserRouter>

  );
}

export default App;
