import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Watch from "./pages/Watch/Watch"
import NotFound from "./pages/PageNotFound/NotFound"
import Search from "./pages/Search/Search"
import Favorites from "./pages/Favorites/Favorites"
import FavoritesProvider from "./contexts/Favorites"
import AddVideo from './pages/AddVideo/AddVideo';

function AppRoutes() {
    return(
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home /> }> </Route>
                    <Route path="/watch/:id" element={ <Watch /> }> </Route>
                    <Route path="/search" element={ <Search /> }> </Route>
                    <Route path="*" element={ <NotFound /> }> </Route>
                    <Route path="/favorites" element={ <Favorites /> }> </Route>
                    <Route path="/cadastre" element={ <AddVideo /> }> </Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes
