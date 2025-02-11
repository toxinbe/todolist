import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";
import Todo from "./pages/Todo/Todo";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
