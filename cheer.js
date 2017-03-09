#!/usr/bin/env node
//make file executable by adding #!/usr/bin/env node





//cheer
const first = "Phillip";
const second = "Lewis";

//object literal shorthand
const myName = {first, second}

const nodeCheer = ({first, second}) => {

  let name = `${first} ${second}`.toUpperCase();

  [...first, ...second].forEach( (letter) => {
    let conj = "aeioufhlmnrsx".includes(letter.toLowerCase()) ?  "an" : "a"
    console.log(`Gimmie ${conj} ${letter.toUpperCase()}!`);
  })

  console.log(`What's that spell?\n${name}!`)
};
nodeCheer(myName);

















//countries
let countries = ["Moldova", "Ukraine"];
let otherCountries = ["USA", "Japan"];

//object literal
const places = {countries, otherCountries}

const newCheer = ({countries, otherCountries}) => {

  let places = `${countries} ${otherCountries}`.toUpperCase();

 [...countries, ...otherCountries].forEach( (letter) => {
  let conj = "aeioufhlmnrsx".includes(letter.toLowerCase()) ? "yeah" : "the country"
  console.log(`Will I vist ${conj} ${letter.toUpperCase()}!`);
  })
 console.log(`What's country will you vist?\n${places}`)
}
newCheer(places)
