import { Routes, Route } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <Routes>
       <Route path="/" element={<ProfileList />} />
       <Route path="/profile/:id" element={<ProfileDetails />} />
    </Routes>
  );
}

export default App;