console.log("connected");

//window.addEventListener('load', () => {
//    const imgContainer = document.querySelector('.img-container');
//    imgContainer.scrollLeft = imgContainer.scrollWidth - imgContainer.clientWidth;
//})

const menuBtn = document.querySelector('.menu-btn');
const modal = document.querySelector('.modal-window');
const infoModal = document.querySelector('.info-modal');

const closeBtn = document.querySelector('.close-btn');
const navBtns = document.querySelectorAll('.nav-btn');

const infoTitle = document.querySelector('.info-modal-title');
const infoDesc = document.querySelector('.info-modal-desc')

navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        infoTitle.textContent = 'Vsebina za točko #' + btn.id;
        infoDesc.textContent = 'Tukaj se lahko izpiše vsebina - posnetek,'
        modal.classList.toggle('hidden', true);
        infoModal.classList.toggle('hidden', false);
    });
});

menuBtn.addEventListener('click', () => {
        modal.classList.toggle('hidden', false);
});

closeBtn.addEventListener('click', () => {
    if (!modal.classList.contains('hidden')) {
        modal.classList.toggle('hidden', true);
    };
    
    if (!infoModal.classList.contains('hidden')) {
        infoModal.classList.toggle('hidden', true);
    };
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.toggle('hidden', true);
    }
});

infoModal.addEventListener('click', (e) => {
    if(e.target === infoModal) {
        infoModal.classList.toggle('hidden', true);
    }
});

