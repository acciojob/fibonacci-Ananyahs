function fibonacci(num) {
// your code here
	let n1=0;
	let n2=1;
	let sum=1;
	if(num==0)
		return 0;
	if(num==1)
		return 1;
	for(let i=0;i<num-2;i++)
		{
			sum=n1+n2;
			n1=n2;
			n2=sum;
		}
	return sum;
}

module.exports = fibonacci;
