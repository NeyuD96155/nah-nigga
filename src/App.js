import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import "./style/App.css";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import Main from "./component/Main";
import About from "./component/About";
import News from "./component/News";
import { Ripple, initMDB } from "mdb-ui-kit";
import DetailArticle from "./component/DetailArticle";

initMDB({ Ripple });
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/news/detail_article/:id" element={<DetailArticle />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
