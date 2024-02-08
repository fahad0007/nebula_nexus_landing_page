import React from 'react'
import './TemplateImage.css'
import studentImage from '../../images/student image.jpg'

const TemplateImage = () => {
  return (
    <div className='main'>
      <div className="left">
        <p className='welcome'>Welcome to</p>
        <h1 className="bold">Nebula Nexus Innovations</h1>
        <p>"Welcome to our education hub, where we believe in a hands-on approach to learning. Our program go beyond theory, focusing on practical knowledge that prepares students for real-world challenges. immens yourself in an educational experience that empowers you with the skills needed to thrive in today's dynamic industries."</p>
        <button className="btn">About Us</button>
      </div>
      <div className="right">
        <img src={studentImage} alt="" />
      </div>
    </div>
  )
}

export default TemplateImage
