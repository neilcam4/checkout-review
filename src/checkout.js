function checkout(product){
    let letters = {A:50, B:30, C:20, D:15}
    let letterArray = product.split('')
    let newArray =[];
    let countA=0
    let countB=0
    if(letterArray.length >0) {
        letterArray.forEach(element => {
            newArray.push(letters[element])
            if(element === 'A'){  
                countA++
            } if(element === 'B'){
                countB++
            } 
        });
        let finalAnswer =  newArray.reduce(function(sum, num){
            return sum+=num
        })
        return finalAnswer - (Math.floor(countA/3) * 20) - (Math.floor(countB/2) * 15)
    } 
}