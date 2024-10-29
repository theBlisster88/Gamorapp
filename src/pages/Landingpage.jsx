import { useContext, useEffect } from "react";
import { GamorContext } from "../context/GamorContext";
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Mainboard } from '../components/Mainboard'
import { CategoriesList } from '../components/CategoriesList'
import "../css/landingStyles.css"

export function Landingpage() {
  const {darkmode, logged,} = useContext(GamorContext) 
  const navigate = useNavigate();

  useEffect(() => {
    if(logged === false){
      navigate('/')
    }
  }, [logged, navigate])

  return (
      <div className="landing-container"
        style={darkmode ?{background: "black", color: "white"} :{background: "white", color: "black"}}>
          <Navbar />
          <Mainboard />
          <h3 className="categories-header">Trending Catgories</h3>
          <CategoriesList />
      </div>
  )
}