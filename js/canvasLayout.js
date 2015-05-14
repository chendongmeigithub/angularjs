function drawTop(obj){
    var top = document.getElementById(obj);
    var width= screen.availWidth;
    var height= screen.availHeight;
    document.getElementById(obj).setAttribute("width",1000);
    document.getElementById(obj).setAttribute("height",120);
    top = top.getContext("2d");
    top.fillStyle = "gray";
    top.fillRect(0,0,width,height);
    top.clearRect(0,0,width,height);
    //设置头部
    top.save();//保存当前环境的状态。
    top.lineWidth=1;
    top.strokeRect(0,0,1000,120)
    top.font="30px Arial";
    top.fillStyle=top;
    top.fillText("Top",450,60);
}
drawTop("top");
