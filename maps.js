
// // maps

const map = new Map()       // key value pair
map.set('IN', "India")      // unique value only
map.set("USA", "United States of Ameria")

console.log(map)

for (const key of map) {
    console.log(key)        // print map in  array form
}

for (const [key,value] of map) {
    console.log(key, ": ", value)
}   

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

// for (const [key, value] of myObj) {     // cannot iterate object
//     console.log(key, ": ", value)
// }


for (const key in map) {
    console.log(key)     //nothing happens no error or output maps are not iterable 
}
 
