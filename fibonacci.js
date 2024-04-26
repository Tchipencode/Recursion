#!/usr/bin/env node

function fibs(n){
   let a=0;
   let b=1;
   let r=[a,b];
   for(let i=1; i<n; i++){
      let c=a+b;
      a=b;
      b=c;
      r.push(c);
   }
   return r;
}
console.log(fibs(5));

function fibsRec(n){
   if(n<2){
      return [0,1];
   } else{
      let r= fibsRec(n-1);
      r.push(r[n-1]+r[n-2]);   
      return r;
   }  
}
console.log(fibsRec(5));;
