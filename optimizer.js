(function(){const meals={vegetarian:[
{name:"Moong dal chilla",emoji:"🥞",cost:25,calories:220,protein:14,ingredients:["moong dal","onion","tomato","coriander"]},
{name:"Paneer bhurji with roti",emoji:"🫓",cost:48,calories:430,protein:25,ingredients:["paneer","roti","onion","tomato"]},
{name:"Curd rice & cucumber",emoji:"🥣",cost:28,calories:350,protein:11,ingredients:["rice","curd","cucumber"]},
{name:"Chana salad bowl",emoji:"🥗",cost:30,calories:290,protein:13,ingredients:["chickpeas","cucumber","tomato"]},
{name:"Soya pulao",emoji:"🍲",cost:35,calories:410,protein:23,ingredients:["soya chunks","rice","peas"]},
{name:"Banana curd bowl",emoji:"🍌",cost:20,calories:230,protein:9,ingredients:["banana","curd"]}],
vegan:[
{name:"Peanut poha",emoji:"🍚",cost:22,calories:310,protein:8,ingredients:["poha","peanuts","onion"]},
{name:"Moong dal chilla",emoji:"🥞",cost:25,calories:220,protein:14,ingredients:["moong dal","onion","tomato"]},
{name:"Rajma rice bowl",emoji:"🍛",cost:42,calories:480,protein:18,ingredients:["rajma","rice","tomato"]},
{name:"Chana salad bowl",emoji:"🥗",cost:30,calories:290,protein:13,ingredients:["chickpeas","cucumber","tomato"]},
{name:"Soya pulao",emoji:"🍲",cost:35,calories:410,protein:23,ingredients:["soya chunks","rice","peas"]},
{name:"Seasonal fruit",emoji:"🍎",cost:18,calories:90,protein:1,ingredients:["seasonal fruit"]}],
"non-vegetarian":[
{name:"Egg bhurji with roti",emoji:"🍳",cost:38,calories:390,protein:22,ingredients:["eggs","onion","tomato","roti"]},
{name:"Chicken rice plate",emoji:"🍗",cost:65,calories:520,protein:34,ingredients:["chicken","rice","vegetables"]},
{name:"Curd rice & cucumber",emoji:"🥣",cost:28,calories:350,protein:11,ingredients:["rice","curd","cucumber"]},
{name:"Moong dal chilla",emoji:"🥞",cost:25,calories:220,protein:14,ingredients:["moong dal","onion","tomato"]},
{name:"Egg sandwich",emoji:"🥪",cost:32,calories:330,protein:17,ingredients:["eggs","bread","onion"]},
{name:"Banana",emoji:"🍌",cost:12,calories:100,protein:1,ingredients:["banana"]}]};
function generate({budget=120,diet="vegetarian",goal="balanced",mealsPerDay=3,avoid=""}={}){const pool=meals[diet]||meals.vegetarian,blocked=avoid.toLowerCase().split(",").map(x=>x.trim()).filter(Boolean);let usable=pool.filter(m=>!m.ingredients.some(i=>blocked.some(b=>i.includes(b))));if(!usable.length)usable=pool;
 const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];const dailyBudget=Number(budget);const count=Number(mealsPerDay);const plan=days.map((day,di)=>{let selected=[];let remaining=dailyBudget;const sorted=[...usable].sort((a,b)=>goal==="muscle"?(b.protein/b.cost-a.protein/a.cost):(a.cost-b.cost));for(let j=0;j<count;j++){let candidates=sorted.filter(m=>!selected.includes(m));if(!candidates.length)candidates=sorted;let meal=candidates.find(m=>m.cost<=remaining/(count-j)*1.35)||candidates[0];selected.push(meal);remaining-=meal.cost;}return {day,meals:selected.map(m=>({...m})),cost:selected.reduce((s,m)=>s+m.cost,0),calories:selected.reduce((s,m)=>s+m.calories,0),protein:selected.reduce((s,m)=>s+m.protein,0)};});
 return {preferences:{budget:dailyBudget,diet,goal,mealsPerDay:count,avoid},days:plan,createdAt:new Date().toISOString()};}
window.PPOptimizer={generate};
})();
