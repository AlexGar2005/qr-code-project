let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let button = document.getElementById("button");
let error = document.getElementById("error");

function generateQR() {
    if(qrText.value) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.style.display = "block";
        imgBox.style.marginTop = '50px';
        button.style.marginTop = "50px";
        error.style.display = "none";
        qrText.classList.remove("shake");
    } else {
        imgBox.style.display = "none";
        error.style.display = "block";
        button.style.marginTop = "0";
        qrText.classList.add('shake');
        setTimeout(() => {
            qrText.classList.remove("shake");
        }, 1000);
    }
}