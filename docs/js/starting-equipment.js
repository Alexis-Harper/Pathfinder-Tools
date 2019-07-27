var startingWealth = 0;
var subtractedWealth = 0;
var equipmentRows = 2;

function startingWealthChanged()
{
	startingWealth = document.getElementById("wealth").value * 100;
	console.log(startingWealth);
	recalculate();
}

function addEmptyRow()
{
	var row = document.getElementById("equipment").insertRow(equipmentRows);
	var itemName = row.insertCell(0);
	var itemPrice = row.insertCell(1);
	var itemCurrency = row.insertCell(2);
	var itemRemove = row.insertCell(3);
	itemName.innerHTML = "<input type=\"text\">";
	itemPrice.innerHTML = "<input type=\"number\" onchange=\"recalculate()\">";
	itemCurrency.innerHTML = "<select onchange=\"recalculate()\"><option>GP</option><option>SP</option><option>CP</option></select>";
	itemRemove.innerHTML = "<button onclick=\"removeRow(" + equipmentRows++ + ")\">&times;</button>";
}

function addRow(name, price, currency)
{
	var row = document.getElementById("equipment").insertRow(equipmentRows);
	var itemName = row.insertCell(0);
	var itemPrice = row.insertCell(1);
	var itemCurrency = row.insertCell(2);
	var itemRemove = row.insertCell(3);
	itemName.innerHTML = "<input type=\"text\">";
	itemPrice.innerHTML = "<input type=\"number\" onchange=\"recalculate()\">";
	itemCurrency.innerHTML = "<select onchange=\"recalculate()\"><option>GP</option><option>SP</option><option>CP</option></select>";
	itemRemove.innerHTML = "<button onclick=\"removeRow(" + equipmentRows++ + ")\">&times;</button>";
	itemName.childNodes[0].value = name;
	itemPrice.childNodes[0].value = price;
	itemCurrency.childNodes[0].value = currency;
}

function removeRow(rowNumber)
{
	if (equipmentRows > 2)
	{
		var equipment = document.getElementById("equipment");
		
		equipment.deleteRow(rowNumber);
		equipmentRows--;
		
		for (var i = rowNumber; i < equipmentRows; i++)
		{
			equipment.rows[i].cells[3].innerHTML = "<button onclick=\"removeRow(" + i + ")\">&times;</button>";
		}
		
		recalculate();
	}
}

function recalculate()
{
	subtractedWealth = 0;
	
	var equipment = document.getElementById("equipment");
	
	for (var i = 1; i < equipmentRows; i++)
	{
		var row = equipment.rows[i];
		
		var price = row.cells[1].childNodes[0].value;
		
		switch (row.cells[2].childNodes[0].value)
		{
			case "GP":
				price *= 100;
				break;
				
			case "SP":
				price *= 10;
				break;
		}
		
		subtractedWealth += price;
	}
	
	var newWealth = startingWealth - subtractedWealth;
	
	if (newWealth >= 0)
	{
		var cp = newWealth % 10;
		var sp = Math.floor ((newWealth % 100) / 10)
		var gp = Math.floor (newWealth / 100);
		
		document.getElementById("leftoverMoney").innerHTML = "CP: " + cp + "<br>SP: " + sp + "<br>GP: " + gp;
	}
	else
	{
		document.getElementById("leftoverMoney").innerHTML = "ERROR: More money spent than available.";
	}
}
