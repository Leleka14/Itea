const user = {
	name: 'Oleh',
	age: 18
}

const user2 = {
	surname: 'Deneka'
}

user.__proto__ = user2


let fruits = {
  apple: 3,
  lemon: 0,
  bananas: 5,
  pineapple: 0
};

let vegetables = {
  potato: 2,
  tomato: 1,
  carrot: 0
}
Object.setPrototypeOf(fruits, vegetables)

let sortedFruits = Object.create(null)
for(let key in fruits){
	if (fruits[key] > 0){
		sortedFruits[key] = fruits[key]
	}
}

console.log(sortedFruits)
