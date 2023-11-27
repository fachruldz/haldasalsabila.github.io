if (typeof Swal === 'undefined') {
    console.error('SweetAlert is not defined. Make sure the script is loaded.');
} else {
    const btnKirim = document.getElementById('btnKirim');
    btnKirim.addEventListener('click', function () {
        Swal.fire({
            title: 'Pesan Anda Terkirim',
            icon: 'success',
        });
    });
}
function showPopup() {
    Swal.fire({
        title: 'Promo Hari Ini!',
        text: 'Diskon 70% untuk pembelian di atas Rp. 1.000.000',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}