(function (e) {
  (getSelection = window.getSelection),
    (getDocSelection = document.getSelection),
    (selection = document.selection),
    (location = document.location);
  // TODO:use image
  const image = document.querySelector("#channel-header-container img").src;
  const title = document.querySelector('meta[property~="og:title"]').content;
  const text = document.querySelector(
    'meta[property~="og:description"]'
  ).content;
  const url =
    e +
    "?url=" +
    encodeURIComponent(location.href) +
    "&title=" +
    title +
    "&text=" +
    text +
    "&image=" +
    image +
    "&featured_media=" +
    image +
    "&featured=" +
    image +
    "&featured_image=" +
    image +
    "&v=5";
  const c = function () {
    window.open(
      url,
      "t",
      "toolbar=0,resizable=1,scrollbars=1,status=1,width=660,height=570"
    ) || (location.href = url);
  };
  /Firefox/.test(navigator.userAgent) ? setTimeout(c, 0) : c();
})("https://wordpress.com/post/youtubechannels.wordpress.com");
