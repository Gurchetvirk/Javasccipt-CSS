var listItems = ["Mango","Banana","Apples","Grapes","PineApples"]
var ul = document.querySelector('.container > .list > ul');
var listItem = ul.children;
for(var i=0;i<listItem.length;i++)
{
    listItem[i].innerHTML=listItems[i];
}
var li = document.querySelector('.container > .list > ul > li:nth-child(3)');
var textField = document.querySelector('input[type=text]');
let count = 0;
li.addEventListener("mouseover",function(){
    if(count <= 0)
    {
        var div= document.createElement("div");
        var text = document.createTextNode("3rd Item Selected");
        div.append(text);
        li.append(div);
        count++;
    }
});

li.addEventListener("mouseout",function(){
    if(count > 0)
    {
        var newElement = document.querySelector('.container > .list > ul > li:nth-child(3) > div');
        newElement.remove();
        count--;
    }
});

textField.addEventListener('keydown',function()
    {
        var writingDiv = document.querySelector('.container > .input > .writing');
        writingDiv.style.display="block";
});
textField.addEventListener('keyup',function()
    {
        var writingDiv = document.querySelector('.container > .input > .writing');
        writingDiv.style.display="none";
});

var lastbtn = document.querySelector('.clickmebtn > button');
lastbtn.addEventListener("mouseover",function(){
    lastbtn.classList.add("new-btn-class");
    lastbtn.classList.remove("shrink");
});

lastbtn.addEventListener("mouseout",function(){
    lastbtn.classList.remove("new-btn-class");
    lastbtn.classList.add("shrink");
});