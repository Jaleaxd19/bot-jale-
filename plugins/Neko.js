let  fetch  =  require ( 'búsqueda de nodo' )

let  handler  =  async ( m ,  { conn } )  =>  {

  let  res  =  await  fetch ( 'https://api.waifu.pics/sfw/neko' )

  if  ( ! res . ok )  lanzar  aguardar  res . texto ( )

  deje que  json  =  aguarde  res . json ( )

  if  ( ! json . url )  arroja  '¡Error!'

  conn . sendFile ( m . chat ,  json . url ,  '' ,  'Nyaa' ,  m )

}

manejador . ayuda  =  [ 'neko' ]

manejador . tags  =  [ 'internet' ]

manejador . comando  =  / ^ neko $ / i

módulo . exportaciones  =  manipulador
