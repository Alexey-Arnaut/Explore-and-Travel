function select() {
    document.querySelectorAll('.offer__content-select').forEach(selectItem => {

        const selectBtn = selectItem.querySelector('.offer__content-btn');
        const selectList = selectItem.querySelector('.offer__content-list');
        const selectListItems = selectList.querySelectorAll('.offer__content-item');
        const selectInput = selectItem.querySelector('.offer__content-field');

        selectBtn.addEventListener('click', event => {
            event.preventDefault();

            selectList.classList.toggle('offer__content-list--active');

            selectBtn.focus();
        })

        selectListItems.forEach(selectListItem => {
            selectListItem.addEventListener('click', () => {

                selectListItems.forEach(selectListItem => {
                    selectListItem.classList.remove('offer__content-item--active');
                });
                selectListItem.classList.add('offer__content-item--active');

                selectBtn.textContent = selectListItem.textContent;

                selectList.classList.remove('offer__content-list--active');
                selectBtn.blur();

                const selectValue = selectListItem.getAttribute('data-value');

                selectInput.value = selectValue;
            });
        });

        document.addEventListener('click', event => {
            if (event.target != selectBtn) {
                selectBtn.blur();
                selectList.classList.remove('offer__content-list--active');
            };
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Tab' || event.key === 'Escape') {
                selectBtn.blur();
                selectList.classList.remove('offer__content-list--active');
            };
        });
    });
};

function navigation() {

    const links = document.querySelectorAll('.link');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header__menu');
    const html = document.querySelector('html');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            menu.classList.remove('header__menu--active');
            header.classList.remove('header--active');
            html.style.overflow = 'visible';

            const href = link.getAttribute('href');

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });
    });

    window.onscroll = () => {
        if (pageYOffset > 200) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        };
    };
    menu.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active');
        header.classList.toggle('header--active');

        if (menu.classList.contains('header__menu--active')) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = 'visible';
        };
    });
};

function slider() {

    const sliderLine = document.querySelector('.testimonials__slider-line');
    let itemWidth = document.querySelector('.testimonials__slider-item').offsetWidth;
    const items = document.querySelectorAll('.testimonials__slider-item').length - 1;
    const buttonPrev = document.querySelector('.button-prev');
    const buttonNext = document.querySelector('.button-next');
    let position = 0;

    buttonNext.addEventListener('click', () => {

        position = position + itemWidth;

        if(position > items * itemWidth) {
            position = 0;
        };

        sliderLine.style.left = -position + 'px';
    });

    buttonPrev.addEventListener('click', () => {
        position = position - itemWidth;

        if(position < 0) {
            position = items * itemWidth;
        };
        sliderLine.style.left = -position + 'px';
    });

};

select();
navigation();
slider();
window.addEventListener('resize', slider);