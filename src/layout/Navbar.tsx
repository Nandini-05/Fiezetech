

const Navbar = () => {
  return (

    <div className='bg-[#1D1624]  h-24 min-h-full flex flex-row pt-2 pl-32' >
      <div className=' flex justify-center'>
        <img src="assets/fieze_tech_logo.svg" width='42' height='38' />
      </div>
      <div className=' h-30  w-2/5 flex flex-row justify-around  items-center' >
        <ul >
          <li className="flex gap-10 list-none cursor-pointer" >
            <a onClick={(e) => {
              e.preventDefault()
              window.location.replace('/#service')
              window.scrollTo({
                top: document.querySelector('#service_id')?.offsetTop,
                behavior: "smooth"
              })
            }} className='text-headerText text-base font-normal text-center	'>Service</a>
            <a onClick={(e) => {
              e.preventDefault()
              window.location.replace('/#projects')
              window.scrollTo({
                top: document.querySelector('#projects_id')?.offsetTop,
                behavior: "smooth"
              })
            }} className='text-headerText text-base	font-normal	'>Projects</a>
            <a onClick={(e) => {
              e.preventDefault()
              window.location.replace('/#testimonials')
              window.scrollTo({
                top: document.querySelector('#testimonials_id')?.offsetTop,
                behavior: "smooth"
              })
            }} className='text-headerText text-base	font-normal	'>Testimonials</a>
            <a onClick={(e)=>{
              e.preventDefault()
              window.location.replace('/#contact')
              window.scrollTo({
                top: document.querySelector('#contact_id')?.offsetTop,
                behavior: "smooth"
              })
            }} className='text-headerText text-base	font-normal	'>Contact us</a>
          </li>
        </ul>

            
      </div>
      {/* <div className="border-2 ">
        hbdsjh
      </div> */}
    </div>



  )
}

export default Navbar