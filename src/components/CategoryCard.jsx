import { useContext } from "react";
import { GamorContext } from "../context/GamorContext";

export function CategoryCard({i, title, description, img, thisCatg }){
    const { darkmode, category, setCategory } = useContext(GamorContext)

    return(
        <div 
            className="category-card"
            style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}
            onClick={() => setCategory(thisCatg)}
        >   
            {category === thisCatg
                ? (
                    <img
                      src={img}
                      style={{position: "absolute", top: '0px', right: '0px', bottom: '0px', left: '0px', opacity: "30%", width: "100%", height: "100%", borderRadius: "20px"}}
                      alt="no img"
                    />
                )
                : (null)
            }
            <h4> 
                <p style={{fontSize: '20px', marginBottom: '5px'}}>{i}</p>
                {title}
            </h4>

            <p className="category-description">
                {description}
            </p>
        </div>
    )
}