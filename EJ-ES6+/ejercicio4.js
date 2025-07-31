/*4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filteredAges = ages.filter(number => number > 18);
console.log(filteredAges);


/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pairAges = ages1.filter( age => age % 2===0)
console.log(pairAges);

/*4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolPlayers = streamers.filter(streamers => streamers.gameMorePlayed === 'League of Legends')
console.log(lolPlayers);

/*4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.*/
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const containsU = streamers1.filter(streamer => streamer.name.toLowerCase().includes('u'))
console.log(containsU);

/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.*/
const lolCapitalStreamers = streamers.filter(streamer => {
    if(streamer.gameMorePlayed.includes('Legends')){
        if(streamer.age>35){
            streamer.gameMorePlayed= streamer.gameMorePlayed.toUpperCase()
        }
        return true
    }
})
console.log(lolCapitalStreamers);
