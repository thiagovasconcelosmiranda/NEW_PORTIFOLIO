(function () {
    window.addEventListener('load', () => {
        document.querySelector('#check-option').addEventListener('click', () => {
            const ulOptions = document.querySelector('nav ul');

            if (ulOptions.classList.contains('active-option')) {
                ulOptions.classList.remove('active-option');
            } else {
                ulOptions.classList.add('active-option');
            }
        });
    });
}());
