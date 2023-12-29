const button = document.getElementById("btn");
button.addEventListener("mouseover", function () {
  button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener("click", function () {
  alert("you clicked me");
});

function navigateToPage() {
  // You can set the URL of the target page here
  window.location.href = "index2.html";
}
