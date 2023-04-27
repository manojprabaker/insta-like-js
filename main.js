let likeBtn=document.getElementById("like-btn");
let unlikeBtn=document.getElementById("unlike-btn");
let count=document.getElementById("like-counter");
let countVal=document.getElementById("like-counter").innerText;
 countVal=parseInt(countVal);


likeBtn.addEventListener("click",function(){
	likeBtn.classList.toggle("liked");
	unlikeBtn.classList.toggle("liked");
	countVal++;
	count.innerText=`${countVal} likes`;
	console.log("vs");
});
unlikeBtn.addEventListener("click",function(){
	likeBtn.classList.toggle("liked");
	unlikeBtn.classList.toggle("liked");
	countVal--;
	count.innerText=`${countVal} likes`;
	console.log("vs");
})


