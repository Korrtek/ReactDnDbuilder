
import nonecloak from "/src/assets/none.webp"
import frostspina from "/src/assets/frostspina.webp"
import bearspina from "/src/assets/bearspina.webp"
import carapspina from "/src/assets/carapspina.webp"






const GameitemsCloak = [
    {
        id:'d-0',
        title: "Ничего",
        imageUrl: nonecloak,
        description:"Здесь может быть ваша реклама",
        Str: 0,
        Dex: 0,
        Int: 0,
        Def: 0,
        Atl: 0,
        Rit: 0,
    },
    {
        id:'d-1',
        title: "Плащ пришествия зимы",
        imageUrl: frostspina,
        description:"Когда-то пренадлежал магу льда, поговаривают, когда он проходил мимо, кровь застывала в жилах",
        Str: 0,
        Dex: 0,
        Int: 1,
        Def: 1,
        Atl: 0,
        Rit: 0,
    },
    {
        id:'d-2',
        title: "Плащ медвежьей стаи",
        imageUrl: bearspina,
        description:"Я забрел в какой-то ветхий дом в глубине леса, тут раньше точно жил человек, видимо медведи растерзали всю семью, вижу три трупа медведей и скелет маленькой девочки.",
        Str: 0,
        Dex: 1,
        Int: 0,
        Def: 0,
        Atl: 1,
        Rit: 0,
    },
    {
        id:'d-3',
        title: "Плащ погибшего защитника",
        imageUrl: carapspina,
        description:"Плащ пренадлежал единственному рыцарю замка, замок находился в осаде уже 20 дней, припасы давно закончились, господин погиб от жажды, только рыцарь стоял в дверном проёме замка, кажется ему в спину всадили 26 мечей, так он и погиб никого не пустив. ",
        Str: 1,
        Dex: 0,
        Int: 0,
        Def: 1,
        Atl: 0,
        Rit: 0,
    },
]

export {GameitemsCloak}