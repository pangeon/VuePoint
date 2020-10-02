new Vue({
    el: '#app',
    data:{
        headerHTML: '<h1>Color Picker</h1>',
    },
    methods:{
        draw: function(event, stance) {
            if(stance == undefined) {
                event.target.classList.toggle('red');
            }
        }
    }
})