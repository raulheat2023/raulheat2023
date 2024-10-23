/*=====--- Filterable Gallery with Lightbox ---=====*/

const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const cardgalleryItems = document.querySelectorAll('.cardgallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const galleryVideos = document.querySelectorAll('.cardgallery_video .video-overlay');
const cardgalleryImgs = document.querySelectorAll('.cardgallery_item img');
const lightbox = document.querySelector('.lightbox');
const cardlightbox = document.querySelector('.cardlightbox');
const lightboxvideo = document.querySelector('.videolightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const cardlightboxImg = document.querySelector('.cardlightbox_img');
const lightboxVideoSrc = document.querySelector('.lightbox-video');
const lightboxCloseBtn = document.querySelector('.lightbox_close');
const cardlightboxCloseBtn = document.querySelector('.cardlightbox_close');
const videolightboxCloseBtn = document.querySelector('.videolightbox_close');
const flipbooklightboxCloseBtn = document.querySelector('.lightboxflipbook_close')
const lightboxCaption = document.querySelector('.lightbox_caption');
const lightboxData = document.querySelector('.lightbox_data');
const lightboxSkills = document.querySelector('.lightbox_skills');

const lightboxflipbook = document.querySelector('.lightboxflipbook')
const openFlipbook = document.querySelector('.flipbookbutton')
const flipbooklightbox_close = document.querySelector('.lightboxflipbook');


/*===== 01) Gallery Filtering functionality =====*/

galleryTabs.forEach((currTab) => {
    currTab.addEventListener('click', (e) => {

        // removing the existing 'active' class from the tabs.
        e.target.parentElement.querySelector('.active').classList.remove('active');

        // adding the 'active' class to the currently clicked tab.
        e.target.classList.add('active');


        let filterValue = e.target.getAttribute('data-filter');

        galleryItems.forEach((currItem) => {
            if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
                currItem.classList.remove('hide');
                currItem.classList.add('show');
            }
            else {
                currItem.classList.remove('show');
                currItem.classList.add('hide');
            }
        });

    });
});



/*===== 02) Lightbox functionality =====*/

galleryImgs.forEach((currImg) => {
    currImg.addEventListener('click', (e) => {

        let imgSrc = e.target.getAttribute('src');
        let imgCapt = e.target.getAttribute('alt');
        let imgData = e.target.getAttribute('image-data');
        let imgSkills = e.target.getAttribute('class');

        lightboxImg.setAttribute('src', imgSrc);
        lightboxCaption.innerHTML = (imgCapt);
        lightboxData.innerHTML = (imgData);
        lightboxSkills.className = (imgSkills)

        lightbox.classList.add('open');
        body.classList.add('overflow_hide');

    });
});

cardgalleryImgs.forEach((currImg) => {
    currImg.addEventListener('click', (e) => {

        let cardimgSrc = e.target.getAttribute('src');

        cardlightboxImg.setAttribute('src',cardimgSrc);

        cardlightbox.classList.add('open');
        body.classList.add('overflow_hide');
    });
});

galleryVideos.forEach((currVideo) => {
    currVideo.addEventListener('click', (e) => {

        let videoSrc = e.target.getAttribute('href');

        lightboxVideoSrc.setAttribute('src',videoSrc);

        lightboxvideo.classList.add('open');
        body.classList.add('overflow_hide');
    });
});

openFlipbook.addEventListener('click', (e) => {   
    lightboxflipbook.classList.add('open');
    body.classList.add('overflow_hide');
});

// Function for closing the Lightbox
const lightboxClose = () => {
    lightbox.classList.remove('open');
    body.classList.remove('overflow_hide');
};

const cardlightboxClose = () => {
    cardlightbox.classList.remove('open');
    body.classList.remove('overflow_hide');
};

const videolightboxClose = () => {
    lightboxflipbook.classList.remove('open');
    body.classList.remove('overflow_hide');
};

const flipbooklightboxClose = () => {
    flipbooklightbox_close.classList.remove('open');
    body.classList.remove('overflow_hide');
};


// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener('click', lightboxClose);
cardlightboxCloseBtn.addEventListener('click', cardlightboxClose);
videolightboxCloseBtn.addEventListener('click', videolightboxClose);
flipbooklightboxCloseBtn.addEventListener('click', flipbooklightboxClose);

// closing the lightbox on clicking outside of it.
window.addEventListener('click', (e) => {
    if (e.target.className === 'lightbox_wrapper') {
        lightboxClose();
        cardlightboxClose();
        videolightboxClose();
        flipbooklightboxClose();
    }
});


// closing the lightbox on pressing the Escape key.
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightboxClose();
        cardlightboxClose();
        videolightboxClose();
        flipbooklightboxClose();
    }
});