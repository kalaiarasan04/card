$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})




let food=[

{
	id:1,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food1.webp",
	ratings:"4.4",
	preparation:45,
	item:"Non-Veg",
	amount: 420,
	units:"for two"
},
{
	id:2,
	name:"Srinidhi Veg Food Court",
	cuisine:"South Indian",
	imgurl:"image/food2.webp",
	ratings:"3.4",
	preparation:37,
	item:"Veg",
	amount: 390,
	units:" for two"
},
{
	id:3,
	name:"Third Wave Coffee",
	cuisine:"Beverages,Bakery",
	imgurl:"image/food3.webp",
	ratings:"2.2",
	preparation:25,
	item:"Non-Veg",
	amount: 250,
	units:" for two"
},
{
	id:4,
	name:"madurai Idly Shop",
	cuisine:"South Indian",
	imgurl:"image/food4.webp",
	ratings:"4.4",
	preparation:40,
	item:"Veg",
	amount: 450,
	units:" for two"
},
{
	id:5,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food5.webp",
	ratings:"4.6",
	preparation:35,
	item:"Veg",
	amount: 210,
	units:" for two"
},
{
	id:6,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food6.webp",
	ratings:"2.4",
	preparation:47,
	item:"Non-Veg",
	amount: 350,
	units:" for two"
},
{
	id:7,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food7.webp",
	ratings:"4.2",
	preparation:28,
	item:"Non-Veg",
	amount: 180,
	units:" for two"
},
{
	id:8,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food8.webp",
	ratings:"2.4",
	preparation:42,
	item:"Veg",
	amount: 510,
	units:" for two"
},
{
	id:9,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food9.webp",
	ratings:"4.4",
	preparation:20,
	item:"Veg",
	amount: 60,
	units:" for two"
},
{
	id:10,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food10.webp",
	ratings:"3.4",
	preparation:46,
	item:"Veg",
	amount: 378,
	units:" for two"
},
{
	id:11,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food1.webp",
	ratings:"3.3",
	preparation:49,
	item:"Non-Veg",
	amount: 398,
	units:" for two"
},
{
	id:12,
	name:"Srinidhi Veg Food Court",
	cuisine:"South Indian",
	imgurl:"image/food2.webp",
	ratings:"3.4",
	preparation:32,
	item:"Veg",
	amount: 325,
	units:" for two"
},
{
	id:13,
	name:"Third Wave Coffee",
	cuisine:"Beverages,Bakery",
	imgurl:"image/food3.webp",
	ratings:"3.2",
	preparation:31,
	item:"Non-Veg",
	amount: 80,
	units:" for two"
},
{
	id:14,
	name:"madurai Idly Shop",
	cuisine:"South Indian",
	imgurl:"image/food4.webp",
	ratings:"4.8",
	preparation:43,
	item:"Veg",
	amount: 287,
	units:" for two"
},
{
	id:15,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food5.webp",
	ratings:"2.1",
	preparation:23,
	item:"veg",
	amount: 164,
	units:" for two"
},
{
	id:16,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food6.webp",
	ratings:"2.8",
	preparation:28,
	item:"Non-Veg",
	amount: 220,
	units:" for two"
},
{
	id:17,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food7.webp",
	ratings:"3.9",
	preparation:36,
	item:"Non-Veg",
	amount: 385,
	units:" for two"
},
{
	id:18,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food8.webp",
	ratings:"2.8",
	preparation:41,
	item:"Veg",
	amount: 415,
	units:" for two"
},
{
	id:19,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food9.webp",
	ratings:"4.4",
	preparation:32,
	item:"Veg",
    amount: 372,
	units:" for two"
},
{
	id:20,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food9.webp",
	ratings:"4.3",
	preparation:28,
	item:"Veg",
	amount: 154,
	units:" for two"
},
{
	id:21,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food10.webp",
	ratings:"2.2",
	preparation:37,
	item:"Veg",
	amount: 196,
	units:" for two"
},
{
	id:22,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food1.webp",
	ratings:"4.2",
	preparation:42,
	item:"Non-Veg",
	amount: 648,
	units:" for two"
},
{
	id:23,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food2.webp",
	ratings:"3.4",
	preparation:32,
	item:"Veg",
	amount: 323,
	units:" for two"
},
{
	id:24,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food3.webp",
	ratings:"4.3",
	preparation:43,
	item:"Veg",
	amount: 465,
	units:" for two"
},
{
	id:25,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food4.webp",
	ratings:"2.4",
	preparation:52,
	item:"Veg",
    amount: 578,
	units:" for two"
},
{
	id:26,
	name:"udupi Gardenia",
	cuisine:"South Indian, North Indian",
	imgurl:"image/food4.webp",
	ratings:"3.4",
	preparation:55,
	item:"Veg",
	amount: 623,
	units:" for two"
},

]


let cont=document.querySelector(".container");

let cards=document.createElement("div");
    cards.classList.add("row");
	cont.append(cards);

itemrender(food)


function itemrender(obj){
	obj.forEach (function(e){
		let div=document.createElement("div");
		div.classList.add("col");
		cards.appendChild(div);
			
		let div2=document.createElement("div");
		div2.classList.add("col-card");
		div.appendChild(div2);
		
				
		let img=document.createElement("img");
		img.src=e.imgurl;
		div2.appendChild(img);
	
        let head=document.createElement("h2");
		head.innerText=e.name;
        div2.appendChild(head);
		
        let para=document.createElement("p");
		para.innerText=e.cuisine;
        div2.appendChild(para);	
		
		let innerdiv=document.createElement("div");
		innerdiv.classList.add("inner-row");
		div2.appendChild(innerdiv);
		
		let icondiv=document.createElement("div");
		icondiv.classList.add("icon-div")
		innerdiv.appendChild(icondiv);
		
		let icon=document.createElement("i");
		icon.classList.add("bi");
		icon.classList.add("bi-star-fill");
		icondiv.appendChild(icon);
		
		let rate=document.createElement("p");
		rate.innerHTML=e.ratings;
		icondiv.appendChild(rate);
		
		let preparemin=document.createElement("div");
		preparemin.classList.add("min");
		innerdiv.appendChild(preparemin);
		
		let para1=document.createElement("p");
		para1.innerHTML=e.preparation + "MINS";
		preparemin.appendChild(para1);
	
		
		let per=document.createElement("p");
		per.innerHTML="RS" + e.amount  + e.units;
		innerdiv.appendChild(per);
		
		let itemdiv=document.createElement("div");
		itemdiv.classList.add("item");
		div2.appendChild(itemdiv);
		
		let items=document.createElement("p");
		items.innerHTML=e.item;
		itemdiv.appendChild(items);
		
		
        ratings()
	function ratings(){
		if(e.ratings>=4.0){
			icondiv.classList.add("ico-green");
		}
		else if(e.ratings>=2.5 && e.ratings<=3.9){
			icondiv.classList.add("ico-orange");
			
		}
		else if(e.ratings<=2.4){
			icondiv.classList.add("ico-red");
		}
	}
	
	item()
	function item(){
		if(e.item=="Veg"){
			itemdiv.classList.add("items-skyblue");
		}
		else if(e.item=="Non-Veg"){
			itemdiv.classList.add("items-yellow");
		}
	}
	
	
	});
	
}
function sortrating(){
	let sortratering=food.slice().sort(function(a,b){
		return b.ratings-a.ratings
	})
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(sortratering)
}

function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}



function sortlowtohigh(){
	let sortlow=food.slice().sort(function(a,b){
		return a.amount-b.amount
	})
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(sortlow)
}
function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}



function sorthightolow(){
	let sorthigh=food.slice().sort(function(a,b){
		return b.amount-a.amount
	})
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(sorthigh)
}
function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}



function sortveg(){
	let itemveg=food.slice().filter(function(e){
		return e.item=="veg"
	})
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(itemveg)
}
function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}



function sortlessamount(){
	let lessamount=food.slice().filter(function(e){
		return e.amount<300
	})
	
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(lessamount)
}
function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}



function sortamount(){
	let amount=food.slice().filter(function(e){
		return e.amount>300 && e.amount<600
	})
	
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(amount)
}
function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}


function sortdeltime(){
	let sorttime=food.slice().sort(function(a,b){
		return a.preparation-b.preparation
	})
	let colsremove=document.querySelectorAll(".col")
	colsremove.forEach(function(e){
		e.remove()
	})
	itemrender(sorttime)
}

function sortrelavance(){
    let colsremove=document.querySelectorAll(".col")
    colsremove.forEach(function(e){
		e.remove()
	})	
       itemrender(food)	
}




