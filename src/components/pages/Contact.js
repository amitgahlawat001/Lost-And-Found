import React from 'react'
import './Contact.css'
import { useState } from 'react';
import { Button } from '../Button';


function Contact() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className='contact-page'>
            <div className="content">
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2 style={{ alignSelf: 'center' }}>Contact Us</h2>
                    <p> IRDAI recommends payout of all policy benefits through electronic mode. Please update your bank details at earliest for your Max Life Insurance policy to enable us to credit all policy related benefits directly in your bank account.
                    </p>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className='box'>
                        <div className='icon'><i class="fas fa-map-marker-alt"></i></div>
                        <h2>Address</h2>
                        <p>76 pocket 7 rohini New Delhi 110085 India
                        </p>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class="fas fa-phone-alt"></i></div>
                        <h2>Phone</h2>
                        <p>9999988222
                        </p>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class="fas fa-envelope-open"></i></div>
                        <h2>E-mail</h2>
                        <p>lostandfound@gmail.com
                        </p>
                    </div>
                </div>
                <div className='message-form'>
                    <h1 style={{fontSize: '30px', color: 'black'}}>Send message</h1>
                    <input type="text" name='username' id='username' autoComplete='false' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your name' />
                    <input type="text" name='email' id='email' autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email address' />
                    <input type="textarea" name='message' id='message' autoComplete='false' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type message...' />
                    <Button style={{border: 'black', color: 'cadetblue'}}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
