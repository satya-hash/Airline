const nav = document.querySelector(".nav");

function scrollFunction() {
  20 < document.body.scrollTop || 20 < document.documentElement.scrollTop ? mybutton.style.display = "flex" : mybutton.style.display = "none"
}

function topFunction() {
  document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.addEventListener("scroll", function() {
  var n = this.window.pageYOffset;
  nav.getBoundingClientRect().height < n ? nav.classList.add("fixed") : nav.classList.remove("fixed")
}), mybutton = document.getElementById("myBtn"), window.onscroll = function() {
  scrollFunction()
};