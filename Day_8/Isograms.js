function isIsogram(str){
    const letterArr = str.toLowerCase().split("").map(letter => letter);
    for(i=0; i<letterArr.length-1; i++){
     for(j= i+1; j<letterArr.length; j++){
        if(letterArr[i] === letterArr[j]){
  //    console.log(`the word ${str} is not an isIsogram: `);
          return false;
     }
     } 
    } 
  //    console.log(`the word ${str} is an isIsogram: `);
       return true;  
  }
  
  const result = isIsogram("baba");
  console.log("the word is ", result);