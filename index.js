var len,lmt,spd,dta,algo,wdt,hgtf,dwdt=800,dhgt=400,dbtm=400,dlft=0 , grnhx='green',ylwhx='yellow',bluhx = 'blue',rdhx='red',bvhx='blueviolet';

//function to assign every variable
function assign(){
	len = parseInt(document.getElementById('lengthrange').value);
	lmt = parseInt(document.getElementById('limitrange').value);
	spd = parseInt(document.getElementById('speedrange').value);
	spd = 1 - spd/100;
	algo = document.getElementById('lefttop').innerText;
	var tmp = document.getElementById('databox').value.split(',');
	wdt = dwdt/len;
	hgtf = dhgt/lmt;
	dta=[];
	random_num();
	change_line();
	display_lines();
}

//function that will add lines
function display_lines(){
	id=[];
	var k = document.getElementById('right');
	k.innerHTML = "";
	for(var i=0;i<len;i++){
		var div = document.createElement('div');
		div.setAttribute('id', i);
		div.style.position = 'absolute';
		div.style.boxSizing = 'border-box';
		div.style.left = `${dlft + i*wdt}px`;
		div.style.width = `${wdt}px`;
		div.style.height = `${dta[i]*hgtf}px`;
		div.style.top = `${dbtm-dta[i]*hgtf}px`;
		div.style.background = ylwhx;
		div.style.border = '1px solid black';
		div.style.transition = `background ${spd*200 + 15}ms linear,left ${spd*700 + 30}ms linear,top ${spd*700 + 30}ms linear,width ${spd*700 + 30}ms linear,height ${spd*700 + 30}ms linear`;
		k.appendChild(div);
	}
}
//function for generating random numbers
document.getElementById('button1').addEventListener('click',function(){
	random_num();
	display_lines();
	this.blur();
})

//this function is for generating random numbers 
function random_num(){
	var s = "";
	dta=[];
	for(var i=0;i<len;i++){
		var k = 1 + Math.floor(Math.random()*10000)%(lmt);
		s = s+ k + ",";
		dta.push(k);
	}
	document.getElementById('databox').value = s.substr(0,s.length-1);
}

//this function will change y coordinates
function change_line(){
	var s = "";
	var k = Math.floor(lmt/10);
	for(var i=10;i>=0;i--){
		s = s + (k*i) +"</br>";
	}
	document.getElementById('yaxis').innerHTML = s;
}

//event whenever rangelength changes
document.getElementById('lengthrange').addEventListener('change',function(){
	len = Math.floor((parseInt(this.value)+5-1)/5)*5;
	wdt = dwdt/len;
	this.value = len;
	document.getElementById('lengthbox').value = this.value;
	random_num();
	display_lines();
})

//event whenever limitlength changes
document.getElementById('limitrange').addEventListener('change',function(){
	lmt = Math.floor((parseInt(this.value)+100-1)/100)*100;
	hgtf = dhgt/lmt;
	this.value = lmt;
	document.getElementById('limitbox').value = this.value;
	random_num();
	change_line();
	display_lines();
})

//event whenever speedlength changes
document.getElementById('speedrange').addEventListener('change',function(){
	spd = Math.floor((parseInt(this.value)+5-1)/5)*5;
	this.value = spd;
	document.getElementById('speedbox').value = this.value;
	spd = 1 - spd/100;
	display_lines();
})

//event whenever lengthbox changes
document.getElementById('lengthbox').addEventListener('change',function(){
	len = Math.floor((parseInt(this.value)+5-1)/5)*5;
	len = Math.min(len,100);
	len = Math.max(len,5);
	wdt = dwdt/len;
	this.value = len;
	document.getElementById('lengthbox').value = len;
	this.blur();
	random_num();
	display_lines();
})

//event whenever limitbox changes
document.getElementById('limitbox').addEventListener('change',function(){
	lmt = Math.floor((parseInt(this.value)+100-1)/100)*100;
	lmt = Math.min(lmt,1000);
	lmt = Math.max(lmt,100);
	hgtf = dhgt/lmt;
	this.value = lmt;
	document.getElementById('limitrange').value = this.value;
	this.blur();
	change_line();
	display_lines();
})

//event whenever speedbox changes
document.getElementById('speedbox').addEventListener('change',function(){
	spd = Math.floor((parseInt(this.value)+5-1)/5)*5;
	spd = Math.min(spd,100);
	spd = Math.max(spd,5);
	this.value = spd;
	document.getElementById('speedrange').value = this.value;
	spd = 1 - spd/100;
	display_lines();
	this.blur();
})

//event whenever algo changes
document.getElementById('select').addEventListener('change',function(){
	algo = this.value;
	document.getElementById('lefttop').innerText = this.value;
	assign();
	this.blur();
})

//event whenever data changes
document.getElementById('databox').addEventListener('change',function(){
	tmp = this.value.split(",");
	if((tmp.length==1 && tmp[0]=="") || tmp.length>100){
		alert('length of input array should be in range (1,100)');
		random_num();
		display_lines();
	}
	else if(tmp.length%5!=0){
		alert('length of input array should be multiple of 5');
		random_num();
		display_lines();
	}
	else{
		dta=[];
		for(var i=0;i<tmp.length;i++){
			if(parseInt(tmp[i])>1000 || parseInt(tmp[i])<1){
				alert('value should be in range(1,1000)')
				random_num();
				display_lines();
			}
			dta.push(parseInt(tmp[i]));
		}
		len = dta.length;
		wdt = dwdt/len;
		document.getElementById('lengthrange').value = len;
		document.getElementById('lengthbox').value = len;
		display_lines();
	}
	this.blur();
})

//function which will start sorting
function start_sorting(tt){
	tt.blur();
	if(algo=="BUBBLE SORT"){
        bubble_sort();
    }
    else if(algo=="SELECTION SORT"){
        selection_sort();
    }
    else if(algo=="INSERTION SORT"){
        insertion_sort();
    }
    else if(algo=="QUICK SORT"){
        quick_sort();
    }
    else{
        merge_sort();
    }
}

//swap function
function swap(i,j)
{
    var tmp=dta[i];
    dta[i]=dta[j];
	dta[j]=tmp;
	document.getElementById(i).id = 200;
	document.getElementById(j).id = i;
	document.getElementById(200).id = j;
}