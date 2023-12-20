// import React from 'react'
import './Form.css' 
// import 'remixicon/fonts/remixicon.css'

// import { RiHeartFill } from "@remixicon/react";
import { VscEyeClosed } from "react-icons/vsc";
import {IconContext} from "react-icons";
// import {FaFolder} from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";



function Form() {
  return (
    <div className='form'>
      <div className="heading">
      <h3 className='masuk'>Masuk</h3>
      <h5 className='daftar'>Daftar</h5>
      </div>
      <div className="input"> 
        <input type="text" placeholder='Nomor Ponsel atau Email'/>
        <input type="password" placeholder='Kata Sandi' id='password'/>
        <IconContext.Provider value={{  className: "global-class-name" }}>
          <div>
            {/* <FaFolder /> */}
            <VscEyeClosed/>
          </div>
        </IconContext.Provider>
      </div>
      <div className="button-matter">
        <button className='button'>MASUK</button>
        <p className='matter-text'>Lupa kata sandi? <span> Klik disini</span></p>
      </div>
        <h6 className='heading6'>atau masuk dengan</h6>
        <div className="buttons">
          <button type="button" className='google'>Google
          <IconContext.Provider value={{  className: "global-class-name1" }}>
            <div>
            <FcGoogle />
            </div>
          </IconContext.Provider>
          </button>
          <button type="button" className='facebook'>Facebook
          <IconContext.Provider value={{  className: "global-class-name2" }}>
            <div>
            <TiSocialFacebook />
            </div>
          </IconContext.Provider>
          </button>
        </div>
        {/* <RiHeartFill/> */}
        {/* <VscEyeClosed/> */}
        
    </div>
  )
}

export default Form
