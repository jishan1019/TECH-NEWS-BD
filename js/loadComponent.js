fetch("common/header.html")
  .then((response) => response.text())
  .then(
    (html) => (document.getElementById("headerContainer").innerHTML = html)
  );

fetch("common/footer.html")
  .then((res) => res.text())
  .then(
    (html) => (document.getElementById("footerContainer").innerHTML = html)
  );

fetch("common/sidebar.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("sidebar").innerHTML = html));
