import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "../src/components/pages/Content";
import Detail from "../src/components/pages/Detail";
import Home from "../src/components/pages/Home";
import SearchResult from "../src/components/pages/SearchResult";
import NoPage from "../src/components/pages/NoPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/SearchResult" element={<SearchResult />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
