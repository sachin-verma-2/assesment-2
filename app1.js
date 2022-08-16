
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Lead from "./Bookstore/mainpage";
import Login from "./Bookstore/login";
import Userpage from "./Bookstore/user";
import Wrong from "./Bookstore/404";
import Sortauthor from "./Bookstore/sortauthor";
import SortPrice from "./Bookstore/sortPrice";
import Sortrating from "./Bookstore/sortrating";
import Signup from "./Bookstore/signup";


const App1=()=>
{
    return(
        <div>


             <BrowserRouter>
                <Routes>
                <Route path="/" element={<Lead></Lead>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/login/:user" element={<Userpage></Userpage>}></Route>
                <Route path="/404" element={<Wrong></Wrong>}></Route>
                <Route path="/sortauthor" element={<Sortauthor></Sortauthor>}></Route>
                <Route path="/sortprice" element={<SortPrice></SortPrice>}></Route>
                <Route path="/sortrating" element={<Sortrating></Sortrating>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                </Routes>
            </BrowserRouter> 
        </div>
    )

}
export default App1