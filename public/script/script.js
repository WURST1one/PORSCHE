// Modifique a função toggleMenu para incluir a funcionalidade de abrir e fechar a sidebar
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "500px";
    }
}


var closeImage = document.getElementById("close");
if (closeImage) {
    closeImage.addEventListener("click", toggleMenu);
}



var exitImage = document.getElementById("exit");
if (exitImage) {
    exitImage.addEventListener("click", closeSidebar);
}

// Função para fechar a sidebar
function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
}

