// task 2 

// function pythagoreanTriplet(a,b,c){
    // let n=0
    // if(a<b && b<c){n=a*a+b*b}
    // else if(a<c && c<b){n=a*a+c*c}
    // else if(b<a && a<c){n=b*b+a*a}
    // else if(c<a && a<b){n=c*c+a*a}
    // else if(c<b && b<a){n=c*c+b*b}
    // else if(b<c && c<a){n=c*c+b*b}

    // let x=Math.max(a,b,c)
    // return n==x*x

//     let min=Math.min(a,b,c)
//     let max=Math.max(a,b,c)
//     let min1=(a+b+c)-min-max
//     return (min*min)+(min1*min1)==max*max


// }
// console.log(pythagoreanTriplet(3,4,5)); 
// console.log(pythagoreanTriplet(13,5,12));
// console.log(pythagoreanTriplet(1,2,3));

// task 3 
// let c=0
// function sumDigits(a,b){
//    for(let i=a;i<=b;i++){
//      c+=i%10
//      c+=Math.floor(i/10)
     
//    }
//    return c
       
// }
// console.log(sumDigits(10,12));


// function programmer(a,b,c) {
//   let d=Math.max(a,b,c)
//   let f=Math.min(a,b,c)

//   return d-f

    //  if(a<b && b<c){return c-a}
    // else if(a<c && c<b){return b-a}
    // else if(b<a && a<c){return c-b}
    // else if(c<a && a<b){return b-c}
    // else if(c<b && b<a){return a-c}
    // else if(b<c && c<a){return a-b}
  

// }
// console.log(programmer(147, 33, 526));

// function afterNmonth(a,b){

   
//     return Math.floor(a+b/12)
// }
// console.log(afterNmonth(1832,4));

// function gcd(a, b)
// {
// if (b == 0)
//     return a;
// return gcd(b, a % b);
// }

 
// function lcm(a, b){

//     return (a*b)/gcd(a,b)
// }
// console.log(lcm(14,28));



// function gcd(a,b,c=Math.max(a,b)){
//      if(a%c==0 && b%c==0) {
//         return c
//      }
//      return gcd(a,b,c-1)
   
   
// }
// function lcm(a,b){

//     return (a*b)/gcd(a,b)
// }

// console.log(lcm(5,10));

// function rev(n){
//     let a=n-3
//   return Math.ceil(a/2)+1
// }
// console.log(rev(2));



// function digit(n){
//     let sum=0
//     for(let i=1;i<n;i++){
//         if(i<10){
//             sum+=1
//         }
//         else if(i>10 && i<101){
//                    sum+=2
//         }
//     }
//     return sum
// }
// console.log(digit(100));


// function add(a,b){
//    if(b==1){
//     return a
//    }
//    return a+add(a,b-1)
// }
// console.log(add("ab",3));

// function string(n){
//    let a=''
//    for(let i=0;i<n.length;i++){
//     if(n[i]=="a"){
//         a+="5"
//     }
//    else  if(n[i]=="e"){
//         a+="3"
//     }
//    else  if(n[i]=="i"){
//         a+="1"
//     }
//    else if(n[i]=="o"){
//         a+="0"
//     }
//     else if(n[i]=="i"){
//         a+="5"
//     }
//     else {
//         a+=n[i]
//     }
// }
// return a

// }
// console.log(string("Javascript is cool"));

// function combination(...n){
//     let b=1
//     for(let i=0;i<n.length;i++){
//        b*=n[i]
//     }
//     return b
// }
// console.log(combination(3,7,4));

                                              //   Class work for 22.03.2023

// task1 

// function giveMeSomething(str){
//     let str1="Something"
//     let a=str1.concat(" ",str)
//     return a
// }
// console.log(giveMeSomething("Bob John"));

// function nameStr(n){
//     let str="Edabit"
//     let str1=n.concat(str)
//     return str1

// }
// console.log(nameStr("Mubashir")); 

// function comp(a,b){
//     return a.length==b.length
// }
// console.log(comp("AB","CD"));

// function empty(a){
//      return a.length==0
// }
// console.log(empty(""));

// function toString(n){
//    let a=n.split().join('')
//    return a
// }
// console.log(toString("6"));

// function boolToString(n){
//     let str=n.toString()
//     return str
// }
// console.log(boolToString(true));

// function concateName(a,b){
//     let str=b.concat(",",a)
//     let str1= str.toString()
//     return typeof(str1)
// }
// console.log(concateName("John","Doe"));

// function oddOrEven(n){
//     let a=n.length
//     return a%2==0

// }
// console.log(oddOrEven("apples"));

// function newWord(n){
//   let str=n.substring(1)
//   return str
// }
// console.log(newWord("apple"));

// function isLastCharacter(n){
//       let str=n.charAt(n.length-1)
//       return str=="n"
// }
// console.log(isLastCharacter("Man"));

// function repeatStr(a,b){
//     let d=0
//     if(a==a.toString()){

//         d=a.repeat(b)
        
//     }
//     else{
//         return "Not A String"
//     }

//     return d

// }
// console.log(repeatStr("Mubashir",2));

// function firstLast(n){

//     let str=n.charAt(0)
//     let str1=n.charAt(n.length-1)
//     let str3=str.concat(str1)
//     return str3
// }
// console.log(firstLast("kivi"));

// function hskerSpeak(str){
//    let a=str.replaceAll("a",4).replaceAll("e",3).replaceAll("i",1).replaceAll("o",0).replaceAll("s",5)
//    return a

// }
// console.log(hskerSpeak("Javascript is cool"));

// function modifyLast(a,b){
//    let str=a.charAt(a.length-1).repeat(b-1)
//    return a+str
// }
// console.log(modifyLast("whato",2));

// function charCount(a,b){
//     let cnt=0
//    for(let i=0;i<=b.length;i++){
//        if(b[i]==a){
//       cnt++;
//        }
//     }
//     return cnt
// }
// console.log(charCount("c","Charter is critic")); 

// function doubleChar(n){
//    let a=""
//    for(let i=0;i<n.length;i++){
//       a+=n[i]+n[i]
//    }
//    return a
// }
// console.log(doubleChar("String"));

// function sayHelloBye(a,b){
//      if(b==1){
//       b="Hello"

//      }
//      else{
//         b= "Bye"
//      }
//      let str=a.charAt(0).toUpperCase()+a.substring(1)
//      return b.concat(" ",str)
// }
// console.log(sayHelloBye("alon",0));

// function reverseCase(n){
//     let s=" "
//     for(let i=0;i<n.length;i++)
//     {
//         if(n[i]==n[i].toLowerCase()){
//             s+=n[i].toUpperCase()
//         }
//         else if(n[i]==n[i].toUpperCase()){
//             s+=n[i].toLowerCase()
//         }
//     }
//     return s
// }
// console.log(reverseCase("HAPPY"));

// function findNemo(n){
//     let a=n.indexOf("Nemo")
//     return `I find Nemo at ${a} !`

// }
// console.log(findNemo("I Nemo am"));

// function countVowel(n){
//     let cnt=0
//         for(let i=0;i<=n.length;i++){
//              if(n[i]=="a" || n[i]=="e" || n[i]=="i" || n[i]=="o" || n[i]=="y" || n[i]=="u") {
//                   cnt++
//              } 
//             }
//             return cnt
// }

// console.log(countVowel("Celebration"));

// function potatoes(n){
//     return n.split("potato").length-1

// }
// console.log(potatoes("potatopotato"));

// function capitalize(n){
//    let c=n.split(' ')
//    let f=''
//    let b=0
//     for(let i=0;i<c.length;i++){
//         b=c[i]
//         f+=b[0].toUpperCase()
//         f+=b.slice(1)+" "
//     }
//     return f
// }
// console.log(capitalize("this is a titlle"));

// function dashed(n){
//     let a=''
//     let b="-"
//    for(let i=0;i<n.length;i++){
//       if(n[i]=="a" || n[i]=="e" || n[i]=="i" || n[i]=="o" || n[i]=="u" || n[i]=="A" || n[i]=="E" || n[i]=="I" || n[i]=="O" || n[i]=="U") {
//         a+=b+n[i]+b
//       }
//        else{
//         a+=n[i]
//        }
//     }
//     return a
// }
// console.log(dashed("Edabit"));

// function reverseWord(n){
//    return n.split(' ').reverse().join(' ')
   
// }
// console.log(reverseWord("the sky is blue"));

// function capToFront(n){
//     let b=""
//     for(let i=0;i<n.length;i++){
//         if(n[i]==n[i].toUpperCase()){
//            b+=n[i]
//         }
        
//     }
//     for(let i=0;i<n.length;i++){
//         if(n[i]==n[i].toLowerCase()){
//            b+=n[i]
//         }
        
//     }
//     return b
    
// }
// console.log(capToFront("leAPP"));

// function reverceOddAndEven(a) {
//         let b= a.split(" ");
//         let c = ''
//         for(let i=0;i<b.length;i++ ) {
//             if(b[i].length%2==0) {
//                  c+=b[i]+" "
//             }
//             else if(b[i].length%2!=0)
//             {
//                  c+=b[i].split('').reverse().join('')+" ";
//             }
//         }
//             return c
//     }
//     console.log(reverceOddAndEven("One two three four"));


// function firstRepeat(n){
    
//     for(let i=0;i<n.length;i++){
//        for(let j=i+1;j<n.length;j++){
//         if(n[i]==n[j]){
//             return n[i]
            
//             }
        
//         }
//    }
//              return "-1"
// }

// console.log(firstRepeat("oicgl"));

            // class work for array 23.03.2023

// function getFirstValue(n){
//     let arr=n.join('')
//     return arr
// }
// console.log(getFirstValue([1,2,3,"segg"]));

// function valueAt(n,a){
//        return n.find((c)=>{
//           return n[c-1]>a
//        })
// }
// console.log(valueAt([1,2,3,4,5,6],6.5324/2));

// function concat(a,b){
//     return a.concat(b)
// }
// console.log(concat([1,2,3],[4,5,6]));

// function findIndex(arr,b){
//       return arr.indexOf(b)
// }
// console.log(findIndex(["abc","sdr","kdgl"],"sdr"));

// function arrayValues(arr){
//      return arr.map((e)=>{
//         return typeof(e)
//      })
// }
// console.log(arrayValues([1,2,"null",[]]));

// function parseArray(n){
//      return n.map((e)=>{
//         return e.toString()
//      })
// }
// console.log(parseArray([1,2,"a","g"]));

// function lengthOfValue(n){
//     return n.map((e)=>{
//         return e.length
//     })
// }
// console.log(lengthOfValue(["hello","world"]));

// function filterArray(n){
//     return n.filter((e)=>{
//           return typeof(e)=="number"
//     })
// }
// console.log(filterArray([1,5,"s","r",6]));

// function countTrue(n){
    
//     let b= n.filter((e)=>{
       
//        return e==true
//     })
//     return b.length
    
    
// }
// console.log(countTrue([true,false,true,false,false]));

// function sortEl(n){
//     let arr =n.sort((a,b)=>{
//         return b-a
//     })
//     return arr.slice(1,2)
// }
// console.log(sortEl([12,54,23,78]));

// function marathon(n){
//     let arr= n.reduce((a,b)=>{
//         return a+b
//     })
//     return arr>25
// }
// console.log(marathon([1,2,3,4]));

                            //   class work for 24.03.2023

// function sevenBoom(n){
//     let b=n.join().split('')
//     let c=b.find((e)=>{
//         if(e==7){
//             return e
//         }
//     })
//     if(c==7){
//         return "Boom"
//     }
//     else{
//         return "Relax"
//     }

// }
// console.log(sevenBoom([1,2,3,4,57]));

// function dublicateNum(n){
//        let c= n.filter((a,b)=>{
//         return n.indexOf(a)!=b
//        })
//        let sort=c.sort((a,b)=>{
//            return a-b
//        })
//        return sort.length>0 ? sort : "null"
// }
// console.log(dublicateNum([1,2,5,2,4,1,3]));

// function compact(arr){
//    return arr.filter((a)=>{
//         return a!=false && a!=0 && a!="" && a!=null && a!=undefined })
// }
// console.log(compact([0,1,false,2,"",3])); 
// function concatt(...arr){

//  return [].concat(...arr)
     
// }
// console.log(concatt([1,2,3],[1,2],[0,2,0,1]));

// function numberSum(n){
//      let a= n.filter((e)=>{
//           return typeof(e)=="number"
//      })
//      return a.reduce((c,b)=>{
//         return c+b
//      })
     

// }
// console.log(numberSum([1,2,"45","87"]));

// function totalValue(...arr){
//     let n=arr.map((e)=>{
//         return e.reduce((a,b)=>{
//             return a*b
//         })
//     })
//     return n.reduce((f,d)=>{
//         return f+d
//     })

// }
// console.log(totalValue([2,2,2],[2,1,1]));

// function isSpecialArray(n){
//       return n.filter((a,b)=>{
//           return a%2==0 && b%2==0 ? true : false
//       })

// }
// console.log(isSpecialArray([2,7,4,9,6,1,6,3]));

// function indexMultipfly(n){
//   let a=n.map((e,i)=>{
//      return e*i
//   })
//   return a.reduce((a,b)=>{
//     return a+b
//   })

// }
// console.log(indexMultipfly([1,2,3,4,5]));

// function mirror(n){
//     let b=[...n]
//     let a=b.reverse()
//     return n.concat(a.slice(1))
// }
// console.log(mirror([0,2,3,4,5]));

// function sortByLength(n){
//   return n.sort((a,b)=>{
//     return a.length-b.length
//   })
// }   
// console.log(sortByLength(["pie","bb","apple","dddd"]))