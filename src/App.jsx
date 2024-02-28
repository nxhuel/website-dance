import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Contents from "./components/Contents"

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
    </>
  )
}

export default App
