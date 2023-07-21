  
import "./styles/app.scss";
import { BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import Cart from "./Components/Cart";
function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/cart" element ={<Cart/>}/>
    </Routes>
    <Toaster/>
  </Router>
      
  );
}

export default App;
