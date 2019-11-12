describe("Checkout", function(){
    it("should return 50 when A entered", function(){
        let product = 'A';
        let result = checkout(product)
        expect(result).toEqual(50)
    })
    it("should return 30 when B entered", function(){
        let product = 'B';
        let result = checkout(product)
        expect(result).toEqual(30)
    })
    it("should return 20 when C entered", function(){
        let product = 'C';
        let result = checkout(product)
        expect(result).toEqual(20)
    })
    it("should return 15 when D entered", function(){
        let product = 'D';
        let result = checkout(product)
        expect(result).toEqual(15)
    })
    it("should return 100 when AA entered", function(){
        let product = 'AA';
        let result = checkout(product)
        expect(result).toEqual(100)
    })
})