var big = document.querySelector("#bigVideo");

function changeVideo() {
    if (this.id == "mini333") {
        big.src = "images/mini33.mp4";
    } else if (this.id == "mini555") {
        big.src = "images/mini5.mp4";
    } else if (this.id == "clubmen") {
        big.src = "images/clubman.mp4";
    }
}
document.querySelector("#mini333").addEventListener("click", changeVideo);
document.querySelector("#mini555").addEventListener("click", changeVideo);
document.querySelector("#clubmen").addEventListener("click", changeVideo);