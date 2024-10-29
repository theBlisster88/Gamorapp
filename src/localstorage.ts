const localStorage = {
    users: [
        {
            username: "blisster88",
            pass: "imthegodamboss",
        },
        {
            username: "siteadmin",
            pass: "justinthepayrol",
        },
        {
            username: "guest01",
            pass: "1234",
        },
    ],

    gamesCategories: [
        {
            name: "Action",
            bgImgUrl: "/img/bg_categories/action.png",
            description: "Adrenaline-fueled challenges, combat skills, reaction times and more tested in diverse ways. Plus top visuals and multiplayer options.",
        },
        {
            name: "Adventure",
            bgImgUrl: "/img/bg_categories/adventure.jpg",
            description: "Combination of captivating storylines, intricates puzzels and exploration of subrelistic worlds. Use your creativity to unravel the plot.",
        },
        {
            name: "Arcade",
            bgImgUrl: "/img/bg_categories/arcade.png",
            description: "Simple yet adictive gameplay to make you feel you're floating through a timeless fun universe with classic and new titles.",
        },
        {
            name: "Didactic",
            bgImgUrl: "/img/bg_categories/didactic.png",
            description: "Combine learning with interactive fun video games, get smarter while having a complete blast.",
        },
        {
            name: "Shooter",
            bgImgUrl: "/img/bg_categories/shooter.jpg",
            description: "Test your reflexes and accurately in a fire arms combat virtual world. May the best shooter wins.",

        },
        {
            name: "Sports",
            bgImgUrl: "/img/bg_categories/sports.jpg",
            description: "Cant be good at all sports diciplines in real life, but here you can be the champ if you practice (not so hard) enough.",
        },
        {
            name: "Strategy",
            bgImgUrl: "/img/bg_categories/strategy.webp",
            description: "Long term planning and resources management are key here, so your decision making abilities will tell you apart from the rest.",
        },
    ],

    games: [
        {
            gamename: "Monster Hunter Generations",
            gamecaterory: "Adventure",
            teams: [
                { 
                    name: "West Hunters", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "East Hunters", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                        '/img/profile_pics/profile-11.webp',
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "North Hunters", 
                    players: [
                        '/img/profile_pics/profile-13.jpg', 
                        '/img/profile_pics/profile-14.jpg',
                        '/img/profile_pics/profile-6.webp',
                    ]
                },
                { 
                    name: "Suth Hunters", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-12.jpg',
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
            ],
            teamMax: 4,
            plataform: "Nintendo Switch",
        },
        {
            gamename: "FIFA 24",
            gamecaterory: "Sports",
            teams: [
                { 
                    name: "BVB Fans", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                    ]
                },
                { 
                    name: "AC Milan Fans", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                    ]
                },
                { 
                    name: "Wolfsburg Fans", 
                    players: [
                        '/img/profile_pics/profile-13.jpg', 
                    ]
                },
                { 
                    name: "Atalanta Fans", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-12.jpg',
                    ]
                },
            ],
            teamMax: 2,
            plataform: "Pay Station 5",
        },
        {
            gamename: "Subway Surf",
            gamecaterory: "Arcade",
            teams: [
                { 
                    name: "Red Runners", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                    ]
                },
                { 
                    name: "Blue Runners", 
                    players: [
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "Gelb Runners", 
                    players: [
                        '/img/profile_pics/profile-14.jpg',
                    ]
                },
                { 
                    name: "Blau Runners", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
            ],
            teamMax: 2,
            plataform: "Mobile Device",
        },
        {
            gamename: "Dota 2",
            gamecaterory: "Strategy",
            teams: [
                { 
                    name: "Shadow Killers", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "Archers Only", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                        '/img/profile_pics/profile-11.webp',
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "Zeus Sons", 
                    players: [
                        '/img/profile_pics/profile-13.jpg', 
                        '/img/profile_pics/profile-14.jpg',
                        '/img/profile_pics/profile-6.webp',
                    ]
                },
                { 
                    name: "Blood Seakers", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-12.jpg',
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
            ],
            teamMax: 5,
            plataform: "PC",
        },
        {
            gamename: "War Zone",
            gamecaterory: "Shooter",
            teams: [
                { 
                    name: "Blood Seakers", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                    ]
                },
                { 
                    name: "Headshoots Only", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                        '/img/profile_pics/profile-11.webp',
                        '/img/profile_pics/profile-2.jpg',
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "Black Ops", 
                    players: [
                        '/img/profile_pics/profile-13.jpg', 
                        '/img/profile_pics/profile-14.jpg',
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "Fatal Bullets", 
                    players: [
                        '/img/profile_pics/profile-6.webp',
                        '/img/profile_pics/profile-12.jpg',
                        '/img/profile_pics/profile-8.jpg',
                        '/img/profile_pics/profile-9.jpg', 
                    ]
                },
            ],
            teamMax: 4,
            plataform: "PC",
        },
        {
            gamename: "Street Fighters",
            gamecaterory: "Action",
            teams: [
                { 
                    name: "Goku Team", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "Madara Team", 
                    players: [
                        '/img/profile_pics/profile-11.webp',
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
                { 
                    name: "Saitama Team", 
                    players: [
                        '/img/profile_pics/profile-12.jpg',
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "Gojo Team", 
                    players: [
                        '/img/profile_pics/profile-14.jpg',

                    ]
                },
            ],
            teamMax: 2,
            plataform: "Play Station 2",
        },
        {
            gamename: "World of Warcraft", //"WOW",
            gamecaterory: "Strategy",
            teams: [
                { 
                    name: "Lich Kings", 
                    players: [
                        '/img/profile_pics/profile-10.webp', 
                        '/img/profile_pics/profile-1.jpg',
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "White Walkers", 
                    players: [
                        '/img/profile_pics/profile-7.jpg', 
                        '/img/profile_pics/profile-11.webp',
                        '/img/profile_pics/profile-5.webp',
                    ]
                },
                { 
                    name: "Night Creatures", 
                    players: [
                        '/img/profile_pics/profile-13.jpg', 
                        '/img/profile_pics/profile-14.jpg',
                        '/img/profile_pics/profile-6.webp',
                    ]
                },
                { 
                    name: "Elfen Village", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-12.jpg',
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
            ],
            teamMax: 4,
            plataform: "PC",
        },
        {
            gamename: "Chess Masters Board",
            gamecaterory: "Didactic",
            teams: [
                { 
                    name: "Capa Blanca Team", 
                    players: [
                        '/img/profile_pics/profile-14.jpg',
                        '/img/profile_pics/profile-15.jpg',
                    ]
                },
                { 
                    name: "Fisher Team", 
                    players: [
                        '/img/profile_pics/profile-1.jpg',
                        '/img/profile_pics/profile-11.webp',

                    ]
                },
                { 
                    name: "Kramnik Team", 
                    players: [
                        '/img/profile_pics/profile-12.jpg',
                    ]
                },
                { 
                    name: "Judit Team", 
                    players: [
                        '/img/profile_pics/profile-9.jpg', 
                        '/img/profile_pics/profile-8.jpg',
                    ]
                },
            ],
            teamMax: 2,
            plataform: "Mobile Device",
        },
        // {
        //     gamename: "Uncharted",
        //     gamecaterory: "Adventure",
        //     plataform: "X Box One",
        // },
        // {
        //     gamename: "Horizonts",
        //     gamecaterory: "Adventure",
        //     plataform: "Play Station 5",
        // },
        // {
        //     gamename: "Zuma",
        //     gamecaterory: "Didactic",
        //     plataform: "PC",
        // },
        // {
        //     gamename: "God of War",
        //     gamecaterory: "Action",
        //     plataform: "Play Station",
        // },
        
    ]
}

export default localStorage
