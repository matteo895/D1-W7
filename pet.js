// Definizione della classe Pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // Metodo per verificare se due animali condividono lo stesso proprietario
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// Ottenere il riferimento al form HTML e alla lista degli animali domestici
const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

// Aggiungere un event listener per l'evento di invio del form
petForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenire il comportamento predefinito del form

  // Ottenere i valori inseriti nel form
  const petName = petForm.elements.petName.value;
  const ownerName = petForm.elements.ownerName.value;
  const species = petForm.elements.species.value;
  const breed = petForm.elements.breed.value;

  // Creare un nuovo oggetto Pet con i valori inseriti
  const newPet = new Pet(petName, ownerName, species, breed);

  // Verificare se ci sono animali con lo stesso proprietario prima di aggiungere il nuovo animale
  const hasSameOwner = checkSameOwner(newPet);
  if (hasSameOwner) {
    console.log(
      "Attenzione: Questo animale condivide lo stesso proprietario di un altro animale."
    );
  }

  // Aggiungere il nuovo animale alla lista
  addPetToList(newPet);

  // Azzerare il form dopo l'invio
  petForm.reset();
});

// Funzione per aggiungere un nuovo animale alla lista HTML
function addPetToList(pet) {
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}

// Funzione per verificare se il nuovo animale condivide lo stesso proprietario con gli animali già presenti nella lista
function checkSameOwner(newPet) {
  // Creare un array di oggetti Pet basato sulla lista attuale degli animali domestici
  const allPets = Array.from(petList.children).map((li) => {
    const petInfo = li.textContent.split(", ");
    const petName = petInfo[0].split(": ")[1];
    const ownerName = petInfo[1].split(": ")[1];
    return new Pet(petName, ownerName);
  });

  // Scorrere tutti gli animali presenti nella lista e verificare se ce ne sono con lo stesso proprietario del nuovo animale
  for (const pet of allPets) {
    if (pet.hasSameOwner(newPet)) {
      return true; // Restituire true se viene trovato un animale con lo stesso proprietario
    }
  }
  return false; // Restituire false se nessun animale condivide lo stesso proprietario
}
