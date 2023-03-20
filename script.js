//home
document.getElementById("bar_home").onclick=function()
{
    document.getElementById("tanya").scrollIntoView();
}
//photo
document.getElementById("bar_photo").onclick=function()
{
    document.getElementById("mc").scrollIntoView();
}
//about
document.getElementById("bar_about").onclick=function()
{
    document.getElementById("me").scrollIntoView(false);
}
//insta
document.getElementById("bar_insta").onclick=function()
{
    document.getElementById("insta").scrollIntoView(false);
}
//contact
document.getElementById("bar_contact").onclick=function()
{
    document.getElementById("contact").scrollIntoView(true);
}
//sidebar
document.getElementById("side_insta").onclick=function()
{
    document.getElementById("insta").scrollIntoView(false);
}
document.getElementById("side_email").onclick=function()
{
    document.getElementById("contact").scrollIntoView(true);
}


//--insta---
let photoSrc=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"];
/*document.getElementById("close").onclick=function()
{
    document.body.style.backgroundColor = "#00000000";
    document.getElementById("header2").style.display="none";
   // document.getElementById("close").style.display="none";
    document.getElementById("header1").style.display="block";
    document.getElementById("header1").style.display="flex";
}
document.getElementById("hpaic").onclick=function()
{
    document.body.style.backgroundColor = "#00000057";
    
    document.getElementById("header2").style.display="block";
   // document.getElementById("close").style.display="block";
    document.getElementById("header1").style.display="none";
}
*/
$(document).ready(function(){
    $("#hpaic").click(function(){
       // document.body.style.backgroundColor = "#00000057";
        $("#header2").css("z-index","3");
        $("#header1").hide();
        $("#header2").fadeIn("slow");
        
    });
    $("#close").click(function(){
       // document.body.style.backgroundColor = "#00000000";
       $("#header2").css("z-index","2");
        $("#header2").hide();
        $("#header1").show();
        
    });
    

    $(".barItem").click(function(){
        $("#header2").hide();
        $("#header1").show();
    });

    
    $("#previous").click(function(){
        let temp=photoSrc[0];
        photoSrc[0]=photoSrc[1];
        photoSrc[1]=photoSrc[2];
        photoSrc[2]=photoSrc[3];
        photoSrc[3]=photoSrc[4];
        photoSrc[4]=photoSrc[5];
        photoSrc[5]=photoSrc[6];
        photoSrc[6]=photoSrc[7];
        photoSrc[7]=photoSrc[8];
        photoSrc[8]=photoSrc[9];
        photoSrc[9]=temp;
        $(".photo1").attr("src",photoSrc[0]);
        $(".photo2").attr("src",photoSrc[1]);
    });
    $("#next").click(function(){
        let temp=photoSrc[9];
        photoSrc[9]=photoSrc[8];
        photoSrc[8]=photoSrc[7];
        photoSrc[7]=photoSrc[6];
        photoSrc[6]=photoSrc[5];
        photoSrc[5]=photoSrc[4];
        photoSrc[4]=photoSrc[3];
        photoSrc[3]=photoSrc[2];
        photoSrc[2]=photoSrc[1];
        photoSrc[1]=photoSrc[0];
        photoSrc[0]=temp;
        $(".photo1").attr("src",photoSrc[0]);
        $(".photo2").attr("src",photoSrc[1]);
        
    });
});
let i=0;
let image_1=["img5.jpg","img9.jpg","img13.jpg","img17.jpg","img21.jpg","img25.jpg","img29.jpg","img33.jpg","img37.jpg","img41.jpg"];
let image_2=["img6.jpg","img10.jpg","img14.jpg","img18.jpg","img22.jpg","img26.jpg","img30.jpg","img34.jpg","img38.jpg","img42.jpg"];
let image_3=["img7.jpg","img11.jpg","img15.jpg","img19.jpg","img23.jpg","img27.jpg","img31.jpg","img35.jpg","img39.jpg","img43.jpg"];
let image_4=["img8.jpg","img12.jpg","img16.jpg","img20.jpg","img24.jpg","img28.jpg","img32.jpg","img36.jpg","img40.jpg","img44.jpg"];
let img_ptr=0;
document.getElementById("buttonMORE").onclick=function()
{
    if(i<10){
        let child=document.createElement("div");
        child.setAttribute("class","IPS");
        let parent=document.getElementById("instaPHOTOS");
        parent.appendChild(child);

        let image1=document.createElement("img");
        image1.setAttribute("src",image_1[img_ptr]);
        image1.setAttribute("alt","img1");
        image1.setAttribute("class","IP");

        let image2=document.createElement("img");
        image2.setAttribute("src",image_2[img_ptr]);
        image2.setAttribute("alt","img2");
        image2.setAttribute("class","IP");

        let image3=document.createElement("img");
        image3.setAttribute("src",image_3[img_ptr]);
        image3.setAttribute("alt","img3");
        image3.setAttribute("class","IP");

        let image4=document.createElement("img");
        image4.setAttribute("src",image_4[img_ptr]);
        image4.setAttribute("alt","img4");
        image4.setAttribute("class","IP");
        
        child.appendChild(image1);
        child.appendChild(image2);
        child.appendChild(image3);
        child.appendChild(image4);
        img_ptr=img_ptr+1;
    }
    i++;
    if(i==10)
    {
        document.getElementById("buttonMORE").style.display="none";
    }
}