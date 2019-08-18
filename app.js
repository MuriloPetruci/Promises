//Promises sua principal funcionalidade é evitar o callback hell apenas para deixar o codigo mais visivel facil de entender e de dar manutenção no mesmo
//Promises são promessas algo que vai ser realizado no futuro mas não sabemos quando vai acontecer é exatamente oque acontece quando passando uma function de callback para uma função assincrona nos não sabemos quando ela vai ser executada. uma promise é um contrato estou prometendo que essa função vai executar em algum momento

var fs = require("fs"),
    Promise = require('promise');

    // função que ajuda a ler os arquivos o nome dela é read
    function read(file){
        return new Promises(function(fulfill, reject){
            fs.readFile(file, function (err, data){
            if(err){
                reject();
            }else{
                fulfill(data.toString());
            }
        });
    });
}

read('my_file.txt')
.then((data) => {
    console.log(data)
    return '111111';
})
// encadeando outros .then mesmo sendo uma function de callback assincrona o return pode ser passado para a função de baixo tornando assim o codigo muito mais legivel permitindo fazer outros encadeamentos
.then((data)=>{
    console.log(data);
    return '222222';
})
.then((data)=>{
    console.log(data)
    return '333333';
})
// colocando .then ou .done porem .done da mais significado pois sinaliza que termina a promise
.done((data)=>{
    console.log(data)
});


// vantagem faz varias REQ de uma vez so assim aproveita todo o potencial do PROCESSADOR
// Assincrona tudo de uma vez + rapido
//console.time('Assincrono');
//var counter = 0;
//for(var i = 0; i < 1000; i++){
  //  fs.readFile('my_file.txt', function (err, data) {
    //    if (err) {
      //      return console.error(err);
        //}
      //  counter++;
      //  console.log("Assincrono " + data.toString());
     //   if(counter === 1000){
     //       console.timeEnd('Assincrono');
    //    }
  //  });
//}

// =tempo



//modo Sincrono enquanto a leitura do 1 arquivo n for finalizada ele n vai voltar o for e fazer a prox req
// jogado na varial data e depois faz outra Req + devagar
//leitura do arquivo bloqueia o resto das operações deixando assim boa parte do procesador ocioso
//console.time('Sincrono');
//for(var i = 0; i < 1000; i++){
//    var data = fs.readFileSync('my_file.txt');
//    console.log('Sincrono ' + data);


//}
//console.timeEnd('Sincrono');


//Promises

