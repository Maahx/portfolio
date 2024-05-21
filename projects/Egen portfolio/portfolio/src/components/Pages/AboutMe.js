import './AboutMe.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AboutMe () {
  const navigate = useNavigate();

  function MoreButton() {
    navigate("/more")
  }

  function LoginBut() {
    navigate(`/${process.env.REACT_APP_ADMIN_KEY}`)
  }

  return (
    <>
      <h1 className='header'>Max Nordström</h1>
      <table className='table2'>
        <thead>
          <tr>
            img
          </tr>
        </thead>
      </table>
      <table className='table'>
        <thead>
          <tr className='About'>
            About Me
          </tr>
        </thead>
        <tbody>
          <td>
            kfjskgjsdlkgjskgdfjgkjdfkgjfkgjfkgfgjkfjgkfjgkjgfkjkkdjgkdlfjgdklfgjdklfgjkdfjgdlkfgjdflkjgnfdmgn <br/>
            kfjskgjsdlkgjskgdfjgkjdfkgjfkgjfkgfgjkfjgkfjgkjgfkjkkdjgkdlfjgdklfgjdklfgjkdfjgdlkfgjdflkjgnfdmgn <br/>
            kfjskgjsdlkgjskgdfjgkjdfkgjfkgjfkgfgjkfjgkfjgkjgfkjkkdjgkdlfjgdklfgjdklfgjkdfjgdlkfgjdflkjgnfdmgn <br/>
            kfjskgjsdlkgjskgdfjgkjdfkgjfkgjfkgfgjkfjgkfjgkjgfkjkkdjgkdlfjgdklfgjdklfgjkdfjgdlkfgjdflkjgnfdmgn <br/>
            kfjskgjsdlkgjskgdfjgkjdfkgjfkgjfkgfgjkfjgkfjgkjgfkjkkdjgkdlfjgdklfgjdklfgjkdfjgdlkfgjdflkjgnfdmgn <br/>
          </td>
        </tbody>
        <button className='more-button' onClick={() => MoreButton()}>More</button>
        {/* <button className='experience-button'>Experience</button> */}
      </table>
      <table className='table3'>
        <thead>
          <tr className='About'>
            Education
          </tr>
        </thead>
        <tbody>
          <tr className='school'>NTI Gymnasiet Nacka</tr>
          <td>
            Fourth year Technology Programme
          </td>
          <tr className='school'>Klara Teoretiska Gymnasium Stockholm Södra</tr>
          <td>
            Technology Programme
          </td>
        </tbody>
      </table>
      <button className='loginbut' onClick={() => LoginBut()}></button>
    </>
  )
}

export default AboutMe