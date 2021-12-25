//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=19;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Buen Trabajo"; messageTime="Se acabo el Tiempo"; messageError="No es el Termino"; messageErrorG="No es el Termino"; messageAttempts="Vuelve a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bnViZV9IaWJyaWRh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","UA==","VQ==","Qg==","TA==","SQ==","Qw==","QQ==","","","",""],["","","","","Ug==","","","","","","UA==","","","",""],["SA==","SQ==","Qg==","Ug==","SQ==","RA==","QQ==","","","","SQ==","","Qw==","","UA=="],["","","","","Vg==","","","","","","","","Tw==","","Ug=="],["","QQ==","TA==","TQ==","QQ==","Qw==","RQ==","Tg==","QQ==","TQ==","SQ==","RQ==","Tg==","VA==","Tw=="],["","","","","RA==","","","","VQ==","","","","VA==","","Vg=="],["","","","","QQ==","","","","VA==","","","","RQ==","","RQ=="],["","","","","","","Qw==","TA==","Tw==","VQ==","RA==","","Tg==","","RQ=="],["","","","","","","","","TQ==","","","","RQ==","","RA=="],["","","","","","","","","QQ==","","","","RA==","","Tw=="],["","","","","","","","","VA==","","","","Tw==","","Ug=="],["","","","","","","","","SQ==","","","","Ug==","",""],["","","","","","","","","Wg==","","","","","",""],["","","","","Tw==","UA==","RQ==","Ug==","QQ==","VA==","SQ==","Vg==","Tw==","",""],["","","","","","","","","Ug==","","","","","",""]];
var x1=[1,5,2,7,5,5,11,13,15,9];
var y1=[3,1,5,8,14,1,1,3,3,5];
var x2=[7,11,15,11,13,5,11,13,15,9];
var y2=[3,1,5,8,14,7,3,12,11,15];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["arquitectura de TI que incorpora cierto grado de gestión, organización y portabilidad de las cargas de trabajo en dos o más entornos.","ejecutan los servicios de la nube en los centros de datos locales de sus clientes.","es el proceso o acción de guardar o archivar algo","son entornos de TI que extraen, agrupan y comparten recursos escalables en una red.","Para diseñar nubes híbridas, los equipos modernos de TI ejecutan el mismo sistema .........","centros de datos alquilados de terceros que se encuentran fuera de las instalaciones.","interfaces de programación de aplicaciones","tecnologías que permiten empaquetar y aislar las aplicaciones junto con todo el entorno de tiempo de ejecución, es decir, con todos los archivos que requieren para ejecutarse.","frecen a los clientes una VPN preconfigurada como parte de sus paquetes de suscripción","consiste en usar la tecnología para realizar tareas casi sin necesidad de las personas. Se puede implementar en cualquier sector en el que se lleven a cabo tareas repetitivas."];
var colNum=15;
var rowNum=15;
