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

        // getProject();

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

            div.setAttribute('id', item.id)

            if (item.style !== '') {

                const list = item.style.split(' ');

                list.forEach(element => {
                    div.classList.add(element)
                });
            }

            const img = document.createElement('img');

            img.src = `${item.image}`;

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

    });

}());