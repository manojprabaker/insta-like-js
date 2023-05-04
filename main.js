// let likeBtn=document.getElementsByClassName("like-btn");
// let unlikeBtn=document.getElementsByClassName("unlike-btn");
// let count=document.getElementById("like-counter");
// let countVal=document.getElementById("like-counter").innerText;
//  countVal=parseInt(countVal);

//  for(let i=0; i < likeBtn.length; i++){
// 	likeBtn[i].addEventListener('click', like);
// 	unlikeBtn[i].addEventListener('click', unlike);
//   }
// function like(){
// 	this.classList.toggle("liked");
// 	this.nextElementSibling.classList.toggle("liked");
// 	countVal++;
// 	count.innerText=`${countVal} likes`;
// 	console.log("vs");
// };
// function unlike(){
// 	likeBtn.classList.toggle("liked");
// 	unlikeBtn.classList.toggle("liked");
// 	countVal--;
// 	count.innerText=`${countVal} likes`;
// 	console.log("vs");
// };


let likes=document.getElementsByClassName("like");

for(let i=0; i < likes.length; i++){
	 	likes[i].addEventListener('click',likefn);
}

function likefn(){
	let ele=this.getElementsByTagName("i")[0];
	let count=this.parentNode.getElementsByTagName("span")[0].innerText;
	count=parseInt(count);
	if((ele.classList.contains("active"))==true)
	{
	this.getElementsByTagName("i")[0].classList.toggle("active");
	count--;
	console.log("if");
	this.parentNode.getElementsByTagName("span")[0].innerText=`${count} likes`;
	}
	else
	{
	this.getElementsByTagName("i")[0].classList.toggle("active");
	count++;
	console.log("else")
	this.parentNode.getElementsByTagName("span")[0].innerText=`${count} likes`;

		console.log("hahha");
	}
	
}