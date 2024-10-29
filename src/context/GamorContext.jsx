import { createContext, useState } from "react";

export const GamorContext = createContext('');

export function GamorContextProvier(props) {
    const [logged, setLogged] = useState(false)
    const [darkmode, setDarkmode] = useState(true)
    const [platform, setPlatform] = useState('')
    const [category, setCategory] = useState('All')
    const [findedGame, setFindedGame] = useState(null)



    return (
        <GamorContext.Provider
          value={{category, setCategory, darkmode, setDarkmode, platform, setPlatform, findedGame, setFindedGame, logged, setLogged}}>
            {props.children}
        </GamorContext.Provider>
    )
}