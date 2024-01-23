import './home.module.css'
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import About from "../../components/about/about.jsx";

function Home() {

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

export default Home
