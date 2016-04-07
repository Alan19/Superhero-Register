function Superhero(n, c, r)
{
	/*this = {
		superheroName = n,
		superheroCity = c,
		superheroReputation = r
	};*/
	
	this.superheroName = n;
	this.superheroCity = c;
	this.superheroReputation = r;
	
	
	this.adventures = [];
	
	this.haveAdventure = function(adv, prestige)
	{
		this.adventures.push(adv);
		this.superheroReputation += prestige;
	}
}

function initialize()
{
	heroNameOut = document.getElementsByClassName("heroname");
	heroCityOut = document.getElementById("herocity");
	adventureListOut = document.getElementById("adventurelist");
	jReputation = document.getElementById("reputation");
	superheroes = [Superhero("The Shift", "New York City", 0)];
	jHeroDiv = document.getElementById("heroes-div")
	
	hero = new Superhero("The Shift", "New York City", 0);
	
	display();
}

function changeName(newName)
{
	superhero[selectedHero].superheroName = newName;
	display();
}

function changeCity(newCity)
{
	hero.superheroCity = newCity;
	display();
}

function goAdventuring(adv)
{
	hero.haveAdventure(adv, getRandomInteger(1,10));
	display();
}

function display(){
    for (var k = 0; k < superheroes.length; k++){
           
    }
	{
		for (var i = 0; i < heroNameOut.length; i++)
			heroNameOut[i].innerHTML = hero.superheroName;
		
		heroCityOut.innerHTML = hero.superheroCity;
		jReputation.innerHTML = hero.superheroReputation;
		
		adventureListOut.innerHTML = "";
		for (var a in hero.adventures)
			adventureListOut.innerHTML += hero.adventures[a] + "<br />";
	}
}
function addHeroes()
{
	superheroes.push(Superhero("The Shift", "New York City", 0));
}

function selector(x)
{
	if (x < superheroes.length){
		selectedHero = x-1;
	}
}