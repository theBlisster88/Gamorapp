import { useContext } from "react";
import { GamorContext } from "../context/GamorContext";

export function MainboardNews() {
    const { darkmode } = useContext(GamorContext)

    return(
        <div className="mainboard-news">
            <h3> 
                Start 
                <span style={darkmode ?{color: '#008dcd'} :{color: "#00896f"}}> Streaming </span> 
                Games Differently
            </h3>

            <p>
                gamor has now a 
                <span style={darkmode ?{color: '#008dcd'} :{color: "#00896f"}}> stream party </span> 
                platform
            </p>

            <div>
                <a href="#new-account"
                    style={darkmode ?{color: 'white'} :{color: 'black'}}
                    >
                    Create account
                </a>
                <a href="#sign-in" style={darkmode ?{color: 'white'} :{color: 'black'}}>
                    Sign in
                </a>
            </div>
        </div>
    )
}