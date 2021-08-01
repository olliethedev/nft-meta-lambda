module.exports = [
    {
        name:"Background",
        folder:"backgrounds/",
        choices:[
            {
                name:"Cemetary",
                probability: 0.43,
                asset:"cemetary.png"
            },
            {
                name:"Lab",
                probability: 0.32,
                asset:"lab.png"
            },
            {
                name:"Woods",
                probability: 0.18,
                asset:"woods.png"
            },
            {
                name:"Castle",
                probability: 0.07,
                asset:"castle.png"
            },
        ]
    },
    {
        name:"Character",
        folder:"characters/",
        id:"character",
        choices:[
            {
                name:"Zombie",
                probability: 0.43,
                asset:"zombie.png"
            },
            {
                name:"Frankenstein",
                probability: 0.31,
                asset:"frankenstein.png"
            },
            {
                name:"Wolfman",
                probability: 0.18,
                asset:"wolfman.png"
            },
            {
                name:"Dracula",
                probability: 0.08,
                asset:"vampire.png"
            },
        ]
    },
    {
        name:"Earings",
        folder:"earings/",
        key:"character",
        choices:[
            {
                name:"None",
                probability: 0.31,
            },
            {
                name:"Hoop Earing",
                probability: 0.25,
                asset:"hoop/"
            },
            {
                name:"Diamond Stud",
                probability: 0.22,
                asset:"diamond/"
            },
            {
                name:"Skull Earing",
                probability: 0.13,
                asset:"skull/"
            },
            {
                name:"Banana Earing",
                probability: 0.09,
                asset:"banana/"
            },
        ]
    },
    {
        name:"Clothing",
        folder:"clothing/",
        id:"clothing",
        choices:[
            {
                name:"None",
                probability: 0.23,
            },
            {
                name:"Ripped Shirt",
                probability: 0.20,
                asset:"rippedshirt.png"
            },
            {
                name:"Company Jacket",
                probability: 0.16,
                asset:"companyjacket.png"
            },
            {
                name:"SWAT Vest",
                probability: 0.14,
                asset:"swatvest.png"
            },
            {
                name:"Tie Die Shirt",
                probability: 0.11,
                asset:"tiedieshirt.png"
            },
            {
                name:"White Tux",
                probability: 0.09,
                asset:"whitetux.png"
            },
            {
                name:"Bathrobe",
                probability: 0.07,
                asset:"bathrobe.png"
            },
        ]
    },
    {
        name:"Necklace",
        folder:"necklaces/",
        key:"clothing",
        choices:[
            {
                name:"None",
                probability: 0.26,
            },
            {
                name:"Bone Necklace",
                probability: 0.20,
                asset:"bonenecklace/"
            },
            {
                name:"Weed Sign",
                probability: 0.14,
                asset:"weednecklace/"
            },
            {
                name:"Gold Chain",
                probability: 0.11,
                asset:"goldchain/"
            },
            {
                name:"Diamond Necklace",
                probability: 0.11,
                asset:"diamondnecklace/"
            },
            {
                name:"Peace Sign",
                probability: 0.07,
                asset:"peacenecklace/"
            },
            {
                name:"Cloves of Garlic",
                probability: 0.06,
                asset:"garlicnecklace/"
            },
            {
                name:"Ear Necklace",
                probability: 0.05,
                asset:"earnecklace/"
            },
        ]
    },
    {
        name:"Hat",
        folder:"hats/",
        key:"character",
        choices:[
            {
                name:"None",
                probability: 0.18,
            },
            {
                name:"Blue Cap",
                probability: 0.14,
                asset:"bluecap/"
            },
            {
                name:"Cowboy Hat",
                probability: 0.13,
                asset:"cowboyhat/"
            },
            {
                name:"Party Hat",
                probability: 0.10,
                asset:"partyhat/"
            },
            {
                name:"Beanie",
                probability: 0.09,
                asset:"orangebeanie/"
            },
            {
                name:"Rasta Hat",
                probability: 0.08,
                asset:"rasta/"
            },
            {
                name:"Cole Miner Hat",
                probability: 0.07,
                asset:"minerhat/"
            },
            {
                name:"Company Hat",
                probability: 0.06,
                asset:"companyhat/"
            },
            {
                name:"Lifeguard",
                probability: 0.05,
                asset:"lifeguardhat/"
            },
            {
                name:"Spinny Birds",
                probability: 0.04,
                asset:"birds/"
            },
            {
                name:"Halo",
                probability: 0.03,
                asset:"halo/"
            },
            {
                name:"Plunger",
                probability: 0.02,
                asset:"plunger/"
            },
            {
                name:"Fish Bowl",
                probability: 0.01,
                asset:"fishbowl/"
            },
        ]
    },
    {
        name:"Pet",
        folder:"pets/",
        choices:[
            {
                name:"None",
                probability: 0.18
            },
            {
                name:"Spotted Rat",
                probability: 0.17,
                asset:"spottedrat.png"
            },
            {
                name:"Crow",
                probability: 0.15,
                asset:"crow.png"
            },
            {
                name:"Cat",
                probability: 0.13,
                asset:"cat.png"
            },
            {
                name:"Owl",
                probability: 0.11,
                asset:"owl.png"
            },
            {
                name:"Spider",
                probability: 0.09,
                asset:"spider.png"
            },
            {
                name:"Devil",
                probability: 0.07,
                asset:"devil.png"
            },
            {
                name:"Angel",
                probability: 0.05,
                asset:"angel.png"
            },
            {
                name:"Fairy",
                probability: 0.03,
                asset:"fairy.png"
            },
            {
                name:"T-rex",
                probability: 0.02,
                asset:"trex.png"
            },
        ]
    },
    {
        name:"Background Special",
        folder:"background_extras/",
        choices:[
            {
                name:"None",
                probability: 0.30
            },
            {
                name:"Fire Works",
                probability: 0.18,
                asset:"fireworks.png"
            },
            {
                name:"Blimp",
                probability: 0.16,
                asset:"blimp.png"
            },
            {
                name:"Alien Beam",
                probability: 0.14,
                asset:"alienbeam.png"
            },
            {
                name:"Rocket",
                probability: 0.13,
                asset:"rocket.png"
            },
            {
                name:"Meteor",
                probability: 0.09,
                asset:"meteor.png"
            },
        ]
    },
]