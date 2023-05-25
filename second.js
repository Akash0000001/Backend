let product =(x,y)=>{
    return x*y
}
console.log(product(2,3))

let student={
    name:"Akash",
    marks:80,
    age:25,
    getplacement(minage,minmarks)
    {
        if(this.marks>=minmarks && this.age>=minage)
            return this.name+" is eligible for placements."
        else
            return this.name+" is not eligible for placements."    
    }
}
console.log(student.getplacement(18,40))



