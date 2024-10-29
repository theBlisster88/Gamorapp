import { CategoryCard } from "./CategoryCard.jsx";
import localStorage from "../localstorage.ts";

export function CategoriesList(){
    return(
        <div className="categories-container">
            {localStorage.gamesCategories.map((catg, index) => (
                <CategoryCard 
                    key={index}
                    i={"0"+(index+1)} 
                    title={catg.name+" Games"}
                    description={catg.description}
                    img={catg.bgImgUrl}
                    thisCatg={catg.name}
                />
            ))}

            <CategoryCard 
                i="view all"
                title="All Categories"
                description="No filters, master it all"
                img="/img/bg_categories/all.webp"
                thisCatg='All'
            />
        </div>
        
    )
}
