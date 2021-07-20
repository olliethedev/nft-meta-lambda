module.exports = [
    {
        probability: 1, //always pick
        name:"Background",
        choices:[
            {
                probability: 0.5,
                name:"Earth",
                asset:"background/bg_1.png"
            },
            {
                probability: 0.5,
                name:"Moon",
                asset:"background/bg_2.png"
            },
        ]
    },
    {
        probability: 1, //always pick
        name:"Personality Type",
        choices:[
            {
                probability: 0.33,
                name:"Gray Guy",
                asset:"person/person_1.png"
            },
            {
                probability: 0.33,
                name:"Red Guy",
                asset:"person/person_2.png"
            },
            {
                probability: 0.33,
                name:"Blue Guy",
                asset:"person/person_3.png"
            },
        ]
    },
    {
        probability: 0.5, //pick 5/10 times
        name:"Hair",
        choices:[
            {
                probability: 0.5,
                name:"Classic Black",
                asset:"hair/hair_1.png"
            },
            {
                probability: 0.25,
                name:"Fancy Ginger",
                asset:"hair/hair_2.png"
            },
            {
                probability: 0.25,
                name:"Crazy Blond",
                asset:"hair/hair_3.png"
            },
        ]
    },
    {
        probability: 0.5, //pick 5/10 times
        name:"Special Item",
        choices:[
            {
                probability: 0.5,
                name:"Sunnies",
                asset:"item/item_1.png"
            },
            {
                probability: 0.35,
                name:"Pistol",
                asset:"item/item_2.png"
            },
            {
                probability: 0.15,
                name:"Samurai Swords",
                asset:"item/item_3.png"
            },
        ]
    },
    {
        probability: 0.7, //pick 7/10 times
        name:"Hat",
        choices:[
            {
                probability: 0.5,
                name:"Baseball cap",
                asset:"hat/hat_1.png"
            },
            {
                probability: 0.3,
                name:"Farmers hat",
                asset:"hat/hat_2.png"
            },
            {
                probability: 0.1,
                name:"Space helmet",
                asset:"hat/hat_3.png"
            },
            {
                probability: 0.1,
                name:"Warrior helmet",
                asset:"hat/hat_4.png"
            },
        ]
    },
    {
        probability: 1, //pick 10/10 times
        name:"Outfit",
        choices:[
            {
                probability: 0.25,
                name:"Space suit",
                asset:"outfit/outfit_1.png"
            },
            {
                probability: 0.5,
                name:"Lazy Sunday",
                asset:"outfit/outfit_2.png"
            },
            {
                probability: 0.25,
                name:"Spartan Warrior",
                asset:"outfit/outfit_3.png"
            },
        ]
    },
]