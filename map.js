// France Map JS
const allRegions = document.querySelectorAll('#france-map__container a');

for (let region of allRegions) {
    region.addEventListener('click', (e) => {
        let name = region.dataset.name;
        let regionVideos = document.querySelectorAll(`.one-video__container[data-name="${name}"]`);
        for (let video of regionVideos) {
            video.style.display === 'block' ? video.style.display = 'none' : video.style.display = 'block';
            let h2 = document.createElement('h2');
            h2.innerHTML = `${name}`;
            video.appendChild(h2);
        }
    });
}
