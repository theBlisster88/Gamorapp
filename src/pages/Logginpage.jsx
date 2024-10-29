import { GamorContext } from "../context/GamorContext";
import { useNavigate } from "react-router-dom"
import localStorage from "../localstorage.ts"
import { useContext, useEffect } from "react";
import "../css/logginStyles.css"

export function Loggingpage() {
    const navigate = useNavigate();
    const { logged, setLogged } = useContext(GamorContext)
    console.log(logged)

    const handleOnClickLogin = (e) => {
        e.preventDefault()
        let confirmed = false
        const username = document.getElementById('user').value
        const password = document.getElementById('pass').value

        if(username !== '' && password !== ''){
            localStorage.users.forEach(user => {
                if(user.username === username && user.pass === password){
                    setLogged(true); confirmed = true
                }
            })

            if(confirmed === false){
                alert('User and/or password incorrect, try again')
            }
        }
        else{
            alert("Must enter both username and password to login")
        }
    }

    useEffect(() => {
        if(logged){
            navigate("/landing")
        }
    }, [logged, navigate])

    return(
        <div className="loggin-container">
            <div className="loggin-card">
                <img 
                  className="loggin-logo"
                  src="/img/system/applogo.png" 
                  alt="logo" 
                />
                <input type="text" id="user" placeholder="Enter username"/>
                <input type="password" id="pass" placeholder="Enter password"/>

                <button className="loggin-button" onClick={handleOnClickLogin}>Loggin</button>

            </div>
        </div>
    )
}