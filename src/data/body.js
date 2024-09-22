import filter from '../img/filter.png'
import home from '../img/home.png'
import timeline from '../img/timeline.png'
import all from '../img/all.png'
import music from '../img/music.png'
import game from '../img/game.png'
import category1 from '../img/category1.png'
import category2 from '../img/category2.png'
import category3 from '../img/category3.png'
import category4 from '../img/category4.png'
import mainMusic from '../img/main-music.png'
import mainGame from '../img/main-game.png'
import mainGame1 from '../img/main-game-1.png'
import mainGame2 from '../img/main-game-2.png'
import mainGame3 from '../img/main-game-3.png'
import subGame1 from '../img/sub-game-1.png'
import subGame2 from '../img/sub-game-2.png'
import subGame3 from '../img/sub-game-3.png'
import search from '../img/search.png'

export const listItem = [
     {
        label: "Games Home",
        img : home
    },
    {
        label: "Timeline",
        img : timeline
    },
    {
        label: "All Games",
        img : all
    },
    {
        label: "Search",
        img : search,
        type: "mobile"
    },
    {
        label: "Filter",
        img : filter,
        type: "mobile"
    }
]

export const listCategory = [
    {
        type: 'music',
        mainImg : mainMusic,
        title: 'Music',
        icon: music,
        text: "Music makes everything better, and these games will grove to it!",
        listImg1 : [category1, category2],
        listImg2 : [category3, category4],
    },
    {
        type: 'game',
        mainImg : mainGame,
        title: 'Table Games',
        icon: game,
        text: "The classic table games for the gentlemen and ladies.",
        listImg1 : [category1, category2],
        listImg2 : [category3, category4],
    },
    {
        type: 'music',
        mainImg : mainMusic,
        title: 'Music',
        icon: music,
        text: "Music makes everything better, and these games will grove to it!",
        listImg1 : [category1, category2],
        listImg2 : [category3, category4],
    },
    {
        type: 'game',
        mainImg : mainGame,
        title: 'Table Games',
        icon: game,
        text: "The classic table games for the gentlemen and ladies.",
        listImg1 : [category1, category2],
        listImg2 : [category3, category4],
    }
]

export const listGame = [
    {
        mainImg: mainGame1,
        subImg: subGame1,
        title: "Mahjong Ways",
        text: "4TECH™ has just launched their very first Mahjong inspired slot machine gam…",
        votality: "MEDIUM",
        rtp: "95.01%",
        max: "x5000"
    },
    {
        mainImg: mainGame2,
        subImg: subGame2,
        title: "Wild Bandito",
        text: "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
        votality: "MEDIUM",
        rtp: "95.01%",
        max: "x5000"
    },
    {
        mainImg: mainGame3,
        subImg: subGame3,
        title: "Tree Of Fortune",
        text: "Legend has it that a farmer was granted a seed from a deity.",
        votality: "MEDIUM",
        rtp: "95.01%",
        max: "x5000"
    },
    {
        mainImg: mainGame2,
        subImg: subGame2,
        title: "Wild Bandito",
        text: "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
        votality: "MEDIUM",
        rtp: "95.01%",
        max: "x5000"
    },
    {
        mainImg: mainGame3,
        subImg: subGame3,
        title: "Tree Of Fortune",
        text: "Legend has it that a farmer was granted a seed from a deity.",
        votality: "MEDIUM",
        rtp: "95.01%",
        max: "x5000"
    },
]