
var templateSource = document.querySelector('#dtwg #template');
console.log("LOADED");
console.log(templateSource);

var app = new Vue({
    el: '#dtwg #app',
    data: {
        message: 'Hello Vue!'
    },
    template: templateSource
});

console.log(app);

