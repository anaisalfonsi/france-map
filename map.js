// France Map JS

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

for (let video of allVideos) {
    let popupBtn = video.querySelector('button');
    popupBtn.addEventListener('click', () => {
        const videoFrame = video.querySelector('iframe');
        const modal = document.querySelector('#videos-modal');
        const modalVideoFrame = modal.querySelector('.modal-content iframe');
        const closeBtn = modal.querySelector('.video-btn-close');
        modalVideoFrame.src = videoFrame.src;
        modal.style.display = 'block';
        closeBtn.onclick = () => {
            modal.style.display = "none";
        }
        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    });
}

