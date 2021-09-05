async function search() {
	const name = document.getElementById('name').value;
//const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)

const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
const data1 = await data.json()
console.log(data1)


if(data1.meals){
data1.meals.forEach(meal => {
 
 let div = document.getElementById('data');

 let p = document.createElement('img')
 p.src = `${meal.strMealThumb}`

 let name = document.createElement('p');
 name.innerText=`${meal.strMeal}`

 div.append(p,name);

	



	
})


 }
}
 