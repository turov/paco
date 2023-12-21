const popup = document.querySelector('.popup');
const video = popup.querySelector('.videoFull');
const slides = document.querySelectorAll('.video-slide');
const close = popup.querySelector('.close');


slides.forEach((slide) => {
    slide.onclick = (e) => {
        if (e.target.tagName === 'IMG') {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
            const id = slide.getAttribute('data-id');
            video.setAttribute('src', `assets/video/video-full-${id}.mp4`);
        }
    }
})

popup.onclick = (event) => {
    if (event.target !== video) {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
        video.pause();
    }
}
