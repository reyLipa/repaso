function saludar(){
    alert("holaaa")
}

let cf, pv,cv, pe
cf=Number(prompt("ingrese los costos fijos"))
pv=Number(prompt("ingrese el precio de venta"))
cv=Number(prompt("ingrese el costo variable"))

pe=cf/(pv-cv)
console.log("el pe es")