fetch('head.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('head').innerHTML = html;
  });
  