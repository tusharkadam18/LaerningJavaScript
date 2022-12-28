function vowelsAndConsonants(s) {
    let x = [];
    for(let i =0 ; i<s.length;i++){
        if(s.charAt(i)=='a'){
            x.push(s.charAt(i))
        }
        if(s.charAt(i)=='e'){
            x.push(s.charAt(i))
        }
        if(s.charAt(i)=='i'){
            x.push(s.charAt(i))
        }
        if(s.charAt(i)=='o'){
            x.push(s.charAt(i))
        }
        if(s.charAt(i)=='u'){
            x.push(s.charAt(i))
        }
    }
    for( let i =0 ; i < s.length ;i++){
        if(!(s.charAt(i) == 'a' || s.charAt(i) == 'e' ||s.charAt(i) == 'i' ||s.charAt(i) == 'o' ||s.charAt(i) == 'u' )){
            x.push(s.charAt(i))
        }
    }
    for(let i = 0;i<x.length;i++){
        console.log(x[i])
    }
}
