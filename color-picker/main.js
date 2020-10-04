new Vue({
    el: '#app',
    data:{
        headerHTML: '<h1>Color Picker</h1>',
        invsibileStyle: 'display: none',
        visibleStyle: 'display: inherit',
        buttonDesc: 'About application',
        contentOfInfoSection: '<span>Drawing pixel images. <br />Version 0.1 <br /> Author: <a href="http://www.cecherz.pl">Kamil Cecherz</a><span>'
    },
    methods:{
        draw: function(event, stance) {
            if(stance == undefined) {
                event.target.classList.toggle('red');
            }
        },
        showInfoHiddenButton: function() {
            this.invsibileStyle = this.visibleStyle;
            this.visibleStyle = 'display: none';
        },
        hiddenInfoShowButton: function() {
            this.invsibileStyle = 'display: none';
            this.visibleStyle = 'display: inherit';
        },
        reset: function() {
            window.location.reload();
        }
    }    
})