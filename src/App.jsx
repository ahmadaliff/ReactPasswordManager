import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styles from "./styles/style.module.scss";
import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import DetailUser from "./pages/DetailUser";
import FormAccount from "./pages/FormAccount";
function App() {
  return (
    <main className={Styles.main}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/:category" element={<Page />} />
          <Route path="/detail/:id" element={<DetailUser />} />
          <Route path="/add" element={<FormAccount />} />
          <Route path="/edit/:id" element={<FormAccount />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
