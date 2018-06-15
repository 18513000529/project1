var oLi = document.getElementsByTagName('li');
var obox = document.getElementById('box');
for(var i=0;i<oLi.length;i++){
    oLi[i].index= i;
    oLi[i].onclick=function(){
        for(var j=0;j<oLi.length;j++){
            oLi[j].calssName='';
        }
        oLi[this.index].className='active';
        for(var a = 0;a<obox.length;a++){
        	obox[a].style.display="none";
        }
        obox[this.index].style.display='block';
    }
    function a(){
    	console.log(1)
    }
}