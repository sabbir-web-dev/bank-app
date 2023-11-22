const navbar = document.getElementById("home");

window.onscroll = () => {
  if(window.scrollY > 100) {
      navbar.classList.add('bg-color-primary');
      navbar.classList.add('border-b');
      navbar.classList.add('border-[red]');
      navbar.classList.add('opacity-95');
  }
  if(window.scrollY < 100) {
    navbar.classList.remove('bg-color-primary');
    navbar.classList.remove('border-b');
    navbar.classList.remove('border-[red]');
    navbar.classList.remove('opacity-95');
}
  else {
      navbar.classList.remove('bg-color-primary-dark');
      navbar.classList.remove('border-b');
      navbar.classList.remove('border-color-gray');
  }
}

//nav active
const AlLi = document.querySelectorAll("#li");
AlLi.forEach(li =>{
  li.addEventListener("click",()=>{
    AlLi.forEach(li => li.classList.remove("li-active"));

    li.classList.add("li-active");
  })
})
// nav ber
const menu = document.getElementById("menu");
const ul = document.getElementById("ul");

menu.addEventListener("click", () => {
  ul.classList.toggle(menu ? "translate-x-[1000px]" : "translate-x-0");
  console.log(ul);
  menu.classList.toggle(menu ? "fa-xmark" : "fa-xmark");
});

// review
const users = document.querySelectorAll("#user");
const userTexts = document.querySelectorAll(".user-text");

users.forEach((user, i) => {
  user.addEventListener("click", () => {
    users.forEach((user) => user.classList.remove("user-active"));
    userTexts.forEach((userText) => userText.classList.remove("text-active"));

    user.classList.add("user-active");
    userTexts[i].classList.add("text-active");
  });
});

// toggle card

const toggleBtn = document.getElementById("toggleBtn");
const toggleLabel = document.getElementById("toggleLabel");

const basicCard = document.querySelectorAll("#font-card");
const proCard = document.querySelectorAll("#back-card");

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    // Add your logic for when the checkbox is checked
    console.log("Checkbox is checked");
    proCard.forEach((card, i) => {
      card.classList.add("showCard");
      card.classList.remove("hideCard");
      basicCard[i].classList.remove("showCard");
      basicCard[i].classList.add("hideCard");
    });
  } else {
    // Add your logic for when the checkbox is unchecked
    console.log("Checkbox is unchecked");

    basicCard.forEach((card, i) => {
      card.classList.add("showCard");
      card.classList.remove("hideCard");
      proCard[i].classList.add("hideCard");
      proCard[i].classList.remove("showCard");
    });
  }
});
