let currentIndex = 0;
const banner = document.getElementById('slider');
const observer = new IntersectionObserver(entries => {
    // Nếu có ít nhất một entry (phần tử) intersect với viewport
    if (entries[0].isIntersecting) {
        changeBackgroundImage();
    } else {
        // Nếu không intersect với viewport, ngừng quan sát
        observer.unobserve(banner);
    }
}, { rootMargin: '0px', threshold: 0.2 });

// Bắt đầu quan sát
observer.observe(banner);

function changeBackgroundImage() {
    const banners = [
        {
            heading: 'Los Angeles',
            description: 'We had the best time playing at Venice Beach!',
            img: './assets/imgs/sliders/la.jpg',
        },
        {
            heading: 'New York',
            description: 'The atmosphere in New York is lorem ipsum.',
            img: './assets/imgs/sliders/ny.jpg',
        },
        {
            heading: 'Chicago',
            description: 'Thank you, Chicago - A night we won\'t forget.',
            img: './assets/imgs/sliders/chicago.jpg',
        }
    ];

    if (currentIndex === banners.length) {
        currentIndex = 0;
    }

    banner.style.backgroundImage = `url(${banners[currentIndex].img})`;
    banner.innerHTML = `
        <div class="text-content">
            <h2 class="text-heading">${banners[currentIndex].heading}</h2>
            <p class="text-description">
                ${banners[currentIndex].description}
            </p>
        </div>
    `;
    currentIndex++;

    observer.unobserve(banner);
}

setInterval(() => {
    // Only call changeBackgroundImage if the banner is intersecting with the viewport
    if (observer && observer.root && observer.root.contains(banner)) {
        changeBackgroundImage();
    } else {
        // If the banner isn't intersecting with the viewport, start observing again
        observer.observe(banner);
    }
}, 4500);