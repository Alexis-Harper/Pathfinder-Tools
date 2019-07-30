var strMod = 0;
var dexMod = 0;
var intMod = 0;
var wisMod = 0;
var chaMod = 0;

function strChange()
{
	var strength = document.getElementById("strength").value;
	
	strMod = Math.floor(strength / 2) - 5;
	
	var strList = document.getElementsByClassName("strMod");
	
	for (var i = 0; i < strList.length; i++)
	{
		strList[i].innerText = (strMod<0?"":"+") + strMod;
	}
	
	changeSkill(3, false);
	changeSkill(36, false);
	changeSkill(37, false);
}

function dexChange()
{
	var dexterity = document.getElementById("dexterity").value;
	
	dexMod = Math.floor(dexterity / 2) - 5;
	
	var dexList = document.getElementsByClassName("dexMod");
	
	for (var i = 0; i < dexList.length; i++)
	{
		dexList[i].innerText = (dexMod<0?"":"+") + dexMod;
	}
	
	changeSkill(0, false);
	changeSkill(8, true);
	changeSkill(10, false);
	changeSkill(11, false);
	changeSkill(30, false);
	changeSkill(31, false);
	changeSkill(33, true);
	changeSkill(35, false);
}

function intChange()
{
	var intelligence = document.getElementById("intelligence").value;
	
	intMod = Math.floor(intelligence / 2) - 5;
	
	var intList = document.getElementsByClassName("intMod");
	
	for (var i = 0; i < intList.length; i++)
	{
		intList[i].innerText = (intMod<0?"":"+") + intMod;
	}
	
	changeSkill(1, false);
	changeSkill(4, false);
	changeSkill(5, false);
	changeSkill(6, false);
	changeSkill(15, true);
	changeSkill(16, true);
	changeSkill(17, true);
	changeSkill(18, true);
	changeSkill(19, true);
	changeSkill(20, true);
	changeSkill(21, true);
	changeSkill(22, true);
	changeSkill(23, true);
	changeSkill(24, true);
	changeSkill(25, true);
	changeSkill(34, true);
}

function wisChange()
{
	var wisdom = document.getElementById("wisdom").value;
	
	wisMod = Math.floor(wisdom / 2) - 5;
	
	var wisList = document.getElementsByClassName("wisMod");
	
	for (var i = 0; i < wisList.length; i++)
	{
		wisList[i].innerText = (wisMod<0?"":"+") + wisMod;
	}
	
	changeSkill(13, false);
	changeSkill(26, false);
	changeSkill(29, true);
	changeSkill(30, true);
	changeSkill(32, false);
	changeSkill(36, false);
}

function chaChange()
{
	var charisma = document.getElementById("charisma").value;
	
	chaMod = Math.floor(charisma / 2) - 5;
	
	var chaList = document.getElementsByClassName("chaMod");
	
	for (var i = 0; i < chaList.length; i++)
	{
		chaList[i].innerText = (chaMod<0?"":"+") + chaMod;
	}
	
	changeSkill(2, false);
	changeSkill(7, false);
	changeSkill(9, false);
	changeSkill(12, true);
	changeSkill(14, false);
	changeSkill(27, false);
	changeSkill(28, false);
	changeSkill(38, true);
}

function updateClass()
{
	switch (document.getElementById("class").value)
	{
		case "Manual":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = false; //Craft
			document.getElementById("trained5").checked = false; //Craft
			document.getElementById("trained6").checked = false; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = false; //Profession
			document.getElementById("trained30").checked = false; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
		
		case "Barbarian":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = false; //Profession
			document.getElementById("trained30").checked = false; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Bard":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Cleric":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Druid":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Fighter":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Monk":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Paladin":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Ranger":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Rogue":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = true; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Sorcerer":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Wizard":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Alchemist":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = true; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Cavalier":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Inquisitor":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Oracle":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Summoner":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Witch":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Magus":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Gunslinger":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Ninja":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = true; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Samurai":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Arcanist":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Bloodrager":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = false; //Profession
			document.getElementById("trained30").checked = false; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Brawler":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Hunter":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Investigator":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = true; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = false; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Shaman":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = false; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = true; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = false; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = false; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = false; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Skald":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = true; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = true; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = true; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = true; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = true; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = true; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = true; //Use Magic Device
			break;
			
		case "Slayer":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = false; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = true; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = true; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = true; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = true; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Swashbuckler":
			document.getElementById("trained0").checked = true; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = true; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = true; //Craft
			document.getElementById("trained6").checked = true; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = true; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = false; //Handle Animal
			document.getElementById("trained13").checked = false; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = false; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = true; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = true; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = false; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = true; //Perception
			document.getElementById("trained27").checked = true; //Perform
			document.getElementById("trained28").checked = true; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = true; //Sleight of Hand
			document.getElementById("trained34").checked = false; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = false; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
			
		case "Warpriest":
			document.getElementById("trained0").checked = false; //Acrobatics
			document.getElementById("trained1").checked = false; //Appraise
			document.getElementById("trained2").checked = false; //Bluff
			document.getElementById("trained3").checked = true; //Climb
			document.getElementById("trained4").checked = true; //Craft
			document.getElementById("trained5").checked = false; //Craft
			document.getElementById("trained6").checked = false; //Craft
			document.getElementById("trained7").checked = true; //Diplomacy
			document.getElementById("trained8").checked = false; //Disable Device
			document.getElementById("trained9").checked = false; //Disguise
			document.getElementById("trained10").checked = false; //Escape Artist
			document.getElementById("trained11").checked = false; //Fly
			document.getElementById("trained12").checked = true; //Handle Animal
			document.getElementById("trained13").checked = true; //Heal
			document.getElementById("trained14").checked = true; //Intimidate
			document.getElementById("trained15").checked = false; //Knowledge (Arcana)
			document.getElementById("trained16").checked = false; //Knowledge (Dungeoneering)
			document.getElementById("trained17").checked = true; //Knowledge (Engineering)
			document.getElementById("trained18").checked = false; //Knowledge (Geography)
			document.getElementById("trained19").checked = false; //Knowledge (History)
			document.getElementById("trained20").checked = false; //Knowledge (Local)
			document.getElementById("trained21").checked = false; //Knowledge (Nature)
			document.getElementById("trained22").checked = false; //Knowledge (Nobility)
			document.getElementById("trained23").checked = false; //Knowledge (Planes)
			document.getElementById("trained24").checked = true; //Knowledge (Religion)
			document.getElementById("trained25").checked = false; //Linguistics
			document.getElementById("trained26").checked = false; //Perception
			document.getElementById("trained27").checked = false; //Perform
			document.getElementById("trained28").checked = false; //Perform
			document.getElementById("trained29").checked = true; //Profession
			document.getElementById("trained30").checked = true; //Profession
			document.getElementById("trained31").checked = true; //Ride
			document.getElementById("trained32").checked = true; //Sense Motive
			document.getElementById("trained33").checked = false; //Sleight of Hand
			document.getElementById("trained34").checked = true; //Spellcraft
			document.getElementById("trained35").checked = false; //Stealth
			document.getElementById("trained36").checked = true; //Survival
			document.getElementById("trained37").checked = true; //Swim
			document.getElementById("trained38").checked = false; //Use Magic Device
			break;
	}
}

function getSkillMod(skillNumber)
{
	switch (skillNumber)
	{
		case 3:
		case 36:
		case 37:
			return strMod;
			
		case 0:
		case 8:
		case 10:
		case 11:
		case 30:
		case 31:
		case 33:
		case 35:
			return dexMod;
			
		case 1:
		case 4:
		case 5:
		case 6:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 34:
			return intMod;
			
		case 13:
		case 26:
		case 29:
		case 30:
		case 32:
		case 36:
			return wisMod;
			
		case 2:
		case 7:
		case 9:
		case 12:
		case 14:
		case 27:
		case 28:
		case 38:
			return chaMod;
	}
}

function changeSkill(skillNumber, isTrainedOnly)
{
	if (isTrainedOnly && document.getElementById("ranks" + skillNumber).value == 0)
	{
		document.getElementById("total" + skillNumber).innerText = "X";
	}
	else
	{
		if (document.getElementById("ranks" + skillNumber).value == 0)
		{
			var value = getSkillMod(skillNumber);
		}
		else
		{
			if (document.getElementById("trained" + skillNumber).checked)
			{
				var value = getSkillMod(skillNumber) + parseInt(document.getElementById("ranks" + skillNumber).value) + 3; 
			}
			else
			{
				var value = getSkillMod(skillNumber) + parseInt(document.getElementById("ranks" + skillNumber).value); 
			}
		}
		
		document.getElementById("total" + skillNumber).innerText = (value<0?"":"+") + value;
	}
}
