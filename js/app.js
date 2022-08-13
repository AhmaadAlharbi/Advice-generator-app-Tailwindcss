const adviceDiv = document.getElementById("advice-div");
const dice = document.getElementById("dice");

const getAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";
  //{cache: "no-cache"} ro update firefox ui
  const response = await fetch(url, { cache: "no-cache" });
  const data = await response.json();
  console.log(data.slip.advice);
  console.log(data.slip.id);
  const html = `
      <h6 class="text-neonGreen text-xl tracking-[.2em] uppercase">
                Advice #${data.slip.id}</h6>
        <h1 class="text-4xl font- my-5">
                ${data.slip.advice}
              </h1> `;

  adviceDiv.innerHTML = html;
};

dice.addEventListener("click", () => {
  getAdvice();
});
