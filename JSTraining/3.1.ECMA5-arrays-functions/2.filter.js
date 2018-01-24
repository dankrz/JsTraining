var orders = [
    {id:1, comapny: 'HP', value: 1000},
    {id:2, comapny: 'Microsoft', value: 2000},
    {id:3, comapny: 'BMW', value: 7000},
    {id:4, comapny: 'Honda', value: 2000},
    {id:5, comapny: 'Volvo', value: 34000},
    {id:6, comapny: 'Honda', value: 133000},
]

var hondaItems = orders.filter(function(item){
    return item.comapny === 'Honda'
});

console.log("hondaItems ids:"+hondaItems[0].id+", "+hondaItems[1].id)
console.log("hondaItems length:"+hondaItems.length);

