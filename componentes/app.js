Vue.component('saludo',{
    template:`
    <div>
    <h1>{{mensaje}}</h1>
    <h3>Probando</h3>
    </div>
    `,
    data(){
        return {
            mensaje:'Hola Soy Vue'
        }
    }
});

