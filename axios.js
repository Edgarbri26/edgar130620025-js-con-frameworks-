function enviarIMG() {
    const formData = new FormData();
    const imgInput = document.getElementById("img");
    formData.append("img", imgInput.files[0]);

    axios.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then(response => {
        console.log("Imagen enviada con éxito:", response.data);
    })
    .catch(error => {
        console.error("Error al enviar la imagen:", error);
    });
}
document.getElementById("uploadButton").addEventListener("click", enviarIMG);