import { useContext } from "react";
import { GamorContext } from "../context/GamorContext";
import localStorage from "../localstorage.ts";


export function MainboardSearch() {
    const { darkmode, platform, setPlatform, category, findedGame, setFindedGame } = useContext(GamorContext)
    var teamlinked = false

    const handleOnClickSearchInput = (e) =>{
        setFindedGame(null)
        e.target.value=""
    } 

    const handleOnClickSearchNow = () => {
        const searchInput = document.getElementById('search-input')
        const currentCatg = category
        const catgGames = []

        if(currentCatg === 'All'){
            //Searching amoung all games
            localStorage.games.forEach(game => {
                if(game.gamename.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())){
                    setFindedGame(game)
                }
            })
        }
        else{
            localStorage.games.forEach(game => {
                if(game.gamecaterory === currentCatg){
                    catgGames.push(game)
                }
            })
            //Searching amoung current category games
            catgGames.forEach(game => {
                if(game.gamename.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())){
                    setFindedGame(game)
                }
            })
        }
    }    

    const handleOnClickEnterTeam = (e) => {
        // setFindedGame(findedGame)
        const currentTeamSize = e.target.previousSibling.children.length
        const team = e.target.previousSibling

        if (findedGame.teamMax > currentTeamSize && !teamlinked){
            const newPlayer = document.createElement("img")
            newPlayer.setAttribute('src', '/img/maincaracters/pvz3.png')
            newPlayer.setAttribute('alt', 'myprofilepic')
            team.appendChild(newPlayer)
            teamlinked = true
        }
        else{
            teamlinked 
                ?(alert("You've already enter a team"))
                :(alert('This team is full, choose another one'))

        }
        
    }

    return(
        <div className="mainboard-search">
            <div className="mainboard-search-platfom"> 
                <h3>01. Choose Platform</h3>
                <div style={darkmode ?{background: 'black'} :{background: 'white'}}>
                    {platform === 'party'
                        ? (
                            <span style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}>
                                Party
                            </span>
                        )
                        : (
                            <span onClick={() =>{setPlatform('party')}}>
                                Party
                            </span>
                        )
                    }
                    {platform === 'match'
                        ? (
                            <span style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}>
                                Match
                            </span>
                        )
                        : (
                            <span onClick={() =>{setPlatform('match')}}>
                                Match
                            </span>
                        )
                    }
                    {platform === 'streams'
                        ? (
                            <span style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}>
                                Streams
                            </span>
                        )
                        : (
                            <span onClick={() =>{setPlatform('streams')}}>
                                Streams
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="mainboard-search-game">
                <h3>02. Searching Game</h3>
                <div 
                    className="mainboard-search-game-box" 
                    style={darkmode ?{background: 'black'} :{background: 'white'}}
                >
                    <div className="mainboard-search-game-box-header">
                        <input 
                          id="search-input"
                          className="search-input"
                          style={darkmode ?{background: '#13131b', color: "white"} :{background: '#e4f3fa', color: "black"}}
                          type="text"
                          placeholder="Search teams for 'X' game"
                          onClick={handleOnClickSearchInput}
                        />

                        <img 
                          src="/img/system/sliders.png" 
                          alt="logo" 
                        />
                    </div>
                    
                    <hr />
                    
                    {findedGame !== null
                        ?(
                            <div className="team-list">
                                {findedGame.teams.map((team, index) => (
                                    
                                    <li className="team">
                                        <span 
                                        className="team-index"
                                        style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}>
                                            {index+1}
                                        </span>

                                        <span className="team-name">{team.name}</span>

                                        <div id={(index + 1) + "team-members"} className="team-members">
                                            {team.players.map((player, index) => (
                                                <img 
                                                    src={player}
                                                    alt="profpic" 
                                                />
                                            ))}
                                        </div>

                                        <button
                                          className="team-enter"
                                          style={darkmode ?{background: '#13131b'} :{background: '#e4f3fa'}}
                                          onClick={handleOnClickEnterTeam}>
                                            +
                                        </button>
                                    </li>
                                ))}
                            </div>
                        )
                        :(<h4>Nothing Found</h4>)
                    }
                
                    <button 
                      className="mainboard-search-game-button"
                      style={darkmode 
                        ?{background: 'white', color: 'black'} 
                        :{background: 'black', color: 'white'}}
                      onClick={handleOnClickSearchNow}
                    >
                        Seach Now
                    </button>
                </div>
                
            </div>
        </div>
    )
}