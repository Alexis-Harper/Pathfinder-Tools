function loadSidenav()
{
	document.getElementById("mainSidenav").innerHTML =
		'\
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
			<a href = ".." > Home</a >\
			<a href="../money/starting-equipment.html">Starting Equipment</a>\
			<a href="../armor/armor-comparison.html">Armor Comparison</a>\
			<a href="../skills/skill-ranks.html">Skill Ranks</a>\
		';
}

function openNav()
{
	document.getElementById("mainSidenav").style.width = "250px";
	document.getElementById("navdark").style.display = "block";
}

function closeNav()
{
	document.getElementById("mainSidenav").style.width = "0";
	document.getElementById("navdark").style.display = "none";
}
