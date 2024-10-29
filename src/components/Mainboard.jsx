import { useContext } from "react";
import { GamorContext } from "../context/GamorContext";
import { MainboardNews } from "./MainboardNews";
import { MainboardCenterLight } from "./MainboardCenterLight";
import { MainboardCenterDark } from "./MainboardCenterDark";
import { MainboardSearch } from "./MainboardSearch";

export function Mainboard() {
    const { darkmode } = useContext(GamorContext)

    return (
        <div 
          className="mainboard" 
          style={ darkmode ?{background: '#13131b'} :{background: '#e4f3fa'} }>
            <MainboardNews/>
            {darkmode ?<MainboardCenterDark/> :<MainboardCenterLight/>}
            <MainboardSearch/>
        </div>
    )
}