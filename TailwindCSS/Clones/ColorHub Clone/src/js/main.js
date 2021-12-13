const videoContainer = document.getElementById("video-container");
const playBtn  = document.getElementById("play-btn");

// Add an event listener to the play button
playBtn.addEventListener('click', () => {
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/KZrjhUj6AgQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`
});