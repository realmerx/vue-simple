Vue.component('media-list', {
    template: '#media-list',
    props: ['medias']
});

new Vue({
    data: {
        medias: null
    },
    el: '#app',
    created: function () {
        axios.get('http://www.mocky.io/v2/5bf4909c310000f928619d6e').then((response) => {
            this.medias = response.data.movies;
        });    
    }
});
