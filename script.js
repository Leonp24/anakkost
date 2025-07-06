// function preview image
function previewImage(element) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = element.src;
}

// function handle submit & sweetalert
function handleSubmit(e) {
    e.preventDefault(); // Stop reload

    const checkinDate = document.getElementById("checkinDate").value;

    if (!checkinDate) {
        Swal.fire({
            icon: "warning",
            title: "Tanggal belum dipilih!",
            text: "Yuk pilih dulu tanggal check-in-nya.",
        });
        return;
    }

    // Konfirmasi dulu sebelum lanjut
    Swal.fire({
        title: "Konfirmasi Pesanan",
        text: `Pesan kost dengan tanggal check-in: ${checkinDate}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya, pesan sekarang!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            // Jika user yakin → kirim pesanan
            Swal.fire({
                title: "Pesanan Terkirim!",
                text: "Kami akan segera menghubungi kamu.",
                icon: "success",
                confirmButtonText: "Cek Pesanan"
            }).then(() => {
                // Redirect ke halaman pesanan
                window.location.href = "order.html";
            });

            // Optional reset form
            document.getElementById("formPesan").reset();
        }
    });
}
