$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Liquid Staking Tokens",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["Mev",     `<a href="mev"       >ETH</a>`,      "ETH",       "https://www.mev.io" ]
    ].reverse()
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
