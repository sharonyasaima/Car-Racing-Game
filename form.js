class  Form{


constructor(){


}
display(){

var title = createElement('h2')
title.html("Car Racing Game")
title.position(130,0)

var input = createInput('Name :')
input.position(130,100)

var button= createButton('Play')
button.position(250,200)


var greeting= createElement( 'h3')


button.mousePressed(function(){
    input.hide();
    button.hide();

    var name = input.value();
    playerCount += 1;

    player.updateName(name);
    player.updateCount(playerCount)
    greeting.html("Welcome to the world of racing cars,"+name)

     greeting.position(100,200);
})

}

}