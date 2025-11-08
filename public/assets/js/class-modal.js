class Modal {
    constructor() { }

    viewModal(classHtml) {
        const querySelector = (query, type = null) => {

            if (type) {
                return type.querySelector(query);
            }


            return document.querySelector(query);

        }
        const querySelectorAll = (query, type = null) => {
            if (type) {

                return type.querySelectorAll(query);
            }

            return document.querySelectorAll(query);
        }

        const project = querySelectorAll(classHtml);

        const modal = querySelector('.modal');
        const nav = querySelector('.nav-item');
        const body = querySelector('body');

        project.forEach(element => {

            element.addEventListener('click', () => {
                body.style.overflowY = 'hidden';
                modal.style.display = "flex";
                nav.style.display = "none";

                querySelector('.close-modal').addEventListener('click', () => {

                    modal.style.display = "none";
                    nav.style.display = "flex";
                    body.style.overflowY = 'scroll';

                });
            });
        });
    }
}