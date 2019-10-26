import React, { useRef } from 'react'
import * as userActions from './login.actions'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


const mapDispatchProps = (dispatch) => {
    return {
        saveUserInfo: user => dispatch(userActions.setUser(user))
    }
}

const Login = props => {
    const inputUserName = useRef(null)
    const inputPassword = useRef(null)

    const login = () => {
        if (inputUserName.current.value === 'react' && inputPassword.current.value === 'fictizia') {
            const user = {
                userName: inputUserName.current.value,
                password: inputPassword.current.value,
            }
            props.saveUserInfo(user)
            props.history.push("/posts");
            console.log(inputUserName.current.value, inputPassword.current.value) 
        }
    }

    return (
        <>
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" ref={inputUserName}/>
            </div>
            <div>
                <input type="password" ref={inputPassword}/>
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
        </>
    )
}

export default connect(null, mapDispatchProps)(withRouter(Login))

