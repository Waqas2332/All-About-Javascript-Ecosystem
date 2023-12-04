import { Routes, Route } from "react-router-dom";
import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
