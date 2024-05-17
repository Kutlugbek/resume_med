document.getElementById('downloadBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(document.getElementById('resume'), {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 800
    });
});
