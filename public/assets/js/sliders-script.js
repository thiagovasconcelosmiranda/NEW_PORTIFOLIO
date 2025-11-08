(function () {
    window.addEventListener('load', () => {

        const querySelector = (query, type = null) => {
            if (type)
                return type.querySelector(query);

            return document.querySelector(query);
        }

        const querySelectorAll = (query, type = null) => {
            if (type)

                return type.querySelectorAll(query);

            return document.querySelectorAll(query);
        }

        const projectHTML = querySelector('.projects');

        function getProject(category = null) {
            projectHTML.innerHTML = '';

            projects.forEach(item => {

                if (!category) {
                    createElement(item);
                } else {

                    if (item.category == category)
                        createElement(item);
                }
            });
        }

        function createElement(item) {

            const div = document.createElement('div');

            div.classList.add('project-image');
            div.classList.add(item.classBackground);

            div.setAttribute('id', item.id)

            if (item.style !== '') {
                const list = item.style.split(' ');

                list.forEach(element => {
                    div.classList.add(element)
                });
            }

            const img = document.createElement('img');

            img.src = `${item.image}`;
            if (item.category == 'app') {
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            }


            div.appendChild(img);

            const divHover = document.createElement('div');

            divHover.innerHTML = item.title;

            divHover.classList.add('hover-info');

            img.after(divHover);

            projectHTML.appendChild(div);

            const modal = new Modal;

            modal.viewModal('.projects .project-image');
        }

        querySelectorAll('.buttons .button').forEach(button => {

            button.addEventListener('click', (e) => {

                const category = e.target.getAttribute('data-category');

                querySelector('.button-active').classList.remove('button-active')

                e.target.classList.add('button-active');

                if (category == 'todos') {

                    getProject();

                    return;
                }

                getProject(category);
            });
            
            getProject();
        });

        //Slider project modal
        function sliderProject() {

            const projectBody = querySelector('.project-body');
            const sliders = querySelector('.sliders', projectBody);
            const countSlider = querySelectorAll('.slider-group', sliders).length;
            sliders.style.width = `calc(100vw * ${countSlider})`;
            const sliderItem = querySelector('.slider-group');
            const buttonLeft = querySelector('.button-left', projectBody);
            const buttonRight = querySelector('.button-right', projectBody);

            let count = 0;

            buttonRight.addEventListener('click', () => {
                count++;
                slider();
            });

            buttonLeft.addEventListener('click', () => {
                count--;
                slider();
            });

            function slider() {
                if (count > countSlider - 1) {
                    count = 0;
                } else if (count < 0) {
                    count = countSlider - 1;
                }
                const widthSlider = sliderItem.clientWidth + 30;
                console.log(widthSlider)
                sliders.style.marginLeft = -widthSlider * count + 'px'
            }
        }

        sliderProject();

    });
}());