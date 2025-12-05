
(function () {
    window.addEventListener('load', () => {
        const scroll = new Scroll;

        document.querySelectorAll('ul .link a').forEach(link => {

            link.addEventListener('click', (e) => {
                const activeAll = document.querySelector('.active');

                if (activeAll) {
                    activeAll.classList.remove('active');
                }

                e.target.classList.add('active');
                e.preventDefault(link);
                scroll.scrollToIdOnclick(link);
            });
        });

          

           

            document.querySelectorAll('ul .link a').forEach(item => {
                const href = item.href.split('#')[1];
                console.log(item)
                if(href)

                    observeItem(href)
                
            });

            function observeItem (href) {
               
               const section = document.querySelector(`#${href}`);
               const dataLink = document.querySelector(`.${href}`)
               console.log(section)
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
            
        
            }

           

        });
}());