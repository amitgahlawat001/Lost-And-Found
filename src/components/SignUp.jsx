import React from 'react'
import "../App.css"
import { Button } from './Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { useSpring, a } from '@react-spring/web'


export const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [flipped, set] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const [showSignup, setShowSignup] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `transform translate(-50%,-50%) perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <>
            <div className="sign-up">
                <a.div className="login-box" style={{ opacity: opacity.to(o => 1 - o), transform }} >{
                    showLogin ? <form action="">
                        <div className='login-box'>
                            Lost & Found
                            <i class='fab fa-typo3' />
                            <p className='sign-up-text'>Username</p>
                            <input type="text" name='username' id='username' autoComplete='false' value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%' }} />
                            <p className='sign-up-text'>Password</p>
                            <input type="password" name='password' id='password' autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%' }} />
                            <Button buttonStyle='btn--outline'>Log in</Button>
                            <div className="sign-up-item">
                                <Link to='./pages/ForgetPass' className="sign-up-link">
                                    Forget password
                                </Link>
                                <Link className="sign-up-link" onClick={() => {
                                    set(state => !state)
                                    setShowLogin(false)
                                    setShowSignup(true)
                                }}>
                                    Register here
                                </Link>
                            </div>
                        </div>

                    </form> : null}
                </a.div>
                <a.div className='sing-up-box' style={{ opacity, transform, rotateY: '180deg', }}>{

                    showSignup ? <form action="">
                        <div className='sign-up-box'>
                            Lost & Found
                            <i class='fab fa-typo3' />
                            <p className='sign-up-text'>First Name</p>
                            <input type="text" name='fname' id='fname' autoComplete='false' value={fname} onChange={(e) => setFname(e.target.value)} style={{ width: '100%' }} />
                            <p className='sign-up-text'>Last Name</p>
                            <input type="text" name='lname' id='username' autoComplete='false' value={lname} onChange={(e) => setLname(e.target.value)} style={{ width: '100%' }} />
                            <p className='sign-up-text'>Email</p>
                            <input type="text" name='email' id='email' autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%' }} />
                            <p className='sign-up-text'>Userame</p>
                            <input type="text" name='username' id='username' autoComplete='false' value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%' }} />
                            <p className='sign-up-text'>Password</p>
                            <input type="password" name='password' id='password' autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%' }} />
                            <Button buttonStyle='btn--outline' onClick={() => {
                                set(state => !state)
                                setShowLogin(true)
                                setShowSignup(false)
                            }} >Sign Up</Button>

                        </div>
                    </form> : null}
                </a.div>
            </div>
        </>
    )
}

export default SignUp;