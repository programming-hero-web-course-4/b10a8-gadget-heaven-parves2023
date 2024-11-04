import { Helmet } from "react-helmet";
import Cards from "../components/Cards"
import Hero from "../components/Hero"



const Home = () => {
  

  return (
    <div>
       <Helmet>
        <title>Gadgets | BD </title>
      </Helmet>

      <Hero></Hero>
      <Cards></Cards>
    </div>
  )
}

export default Home
