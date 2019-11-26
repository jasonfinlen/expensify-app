//Object destructuiring
/*
const book = {
    title : 'Ego is the enemy', 
    author : 'Ryan Holiday', 
    publisher : {
        name: 'Penguin'
    }
}
console.log(book.publisher.name);

const {name : publisherName = 'Self Published'} = book.publisher;

console.log(publisherName);
*/

const address = ['27 Jindabyne Street', 'Duffy', 'ACT', '2600'];


const [, city, state = 'NSW', zip = '0000'] = address;

console.log(`You are in ${city} , ${state} with ${zip}`);

const item = ['Coffee (hot)','$3:50', ,'$4:50' ];

const [drink, ,cost = '$6:00' ] = item;
console.log(`You are drinking a large ${drink} which will cost ${cost}`)

