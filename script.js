// TANGGAL & WAKTU
function tampilWaktu() {
    const waktu = new Date();

    const tanggal = waktu.getDate();
    const bulan = waktu.getMonth();
    const tahun = waktu.getFullYear();
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const detik = waktu.getSeconds();

    const arrBulan = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];

    const tanggal_full = tanggal + " " + arrBulan[bulan] + " " + tahun;
    const jam_full = jam + ":" + menit + ":" + detik;

    document.getElementById("tanggal").innerHTML = tanggal_full;
    document.getElementById("jam").innerHTML = jam_full;
}

tampilWaktu();
setInterval(tampilWaktu, 1000);



// BACK TO TOp

const backToTop = document.getElementById("BacktoTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.remove("d-none");
        backToTop.classList.add("d-block");
    } else {
        backToTop.classList.remove("d-block");
        backToTop.classList.add("d-none");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// THEME SWITCHER
// Dark Theme
function darkTheme() {
    document.body.setAttribute("data-bs-theme", "dark");

    const section = document.querySelectorAll("section");

    section.forEach(function (item) {
        item.classList.remove("bg-danger-subtle");
        item.classList.add("bg-dark");
    });
}

// Light Theme
function lightTheme() {
    document.body.setAttribute("data-bs-theme", "light");

    const section = document.querySelectorAll("section");

    section.forEach(function (item) {
        item.classList.remove("bg-dark");
    });

    document.getElementById("hero").classList.add("bg-danger-subtle");
    document.getElementById("gallery").classList.add("bg-danger-subtle");
    document.getElementById("profile").classList.add("bg-danger-subtle");
}