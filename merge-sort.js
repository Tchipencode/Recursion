#!/usr/bin/env node

function mergeSort(arr){
   if(arr.length<2){
      return arr;

   } else{
      let m=Math.floor(arr.length/2);
      const leftSubArr= arr.slice(0,m);
      const rightSubArr=arr.slice(m,arr.length);
      const result= (merge(mergeSort(leftSubArr), mergeSort(rightSubArr)));
      return result;
   }  
}

function merge(left, right){
   const result=[];
   while(left.length && right.length){
      if(left[0]<=right[0]){
         result.push(left.shift());
      } else{
         result.push(right.shift());
      }
   }
   while(left.length){
      result.push(left.shift());
   }
   while (right.length){
      result.push(right.shift());
   }
   return result;
}
const arr1=[3, 2, 1, 13, 8, 5, 0, 1];
const arr2=[105, 79, 100, 110];
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
