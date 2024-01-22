import './App.css'
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import About from "./components/about/about.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <main>
            <About></About>
        </main>
        <Footer></Footer>
    </>
  )
}

export default App
