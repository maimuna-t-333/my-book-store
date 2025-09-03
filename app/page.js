import About from "./Components/About.js"
import Categories from "./Components/Categories.js"
import Hero2 from "./Components/Hero.js"
import Navbar from "./Components/Navbar.js"
import Newsletter from "./Components/Newsletter.js"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Other sections here */}
      <Hero2></Hero2>
      
      <Categories></Categories>
      <About></About>
      <Newsletter></Newsletter>
    </main>
  )
}

