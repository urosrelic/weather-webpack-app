(()=>{"use strict";const e=e=>{const t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("weather"),async function(e){const t=`https://api.weatherapi.com/v1/forecast.json?key=3bef9b2d9209479bb84140228231412&q=${e}&days=4&aqi=no&alerts=no`,n=await fetch(t);return await n.json()}(e).then((e=>{console.log(e),t.innerHTML="";const c=document.createElement("span");c.classList.add("location"),c.textContent=`${e.location.name}`;const a=(new Date).toLocaleString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"});console.log(a);const o=document.createElement("span");o.classList.add("date-info"),o.textContent=a;const s=document.createElement("div");s.classList.add("weather-info");const d=document.createElement("div");d.classList.add("temperature-div");const r=document.createElement("img");r.classList.add("weather-img"),r.src=e.current.condition.icon;const i=document.createElement("span");i.classList.add("temperature-value"),i.textContent=`${e.current.temp_c} °C`,console.log(i),d.append(r,i);const m=document.createElement("div");m.classList.add("stats-div"),((e,t)=>{const n=document.createElement("div");n.classList.add("stats");const c=document.createElement("span");c.textContent="Wind";const a=document.createElement("div");a.classList.add("stats");const o=document.createElement("span");o.textContent="Feels Like";const s=document.createElement("div");s.classList.add("stats");const d=document.createElement("humidity");d.textContent="Humidity",n.append(c,`${t.current.wind_kph} kph`),a.append(o,`${t.current.feelslike_c} °C`),s.append(d,`${t.current.humidity} %`),e.append(n,a,s)})(m,e);const l=((e,t)=>{const n=document.createElement("div");n.classList.add("forecast-div");for(let e=1;e<=3;e++){const c=document.createElement("div");c.classList.add("forecast");const a=document.createElement("span"),o=new Date(t?.forecast?.forecastday?.[e]?.date);a.textContent=o.toLocaleDateString("en-US",{weekday:"long"});const s=document.createElement("div");s.classList.add("condition-div");const d=document.createElement("img");d.src=t?.forecast?.forecastday?.[e]?.day?.condition?.icon,s.append(d,t?.forecast?.forecastday?.[e]?.day?.condition?.text);const r=document.createElement("span");r.textContent=`Min temp: ${t?.forecast?.forecastday?.[e]?.day?.mintemp_c} °C`;const i=document.createElement("span");i.textContent=`Max temp: ${t?.forecast?.forecastday?.[e]?.day?.maxtemp_c} °C`,c.append(a,s,r,i),n.append(c)}return n})(0,e);s.append(d,m),n.append(c,o,s,l),t.append(n)})).catch((e=>{console.error("Error fetching weather data:",e);const n=document.createElement("span");n.classList.add("error-msg"),n.innerHTML="Error fetching weather data <br> Please check your input",t.innerHTML="",t.append(n)}))};(()=>{document.querySelector("body");const e=document.querySelector("header"),t=document.createElement("h1");t.textContent="Weather App";const n=document.createElement("nav"),c=document.createElement("form");c.method="get";const a=document.createElement("div");a.classList.add("search-div");const o=document.createElement("i");o.classList.add("fa-solid"),o.classList.add("fa-magnifying-glass");const s=document.createElement("input");s.type="search",s.classList.add("search-input");const d=document.createElement("input");d.type="submit",d.classList.add("submit-button"),d.textContent="Search",c.append(o,s,d),a.append(c),n.append(a),e.append(t,a)})(),e("Miami");const t=document.querySelector(".search-input");document.querySelector(".submit-button").addEventListener("click",(n=>{n.preventDefault();let c=t.value;e(c)}))})();