console.log("page loaded")
// var id = localStorage.getItem("id");
var playerscreen=document.getElementById('video-player');
var views=document.getElementById("views");
var title=document.getElementById("title");
var details=document.getElementById("details");
var heart=document.getElementById("heart");
var bookmark=document.getElementById("bookmark");
var videoTag=document.getElementById("video-tag");
var id = localStorage.getItem("id");
const localData = JSON.parse(localStorage.getItem("videoData"));
// var Data = JSON.parse(localStorage.getItem("videoData"));



function savedplaylist(Obj){
var maincard=document.createElement('div');
maincard.id='video-tag';

var image=document.createElement('img');
// image.src='https://upload.wikimedia.org/wikipedia/commons/c/cb/Takoyaki.jpg';
image.src=Obj.thumbnail;
image.id="thumbNails";
maincard.appendChild(image);
var tag=document.createElement('h2');
tag.innerHTML=Obj.title;
// tag.innerHTML="asdasda";
maincard.appendChild(tag);
// console.log(maincard);
maincard.style.border="none";
// console.log(Obj.length);
// maincard.style.backgroundColor="grey";
maincard.onclick=function(){
    localStorage.setItem("id", Obj.id);
    // location.reload();
    // console.log(id);
    // for(var i=0;i<10;i++){
    //     maincard.style.backgroundColor="grey";
    // }
    maincard.classList.remove("coloured");
    maincard.classList.add("coloured");
    // console.log(maincard.length);
    // maincard.classList.remove("coloured");
    

   
        
        var id = localStorage.getItem("id");
            playerscreen.src="https://player.vimeo.com/video/"+localData[id-1].vimeoId;
            views.innerHTML=localData[id-1].views/1000 + 'k' + ' '+ "views";
            title.innerHTML=localData[id-1].title;
            details.innerHTML=localData[id-1].description;
            // myplayer[id-1].style.border="2px blue solid";
            if(localData[id-1].isLiked===true || localData[id-1].isLiked==="true"){
                heart.style.color="yellow";
                // heart.classList.remove("unliked");
            }else {
                heart.style.color="black";
                // heart.classList.add("unliked");
                
            }
            if(localData[id-1].isSaved===true || localData[id-1].isSaved==="true"){
                bookmark.style.color="yellow";
                // heart.classList.remove("unliked");
            }else {
                bookmark.style.color="black";
                // heart.classList.add("unliked");
                
            }
            heart.onclick=function()
            {
                if(localData[id-1].isLiked===true || localData[id-1].isLiked==="true"){
                    localData[id-1].isLiked="false";
                    heart.style.color="black";
                    // heart.classList.remove("unliked");
                    localStorage.setItem("videoData", JSON.stringify(localData));
                }else {
                    localData[id-1].isLiked="true";
                    heart.style.color="yellow";
                    // heart.classList.add("unliked");
                    localStorage.setItem("videoData", JSON.stringify(localData));
                    
                }
                console.log(localData[1]);
                
            }
            bookmark.onclick=function(){
                if(localData[id-1].isSaved===true || localData[id-1].isSaved==="true"){
                    localData[id-1].isSaved="false";
                    bookmark.style.color="black";
                    // heart.classList.remove("unliked");
                    localStorage.setItem("videoData", JSON.stringify(localData));
                }else {
                    localData[id-1].isSaved="true";
                    bookmark.style.color="yellow";
                    // heart.classList.add("unliked");
                    localStorage.setItem("videoData", JSON.stringify(localData));
                    
                }
                console.log(localData[id-1]);
            }
            // console.log(localData[1]);

    }
    return maincard;

}








var mainDiv = document.getElementById('videoplaylist');
// mainDiv.appendChild(thumb);
// console.log(mainDiv)

var id = localStorage.getItem("id");

var xhttp1=new XMLHttpRequest();
xhttp1.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',true);
xhttp1.onreadystatechange = function() {
    if(this.readyState === 4) {
        
        var myplaylist=JSON.parse(this.responseText);
        // console.log(myplaylist[id]);
        // myplaylist[id-1].style.border="thick solid #0000FF";
        for(var i=0; i<myplaylist.length; i++) {
            mainDiv.appendChild(savedplaylist(myplaylist[i]));
            
        // myplaylist.onclick=function(){
        //     // for(var i=0;i<myplaylist.length;i++){
        //     //     videoTag.style.backgroundColor="grey";
        //     // }
        //     console.log(myplaylist[id]);
        //     myplaylist[id].style.backgroundColor="blue";
        // }
        }
        
}
}
xhttp1.send();



var xhttp2=new XMLHttpRequest();
xhttp2.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/video',true);
xhttp2.onreadystatechange = function() {
    if(this.readyState === 4) {
        var myplayer=JSON.parse(this.responseText);
        localStorage.setItem("videoData", JSON.stringify(myplayer));
    }
}
xhttp2.send();