import './App.css'
import { ChakraProvider, Flex, Link } from '@chakra-ui/react'
import { BrowserRouter, Link as RouterLink, Route, Routes, } from 'react-router-dom'
import { useState } from 'react'
import Protected from "../src/components/ProtectedRoutes"
import LoginPage from "./pages/loginPage.js"
import Home from "../src/pages/home.js"
import Ships from "../src/pages/wiki/starships.js"
import Characters from "../src/pages/wiki/characters.js"
import Films from "../src/pages/wiki/films.js"
import Planets from "../src/pages/wiki/planets.js"
function App() {

  const [auth, setAuth] = useState(false)


  return (
    <BrowserRouter basename='/'>
      <ChakraProvider>
        <Flex>
          <Link
            as={RouterLink}
            to="/login"
          >
            Login
          </Link>
          <Link
            as={RouterLink}
            to="/home"
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/starships"
          >
            Starships
          </Link>
          <Link
            as={RouterLink}
            to="/characters"
          >
            Characters
          </Link>
          <Link
            as={RouterLink}
            to="/planets"
          >
            Planets
          </Link>
          <Link
            as={RouterLink}
            to="/films"
          >
            Films
          </Link>

        </Flex>

        <Routes>
          <Route path='login/*' element={<LoginPage setAuth={setAuth}/>} />

          <Route element={<Protected auth={auth} />} >
              <Route path='home/*' element={<Home />} />
          </Route>
          <Route element={<Protected auth={!auth} />} >
              <Route path='starships/*' element={<Ships />} />
          </Route>
          <Route element={<Protected auth={!auth} />} >
              <Route path='characters/*' element={<Characters />} />
          </Route>
          <Route element={<Protected auth={!auth} />} >
              <Route path='planets/*' element={<Planets />} />
          </Route>
          <Route element={<Protected auth={!auth} />} >
              <Route path='films/*' element={<Films />} />
          </Route>

        </Routes>

      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
