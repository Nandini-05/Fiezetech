import Footer from './Footer'
import Navbar from './Navbar'
import Projects from './Projects'
import SearchInv from './SearchInv'
import ServiceComp from './Service'
import TestimonialComp from './Testimonial'

const Layout = () => {
  return (
    <div >
      <Navbar />
      <SearchInv />
      <ServiceComp/>
      <TestimonialComp/>
      <Projects/>
      <Footer/>
    </div>

  )
}

export default Layout