let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
  .then((response) => response.json()) // .json() converts json to JavaScript object.
  .then((result) => {
    let currencies = result.bpi;
    let time = result.time.updated;
    let currencyDateDiv = document.getElementById("currencyDate");
    let currencyListDiv = document.getElementById("currencyList");

    currencyDateDiv.innerHTML += `<b>BTC Price as of ${time}</b>`;

    for (let c in currencies) {
      let html = `<p>${currencies[c].code}: ${currencies[c].rate}</p>`;
      currencyListDiv.innerHTML += html;
      console.log(currencies[c]);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const getSelectedText = () => {
  return window.getSelection().toString();
};

window.onscroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    console.log(document.body.offsetHeight);
    console.log(window.innerHeight + window.pageYOffset);
  }
};

const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const isDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const removeDuplicates = (arr) => [...new Set(arr)];
