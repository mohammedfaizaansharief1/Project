// import React from 'react'
import './Form.css' 

function Form() {
  return (
    <div>
      <div className="heading">
      <h2>Masuk</h2>
      <h3>Draftar</h3>
      </div>
      <div className="input">
        <input type="text" placeholder='Nomor Ponsel atau Email'/>
        <input type="text" placeholder='Kata Sandi' />
      </div>
    </div>
  )
}

export default Form
