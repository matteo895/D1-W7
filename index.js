class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}.`;
    }
  }
}

// Creazione degli oggetti utente
let user1 = new User("Mario", "Rossi", 30, "Roma");
let user2 = new User("Luigi", "Verdi", 25, "Milano");

// Verifica della comparazione tra le età
console.log(user1.compareAge(user2));
