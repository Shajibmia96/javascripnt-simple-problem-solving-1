function findingBadData(array){
    if(!Array.isArray(array)){
        return "Please Proved a valid array of number"
    }
    else{
           let badData = 0;
           for(let i=0; i<array.length ; i++){
           if(typeof item !== "number"){
            return "Please Proved a valid array of number"
           }
           else{
              if(array[i] <0 ){
                badData++;
              }
           }
        } 
    }
}

console.log(findingBadData([32,67,86,-99,7,-4,]))