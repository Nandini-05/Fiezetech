
import {Routes,Route} from 'react-router-dom'
import ServiceComp from '../layout/Service'
import Projects from '../layout/Projects'
import TestimonialComp from '../layout/Testimonial'
import Footer from '../layout/Footer'

import NotFound from './NotFound'
import Layout from '../layout'

const MainRouter = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Layout/>}/>
        <Route path = "/service" element = {<ServiceComp/>}/>
        <Route path = "/projects" element= {<Projects/>}/>
        <Route path = "/testimonials" element = {<TestimonialComp/>}/>
        <Route path = "/contact" element = {<Footer/>}/>
        <Route path = "/*" element = {<NotFound/>}/>
    </Routes>
  )
}

export default MainRouter