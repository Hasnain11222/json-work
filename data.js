// var arr = ["ali","hasnain","azbar","areeb"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])


// var obj = {
//     "name" : "azbar",
//     "lastname" : "ali",
//     "phone": 034456770,
//     "age" : 45,
//     "semester" : "cpism"

// }

// console.log(obj.name+ " " + obj.lastname + " " + obj.phone + " " + obj.age + " " + obj.semester)

// console.log(obj.name)
// console.log(obj.lastname)
// console.log(obj.phone)
// console.log(obj.age)
// console.log(obj.semester)


fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.name))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.lastname))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.phone))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.age))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.semester))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.color))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.email))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.address))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.city))
fetch("data2.json").then(res => res.json()).then(aptech => console.log(aptech.country))



fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("name").innerHTML = aptech.name)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("lastname").innerHTML = aptech.lastname)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("phone").innerHTML = aptech.phone)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("age").innerHTML = aptech.age)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("semester").innerHTML = aptech.semester)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("color").innerHTML = aptech.color)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("email").innerHTML = aptech.email)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("adress").innerHTML = aptech.address)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("city").innerHTML = aptech.city)
fetch("data2.json").then(res => res.json()).then(aptech => document.getElementById("country").innerHTML = aptech.country)

