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

        project.forEach(element => {

            element.addEventListener('click', () => {

                modal.style.display = "flex";

                querySelector('.close-modal').addEventListener('click', () => {

                    modal.style.display = "none";

                });
            });
        });
    }
}