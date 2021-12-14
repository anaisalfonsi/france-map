// France Map JS

/*function showVideos(region) {
    let name = region.dataset.name;
    let regionVideos = document.querySelectorAll(`.one-video__container[data-name="${name}"]`);
    for (let video of regionVideos) {
        video.style.display === 'block' ? video.style.display = 'none' : video.style.display = 'block';
        let h2 = document.createElement('h2');
        h2.innerHTML = `${name}`;
        video.appendChild(h2);
    }
}*/
const allRegions = document.querySelectorAll('#france-map__container a');
const allVideos = document.querySelectorAll('.one-video__container');

for (let region of allRegions) {
    region.addEventListener('click', (e) => {
        let name = region.dataset.name;
        for (let anyVideo of allVideos) {
            if (anyVideo.dataset.name !== name) {
                anyVideo.style.display = 'none';
            }
        }
        let regionVideos = document.querySelectorAll(`.one-video__container[data-name="${name}"]`);
        for (let video of regionVideos) {
            video.style.display === 'block' ? video.style.display = 'none' : video.style.display = 'block';
            let h2 = video.querySelector('h2');
            if (h2 === undefined || h2 === null) {
                h2 = document.createElement('h2');
                h2.innerHTML = `${name}`;
                video.appendChild(h2);
            }
        }
    });
}

function videoPoPup() {
    const modal = document.querySelector('#videos-modal');
    const closeBtn = modal.querySelector('.video-btn-close');
    modal.style.display = 'block';
    closeBtn.onclick = () => {
        modal.style.display = "none";
    }
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
}

for (let video of allVideos) {
    video.addEventListener('click', videoPoPup);
}

