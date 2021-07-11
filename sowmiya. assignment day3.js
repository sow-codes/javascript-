var p="dad and mom are fine" 
p=p+" "
var word=""
var revword=""
for(let k of p){
  if(k !== " "){
    word=word+k 
    revword=k+revword
  }
  else{
      if(word === revword){ 
        console.log(word)
      }
      word=""
      revword=""
    }
}
