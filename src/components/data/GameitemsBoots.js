
import noneboots from "/src/assets/none.webp"
import minusleg from "/src/assets/minusleg.webp"



const GameitemsBoots = [
    {
        id:'c-0',
        title: "Ничего",
        imageUrl: noneboots,
        description:"Здесь может быть ваша реклама",
        Str: 0,
        Dex: 0,
        Int: 0,
        Def: 0,
        Atl: 0,
        Rit: 0,
    },
    {
        id:'c-1',
        title: "Потеря ноги",
        imageUrl: minusleg,

        description:"Ай, больно в ноге",
        Str: -5,
        Dex: -5,
        Int: 0,
        Def: -4,
        Atl: -4,
        Rit: 0,
        Slots: 0,
    },
]

export {GameitemsBoots}