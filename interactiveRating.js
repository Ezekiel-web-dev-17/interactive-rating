const howDid = document.querySelector(".default");
const howDidbtns = document.querySelectorAll(".default div button");
const thank = document.querySelector(".thank-you");
const submit = document.querySelector('button[type="submit"]');
const rate = document.querySelector(".selected");

function thanks() {
  howDid.classList.add("d-none");
  thank.classList.remove("d-none");
}

howDidbtns.forEach((rateBtn) => {
  rateBtn.addEventListener(
    "click",
    () => (rate.textContent = `You selected ${rateBtn.textContent} out of 5`)
  );
});

// text for the empty selected class and go to thank you
submit.addEventListener("click", () => {
  // to prevent the selected class from being empty.
  rate.textContent !== ""
    ? thanks()
    : alert("Please 🙏 let us know how we did.");
});
