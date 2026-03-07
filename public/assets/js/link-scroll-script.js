
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const scroll = new Scroll;
        const links = document.querySelectorAll('.link a');

        links.forEach(link => {

            link.addEventListener('click', (e) => {
                const activeAll = document.querySelector('.active');

                if (activeAll) {
                    activeAll.classList.remove('active');
                }

                e.target.classList.add('active');
                e.preventDefault();

                scroll.scrollToIdOnclick(link);
            });
        });


        links.forEach(item => {
            const href = item.href.split('#')[1];
            if (href)
                observeItem(href);
        });

        function observeItem(href) {

            const section = document.querySelector(`#${href}`);
            const dataLink = document.querySelector(`.${href}`)

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        dataLink.classList.add('active');
                    } else {
                        dataLink.classList.remove('active');
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(section);
            let count = 1;
            document.querySelectorAll('.user-info-cards .card-item span').forEach(item => {
                count++;
                item.id = count;

                window.addEventListener('scroll', () => {
                    const position = window.scrollY;
                   
                    if (position > 708.888916015625 && position < 1426.666748046875)
                        countAnimationNumber(`#${item.id}`, parseInt(item.getAttribute('data-qtd')))

                });

            });
        }


        function countAnimationNumber(element, number) {
            $(element).prop('counter', 0).animate({
                counter: number
            }, {
                duration: 1000, // Duração da animação em milissegundos (1 segundo)
                easing: 'swing', // Tipo de suavização
                step: function (agora) { // 'agora' é o valor atual da animação
                    $(this).text(Math.ceil(agora)); // Arredonda para cima e atualiza o texto
                }
            });
        }


    });
}());