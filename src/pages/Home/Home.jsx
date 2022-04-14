import ImageSlider from "../../components/Slider/ImageSlider"
import './Home.css'


const Home = ({ user, slides }) => {
  return (
   <ImageSlider slides={slides}/>
  )
}

export default Home
