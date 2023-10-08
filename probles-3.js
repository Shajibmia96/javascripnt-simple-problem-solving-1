function gemToDiamond (x, y, z){
    if(typeof x !== "number" || typeof x !== "number"|| typeof x !== "number"){
        return "Please provides a valid number"
    }
     else if(x<0 || y<0 || z<0){
        return "Please provides a positive number"
     }
     else{
        const frnd1 =21;
        const frnd2 = 32;
        const frnd3 = 43;

        const total = (x*21) + (y*32) + (z*43);
        if(total >2000){
            return total-2000
        }
        else{
            return total
        }

     }
     
    

}
console.log(gemToDiamond(20,200,50));