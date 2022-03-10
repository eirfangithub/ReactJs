
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";

export default function indeks() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dogs />} />
          <Route path="cats" element={<Cats/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//ReactDOM.render(<App />, document.getElementById("root"));



/* 

<Route path="contact" element={<Contact />} />
<Route path="*" element={<NoPage />} />


*/