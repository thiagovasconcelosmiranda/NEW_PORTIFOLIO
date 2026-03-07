(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector('body');
        const load = document.querySelector('.container-load');
        setTimeout(() => {
            load.style.display = "none";
            body.style.overflowY = "scroll";
        }, 2000);

    });
}());