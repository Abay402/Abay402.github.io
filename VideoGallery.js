const videoList = document.getElementById("VideoList");

function loadVideo(videoId, element) {
    document.getElementById("MainVideo").src =
        "https://www.youtube.com/embed/" + videoId;

    document.querySelectorAll(".VideoItem").forEach(item => {
        item.classList.remove("Selected");
    });

    element.classList.add("Selected");
}

function scrollVideos(direction) {
    const item = videoList.querySelector(".VideoItem");

    const scrollAmount = item.offsetWidth + 15;

    videoList.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

function updateArrows() {
    const leftArrow = document.querySelector(".CarouselArrow.left");
    const rightArrow = document.querySelector(".CarouselArrow.right");

    leftArrow.style.display =
        videoList.scrollLeft > 0 ? "block" : "none";

    rightArrow.style.display =
        videoList.scrollLeft + videoList.clientWidth <
        videoList.scrollWidth ? "block" : "none";
}

videoList.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);

updateArrows();

function openImage(image) {
    window.parent.openImage(image.src);
}

function openImageLink(link) {
    window.parent.openImage(link);
}

document.querySelectorAll('.DownloadBox').forEach(box => {
    box.addEventListener('click', () => {
        window.open(box.dataset.href, '_blank');
    });
});

