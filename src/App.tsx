
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Upload from "./pages/Upload";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/upload" element={<Upload/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
