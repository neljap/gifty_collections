import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/HomePg";
import AboutPg from "./pages/AboutPg";
import CartPg from "./pages/CartPg";
import ContactPg from "./pages/ContactPg";
import Shop from "./pages/Shop";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { resolvedTheme, systemTheme, setTheme, theme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun />;
    } else {
      return <FaMoon />;
    }
  };
  return (
    <div>
      <div style={{ position: "fixed", bottom: "25%", right: "5%" }}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {themeBox()}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/cart" element={<CartPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
