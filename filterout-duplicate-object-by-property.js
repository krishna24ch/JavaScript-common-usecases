function removeDuplicateObjectsByProp(arr, prop) {
	return arr.filter((obj, i, arr) => { 
		return arr.map(arrObj => 
			arrObj["name"]).indexOf(obj["name"]) === i})

}

// removeDuplicateObjectsByProps(arr, props) {
// 	return arr.filter((obj, i, arr) => { 
// 		return arr.map(arrObj => 
// 			arrObj["name"]).indexOf(obj["name"]) === i})
// }

const employees = [
	{
		name: "rk",
		email:"abc@gmail.com"
	},
	{
		name: "rk",
		email:"abc@gmail.com"
	},
	{
		name: "pk",
		email:"xyz@gmail.com"
	},
	{
		name: "abc",
		email:"yy@gmail.com"
	}
]

console.log(removeDuplicateObjectsByProp(employees, "name"));
