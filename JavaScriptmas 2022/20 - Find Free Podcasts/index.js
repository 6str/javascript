//import podcasts from "./data.js";
const podcasts = require("./data.js")
/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

// map without destructuring
function getFreePodcastsA(data){
    return data.filter(podcast => !podcast.paid)
        .map(podcast => ({title:podcast.title, rating:podcast.rating, paid:podcast.paid }))
}


// map with destructuring
function getFreePodcastsB(data){
    return data.filter(podcast => !podcast.paid)
        .map(({ title, rating, paid }) => ({title, rating, paid }))
}


// reduce without destructuring
function getFreePodcastsC(data){
    return data.reduce((acc, podcast) => podcast.paid ? acc : [...acc, {title:podcast.title, rating:podcast.rating, paid:podcast.paid}], [])
}


// reduce without destructuring
function getFreePodcastsD(data){
    return data.reduce((acc, {title, rating, paid}) => paid ? acc : [...acc, {title, rating, paid}], [])
}


function showPodcasts(podcasts) {
    // const pods = getFreePodcasts(podcasts)
    podcasts.map(podcast => {
        const txt = `${podcast.title}:${podcast.rating}`
        console.log(txt)
        const pTag = document.createElement("p")        
        pTag.innerText = txt
        document.body.appendChild(pTag)
    })
}

console.log(getFreePodcastsA(podcasts))
console.log(getFreePodcastsB(podcasts))
console.log(getFreePodcastsC(podcasts))
console.log(getFreePodcastsD(podcasts))
// showPodcasts(getFreePodcastsA(podcasts))
