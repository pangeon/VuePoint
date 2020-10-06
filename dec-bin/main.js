new Vue({
    el: '#app',
    data:{
        firstDecParam: 0,
        secondDecParam: 0,
    },
    methods:{
        toBin: function(n){
            let binary = "";
            if (n < 0) {
              n = n >>> 0;
            }
            while(Math.ceil(n/2) > 0){
                binary = n%2 + binary;
                n = Math.floor(n/2);
            }
            return binary;
        },
        toDec: function(bstr) {
            return parseInt((bstr + '')
            .replace(/[^01]/gi, ''), 2);
        }
    },
    computed:{
        resultInBin: {
            get: function() {
                return this.toBin(parseFloat(this.firstDecParam) + parseFloat(this.secondDecParam));
            },
            set: function(result) {
                this.firstDecParam = 0; // TODO: How parse first input to decimal from binary result
                this.secondDecParam = this.toDec(result - this.firstDecParam); 
            }
        }
    }
})