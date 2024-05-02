const form = document.querySelector('form');
const rollnoInput = document.querySelector('#rollno');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  const rollno = rollnoInput.value.trim();
  const pdfUrl = `/certificates/${rollno}.pdf`; // assuming PDF files are in /certificates folder

  // redirect to the PDF file
  window.location.href = pdfUrl;
});