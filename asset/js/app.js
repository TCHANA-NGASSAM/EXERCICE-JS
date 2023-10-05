function afficher() {
  const select = document.getElementById("selection");
  const paragrapheActuel = select.value;
  const paragraphes = document.querySelectorAll("p");

  paragraphes.forEach((paragraphe) => {
    paragraphe.style.display = "none";
  });

  if (paragrapheActuel !== "") {
    const paragrapheAfficher = document.getElementById(paragrapheActuel);
    paragrapheAfficher.style.display = "block";
  }
}

const select = document.getElementById("selection");
select.addEventListener("change", afficher);
