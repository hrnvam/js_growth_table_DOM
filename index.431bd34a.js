var e=document.querySelector(".field"),t=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),l=document.querySelector(".remove-column");function o(){return document.querySelector(".field tr").querySelectorAll("td").length}function c(){var e=document.querySelectorAll(".field tr").length,c=o();t.disabled=e>=10,n.disabled=e<=2,r.disabled=c>=10,l.disabled=c<=2}document.addEventListener("DOMContentLoaded",function(){c(),t.addEventListener("click",function(){for(var t=e.insertRow(),n=0;n<o();n++)t.insertCell();c()}),n.addEventListener("click",function(){document.querySelector(".field tr"),o(),e.deleteRow(0),c()}),r.addEventListener("click",function(){document.querySelectorAll(".field tr").forEach(function(e){e.insertCell()}),c()}),l.addEventListener("click",function(){document.querySelectorAll(".field tr").forEach(function(e){e.deleteCell(0)}),c()})});
//# sourceMappingURL=index.431bd34a.js.map