unirest.get("https://bitflip.p.rapidapi.com/{cep}.json")
.header("X-RapidAPI-Host", "bitflip.p.rapidapi.com")
.header("X-RapidAPI-Key", "0fcb63b8edmsh6fada2b039fcbb6p158205jsn2eea62f23b97")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});