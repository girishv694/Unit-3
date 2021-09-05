

async function abc(){

	let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)

	let data1 = await data.json()


	if(data1.meals)
		data1.meals.forEach(meal => {


			let div = document.getElementById('data');

 let p = document.createElement('img')
 p.src = `${meal.strMealThumb}`

 let name = document.createElement('p');
 name.innerText=`${meal.strMeal}`

 div.append(p,name);
		})
}

abc();