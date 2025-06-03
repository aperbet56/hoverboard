// Récupération de l'élément HTML5
const container = document.querySelector(".container");

// Création des constantes colors et squares
const colors = ["#ff0000", "#b300ff", "#0099ff", "#ff7700", "#ffd700"];
const squares = 100;

// Déxlaration de la fonction getRandomColor qui va permettre d'obtenir une color aléatoire
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

// Déclaration de la fonction setColor qui va permettre de colorier les carrés
const setColor = (square) => {
  const color = getRandomColor(); // Appel de la fonction getRandomColor
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// Déclaration de la fonction removeColor qui va permettre de retirer la couleur des carrés
const removeColor = (square) => {
  square.style.background = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000000";
};

// Boucle for qui va parcourir tous les carrés
for (let i = 0; i < squares; i++) {
  // Création d'un élément HTML5 <div>
  const square = document.createElement("div");
  // Ajout de la classe square
  square.classList.add("square");

  // Ecoute de l'événement "mouseover" sur la div square et appel de la fonction setColor
  square.addEventListener("mouseover", () => setColor(square));

  // Ecoute de l'événement "mouseout" sur la div square et appel de la fonction removeColor
  square.addEventListener("mouseout", () => removeColor(square));

  // Ajout de la div crée dans le DOM
  container.appendChild(square);
}
