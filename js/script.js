// GOAL: replicare le funzioni della todo-list viste a lezione con le seguenti caratteristiche
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio
// oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

function initVue() {

  new Vue ({

    el: ".container",

    data: {
      list: [],
      val: "",

    },

    methods:{
      addElement: function() {
        if (this.val != "")
        this.list.push(this.val);
        this.val="";
      },

      removeElement: function(indice) {

        this.list.splice(indice,1)
      }
    }
  });
}

function init() {

  initVue();
}

$(init);
