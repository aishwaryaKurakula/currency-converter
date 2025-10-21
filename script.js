class currencyConverter{
    constructor(){
        this.apikey='98dc7ce14e5c00cda475b1b1';
         this.baseURL = 'https://v6.exchangerate-api.com/v6';
         this.currencies=this.getCurrecyData();
         this.history=JSON.parse(localStorage.getItem('conversionHistory'))||[];
         this.init();
    }
}
