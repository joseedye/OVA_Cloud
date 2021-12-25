//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien Hecho"; messageTime="termino el tiempo :("; messageError="cometiste un Error"; messageErrorG="cometiste un Error"; messageAttempts="Limite de Tiempo"; isShowMessage=false;
var urlOk="localhost:8082/ruv/1/17"; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYWNpb25hci1FY29ub21pYV9Fc2NhbGE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Q29zdGU=", "U2UgdHJhdGEgZGUgbGEgdmVudGFqYSBtw6FzIGNvbm9jaWRhIHkgbGEgcHJpbWVyYSBlbiBsYSBxdWUgc3VlbGVuIHBlbnNhciBsYXMgZW1wcmVzYXMgY3VhbmRvIGhhYmxhbiBkZWwgY2xvdWQ="],["Q2FwZXggdG8gT3BleA==", "bGEgZWxpbWluYWNpw7NuIGRlIHVuYSBncmFuIGludmVyc2nDs24gaW5pY2lhbCBwdWVkZSBsaWJlcmFyIGVsIHByZXN1cHVlc3RvIHBhcmEgb3Ryb3MgcHJveWVjdG9zIGRlIFRJLg=="],["RXNjYWxhYmlsaWRhZA==", "UG9kZW1vcyBhcnJhbmNhciBjb24gdW4gZGltZW5zaW9uYW1pZW50byBpbmljaWFsLCB5IHBvc3Rlcmlvcm1lbnRlIGF1bWVudGFyIG8gcmVkdWNpciBsYSBjYXBhY2lkYWQgY29uIHVub3MgY2xpY2tzLg=="],["RWNvbm9taWEgZGUgZXNjYWxh", "bGEgZW1wcmVzYSBmaW5hbCBzb2xvIHRpZW5lIHF1ZSBwYWdhciB1bmEgY3VvdGEgbWVuc3VhbCB5LCBjb24gdW4gcGFyIGRlIGNsaWNrcywgYWNjZWRlIGEgbGFzIGNhcGFjaWRhZGVzIGRlIGFsbWFjZW5hbWllbnRvIHkgY29tcHV0YWNpw7Nu"],["RmlhYmlsaWRhZA==", "cHJlcGFyYXIgbGFzIGFwbGljYWNpb25lcyBwYXJhIHF1ZSBzZWFuIHRvbGVyYW50ZSBhIGZhbGxhcywgY29uIGNhcGFjaWRhZCBkZSByZWN1cGVyYWNpw7NuIGF1dG9tw6F0aWNhIGluY29ycG9yYWRhLg=="],["UmFwaWRleg==", "ZWR1Y2ltb3MgZWwgdGllbXBvIHF1ZSBkaWNob3MgcmVjdXJzb3MgdGFyZGFuIGVuIGVzdGFyIGRpc3BvbmlibGVzIHBhcmEgbG9zIGRlc2Fycm9sbGFkb3JlcyBkZSBzZW1hbmFzIGEgY3Vlc3Rpw7NuIGRlIG1pbnV0b3Mu"]];
var c=[[5,109],[13,101],[13,115],[18,137],[10,113],[7,125]];
var con1=["Economia de escala","Coste","Capex to Opex","Escalabilidad","Fiabilidad","Rapidez"];
var con2=["la empresa final solo tiene que pagar una cuota mensual y, con un par de clicks, accede a las capacidades de almacenamiento y computación","Se trata de la ventaja más conocida y la primera en la que suelen pensar las empresas cuando hablan del cloud","la eliminación de una gran inversión inicial puede liberar el presupuesto para otros proyectos de TI.","Podemos arrancar con un dimensionamiento inicial, y posteriormente aumentar o reducir la capacidad con unos clicks.","preparar las aplicaciones para que sean tolerante a fallas, con capacidad de recuperación automática incorporada.","educimos el tiempo que dichos recursos tardan en estar disponibles para los desarrolladores de semanas a cuestión de minutos."];
var sel1=""; join1=[]; join2=[];
