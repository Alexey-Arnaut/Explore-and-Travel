function select() {
    document.querySelectorAll('.offer__content-select').forEach(selectItem => {

        const selectBtn = selectItem.querySelector('.offer__content-btn');
        const selectList = selectItem.querySelector('.offer__content-list');
        const selectListItems = selectList.querySelectorAll('.offer__content-item');
        const selectInput = selectItem.querySelector('.offer__content-field');
        const formButton = document.querySelector('.offer__content-button');

        formButton.addEventListener('click', event => {
            event.preventDefault();

            if(selectInput.value == 0) {
                return
            } else {
                selectInput.value = '';
                formButton.classList.add('button--active');
                selectBtn.textContent = selectBtn.getAttribute('data-name');
                
            }
        })

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

select();