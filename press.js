(function (e) {
  (getSelection = window.getSelection),
    (getDocSelection = document.getSelection),
    (selection = document.selection),
    (loc = document.location);
  const url =
      e +
      "?url=" +
      encodeURIComponent(loc.href) +
      "&title=" +
      encodeURIComponent(document.title) +
      "&text=" +
      encodeURIComponent(document.URL) +
      "&v=5",
    c = function () {
      window.open(
        url,
        "t",
        "toolbar=0,resizable=1,scrollbars=1,status=1,width=660,height=570"
      ) || (loc.href = url);
    };
  /Firefox/.test(navigator.userAgent) ? setTimeout(c, 0) : c();
})("https://wordpress.com/post/arabicyoutubechannels.wordpress.com");
