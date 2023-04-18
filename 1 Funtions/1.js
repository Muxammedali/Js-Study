var count = ["Europe" , "Asia" , "Afrika"] , 
population = [142 , 100 , 58];

var elements = document.getElementsByTagName('div')[0],
br = "milions<br><br>",
eu = count[0] + " - "+ population[0]+br, 
as = count[1] + " - "+ population[1]+br,
af = count[2] + " - "+ population[2];

elements.innerHTML = (eu + as + af);