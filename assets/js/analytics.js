var script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-84331973-1';
script.type = 'text/javascript';
script.async = true;
script.onload = function () {
  // Global site tag (gtag.js) - Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-84331973-1');
};

document.getElementsByTagName('body').item(0).appendChild(script);
