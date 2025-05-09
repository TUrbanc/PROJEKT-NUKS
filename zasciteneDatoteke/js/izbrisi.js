document.addEventListener('DOMContentLoaded', function () {
    const seznam = document.getElementById('seznamDatotek');
    if (!seznam) return;

    seznam.addEventListener('click', function (event) {
        const deleteBtn = event.target.closest('.delete-btn');
        if (deleteBtn) {
            const filename = deleteBtn.dataset.filename;
            if (filename) {
                izbrisiDatoteko(filename);
            }
        }
    });
});

function izbrisiDatoteko(filename) {
    fetch(`/izbrisi/${encodeURIComponent(filename)}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.status === 204) {
            if (typeof osveziSeznamDatotek === 'function') {
                osveziSeznamDatotek();
            } else {
                location.reload();
            }
        } else {
            alert('Napaka pri brisanju. Koda: ' + response.status);
        }
    })
    .catch(error => {
        alert(`Napaka pri brisanju: ${error.message}`);
    });
}
