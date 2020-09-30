new Vue({
    el: '#app',
    data:{
        firstNum: 0,
        secondNum: 0,
        square: 0,
    },
    methods:{
        sqrt: function(event) {
            this.square = Math.sqrt(event.target.value);
        },
        sqrt4: function() {
            return this.square ** 1/2;
        },
        reset: function() {
            this.firstNum = 0;
            this.secondNum = 0;
        }
    }
})