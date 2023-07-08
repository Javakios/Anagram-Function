// function that checks if the t input is anagram of the s input
const isAnagram  = (s,t) =>{
    // first important check is length. If its not the same length they cant be anagram
    if(s.length !== t.length) return false;
    
    // otherwise we need to make frequenty map so we can track how many times the letters are inside
    let freqMap = {};
    // loop for each letter of the s input
    for(let letter of s){
        freqMap[letter] = (freqMap[letter] || 0) +1;
    }
    console.log("FREQUENTY MAP");
    console.log(freqMap);
    // after that we loop for each letter of t and check if the letter exists as index of freqMap
    for(let tLetter of t){
        // if the currenct letter doesnt exists it means that it can not be anagram.
        if(!freqMap[tLetter] || freqMap[tLetter] === 0){
            return false;
        }else{
            // otherwise we can substract the letter 
            freqMap[tLetter]--;
        }
    }
    return true;
}



// test cases

//test case 1 
const s1 = "anagram";
const t1 = "nagaram";
console.log(isAnagram(s1,t1));
//excpected true

//test case 2
const s2 = "rat";
const t2 = "car";
console.log(isAnagram(s2,t2));
// excpected false

//test case 3
const s3 = "";
const t3 = "";
console.log(isAnagram(s3,t3));
//excpected true

// test case 4
const s4 = "a";
const t4 = "b";
console.log(isAnagram(s4,t4));
//excpected false
