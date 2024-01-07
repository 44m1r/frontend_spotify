import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginComponent from "./routes/LoginComponent";
import SignupComponent from "./routes/SignupComponent"
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHomeComponent";
import { useCookies } from "react-cookie";
import UploadSongs from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SinglePlaylistView from "./routes/SinglePlaylistView.jsx"
import songContext from "./context/songContext";
import { useState } from "react";
import Home from "./routes/LoggedInHomeComponent";
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";

function App() {

  const [cookie,setCookie] = useCookies(["token"]);
  const [currentSong,setCurrentSong] = useState(null);
  const [soundPlayed,setSoundPlayed] = useState(null);
  const [isPaused,setIsPaused] = useState(false);
  return (
    <div className="app w-screen h-screen font-poppins">
        <BrowserRouter>
            {cookie?.token ? (
              // If Cookie Exist go to these routes LOGGED IN ROUTES
                <songContext.Provider value={{currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}}>
                  <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/uploadsong" element={<UploadSongs/>}/>
                      <Route path="/mymusic" element={<MyMusic/>}/>
                      <Route path="/search" element={<SearchPage/>}/>
                      <Route path="/library" element={<Library/>}/>
                      <Route path="/playlist/:playlistId" element={<SinglePlaylistView/>}/>
                      {/* For any route that does not exist in above routes use path as "*" */}
                      <Route path="*" element={<Navigate to="/home" />} />
                  </Routes>
                </songContext.Provider>
            ) : (
              // If Cookie does not Exist go to these routes LOGGED OUT ROUTES
              <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
                <Route path="/home" element={<HomeComponent />} />
                {/* For any route that does not exist in above routes use path as "*" */}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
        </BrowserRouter>
    </div>
  );
}

export default App;
