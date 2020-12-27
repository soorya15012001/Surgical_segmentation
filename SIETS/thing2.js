"use strict";
function dragNdrop(event) {
	document.getElementById("draggy").remove();
    var fileName = URL.createObjectURL(event.target.files[0]);

    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    previewImg.style.cssText = "z-index: 2; position: relative; bottom: 395px;right: 50px; border-radius: 50px; height: 350px; width:420px";

    var bor = document.getElementById("bor");
    var bImg = document.createElement("img");
    bImg.setAttribute("src", "border.png");

    preview.innerHTML = "";
    bor.innerHTML = "";
    bor.appendChild(bImg);
    preview.appendChild(previewImg);
}
function drag() {
	document.getElementById("draggy").remove();
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
	document.getElementById("draggy").remove();
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}


document.querySelector(".lever").addEventListener("change", function(){
	this.classList.remove("pristine");
	
	let ac = "aria-checked";
	this.setAttribute(ac,this.getAttribute(ac) == "true" ? "false" : "true");
});