
const ServiceComp = () => {



  const arrServiceData = [
    {
      img: 'assets/images/img_development.webp',
      tittle: 'Web Design & Development',
      para: 'Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.'

    },
    {
      img: 'assets/images/img_app_development.webp',
      tittle: 'Android & iOS App Development',
      para: 'Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.'
    },
    {
      img: 'assets/images/img_ui_ux.webp',
      tittle: 'UX & UI Design',
      para: 'Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.'
    },
    {
      img: 'assets/images/img_testing.webp',
      tittle: 'Software Testing',
      para: 'Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.'
    },
    {
      img: 'assets/images/img_digital_marketing.webp',
      tittle: 'Digital Marketing',
      para: 'Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.'
    }


  ]


  return (
    <div className="bg-comman_bg items-center ">
      <div className=" pt-12 flex flex-row  justify-center  ">
        <p className="text-white  w-64 text-center font-semibold	text-4xl 	" id='service_id'> What we serve!</p>
      </div>
      <div className="flex flex-col  justify-center pb-12">
        <div className="flex flex-row mt-12  w-2/3 self-center  justify-center flex-wrap  ">
          {
            arrServiceData.slice(0, 3).map((item) => {
              return (
                <div className="  bg-serve_box_col w-72 rounded-xl	 self-center 	 mx-2 my-4  py-4   px-4 col_4 flex items-center flex-col " >
                  <img src={item.img} style={{ width: 180, height: 180, alignSelf: 'center', marginTop: -40 }} />
                  <div>
                    <p className="font-bold	text-md text-white 	 	">{item.tittle}</p>
                  </div>
                  <div>
                    <p className="font-extralight	text-xs text-white text-justify	">{item.para}</p>
                  </div>
                </div>
              )
            })
          }
          {
            arrServiceData.slice(3).map((item) => {
              return (
                <div className="  bg-serve_box_col w-72 rounded-xl	 self-center	 mx-2  py-4  mt-12 px-4 col_4 flex items-center flex-col " >
                  <img src={item.img} style={{ width: 180, height: 180, alignSelf: 'center', marginTop: -40 }} />
                  <div>
                    <p className="font-bold	text-md text-white	text-left">{item.tittle}</p>
                  </div>
                  <div>
                    <p className="font-extralight	text-xs text-white	text-justify">{item.para}</p>
                  </div>
                </div>
                
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default ServiceComp

{/* <div>

          <img src='assets/images/img_development.webp' />
          <div className=" " >
            <p className="text-white  font-bold	text-xl	">Web Design & Development</p>
          </div>
          <div className=" " >
            <p className="font-light	text-base	text-white"> Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.</p>
          </div>
        </div> */}

        // className="border-2 w-1/4 bg-gradient-to-r from-footer_bg1 to-footer_bg2"