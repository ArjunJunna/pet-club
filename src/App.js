import "./App.css";
import AppRoutes from "./routes/AppRoutes"
import {Header,Footer} from "./components"

function App() {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
