function factorial(n){
   if(n==0){
      return 1;
   }
   else{
      return(n*factorial(n-1));
   }
}

// memoization optimization
const cache={0:1};
function factorialMemoize(n){
   if(n==0){
      return 1;
   } else if(n in cache){
      return cache[n];
   } else{
      const r=n*factorial(n-1);
      cache[n]=r;
      return cache[n];
      
   }  
}
console.log(factorialMemoize(5));
console.log(cache);

