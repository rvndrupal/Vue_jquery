var app = new Vue({
    el: '.con',
    data: {
        mensaje: 'Aprende vue.js'
    },
    methods: {
        mostrarM: function() {
            return this.mensaje
                // return "Nuevo mensaje desde el metodo";
        },
        mensajeD: function() {
            return "live review-show se activa con ctrl->shif->p";
        },

    }
})