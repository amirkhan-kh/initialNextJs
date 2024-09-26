import Intro from '../components/intro/index';
import MenuSection from '../components/menu';
import Customer from '../components/customer';
import AboutTop from '../components/aboutTop';
import AboutUs from '../components/aboutUs'
const page:React.FC = () => {
  return (
    <>
      
        <Intro/>
        <MenuSection/>
        <Customer/>
        <AboutTop/>
        <AboutUs/>
    </>
  )
}

export default page