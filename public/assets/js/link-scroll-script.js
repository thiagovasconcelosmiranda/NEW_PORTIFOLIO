(function () {
    window.addEventListener('load', () => {
        const scroll = new Scroll;

        document.querySelectorAll('nav ul a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth'
                })
                //scroll.scrollToIdOnclick(e);
            });
        });
    });
}());