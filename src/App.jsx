import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/HomePage/homePage"
import { TittleInfo } from "./Pages/TittleInfo/TittleInfo"
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage"
import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { Comments } from "./Pages/Comments/Comments"
import { Layoute } from "./components/Layoute/Layoute"
import { FindAnime } from "./Pages/FindAnimePage/FindAnime"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/findAnime" element={<FindAnime />} />
        <Route path="/tittle" element={<TittleInfo />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/comments" element={<Comments />} />
      </Route>
    </Routes>
  )
}

export default App
