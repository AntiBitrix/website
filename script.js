function hoverColor() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function() {
      this.style.color = "green";
    });
    links[i].addEventListener("mouseout", function() {
      this.style.color = "white";
    });
  }
}
