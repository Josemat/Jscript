const meses = ['enero','febrero','marzo','abril'];
console.table(meses);
// si quiero agregar un valor que no existe, se puede hacer tranquilamente
// si lo agrego a un indice lejano e inexistente, JavaScript no crea espacios en blanco
//por ejemplo:
meses[20]= 'mes inexistente';
console.table(meses);