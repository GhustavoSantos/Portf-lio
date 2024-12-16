document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");

    // Abrir modal ao clicar na imagem
    document.querySelectorAll(".certificado img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            captionText.textContent = img.getAttribute("data-caption");
        });
    });

    // Fechar modal ao clicar no botão X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora da imagem
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
