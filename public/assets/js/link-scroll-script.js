(function () {
    window.addEventListener('load', () => {
        const scroll = new Scroll;

        document.querySelectorAll('.link a').forEach(link => {
           
            link.addEventListener('click', (e) => {
                const activeAll = document.querySelector('.active');

                if(activeAll){
                   activeAll.classList.remove('active');
                }
               
                e.target.classList.add('active');
                e.preventDefault(link);  
                scroll.scrollToIdOnclick(link);
            });
        });

        window.addEventListener('scroll', () => {
         
        })
    });
}());