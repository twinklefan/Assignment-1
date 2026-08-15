// Get the modal
var modal = document.getElementById("myModal");

// get html tag
var html = document.documentElement;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
html.style.overflow = "auto";
};

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
    // stops page from scrolling when image is enlarged
    html.style.overflow = "hidden";
    // ignore hover styles
    modalImg.style.cursor = "default";
    modalImg.style.opacity = "1";
    modalImg.style.transform = "none";
    modalImg.style.boxShadow = "none";
};
}