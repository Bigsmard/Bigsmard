function sayHi() {
  const messages = [
    "Hi there!",
    "Welcome to my website!",
    "Thanks for clicking!",
    "Enjoy your visit!",
    "You're awesome!"
  ];
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("output").textContent = messages[random];
}
