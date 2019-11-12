function checkout(product){
    let letters = {A:50, B:30, C:20, D:15}
    let letterArray = product.split('')
    let newArray =[];
    if(product.length > 0){
        letterArray.forEach(element => {
            newArray.push(letters[element])
            console.log(letters)
            console.log(newArray)
        });
        let finalAnswer =  newArray.reduce(function(sum, num){
            return sum+=num
        })
        return finalAnswer
    } 
}