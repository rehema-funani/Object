const people = [
    
        {name:"Alice",age:17},
         {name:"Eunice", age:22},
       {name:"Charlie",age:14},
        {name:"Maxx",age:19},
   
 ];
 function get(people){
        return people.filter(c=>c.age>18).map(c=>c.name)
        
 }
 console.log(get(people));


const products = [
        {name:"laptop",price:1200,category:"electronics"},
        {name:"Shirt",price:25,category:"clothing"},
        {name:"headphones",price:80,category:"electronics"},
         {name:"shoes",price:60,category:"clothing"}
];
 
 function getCategory(products){
       let product = Object.groupBy(products,element =>element.category)
       return product

       
 }
 console.log(getCategory(products));

 const students = [
         {name:"John",scores:[90,80,85]},
         {name:"Jane",scores:[95,92,88]},
        {name:"Jim",scores:[70,80,75]},
         {name:"Jill",scores:[85,90,84]}
];
function getAverage(students){
       return students.filter(student =>{const avg = student.scores.reduce((acc,curr) => acc+curr,) / student.scores.length;
        return avg>=85}).map(student =>student.name
       );
      
}
console.log(getAverage(students));

   const car = {
          make:"Ford",
         model:"Ranger",
         year:2023,
         displayInfo:function(){
                 console.log(`make:${this.make},Model:${this.model},Year${this.year}`)
          },
       


  }
  function methodAddition(car){
       car["age"]=(2024 - car.year)
       console.log(car)


  }
  methodAddition(car)
