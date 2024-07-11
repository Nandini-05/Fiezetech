

const TestimonialComp = () => {
    const testData = [
        {
            imgArr1: "assets/images/ic_c++.webp",
            title: 'C++'
        },
        {
            imgArr1: "assets/images/ic_javascript.webp",
            title: 'Java Script'
        },
        {
            imgArr1: "assets/images/ic_android.webp",
            title: 'Android'
        },
        {
            imgArr1: "assets/images/ic_apple.webp",
            title: 'ios'
        },
        {
            imgArr1: "assets/images/ic_react.webp",
            title: 'React'
        },
        {
            imgArr1: "assets/images/ic_react.webp",
            title: 'React Native'
        },
        {
            imgArr1: "assets/images/ic_python.webp",
            title: 'Python'
        },
        {
            imgArr1: "assets/images/ic_flutter.webp",
            title: 'Flutter'
        },
        {
            imgArr1: "assets/images/ic_figma.webp",
            title: 'Figma'
        },
        {
            imgArr1: "assets/images/ic_frmaer.webp",
            title: 'Framer'
        },




    ]
    return (

        <div className="bg-gradient-to-r from-testimonial_bg1 to-testimonial_bg2  ">

            <div className="col_6 flex flex-row  w-full    self-center   ">
                <div className="flex flex-row  w-3/4 self-center  px-24 justify-around flex-wrap  ">
                    {
                        testData.map((item) => {
                            return (
                                <div className=" self-center   py-8 px-4 col_3 ">
                                    <div>
                                        <img src={item.imgArr1} width='80' height='80' />
                                    </div>
                                    <div>
                                        <p className="text-center text-white">{item.title}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                </div>
                <div className="flex flex-col  col_6   w-full ">
                    <div className="w-3/4">
                        <p className="text-white  pt-8  font-bold text-2xl" id='testimonials_id' >Languages, Frameworks, Tools and Softwares we use</p>
                    </div>
                    <div className="w-full  flex flex-wrap pt-8">

                        <p className="text-white font-extralight text-justify w-3/4 text-sm"  >Be it hybrid or native apps for Android or iOS,
                            data-driven full-stack web apps or enterprise-grade software,
                            our Agile mobile app development, full-stack, DevOps and QA engineers build,
                            test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.</p>
                    </div>
                    {/* <div className=""> */}
                    <div className=" bg-gradient-to-r from-footer_bg1 to-footer_bg2 border-white rounded-lg  bg-white w-56  cursor-pointer mx-2 my-2 text-center py-2 px-2">
                        <p className="text-white">Learn more about us</p>
                    </div>
                    {/* </div> */}
                </div>


            </div>


        </div>


    )
}

export default TestimonialComp

{/* <div className=" col_6 flex flex-wrap w-full">
                            Name
                            {/* <p>Be it hybrid or native apps for Android or iOS, data-driven full-stack web apps or enterprise-grade software, our Agile mobile app development, full-stack, DevOps and QA engineers build, test, deploy, and support bespoke solutions. Our software solutions are simultaneously compatible with multiple platforms.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want.No code or full code, you choose. Easily embed interactive animations or manipulate everything with code — Rive empowers you to work the way you want. </p> */}
                        // </div> */}