const Projects = () => {
  const projectData = [
    {
      img: 'assets/images/Group 1000004884.webp',
      tittle: 'Calm App UI Design',
      para: 'Design an onboarding journey for calm sleep for enhanced user experience.'
    },
    {
      img: 'assets/images/Group 1000004898.webp',
      tittle: 'Comistaan App UI',
      para: 'the ultimate Comic Reading and Creation App  to a vibrant world of imagination!'
    },
    {
      img: 'assets/images/Group 1000004901.webp',
      tittle: 'Techlancer Web UI',
      para: 'the ultimate Comic Reading and Creation App  to a vibrant world of imagination!'
    },
    {
      img: 'assets/images/Group 1000004900.webp',
      tittle: 'Calm App UI Design',
      para: 'Design an onboarding journey for calm sleep for enhanced user experience.'
    },
    {
      img: 'assets/images/Group 1000004899.webp',
      tittle: 'Comistaan App UI',
      para: 'the ultimate Comic Reading and Creation App to a vibrant world of imagination!'
    },
    {
      img: 'assets/images/Group 1000004901.webp',
      tittle: 'Techlancer Web UI',
      para: 'the ultimate Comic Reading and Creation App to a vibrant world of imagination!'
    },
  ]
  return (
    <div className="bg-comman_bg">
      <div className="flex flex-row justify-center pt-8">
        <p className="text-white   w-52 text-center text-4xl	font-semibold	"  id = 'projects_id'>Our Projects</p>
      </div>
      <div className="flex flex-row justify-center pt-4 ">
        <p className="text-white text-center text-2xl	font-normal	">Crafted with skill and care to help our clients grow their business!</p>
      </div>
      <div className="flex flex-row  justify-center">
        <div className="flex flex-row  justify-around flex-wrap w-3/4  pt-8  ">
          {
            projectData.map((item) => {
              return (
                <div className="  col_4 py-8 px-16 ">
                  <img src={item.img} style={{ width: 220, height: 220 }} />
                  <div className="pt-8">
                    <p className="text-center text-white">{item.tittle}</p>
                  </div>
                  <div>
                    <p className="text-center font-extralight	text-xs text-white">{item.para}</p>
                  </div>
                  <div className="flex flex-row  justify-center">
                    <div className=" bg-gradient-to-r from-footer_bg1 to-footer_bg2 border-white rounded-lg bg-white w-28  cursor-pointer mx-2 my-2 text-center py-2 px-2">
                      <div>
                        <p className="text-white">Check out</p>
                      </div>
                    </div>
                    {/* <button  className="focus:ring-2">Check out</button> */}

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-3/4 h-0.5  flex self-center   bg-gradient-to-r from-servicePara  via-testimonial_bg2 via-40% to-servicePara 	"></div>
      </div>
      <div className="  flex flex-row justify-center pt-8 ">
        <div className="flex flex-row justify-around w-52">
          <p className="text-center text-white font-semibold text-4xl	 ">Wall of </p>
          <p className="text-center text-projectTextCol font-semibold text-4xl"> Love</p>
        </div>
      </div>
      <div className="  flex flex-row justify-center  pt-8 pb-12 ">
        <div className=" w-7/12   ">
          <p className="text-white text-2xl	font-normal	text-center">"Fiezetech is just awesome. The kind of work they deliver is mind blowing. Perfect choice for your next SaaS application."</p>
          <div className=" flex flex-row justify-center pt-4">
            <p className="text-white text-base	font-semibold	">Micheal Gough </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects