/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    /* 
        Repeat - convert any given roman numeral to integer
        Inputs - Roman numeral symbols with given/set values
                Roman numerals are written largest to smallest from left to right
                There are 6 instances where subtraction is used
                Expecting roman numeral as string
        Pseudo Code - First define the roman numeral symbols and value as constants
                     - Iterate through the given roman numeral string and compare each iteration to the defined constants
                     - check next index to determine if it's addition or subtraction.
                     - if current index is greater than next index, addition otherwise subtraction
                     - define a totalcount variable which changes upon each iteration
    
    
    */
    
    const map1 = new Map();

    map1.set('I', 1);
    map1.set('V', 5);
    map1.set('X', 10);
    map1.set('L', 50);
    map1.set('C', 100);
    map1.set('D', 500);
    map1.set('M', 1000);
    
    let integerNum = 0;
    
    for (let i=0; i<s.length; i++) {
        let current = map1.get(s[i]);
        let nextValue = 0;
        if (i+1 < s.length) {
           nextValue = map1.get(s[i+1]); 
        }
        if (current >= nextValue) {
            integerNum += current;
        } else {
            integerNum += nextValue - current
            i++;
        }   
        
    }

    
    return integerNum;
    
};








