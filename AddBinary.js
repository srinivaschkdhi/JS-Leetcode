var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let sum = 0;

    let result = "";
    
    while(i >=0 || j >= 0){

        let x = (i >= 0) ? a.charAt(i) - '0' : 0;
        let y = (j >= 0 ) ? b.charAt(j) - '0' : 0;

        sum = carry + x + y;

        result += parseInt(sum % 2);

        carry = parseInt(sum / 2);

        i--;
        j--;
    }

    if(carry != 0)
        result += carry;


    return reverseString(result);

};

const reverseString = (str) => {
    // return str.split('').reverse().join?('');
    // return [...str].reverse().join('');
    return [...str].reduce((x, y) => y.concat(x));
}



const answer = addBinary("1010","1011");
console.log(answer);


function ReverseString(str) {
      
    // Check input
    if(!str || str.length < 2 ||
            typeof str!== 'string') {
        return 'Not valid';
    }
      
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
}