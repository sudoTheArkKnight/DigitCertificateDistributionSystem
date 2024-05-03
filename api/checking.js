module.exports = async (req, res) => {
  const rollno = req.query.rollno;
  const pdfUrl = `https://your-github-username.github.io/certificates/${rollno}.pdf`;
  res.redirect(302, pdfUrl);
};