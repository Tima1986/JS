var bag = {
    content: [ 
     "телефон",
     "наушники",
     "зеркальце",
     "ключи", 
     "кошелек",
      "помада" 
    ],
    addElemInBag: function ( elem ) {
       this.content.push ( elem )
    } ,
    deleteElemFromBag: function ( num ) {
       this.content.splice ( num, 1 )
    } 
  }
  console.log (bag)
  
   bag.addElemInBag ( "помада" )
    console.log ( bag.content )
  bag.addElemInBag ( "паспорт" )
    console.log ( bag.content )
  bag.deleteElemFromBag ( 1 )
     console.log ( bag.content )