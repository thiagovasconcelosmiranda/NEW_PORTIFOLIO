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
                    createElementProject(item);
                } else {

                    if (item.category == category)
                        createElementProject(item);
                }
            });
        }

        function createElementProject(item) {

            const projectImage = document.createElement('div');

            projectImage.classList.add('project-image');
            projectImage.classList.add(item.classBackground);

            if (item.style !== '') {
                const list = item.style.split(' ');

                list.forEach(element => {
                    projectImage.classList.add(element)
                });
            }

            const img = document.createElement('img');

            img.src = `${item.image}`;
            if (item.category == 'app') {
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            }

            projectImage.appendChild(img);

            const divHover = document.createElement('div');

            divHover.innerHTML = item.title;

            divHover.classList.add('hover-info');
            divHover.setAttribute('id', item.id)

            img.after(divHover);

            projectHTML.appendChild(projectImage);
            itemModal(projectImage)

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


        function itemModal(project) {
            //select project
            project.addEventListener('click', (e) => {

                projects.forEach(project => {
                    const id = project.id;
                    if (e.target.id == id)
                        createElementSlider(projects, id);
                });
            });
        }

        function createElementSlider(projects, id) {
            const modal = querySelector('.modal');
            modal.style.display = "flex";
            modal.innerHTML = "";

            const projectBody = document.createElement('div');
            projectBody.classList.add('project-body');

            const closeModal = document.createElement('div');
            closeModal.classList.add('close-modal');

            const i1 = document.createElement('i');
            i1.classList.add('fa-solid');
            i1.classList.add('fa-xmark');
            closeModal.appendChild(i1);


            projectBody.appendChild(closeModal)

            const displaySlider = document.createElement('div');
            displaySlider.classList.add('display-slider');

            const sliders = document.createElement('div');
            sliders.classList.add('sliders');
            displaySlider.appendChild(sliders);

            const buttonLeft = document.createElement('div');
            buttonLeft.classList.add('button-left');
            displaySlider.appendChild(buttonLeft);
            const i5 = document.createElement('i');
            i5.classList.add('fa-solid');
            i5.classList.add('fa-angle-left');
            buttonLeft.append(i5);

            const buttonRight = document.createElement('div');
            buttonRight.classList.add('button-right');
            displaySlider.appendChild(buttonRight);
            const i6 = document.createElement('i');
            i6.classList.add('fa-solid');
            i6.classList.add('fa-angle-right');
            buttonRight.appendChild(i6);

            projects.forEach(item => {

                const sliderGroup = document.createElement('div');
                sliderGroup.classList.add('slider-group');
                sliderGroup.classList.add('row');
                sliders.appendChild(sliderGroup);

                const image = document.createElement('div');
                image.classList.add('image');

                const img = document.createElement('img');
                img.src = item.image
                image.appendChild(img);

                sliderGroup.append(image);

                const infoProject = document.createElement('div');
                infoProject.classList.add('info-project');
                image.after(infoProject);

                const projectTitle = document.createElement('div');
                projectTitle.classList.add('project-title');

                const h1 = document.createElement('h1');
                h1.innerHTML = item.title;
                projectTitle.appendChild(h1);
                infoProject.appendChild(projectTitle);

                const projectDescription = document.createElement('div');
                projectDescription.classList.add('project-description');


                const projectIcons = document.createElement('div');
                projectIcons.classList.add('protect-icons');
                item.linguas.forEach(ling => {
                    const icon = document.createElement('div');
                    icon.classList.add('icon');
                    const i4 = document.createElement('i');
                    const listLing = ling.split('/');
                    i4.classList.add(listLing[0]);
                    i4.classList.add(listLing[1]);

                    icon.appendChild(i4);
                    projectIcons.appendChild(icon);
                });

                const p = document.createElement('p');
                p.innerHTML = item.description;
                if (p.innerHTML.length >= 450) {
                    projectDescription.style.overflowY = 'scroll';
                    projectDescription.style.height = '300px';
                }

                const buttonLink = document.createElement('div');
                buttonLink.classList.add('button-link');
                buttonLink.classList.add('button-red');
                if (item.link != '') {
                    const a1 = document.createElement('a');
                    a1.href = item.link;
                    a1.innerHTML = item.title;
                    a1.setAttribute('target', '__blank');
                    buttonLink.appendChild(a1);
                }

                if (item.github !== '') {
                    const a2 = document.createElement('a');
                    a2.href = item.github;
                    a2.setAttribute('target', '__blank');
                    buttonLink.appendChild(a2);
                    a2.innerHTML = 'Acessar no github';
                }

                if (item.video != '') {
                    const a3 = document.createElement('a');
                    a3.href = `/projeto/video/${item.video}`;
                    a3.setAttribute('target', '__blank');
                    buttonLink.appendChild(a3);
                    a3.innerHTML = 'Assistir video';
                }


                projectDescription.appendChild(projectIcons);
                projectDescription.appendChild(p);
                projectDescription.appendChild(buttonLink);
                infoProject.appendChild(projectDescription);
            });

            projectBody.appendChild(displaySlider);

            modal.appendChild(projectBody);
            sliderBody(id);

            closeModal.addEventListener('click', () => {
                id = 0;
                modal.style.display = "none";
            });

            function sliderBody(id) {
                const countSlider = querySelectorAll('.slider-group', sliders).length
                sliders.style.width = `calc(100vw * ${countSlider})`;
                const sliderGroup = querySelector('.slider-group', sliders);
                let count = id;
                slider();

                buttonLeft.addEventListener('click', () => {
                    count--;
                    slider();
                });

                buttonRight.addEventListener('click', () => {
                    count++;
                    slider();
                });

                window.addEventListener('resize', slider);

                function slider() {
                    if (count > countSlider - 1) {
                        count = 0;
                    } else if (count < 0) {
                        count = countSlider - 1;
                    }
                    const clientWidth = (sliderGroup.clientWidth) + 30;

                    sliders.style.marginLeft = -clientWidth * count + 'px';
                }
            }
        }

    });
}());