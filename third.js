const fruits=['apple', 'oranges' , '', 'mango', '', 'lemon']
const new_array= fruits.map(f=>{
    if(f=='')
        return 'empty string';
    else
        return f;
})
console.log(new_array)
const copied=[...fruits]
copied[2]="banana"
console.log(fruits,copied)
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}

console.log(obj1)
console.log(obj2)