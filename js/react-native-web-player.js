(function(rv) {
  var reactWebPlayerURL =
    "https://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.10.0/index.html";
  var loaded = {};

  rv.addEventListener("slidechanged", function(event) {
    var index = event.indexh + "-" + event.indexv;

    if (loaded[index]) {
      return;
    }

    loaded[index] = true;

    var slide = $(event.currentSlide);
    var iframe = slide.children("iframe.react-native-web-player");
    var source = slide.children("script");

    if (iframe.length == 0) {
      return;
    }

    var code = "";
    if (source.length > 0) {
      code = source.text();
    }

    code = code.replace(/^\n+/, "");
    str = code.match(/^[\t\s]+/g)[0];

    code = code.replace(new RegExp(str, "gi"), "");

    iframe.attr("src", reactWebPlayerURL + "#code=" + encodeURIComponent(code));
  });
})(Reveal);
