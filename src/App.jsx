import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Contents from "./components/Contents"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Contents />
      </main>
      <Footer />
      {/* <footer>
        <p>hola</p>
      </footer> */}
    </>
  )
}

export default App
