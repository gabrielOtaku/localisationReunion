// Fonction de validation de la connexion
function validation() {
    let name = document.getElementById("nom").value;
    let password = document.getElementById("pwd").value;

    if (name === "admin" && password === "12345") {
        // Enregistrement dans le localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        window.location.href = "gestion-equipe.html";
    } else {
        alert('Le nom ou le mot de passe est invalide, veuillez réessayer!');
    }
}

// Fonction pour effacer les champs de connexion
function effacer() {
    document.getElementById("nom").value = "";
    document.getElementById("pwd").value = "";
}

// Sauvegarde les données enregistrées dans le LocalStorage
window.onload = function () {
    let savedName = localStorage.getItem("name");
    let savedPassword = localStorage.getItem("password");

    if (savedName && savedPassword) {
        document.getElementById("nom").value = savedName;
        document.getElementById("pwd").value = savedPassword;
    }
};









// Fonction pour ajouter des membres à l'équipe en fonction du nombre saisi
function AfficherPersonnages() {
    let NombrePerso = document.getElementById("nombrePerso").value; 

    let contenue = document.getElementById("contenue");

    for (let x = 1; x <= NombrePerso; x++) {
        let image = document.createElement("img");
        let info = document.createElement("div");
        let nom = document.createElement("p");
        let lat = document.createElement("p");
        let long = document.createElement("p");
        let col = document.createElement("td");
        col.id = "col" + x;
        image.id = x;
        image.src = "photos/" + x + ".png";
        image.setAttribute("class", "border border-primary rounded");
        image.setAttribute("width", "182.4");
        image.setAttribute("height", "198.6");
        info.setAttribute("class", "border border-success rounded");

        switch (x) {
            case 1:
                nom.textContent = "Trump";
                lat.textContent = "Latitude = 48.545389";
                long.textContent = "Longitude = -71.654857";
                break;
            case 2:
                nom.textContent = "Macron";
                lat.textContent = "Latitude = 48.419172";
                long.textContent = "Longitude = -71.052653";
                break;
            case 3:
                nom.textContent = "Obama"; 
                lat.textContent = "Latitude = 45.496180";
                long.textContent = "Longitude = -73.569278";
                break;
            case 4:
                nom.textContent = "Poutine";
                lat.textContent = "Latitude = 45.425198";
                long.textContent = "Longitude = -75.699824";
                break;
            case 5:
                nom.textContent = "Sylvain";
                lat.textContent = "Latitude = 48.858547";
                long.textContent = "Longitude = 2.294481";
                break;
            case 6:
                nom.textContent = "Glen";
                lat.textContent = "Latitude = 48.365120";
                long.textContent = "Longitude = -69.456032";
                break;
            case 7:
                nom.textContent = "Alexandre";
                lat.textContent = "Latitude = 48.601927";
                long.textContent = "Longitude = -72.340822";
                break;
            case 8:
                nom.textContent = "Michel";
                lat.textContent = "Latitude = 48.891933";
                long.textContent = "Longitude = -72.234483";
                break;
            case 9:
                nom.textContent = "Drake";
                lat.textContent = "Latitude = 49.278100";
                long.textContent = "Longitude = -123.154804";
                break;
            case 10:
                nom.textContent = "Patrice";
                lat.textContent = "Latitude = -18.82086";
                long.textContent = "Longitude = -15.91623";
                break;
        }
        contenue.appendChild(col);
        col.appendChild(image);
        info.appendChild(nom);
        info.appendChild(lat);
        info.appendChild(long);
        col.appendChild(info);
    }
}


// Fonction pour supprimer des personnes de l'équipe
function SuppEquipe(nombreASupprimer) {
    let conteneur = document.getElementById("nombrePerso");
    for (let i = 1; i <= nombreASupprimer; i++) {
        conteneur.removeChild(conteneur.lastChild);
        equipe.pop();
    }
}

// Fonction pour choisir un lieu de réunion aléatoire
function LieuReunion() {
    if (equipe.length > 0) {
        const lieuDeReunion = choisirLieuDeReunion();
        alert("La réunion aura lieu chez : " + lieuDeReunion);
    } else {
        alert("L'équipe est vide. Créez d'abord une équipe.");
    }
}

// Fonction pour choisir aléatoirement le lieu de la réunion parmi les membres de l'équipe
function choisirLieuDeReunion() {
    const rand = Math.floor(Math.random() * equipe.length);
    return equipe[rand].nom;
}

