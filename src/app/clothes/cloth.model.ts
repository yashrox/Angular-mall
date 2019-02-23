
export class clothmodel {
    
    public brand : string ; 
    public image : string ;
    public description : string ;
    public  price : number ;
    
    constructor(  brand : string ,  image : string  ,  description : string ,  price : number ){
        this.image = image ;
        this.brand = brand ;
        this.description = description;
        this.price = price ;
    }
}