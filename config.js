module.exports = [
    {
        name:"Background",
        folder:"backgrounds/",
        id:"background",
        choices:[
            {
                name:"Cemetary",
                probability: 0.50,
                asset:"cemetary.png"
            },
            {
                name:"Woods",
                probability: 0.30,
                asset:"woods.png"
            },
            {
                name:"Lab",
                probability: 0.15,
                asset:"lab.png"
            },
            {
                name:"Castle",
                probability: 0.05,
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
                probability: 0.5218,
                asset:"zombie.png"
            },
            {
                name:"Frankenstein",
                probability: 0.2813,
                asset:"frankenstein.png"
            },
            {
                name:"Wolfman",
                probability: 0.1406,
                asset:"wolfman.png"
            },
            {
                name:"Dracula",
                probability: 0.0563,
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
                probability: 0.5402,
            },
            {
                name:"Silver Hoop Earing",
                probability: 0.2025,
                asset:"hoop/"
            },
            {
                name:"Tooth Earing",
                probability: 0.1350,
                asset:"tooth/"
            },
            {
                name:"Gold Earing",
                probability: 0.0788,
                asset:"gold/"
            },
            {
                name:"Skull Earing",
                probability: 0.0281,
                asset:"skull/"
            },
            {
                name:"Diamond Stud",
                probability: 0.0111,
                asset:"diamond/"
            },
            {
                name:"Banana Earing ",
                probability: 0.0043,
                asset:"banana/"
            }
        ]
    },
    {
        name:"Clothing",
        folder:"clothing/",
        id:"clothing",
        choices:[
            {
                name:"FM Shirt",
                probability: 0.2216,
                asset:"fmshirt.png"
            },
            {
                name:"Bad Actors",
                probability: 0.1430,
                asset:"badactorsshirt.png"
            },
            {
                name:"That's Fine Shirt",
                probability: 0.1211,
                asset:"thatsfineshirt.png"
            },
            {
                name:"Instrinic Value Shirt",
                probability: 0.1023,
                asset:"intrinsicvalueshirt.png"
            },
            {
                name:"Why Be?",
                probability: 0.0881,
                asset:"whybeshirt.png"
            },
            {
                name:"Ripped Shirt",
                probability: 0.0738,
                asset:"rippedshirt.png"
            },
            {
                name:"Blood Stained Shirt",
                probability: 0.0568,
                asset:"bloodstainshirt.png"
            },
            {
                name:"FUD you",
                probability: 0.0477,
                asset:"fudyou.png"
            },
            {
                name:"Varsity Jacket",
                probability: 0.0366,
                asset:"varsityjacket.png"
            },
            {
                name:"Hawaiian Shirt",
                probability: 0.0324,
                asset:"hawaiianshirt.png"
            },
            {
                name:"Tie Dye Shirt",
                probability: 0.0251,
                asset:"tiedyeshirt.png"
            },
            {
                name:"Poet Shirt",
                probability: 0.0202,
                asset:"poetshirt.png"
            },
            {
                name:"Black Tux",
                probability: 0.0142,
                asset:"blacktuxedo.png"
            },
            {
                name:"White Tux",
                probability: 0.0113,
                asset:"whitetuxedo.png"
            },
            {
                name:"Don't Sell Me",
                probability: 0.0078,
                asset:"dontsellme.png"
            },
            {
                name:"Tactical Vest",
                probability: 0.0063,
                asset:"tacticalvest.png"
            },
            {
                name:"Bath Robe",
                probability: 0.0017,
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
                probability: 0.4450,
            },
            {
                name:"Weed Sign",
                probability: 0.2025,
                asset:"weednecklace/"
            },
            {
                name:"Bone Necklace",
                probability: 0.1463,
                asset:"bonenecklace/"
            },
            {
                name:"Peace Sign",
                probability: 0.1013,
                asset:"peacenecklace/"
            },
            {
                name:"Gold Chain",
                probability: 0.0675,
                asset:"goldchain/"
            },
            {
                name:"Diamond Necklace",
                probability: 0.0225,
                asset:"diamondnecklace/"
            },
            {
                name:"Cloves of Garlic",
                probability: 0.0107,
                asset:"garlicnecklace/"
            },
            {
                name:"Ear Necklace",
                probability: 0.0043,
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
                probability: 0.2364,
            },
            {
                name:"Blue Cap",
                probability: 0.1563,
                asset:"bluecap/"
            },
            {
                name:"Company Hat",
                probability: 0.1344,
                asset:"companyhat/"
            },
            {
                name:"Snapback",
                probability: 0.1063,
                asset:"snapback/"
            },
            {
                name:"Rasta Hat",
                probability: 0.0906,
                asset:"rasta/"
            },
            {
                name:"Orange Beanie",
                probability: 0.0719,
                asset:"orangebeanie/"
            },
            {
                name:"Conductor Hat",
                probability: 0.0625,
                asset:"conductorhat/"
            },
            {
                name:"Construction Hat",
                probability: 0.0531,
                asset:"constructionhat/"
            },
            {
                name:"Cowboy Hat",
                probability: 0.0438,
                asset:"cowboyhat/"
            },
            {
                name:"Lifeguard",
                probability: 0.0281,
                asset:"lifeguardhat/"
            },
            {
                name:"Miner Hat",
                probability: 0.0238,
                asset:"minerhat/"
            },
            {
                name:"Party Hat",
                probability: 0.0231,
                asset:"partyhat/"
            },
            {
                name:"Top Hat",
                probability: 0.0188,
                asset:"tophat/"
            },
            {
                name:"Halo",
                probability: 0.0181,
                asset:"halo/"
            },
            {
                name:"Horns",
                probability: 0.0181,
                asset:"horns/"
            },
            {
                name:"Spinny Birds",
                probability: 0.0124,
                asset:"birds/"
            },
            {
                name:"Plunger",
                probability: 0.0055,
                asset:"plunger/"
            },
            {
                name:"Pancakes",
                probability: 0.0046,
                asset:"pancakes/"
            },
            {
                name:"Ice Crean",
                probability: 0.0023,
                asset:"icecream/"
            },
            {
                name:"Fish Bowl",
                probability: 0.0011,
                asset:"fishbowl/"
            },
        ]
    },
    {
        name:"Pet",
        folder:"pets/",
        key:"clothing",
        choices:[
            {
                name:"None",
                probability: 0.2363
            },
            {
                name:"Spotted Rat",
                probability: 0.1913,
                asset:"spottedrat.png"
            },
            {
                name:"Bat",
                probability: 0.1615,
                asset:"bat.png"
            },
            {
                name:"Cat",
                probability: 0.1271,
                asset:"cat.png"
            },
            {
                name:"Crow",
                probability: 0.0875,
                asset:"crow.png"
            },
            {
                name:"Owl",
                probability: 0.0591,
                asset:"owl.png"
            },
            {
                name:"Spider",
                probability: 0.0478,
                asset:"spider.png"
            },
            {
                name:"Fairy",
                probability: 0.0338,
                asset:"fairy.png"
            },
            {
                name:"Ghost",
                probability: 0.0203,
                asset:"ghost.png"
            },
            {
                name:"Ferret",
                probability: 0.0129,
                asset:"ferret/"
            },
            {
                name:"Angel",
                probability: 0.0096,
                asset:"angel.png"
            },
            {
                name:"Devil",
                probability: 0.0068,
                asset:"devil.png"
            },
            {
                name:"Panda",
                probability: 0.00389,
                asset:"panda.png"
            },
            {
                name:"Sloth",
                probability: 0.0017,
                asset:"sloth.png"
            },
            {
                name:"T-rex",
                probability: 0.0006,
                asset:"trex.png"
            },
        ]
    },
    {
        name:"Background Special",
        folder:"background_extras/",
        key:"background",
        choices:[
            {
                name:"None",
                probability: 0.8663
            },
            {
                name:"Blimp",
                probability: 0.0547,
                asset:"blimp.png"
            },
            {
                name:"Tornado",
                probability: 0.0332,
                asset:"tornado/"
            },
            {
                name:"Alien Beam",
                probability: 0.0208,
                asset:"alienbeam.png"
            },
            {
                name:"Fire Works",
                probability: 0.0152,
                asset:"fireworks.png"
            },
            {
                name:"Rocket Ship",
                probability: 0.0078,
                asset:"rocket.png"
            },
            {
                name:"Meteor",
                probability: 0.002,
                asset:"meteor.png"
            },
        ]
    },
]