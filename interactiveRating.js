const howDid = document.querySelector(".default");
const howDidbtns = document.querySelectorAll(".default div button");
const thank = document.querySelector(".thank-you");
const thankImg = document.querySelector(".thank-you span img");
const submit = document.querySelector('button[type="submit"]');
const rate = document.querySelector(".selected");

function thanks() {
  howDid.classList.add("d-none");
  thank.classList.remove("d-none");
  thank.style = "animation: transformate 2s ease-out;";
}

howDidbtns.forEach((rateBtn) => {
  rateBtn.addEventListener(
    "click",
    () => (rate.textContent = `You selected ${rateBtn.textContent} out of 5`)
  );
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  rate.textContent !== ""
    ? thanks()
    : alert("Please 🙏 let us know how we did.");
});

thankImg.addEventListener("click", () => {
  howDid.classList.remove("d-none");
  thank.classList.toggle("d-none");
  rate.textContent = "";
});
