import { Routes, Route } from "react-router-dom";
import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
