# ATELIER

Progetto settimana 6 EPICODE. Pagina dinamica a scopo pubblicitario per studio di architettura.

Tecnologie utilizzate:
- HTML;
- SASS;
-BootStrap (vs 5.6.8);

Funzioni del sito:

Navbar sticky che allo scroll diventa dello stesso colore della hero sostituendola una volta che l'utenta ha sorpassato con la header la hero section. Card con hover con effetto rilievo ed ombratura e piccolo trattino sottostante la card per ottimizzare dal punto di vista UX.

Apertura della modale con i tre migliori lavori fatti dall'agenzia sul una base dati definita di array di oggetti. Questo da la possibilità di sviluppi futuri con una pagina dedicata ai lavori effettuati renderizzata via JS.

Form che si evidenzia al focus. In fase di sviluppo validazione via JS del form.

Albero DOM:

atelier/
├── index.html
├── README.md
└── asset/
    ├── css/
    │   └── style.css
    ├── scss/
    │   ├── style.scss
    │   ├── _colors.scss
    │   ├── _shadows.scss
    │   └── _mixin.scss
    └── scripts/
        └── script.js


Come avviarlo:
Clonare la repo : git init / git clone 'https://github.com/federicosemeraro16-eng/progetto-settimana-6.git' / code .

Scelte tecniche:
Ho preferito suddividere i partials in Sass in modo tale da rendere alla fine il css di facile lettura e di breve scrittura ed in modo tale da lasciare spazio a facili sviluppi futuri tramite l'uso dei mixin e dei placeholder.

Extra applicati:

- Applicazione dinamica della classe active al click dei link della nav con guardClause su eventi fuori dal click sui li;
- Applicazione del colore dinamico della nav allo scroll al termine della hero section;
- Creazione di base dati per i lavori effettuati dall'agenzia;
- Creazione di modale scrollabile con i top 3 lavori effettuati dall'agenzia;
