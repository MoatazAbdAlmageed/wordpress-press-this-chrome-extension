(function (e) {
  (getSelection = window.getSelection),
    (getDocSelection = document.getSelection),
    (selection = document.selection),
    (loc = document.location);
  const image = document.querySelector("#channel-header-container img").src;

  const href = encodeURIComponent(loc.href);
  const title = encodeURIComponent(document.title);
  const text = encodeURIComponent(document.URL);
  console.log("\n".repeat(5));
  console.log("************ image **************");
  console.log(image);
  const url = `${e}?url=${href}?i=${image}&title=${title}&text=${text}&v=5`;

  console.log("\n".repeat(5));
  console.log("************ url **************");
  console.log(url);
  const c = function () {
    window.open(
      url,
      "t",
      "i",
      "toolbar=0,resizable=1,scrollbars=1,status=1,width=660,height=570"
    ) || (loc.href = url);
  };
  /Firefox/.test(navigator.userAgent) ? setTimeout(c, 0) : c();
})("https://wordpress.com/post/arabicyoutubechannels.wordpress.com");
