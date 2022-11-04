const unread = document.querySelectorAll(".unread");
const mark = document.querySelector(".mark");
const number = document.querySelector(".number");

mark.addEventListener("click", () => { // add event listener click to mark link //
  unread.forEach((message) => {       // loop through every unread messages (3 in this case) 
    message.classList.remove("unread");  // for every message remove unread class Unread message with "unread" class count is here 0//
  });
  const newUnread = document.querySelectorAll(".unread"); // select all unread message elements which is 0 //
  number.innerText = newUnread.length; // change number's innerText to newUnread.length whichis 0 //
});

unread.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");   // Same thing as the abover event listener but this time we are not removing every "unread" class with For-Each
    const newUnreadArray = document.querySelectorAll(".unread"); // We remove unread notifications with ourselves and every time we remove we get the number
    number.innerText = newUnreadArray.length; // of unread message number (3,2,1) and we change number text according to unread message count
  });
});
