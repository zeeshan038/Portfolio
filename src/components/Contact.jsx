import React from 'react'
import '../styles/Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephoneForward} from 'react-icons/bs'
import {BsSend } from 'react-icons/bs'
function Contact() {
  return (
    <div id='contact'>
      <div className='contact-container'>
      <div className='contact-main-sec'>
        <h5 className='contact-heading'>Contact</h5>
        <p className='contact-para'>Don't  be shy , Hit me up <span className='finger-emoji'> 👇</span> </p>
        </div>
        <div className="contact-sec-section">
        <div className='contact-icons-ssection'>
        <div className='contact-icon'>
        <AiOutlineMail/>   <a className='icon-text icon-hover' href="mailto:muhammadxzeeshan038@gmail.com.com?subject=Subject%20of%20the%20Email&cc=cc@example.com&bcc=bcc@example.com&body=Hello%20there!">muhammadxzeeshan038@gmail.com</a>

        </div>
        <div className='contact-icon'>
        <CiLocationOn/> <span className='icon-text'> Siekh jana ,swabi ,Kpk </span> 
        </div>
        <div className='contact-icon'>
        <BsTelephoneForward/> <a  href="#" className='icon-text icon-hover'>±923012631172 </a> 
        </div>
       
       
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default Contact
