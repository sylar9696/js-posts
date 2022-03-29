/*
MIlestone 1:
Creiamo il nostro array di oggetti che rappresentano ciascun post.

Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.

Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
*/

//Impostiamo un array di oggetti:
let array = [{
    'id': 1,
    'autore': {
      'nome': 'Gennaro Esposito',
      'foto': 'https://unsplash.it/300/300?image=28'
    },
    'likes': 45,
    'created': '2022-10-15',
    'media': 'https://unsplash.it/600/400?image=15',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
  {
    'id': 2,
    'autore': {
      'nome': 'Caloggero Martorana',
      'foto': 'https://unsplash.it/300/300?image=32'
    },
    'likes': 130,
    'created': '2022-10-10',
    'media': 'https://unsplash.it/600/400?image=17',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
  {
    'id': 3,
    'autore': {
      'nome': 'Renato RanaMarziana',
      'foto': 'https://unsplash.it/300/300?image=16'
    },
    'likes': 2000,
    'created': '2022-10-24',
    'media': 'https://unsplash.it/600/400?image=60',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
  {
    'id': 4,
    'autore': {
      'nome': 'Mario Maria Mario',
      'foto': null
    },
    'likes': 75,
    'created': '2022-10-26',
    'media': 'https://unsplash.it/600/400?image=5',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
  {
    'id': 5,
    'autore': {
      'nome': 'Sono Mimmo',
      'foto': 'https://unsplash.it/300/300?image=48'
    },
    'likes': 45,
    'created': '2022-10-03',
    'media': 'https://unsplash.it/600/400?image=96',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
  {
    'id': 6,
    'autore': {
      'nome': 'Dottoressa Caccavera',
      'foto': 'https://unsplash.it/300/300?image=78'
    },
    'likes': 350,
    'created': '2022-10-05',
    'media': 'https://unsplash.it/600/400?image=14',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
  },
]

/*
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/

//Come analizziamo un array di oggetti?
//Usiamo il foreach



let container = document.getElementById('containerCards');

array.forEach(
  ( element,index,array ) => {
    console.log( element); //ottengo il singolo oggetto
    //Come stampare in DOM l'elemento?
    //Usare il template literal dopo aver catturato un contenitore nell'HTML
    container.innerHTML +=
    `
      <div class="card">
        <div class="card-header">
          ${ controlloImmagine( element ) }
          <div class="card-header__autoreInfo">
            <h4>${ element.autore.nome }</h4>
            <span>${ trasformazioneData(element) }</span>
          </div>
        </div>
        <p class="card-body__content">
          ${ element.content }
        </p>
        <img src="${ element.media }" class="card-body__full" alt="immagine di sfondo post">
        <div class="card-footer">
          <button class="btn">
            <i class="fa-solid fa-thumbs-up"></i>
            Mi piace
          </button>
          <p>Piace a <span>${ element.likes }</span> persone</p>
        </div>
      </div>
    `
  }
);

/*
Bonus 1: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF)

//<img src="${ element.autore.foto }" class="card-header__img" alt="foto di ${ element.autore.nome }">
*/
function controlloImmagine(element) {
  if( element.autore.foto == null ){
    //Risposta se manca l'immagine del profilo del creatore del post
    return estrarreIniziali(element);
  } else {
    //Risposta se l'immagine dle profilo è presente
    return `<img src="${ element.autore.foto }" class="card-header__img" alt="foto di ${ element.autore.nome }">`
  }
};

function estrarreIniziali(element) {
  //Dato che manca l'immagine
  //Estrarre le iniziali del nome e del cognome dell'autore e stamparle in un cerchio colorato
  console.log( element.autore.nome );
  //Salviamo il nome in una variabile
  let nomeAutore = element.autore.nome;
  //La stringa del nome e cognome viene trasformata in un array:
  let arrayNomeAutore = nomeAutore.split(' ');
  console.log( arrayNomeAutore ) //arrayNomeAutore: ['Mario', 'Maria', 'Mario']

  //Ottenere le iniziali delle 3 parole dell'array
  //Creiamo un array vuoto che conterrà le iniziali date dal foreach
  let arrayInizialiAutore = [] //arrayInizialiAutore: ['M', 'M', 'M']
  // let stringaInizialiAutore = ''

  //Inizio foreach su array di 3 parole
  arrayNomeAutore.forEach(
    (element)=>{
      //Otteniamo l'iniziale con la sintassi element[0]
      let iniziale = element[0];
      // stringaInizialiAutore += iniziali
      arrayInizialiAutore.push( iniziale );
    }
  )
  console.log( arrayInizialiAutore)

  //Trasformiamo l'array di iniziali in una stringa unica: 'MMM'
  let stringaJoinIniziali = arrayInizialiAutore.join('');

  console.log( stringaJoinIniziali )

  // console.log( stringaInizialiAutore )

  return `<div class="card-header__img-circle">
            <span>${stringaJoinIniziali}</span>
          </div>`
}

//bonus 2: Formattare le date in formato italiano (gg/mm/aaaa)
function trasformazioneData(element){
  let dataAmericana = element.created;
  let dataItaliana = dataAmericana.split('-').reverse().join('-');
  console.log(dataItaliana);
  return `<span>${dataItaliana}</span>`
}

/*
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

Bonus 3: Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/
