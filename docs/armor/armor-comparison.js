var dexMod = 0;
var sizeAcBonus = 0;

var armorAc0 = 0;
var armorMaxDex0 = 2048;
var armorCheck0 = 0;
var armorSpellFailure0 = 0;
var armorSpeed0 = false;
var armorCost0 = 0;
var armorWeight0 = 0;

var shieldAc0 = 0;
var shieldMaxDex0 = 2048;
var shieldCheck0 = 0;
var shieldSpellFailure0 = 0;
var shieldCost0 = 0;
var shieldWeight0 = 0;

var armorAc1 = 0;
var armorMaxDex1 = 2048;
var armorCheck1 = 0;
var armorSpellFailure1 = 0;
var armorSpeed1 = false;
var armorCost1 = 0;
var armorWeight1 = 0;

var shieldAc1 = 0;
var shieldMaxDex1 = 2048;
var shieldCheck1 = 0;
var shieldSpellFailure1 = 0;
var shieldCost1 = 0;
var shieldWeight1 = 0;

function dexChange()
{
	var dexterity = document.getElementById("dexterity").value;
	
	dexMod = Math.floor(dexterity / 2) - 5;
	
	recalculate0();
	recalculate1();
}

function sizeChange()
{
	switch(document.getElementById("size").value)
	{
		case "Medium":
			sizeAcBonus = 0;
			break;
		
		case "Small":
			sizeAcBonus = 1;
			break;
	}
	
	recalculate0();
	recalculate1();
}

function armorChange0()
{
	switch(document.getElementById("armor0").value)
	{
		case "No armor":
			armorAc0 = 0;
			armorMaxDex0 = 2048;
			armorCheck0 = 0;
			armorSpellFailure0 = 0;
			armorSpeed0 = false;
			armorCost0 = 0;
			armorWeight0 = 0;
			break;
			
		case "Padded":
			armorAc0 = 1;
			armorMaxDex0 = 8;
			armorCheck0 = 0;
			armorSpellFailure0 = 5;
			armorSpeed0 = false;
			armorCost0 = 5;
			armorWeight0 = 10;
			break;
			
		case "Leather":
			armorAc0 = 2;
			armorMaxDex0 = 6;
			armorCheck0 = 0;
			armorSpellFailure0 = 10;
			armorSpeed0 = false;
			armorCost0 = 10;
			armorWeight0 = 15;
			break;
			
		case "Studded leather":
			armorAc0 = 3;
			armorMaxDex0 = 5;
			armorCheck0 = -1;
			armorSpellFailure0 = 15;
			armorSpeed0 = false;
			armorCost0 = 25;
			armorWeight0 = 20;
			break;
			
		case "Chain shirt":
			armorAc0 = 4;
			armorMaxDex0 = 4;
			armorCheck0 = -2;
			armorSpellFailure0 = 20;
			armorSpeed0 = false;
			armorCost0 = 100;
			armorWeight0 = 25;
			break;
			
		case "Hide":
			armorAc0 = 4;
			armorMaxDex0 = 4;
			armorCheck0 = -3;
			armorSpellFailure0 = 20;
			armorSpeed0 = true;
			armorCost0 = 15;
			armorWeight0 = 25;
			break;
			
		case "Scale mail":
			armorAc0 = 5;
			armorMaxDex0 = 3;
			armorCheck0 = -4;
			armorSpellFailure0 = 25;
			armorSpeed0 = true;
			armorCost0 = 50;
			armorWeight0 = 30;
			break;
			
		case "Chainmail":
			armorAc0 = 6;
			armorMaxDex0 = 2;
			armorCheck0 = -5;
			armorSpellFailure0 = 30;
			armorSpeed0 = true;
			armorCost0 = 150;
			armorWeight0 = 40;
			break;
			
		case "Breastplate":
			armorAc0 = 6;
			armorMaxDex0 = 3;
			armorCheck0 = -4;
			armorSpellFailure0 = 25;
			armorSpeed0 = true;
			armorCost0 = 200;
			armorWeight0 = 30;
			break;
			
		case "Splint mail":
			armorAc0 = 7;
			armorMaxDex0 = 0;
			armorCheck0 = -7;
			armorSpellFailure0 = 40;
			armorSpeed0 = true;
			armorCost0 = 200;
			armorWeight0 = 45;
			break;
			
		case "Banded mail":
			armorAc0 = 7;
			armorMaxDex0 = 1;
			armorCheck0 = -6;
			armorSpellFailure0 = 35;
			armorSpeed0 = true;
			armorCost0 = 250;
			armorWeight0 = 35;
			break;
			
		case "Half-plate":
			armorAc0 = 8;
			armorMaxDex0 = 0;
			armorCheck0 = -7;
			armorSpellFailure0 = 40;
			armorSpeed0 = true;
			armorCost0 = 600;
			armorWeight0 = 50;
			break;
			
		case "Full plate":
			armorAc0 = 9;
			armorMaxDex0 = 1;
			armorCheck0 = -6;
			armorSpellFailure0 = 35;
			armorSpeed0 = true;
			armorCost0 = 1500;
			armorWeight0 = 50;
			break;
	}
	
	recalculate0();
}

function armorChange1()
{
	switch(document.getElementById("armor1").value)
	{
		case "No armor":
			armorAc1 = 0;
			armorMaxDex1 = 2048;
			armorCheck1 = 0;
			armorSpellFailure1 = 0;
			armorSpeed1 = false;
			armorCost1 = 0;
			armorWeight1 = 0;
			break;
			
		case "Padded":
			armorAc1 = 1;
			armorMaxDex1 = 8;
			armorCheck1 = 0;
			armorSpellFailure1 = 5;
			armorSpeed1 = false;
			armorCost1 = 5;
			armorWeight1 = 10;
			break;
			
		case "Leather":
			armorAc1 = 2;
			armorMaxDex1 = 6;
			armorCheck1 = 0;
			armorSpellFailure1 = 10;
			armorSpeed1 = false;
			armorCost1 = 10;
			armorWeight1 = 15;
			break;
			
		case "Studded leather":
			armorAc1 = 3;
			armorMaxDex1 = 5;
			armorCheck1 = -1;
			armorSpellFailure1 = 15;
			armorSpeed1 = false;
			armorCost1 = 25;
			armorWeight1 = 20;
			break;
			
		case "Chain shirt":
			armorAc1 = 4;
			armorMaxDex1 = 4;
			armorCheck1 = -2;
			armorSpellFailure1 = 20;
			armorSpeed1 = false;
			armorCost1 = 100;
			armorWeight1 = 25;
			break;
			
		case "Hide":
			armorAc1 = 4;
			armorMaxDex1 = 4;
			armorCheck1 = -3;
			armorSpellFailure1 = 20;
			armorSpeed1 = true;
			armorCost1 = 15;
			armorWeight1 = 25;
			break;
			
		case "Scale mail":
			armorAc1 = 5;
			armorMaxDex1 = 3;
			armorCheck1 = -4;
			armorSpellFailure1 = 25;
			armorSpeed1 = true;
			armorCost1 = 50;
			armorWeight1 = 30;
			break;
			
		case "Chainmail":
			armorAc1 = 6;
			armorMaxDex1 = 2;
			armorCheck1 = -5;
			armorSpellFailure1 = 30;
			armorSpeed1 = true;
			armorCost1 = 150;
			armorWeight1 = 40;
			break;
			
		case "Breastplate":
			armorAc1 = 6;
			armorMaxDex1 = 3;
			armorCheck1 = -4;
			armorSpellFailure1 = 25;
			armorSpeed1 = true;
			armorCost1 = 200;
			armorWeight1 = 30;
			break;
			
		case "Splint mail":
			armorAc1 = 7;
			armorMaxDex1 = 0;
			armorCheck1 = -7;
			armorSpellFailure1 = 40;
			armorSpeed1 = true;
			armorCost1 = 200;
			armorWeight1 = 45;
			break;
			
		case "Banded mail":
			armorAc1 = 7;
			armorMaxDex1 = 1;
			armorCheck1 = -6;
			armorSpellFailure1 = 35;
			armorSpeed1 = true;
			armorCost1 = 250;
			armorWeight1 = 35;
			break;
			
		case "Half-plate":
			armorAc1 = 8;
			armorMaxDex1 = 0;
			armorCheck1 = -7;
			armorSpellFailure1 = 40;
			armorSpeed1 = true;
			armorCost1 = 600;
			armorWeight1 = 50;
			break;
			
		case "Full plate":
			armorAc1 = 9;
			armorMaxDex1 = 1;
			armorCheck1 = -6;
			armorSpellFailure1 = 35;
			armorSpeed1 = true;
			armorCost1 = 1500;
			armorWeight1 = 50;
			break;
	}
	
	recalculate1();
}

function shieldChange0()
{
	switch(document.getElementById("shield0").value)
	{
		case "No shield":
			shieldAc0 = 0;
			shieldMaxDex0 = 2048;
			shieldCheck0 = 0;
			shieldSpellFailure0 = 0;
			shieldCost0 = 0;
			shieldWeight0 = 0;
			break;
			
		case "Buckler":
			shieldAc0 = 1;
			shieldMaxDex0 = 2048;
			shieldCheck0 = -1;
			shieldSpellFailure0 = 5;
			shieldCost0 = 5;
			shieldWeight0 = 5;
			break;
			
		case "Shield, light wooden":
			shieldAc0 = 1;
			shieldMaxDex0 = 2048;
			shieldCheck0 = -1;
			shieldSpellFailure0 = 5;
			shieldCost0 = 3;
			shieldWeight0 = 5;
			break;
			
		case "Shield, light steel":
			shieldAc0 = 1;
			shieldMaxDex0 = 2048;
			shieldCheck0 = -1;
			shieldSpellFailure0 = 5;
			shieldCost0 = 9;
			shieldWeight0 = 6;
			break;
			
		case "Shield, heavy wooden":
			shieldAc0 = 2;
			shieldMaxDex0 = 2048;
			shieldCheck0 = -2;
			shieldSpellFailure0 = 15;
			shieldCost0 = 7;
			shieldWeight0 = 5;
			break;
			
		case "Shield, heavy steel":
			shieldAc0 = 2;
			shieldMaxDex0 = 2048;
			shieldCheck0 = -2;
			shieldSpellFailure0 = 15;
			shieldCost0 = 20;
			shieldWeight0 = 15;
			break;
			
		case "Shield, tower":
			shieldAc0 = 4;
			shieldMaxDex0 = 2; 
			shieldCheck0 = -10;
			shieldSpellFailure0 = 50;
			shieldCost0 = 5;
			shieldWeight0 = 5;
			break;
	}
	
	recalculate0();
}

function shieldChange1()
{
	switch(document.getElementById("shield1").value)
	{
		case "No shield":
			shieldAc1 = 0;
			shieldMaxDex1 = 2048;
			shieldCheck1 = 0;
			shieldSpellFailure1 = 0;
			shieldCost1 = 0;
			shieldWeight1 = 0;
			break;
			
		case "Buckler":
			shieldAc1 = 1;
			shieldMaxDex1 = 2048;
			shieldCheck1 = -1;
			shieldSpellFailure1 = 5;
			shieldCost1 = 5;
			shieldWeight1 = 5;
			break;
			
		case "Shield, light wooden":
			shieldAc1 = 1;
			shieldMaxDex1 = 2048;
			shieldCheck1 = -1;
			shieldSpellFailure1 = 5;
			shieldCost1 = 3;
			shieldWeight1 = 5;
			break;
			
		case "Shield, light steel":
			shieldAc1 = 1;
			shieldMaxDex1 = 2048;
			shieldCheck1 = -1;
			shieldSpellFailure1 = 5;
			shieldCost1 = 9;
			shieldWeight1 = 6;
			break;
			
		case "Shield, heavy wooden":
			shieldAc1 = 2;
			shieldMaxDex1 = 2048;
			shieldCheck1 = -2;
			shieldSpellFailure1 = 15;
			shieldCost1 = 7;
			shieldWeight1 = 5;
			break;
			
		case "Shield, heavy steel":
			shieldAc1 = 2;
			shieldMaxDex1 = 2048;
			shieldCheck1 = -2;
			shieldSpellFailure1 = 15;
			shieldCost1 = 20;
			shieldWeight1 = 15;
			break;
			
		case "Shield, tower":
			shieldAc1 = 4;
			shieldMaxDex1 = 2; 
			shieldCheck1 = -10;
			shieldSpellFailure1 = 50;
			shieldCost1 = 5;
			shieldWeight1 = 5;
			break;
	}
	
	recalculate1();
}

function recalculate0()
{
	document.getElementById("ac0").innerText = 10 + armorAc0 + shieldAc0 + sizeAcBonus + Math.min(dexMod, armorMaxDex0);
	document.getElementById("checkPenalty0").innerText = armorCheck0 + shieldCheck0;
	document.getElementById("spellFailure0").innerText = armorSpellFailure0 + shieldSpellFailure0 + "%";
	document.getElementById("cost0").innerText = armorCost0 + shieldCost0 + " GP";
	
	if (sizeAcBonus == 0)
	{
		document.getElementById("weight0").innerText = armorWeight0 + shieldWeight0 + " lbs.";
		
		if (armorSpeed0)
		{
			document.getElementById("speed0").innerText = 20 + " ft.";
		}
		else
		{
			document.getElementById("speed0").innerText = 30 + " ft.";
		}
	}
	else
	{
		document.getElementById("weight0").innerText = (armorWeight0 + shieldWeight0) / 2 + " lbs.";
		
		if (armorSpeed0)
		{
			document.getElementById("speed0").innerText = 15 + " ft.";
		}
		else
		{
			document.getElementById("speed0").innerText = 20 + " ft.";
		}
	}
}

function recalculate1()
{
	document.getElementById("ac1").innerText = 10 + armorAc1 + shieldAc1 + sizeAcBonus + Math.min(dexMod, armorMaxDex1);
	document.getElementById("checkPenalty1").innerText = armorCheck1 + shieldCheck1;
	document.getElementById("spellFailure1").innerText = armorSpellFailure1 + shieldSpellFailure1 + "%";
	document.getElementById("cost1").innerText = armorCost1 + shieldCost1 + " GP";
	
	if (sizeAcBonus == 0)
	{
		document.getElementById("weight1").innerText = armorWeight1 + shieldWeight1 + " lbs.";
		
		if (armorSpeed1)
		{
			document.getElementById("speed1").innerText = 20 + " ft.";
		}
		else
		{
			document.getElementById("speed1").innerText = 30 + " ft.";
		}
	}
	else
	{
		document.getElementById("weight1").innerText = (armorWeight1 + shieldWeight1) / 2 + " lbs.";
		
		if (armorSpeed1)
		{
			document.getElementById("speed1").innerText = 15 + " ft.";
		}
		else
		{
			document.getElementById("speed1").innerText = 2 + " ft.";
		}
	}
}
