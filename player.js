class Player

{

constructor(){

}
getCount(){

var playerCountS = database.ref('playerCount');
playerCountS.on('value',function(data){

playerCount=data.val();

})

}

updateCount(count){


database.ref('/').update({
    playerCount :count
 
})

}
updateName(name){

var playerIndex = "player"+playerCount
database.ref(playerIndex).set ({
    name:name
})
}


}