let container= document.getElementById("container");

let page=1;
let flag=false;

const getData=async(api) =>{
  let res=await fetch (api);
  let data=await res.json();
  console.log(data);
  displaydata(data);
}

getData(`https://jsonplaceholder.typicode.com/photos?_${page}&_limit=10`);

const displaydata =(data) =>{
  data.forEach((ele) =>{
    let card=document.createElement("div");
    let image=document.createElement("img");
    image.src=ele.url;
    let title=document.createElement("h3");
    title.textContent=ele.title;
    card.append(image,title);
    container.append(card);

  })
  flag=true;
}


window.addEventListener("scroll",function(){
  let clientHeight=document.documentElement.clientHeight;
  let scrollHeight=document.documentElement.scrollHeight;
  let scrollTop=document.documentElement.scrollTop;
  console.log(clientHeight,scrollHeight,scrollTop);

  if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
    console.log("reach the bottom and fetch the data");
    page++;
    getData(`https://jsonplaceholder.typicode.com/photos?_${page}&_limit=10`);
flag=false;
  }
})