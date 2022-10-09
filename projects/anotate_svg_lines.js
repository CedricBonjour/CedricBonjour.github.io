
 function draw_line_length(line){
      ll = line.getTotalLength()
      txt = document.createElementNS('http://www.w3.org/2000/svg','text');
      txt.textContent = ll
      x = (line.x1.baseVal.value + line.x2.baseVal.value ) /2
      y = (line.y1.baseVal.value + line.y2.baseVal.value ) /2

      txt.setAttribute("x", x);  
      txt.setAttribute("y", y);   
      txt.setAttribute("stroke", "red");   
      txt.setAttribute("text-anchor", "middle");   
      line.after(txt)
      line.innerHTML += "";
 }

 line_list= Array.from(document.getElementsByTagName("line"))
 line_list.forEach(draw_line_length)

