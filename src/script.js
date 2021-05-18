// ASCII [65-90] --> [A -Z]
// ASCII [97-122] --> [a -z]

const input = ['HackerEarth','random', 'Sarath', 'macOS', 'HarrYPotTer']

document.getElementById('h1').innerHTML = convert(input);

function convert(input){
    let result = [];
    input.forEach((str)=>{
        for(let i=0; i<str.length; i++){
            if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
                let replacement;
                (i==0) ? replacement = String.fromCharCode(str.charCodeAt(i) + 32) : replacement = '_' + String.fromCharCode(str.charCodeAt(i) + 32)
                    
                str = str.substring(0, i) + replacement + str.substring(i+1)
            }
        }
        result.push(str);
    })
    return result;
}