// 1.
function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }

//   2.
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");

//   3.
function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

var payChecks = [123,155,134, 205, 105]; 
var weeklyPay= getArraySum(payChecks); //sums up to 722

// 4.
const arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];
function isPrime (n) {     
    //  const isPrime = n =>
   if (n===1){
      return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return false;
         }
      }
      return true;
   };
};


// 5.
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
function isPalindrome (el) {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
function findPalindrome(arr) {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

// 6.
function dedupUsingFilter(a) {
    const map = {};
    return a.filter(element => {
      if (map[element]) {
        return false
      } else {
        map[element] = true;
        return true;
      }
    });
  }

//   7.
var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };

  





//   using arrow function


// 1.
const printOdd=num=> {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }

  //   2.
const titleCase=str=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");

// 3.
  const getArraySum=a=>{
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

var payChecks = [123,155,134, 205, 105]; 
var weeklyPay= getArraySum(payChecks); //sums up to 722

// 4.
const arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];
const isPrime =n=> {     
    //  const isPrime = n =>
   if (n===1){
      return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return false;
         }
      }
      return true;
   };
};


// 5.
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome =el=> {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
 const findPalindrome=arr=> {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
