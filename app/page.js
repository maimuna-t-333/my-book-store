import Categories from "./Components/Categories.js"
import Hero2 from "./Components/Hero.js"
import Navbar from "./Components/Navbar.js"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Other sections here */}
      <Hero2></Hero2>
      <Categories></Categories>
    </main>
  )
}

