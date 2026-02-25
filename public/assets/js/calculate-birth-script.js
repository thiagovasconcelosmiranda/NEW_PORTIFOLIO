(function () {

    function calculateAge(birth) {
        const today = new Date();
        const dateBirth = new Date(birth);

        let age = today.getFullYear() - dateBirth.getFullYear();
        const month = today.getMonth() - dateBirth.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < dateBirth.getDate())) {
            age--;
        }
        return age;
    }
 
    document.querySelector('.user-description span').innerHTML = calculateAge('06/05/1984')

}());
