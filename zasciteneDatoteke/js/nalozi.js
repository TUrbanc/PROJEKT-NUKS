document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('naloziDatoteko').addEventListener('submit', naloziDatoteko);
    document.getElementById('naloziMapo').addEventListener('submit', naloziMapo);
});

function naloziDatoteko(e) {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    
    fetch('/naloziDatoteko', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            setTimeout(() => location.reload(), 500);
        }
    })
}

function naloziMapo(e) {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    
    fetch('/naloziMapo', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            setTimeout(() => location.reload(), 1500);
        }
    })
}

