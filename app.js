const shareBtn = document.querySelector("button");

const socialWrap = document.querySelector(".social");

const avatar = document.querySelector(".avatar");

shareBtn.addEventListener("click", () => {
   console.log(123);

   socialWrap.classList.toggle("active");
});
