

const Footer = () => {
  return (

    <div className=" border-black bg-gradient-to-r  from-footer_bg1 to-footer_bg2  flex flex-row justify-between pl-20 ">
      <div className=" flex flex-row w-full  justify-between self-center">
      <img src="assets/fieze_logo_white_footer.svg" style={{ width: 150, height: 80, borderWidth: 0 }} />
      <div className="flex flex-row flex-wrap justify-around w-1/3  self-center">
        <p className="text-white not-italic font-semibold text-xs" id='contact_id'>ABOUT US</p>
        <p className="text-white not-italic font-semibold text-xs">TERMS AND CONDITIONS</p>
        <p className="text-white not-italic font-semibold text-xs">PRIVACY POLICY</p>
        <p className="text-white not-italic font-extralight pt-2 pl-20 text-xs">© 2023 Fiezetech, Inc. All rights reserved.</p>
      </div>
   
      </div>
    


    </div>

  )
}

export default Footer