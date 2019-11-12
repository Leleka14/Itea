func = (a, b) => {
	return a + b
}

bar = (a, b) => {
	[a,b] = [b,a]
	console.log(a,b)
}