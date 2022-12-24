const player = document.getElementById("player")

function playSong(id) {
    player.src=`https://www.youtube.com/embed/${id}?autoplay=1&loop=1&controls=0&modestbranding=1&mute=1&enablejsapi=1`
    document.querySelectorAll(".nowPlaying")?.forEach(btn => btn.classList.remove("nowPlaying"))
    event.target.classList.add("nowPlaying")
}