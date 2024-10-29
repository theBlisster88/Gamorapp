import { useContext } from "react";
import { GamorContext } from "../context/GamorContext";

export function Navbar(){
    // const currentUrl = new URL(window.location.href);
    const {darkmode, setDarkmode } = useContext(GamorContext)

    return(
        <div className="navbar">
            <div className="navbar-links-menu">
                <a href="/landing" style={darkmode ?{color: "#008dcd"} :{color: "#00896f"}}>
                    Home
                </a>
                <a href="#streams" style={darkmode ?{color: "white"} :{color: "black"}}>
                    Streams
                </a>
                <a href="#party" style={darkmode ?{color: "white"} :{color: "black"}}>
                    Party
                </a>
                <a href="#premium" style={darkmode ?{color: "white"} :{color: "black"}}>
                    Premium
                </a>
            </div>

            <div className="navbar-center">
                <img 
                  className="navbar-logo"
                  src="/img/system/applogo.png" 
                  alt="logo" 
                />
                <img 
                  className="navbar-mode"
                  src="/img/system/mode.png" 
                  alt="logo" 
                  onClick={() => setDarkmode(!darkmode)}
                />
            </div>

            <div className="navbar-loggin-menu">
                <a href="#sign-in" style={darkmode ?{color: "white"} :{color: "black"}}>
                    Sign In
                </a>
                <a href="#new-account" style={darkmode ?{color: "white"} :{color: "black"}}>
                    Create Account
                </a>
            </div>

        </div>
    )
}

