module.exports = async (req, res) => {
  const rollno = req.query.rollno;
  const pdfUrl = `https://InoraLabs.github.com/certificates/${rollno}.pdf`;
  res.redirect(302, pdfUrl);
};
