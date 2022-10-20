const unread = document.querySelectorAll(".unread");
const mark = document.querySelector(".mark");
const number = document.querySelector(".number");

mark.addEventListener("click", () => {
  unread.forEach((message) => {
    message.classList.remove("unread");
  });
  const newUnread = document.querySelectorAll(".unread");
  number.innerText = newUnread.length;
});

unread.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadArray = document.querySelectorAll(".unread");
    number.innerText = newUnreadArray.length;
  });
});
