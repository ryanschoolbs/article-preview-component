const shareBtn = document.querySelector("button");

const socialWrap = document.querySelector(".social");

shareBtn.addEventListener("click", () => {
   console.log(123);

   socialWrap.classList.toggle("active");
});
