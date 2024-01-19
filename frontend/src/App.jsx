import './App.css'
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <main>
            <About Kage={"2"}></About>
        </main>
        <Footer></Footer>
    </>
  )
}

export default App
