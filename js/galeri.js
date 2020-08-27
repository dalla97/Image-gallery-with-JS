const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const gbkecil = document.querySelectorAll('.kecil');

container.addEventListener('click', function (e) {
    //cek apakah yg di klik class kecil
    if (e.target.className == 'kecil') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        gbkecil.forEach(function (thumb) {
            // caa1
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            // caa 2
            thumb.className = 'kecil';
        });

        e.target.classList.add('active');
    }
});