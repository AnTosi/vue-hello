//dopo aver collegato html a cdn creo nuovo vue
//ci collego un elemento della dom
//creo dei data per quell'elemento
//prima inserisco il mio messaggio con i mustacchi per esercizio base
//per il bonus dopo diversi tentativi sono riuscito a rendere interattivo il tag src(mi incaponivo o a scrivere tutto l'html qua dentro Vue o a inserire il mio data dentro al src ma senza il v-bind non funzionava)

const app = new Vue({
    el: "#app",
    data: {
        title: "HelloWorld, I'm the first app in VueJS made by AnTosi!!!",
        picture: "./img/img.jpg"
    }
})
