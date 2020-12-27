//firstly i will relate algo type with upper algo heading
function updatealgotype(name)
{
    document.getElementsByClassName("sortheading")[0].innerHTML = name;
}
//now i will relate length with its text box
function updatelength()
{
var tmp = document.getElementById("lengthbox");
var k = document.getElementById("length");
tmp.value=k.value;
generaterandomnums();
}
//now i will relate speed with its text box
function updatespeed()
{
var tmp = document.getElementById("speedbox");
var k = document.getElementById("speed");
tmp.value=k.value;
k.focus = true;
}
//now i will relate length box with its length bar
function updatelengthbar()
{
    var tmp = document.getElementById("lengthbox");
    var k = document.getElementById("length");
    if(tmp.value>0 && tmp.value<=100)
    {
        k.value=tmp.value;
    }
    else if(tmp.value<1)
    {
        k.value = 1;
        tmp.value=1;
    }
    else
    {
        k.value = 100;
        tmp.value = 100;
    }
    generaterandomnums();
}
//now i will relate speed box with its speed bar
function updatespeedbar()
{
    var tmp = document.getElementById("speedbox");
    var k = document.getElementById("speed");
    if(tmp.value>0 && tmp.value<=100)
    {
        k.value=tmp.value;
    }
    else if(tmp.value<1)
    {
        k.value = 1;
        tmp.value=1;
    }
    else
    {
        k.value = 100;
        tmp.value = 100;
    }
}
//now i will make a random function which will generate random numbers in range 1 to 1000
function generaterandomnums()
{
    var len = document.getElementById("lengthbox").value;
    var s = "";
    for(var i=0;i<len-1;i++)
    {
        s = s+Math.floor(Math.random()*10000)%1001 + " , ";
    }
    s = s+Math.floor(Math.random()*10000)%1001;
    document.getElementById("array").value = s;
    forstarting();
}

var arr = [];
var id = [];
var speed=50;
var len=5;
var algo="";
var ymax=1000;
var xgap = Math.floor(900/len);
var grad = (410-0)/(ymax-0);
var canvas = document.getElementById("main");
var grnclrhx  = "#147d22";
var ylwclrhx = 'orange';
var bluclrhx = "#148de3";
var wait=1;

//now i will create function toset max height
function updatemaxheight(val)
{
    ymax=val;
    forstarting();
}

//function to draw rectangle
function insertdiv(i,x,y,xw,yw,clr) 
{
    var div = document.createElement('div');
    div.setAttribute('id', "0"+i);
    var k = `position:fixed;top:${Math.max(200+y,200)}px;left:${430+x}px;height:${610-Math.max(200+y,200)}px;width:${xw}px;background: ${clr};border-width: 1px;border-color: white;border-style: solid;`;
    k += `transition:left 200ms linear,background 100ms linear,width 200ms linear,height 200ms linear,top 200ms linear;box-sizing: border-box;`;
    div.setAttribute('style',k);
    document.getElementById('forrect').appendChild(div);
}

//in starting i need to set some things which i will do with this function
function forstarting()
{
    document.getElementById('forrect').innerHTML = "";
    var gap = ymax/4;
    speed = document.getElementById("speedbox").value;
    rawarray = document.getElementById("array").value;
    k = rawarray.split(" , ");
    if(k.length == 1)
    {
        k = rawarray.split(",");
    }
    arr=[];
    id = [];
    for(var i=0;i<k.length;i++)
    {
        arr.push(parseInt(k[i]));
        id.push(i);
    }
    len = arr.length;
    document.getElementById("lengthbox").value = len;
    algo = document.getElementsByClassName("sortheading")[0].innerText;
    //draw(0,0,900,410,"#090a0a",canvas);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#090a0a";
    ctx.fillRect(0, 0, 900, 410);
    xgap = Math.floor(900/len);
    grad = (410-0)/(ymax-0);
    for(var i=0;i<len;i++)
    {
        x = i*xgap;
        y = 410 - arr[i]*grad;
        xw = xgap;
        yw = arr[i]*grad;
        insertdiv(i,x-2,y-2,xw-2,yw,ylwclrhx);
    }
}   

//now lets write the main function startsorting
function startsorting()
{
    //now i have array ,its length,speed and algo type
    if(algo=="BUBBLE SORT")
    {
        bubble_sort_recursive(0,1);
    }
    else if(algo=="SELECTION SORT")
    {
        selection_sort_recursive(0,1,0);
    }
    else if(algo=="INSERTION SORT")
    {
        insertion_sort_recursive(1,1);
    }
    else if(algo=="QUICK SORT")
    {
        var obj = {};
        obj[len-1 + " " + 0] = {'low':0 , 'high':len-1};
        quick_sort(obj);
    }
    else
    {
        merge_sort(0,len-1);
    }
}

//write swap function
function swap(i,j)
{
    var tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;
    tmp = id[i];
    id[i]=id[j];
    id[j]=tmp;
}


//1)bubble_sort_recursive
function bubble_sort_recursive(i,j)
{
    if(j==len-i)
    {
        var l1 = document.getElementById(`0${id[j-1]}`);
        l1.addEventListener('transitionend',one);
        l1.style.background = grnclrhx;
        function one()
        {
            l1.removeEventListener('transitionend',one);
            bubble_sort_recursive(i+1,1);
        }
    }
    else if(len!=i)
    {
        var l1 = document.getElementById(`0${id[j-1]}`);
        var l2 = document.getElementById(`0${id[j]}`);
        var tmp = l1.style.left;
        l2.addEventListener('transitionend',three);
        l1.addEventListener('transitionend',two);
        l1.style.background = 'red';
        function two()
        {
            l1.removeEventListener('transitionend',two);
            l2.style.background = 'blue';
        }
        function three()
        {
            l2.removeEventListener('transitionend',three);
            if(arr[j]<arr[j-1])
            {
                swap(j-1,j);
                l2.addEventListener('transitionend',seven);
                l1.addEventListener('transitionend',six);
                l1.style.left = l2.style.left;

            }
            else
            {
                l2.addEventListener('transitionend',five);
                l1.addEventListener('transitionend',four);
                l1.style.background = ylwclrhx;
            }
        }
        function four()
        {
            l1.removeEventListener('transitionend',four);
            l2.style.background = ylwclrhx;
        }
        function five()
        {
            l2.removeEventListener('transitionend',five);
            bubble_sort_recursive(i,j+1);
        }
        function six()
        {
            l1.removeEventListener('transitionend',six);
            l2.style.left = tmp;
        }
        function seven()
        {
            l2.removeEventListener('transitionend',seven);
            l2.addEventListener('transitionend',nine);
            l1.addEventListener('transitionend',eight);
            l1.style.background= ylwclrhx;
        }
        function eight()
        {
            l1.removeEventListener('transitionend',eight);
            l2.style.background = ylwclrhx;
        }
        function nine()
        {
            l2.removeEventListener('transitionend',nine);
            bubble_sort_recursive(i,j+1);
        }
    }
}
//2)selection sort
function selection_sort_recursive(i,j,mini)
{
    if(j==len)
    {
        if(mini>i)
        {
            var l1 = document.getElementById(`0${id[i]}`);
            var l2 = document.getElementById(`0${id[mini]}`);
            swap(i,mini);
            var tmp = l2.style.left;
            l1.addEventListener('transitionend',two);
            l2.addEventListener('transitionend',one);
            l2.style.left = l1.style.left;
            function one()
            {
                l2.removeEventListener('transitionend',one);
                l1.style.left = tmp;
            }
            function two()
            {
                l1.removeEventListener('transitionend',two);
                l2.addEventListener('transitionend',three);
                l2.style.background = grnclrhx;
            }
            function three()
            {
                l2.removeEventListener('transitionend',three);
                if(l1.style.background!=ylwclrhx)
                {
                    l1.addEventListener('transitionend',four);
                    l1.style.background = ylwclrhx;
                }
                else
                {
                    selection_sort_recursive(i+1,i+2,i+1);
                }
                
            }
            function four()
            {
                l1.removeEventListener('transitionend',four);
                selection_sort_recursive(i+1,i+2,i+1);
            }
        }
        else
        {
            var l1 = document.getElementById(`0${id[mini]}`);
            l1.addEventListener('transitionend',ten);
            l1.style.background = grnclrhx;
            function ten()
            {
                l1.removeEventListener('transitionend',ten);
                selection_sort_recursive(i+1,i+2,i+1);
            }
        }
    }
    else if(i<len)
    {
        var l1 = document.getElementById(`0${id[i]}`);
        var l2 = document.getElementById(`0${id[j]}`);
        var l3 = document.getElementById(`0${id[mini]}`);
        l2.addEventListener('transitionend',six);
        l1.addEventListener('transitionend',five);
        if(l1.style.background!='blueviolet')
        {
            l1.style.background = 'blueviolet';
        }
        else
        {
            l1.removeEventListener('transitionend',five);
            l2.style.background = 'blue';
        }
        
        function five()
        {
            l1.removeEventListener('transitionend',five);
            l2.style.background = 'blue';
        }
        function six()
        {
            l2.removeEventListener('transitionend',six);
            if(arr[j]<arr[mini])
            {
                l2.addEventListener('transitionend',eight);
                mini = j;
                l2.style.background = 'red';
            }
            else
            {
                l2.addEventListener('transitionend',seven);
                l2.style.background = ylwclrhx;
            }
        }
        function seven()
        {
            l2.removeEventListener('transitionend',seven);
            selection_sort_recursive(i,j+1,mini);
        }
        function eight()
        {
            l2.removeEventListener('transitionend',eight);
            if(mini>i)
            {
                l3.addEventListener('transitionend',nine);
                l3.style.background = ylwclrhx;
            }
            else
            {
                selection_sort_recursive(i,j+1,mini);
            }
        }
        function nine()
        {
            l3.removeEventListener('transitionend',nine);
            selection_sort_recursive(i,j+1,mini);
        }
    }
}

//3)insertion sort
function insertion_sort_recursive(i,j)
{
    if(j==len)
    {
        for( var kk =0;kk<len;kk++)
        {
            document.getElementById(`0${kk}`).style.background = grnclrhx;
        }
        return;
    }
    else
    {
        var l1 = document.getElementById(`0${id[i]}`);
        var l2 = document.getElementById(`0${id[j]}`);
        var l3 = document.getElementById(`0${id[j-1]}`);
        var tmp = l2.style.left;
        l2.addEventListener('transitionend',one);
        if(l2.style.background!='blue')
        {
            l2.style.background = 'blue';
        }
        else
        {
            one();
        }
        function one()
        {
            l2.removeEventListener('transitionend',one);
            if(j==0 || arr[j]>=arr[j-1] )
            {
                l2.addEventListener('transitionend',two);
                l2.style.background = ylwclrhx;
            }
            else
            {
                swap(j,j-1);
                l2.addEventListener('transitionend',four);
                l2.style.left = l3.style.left;
            }
        }
        function two()
        {
            l2.removeEventListener('transitionend',two);
            if(i==j)
            {
                insertion_sort_recursive(i+1,i+1);
            }
            else
            {
                l1.addEventListener('transitionend',three);
                l1.style.background = ylwclrhx;
            }
        }
        function three()
        {
            l1.removeEventListener('transitionend',three);
            insertion_sort_recursive(i+1,i+1);
        }
        function four()
        {
            l2.removeEventListener('transitionend',four);
            l3.addEventListener('transitionend',five);
            l3.style.left = tmp;
        }
        function five()
        {
            l3.removeEventListener('transitionend',five);
            if(i!=j)
            {
                insertion_sort_recursive(i,j-1);
            }
            else
            {
                l3.addEventListener('transitionend',six);
                l3.style.background = 'blueviolet';
            }
        }
        function six()
        {
            l3.removeEventListener('transitionend',six);
            insertion_sort_recursive(i,j-1);
        }
    }
}

//4) quick sort
function quick_sort(obj)
{
    if(Object.entries(obj).length==0)
    {
        return;
    }
    var oo,low,high;
    oo = Object.entries(obj)[Object.entries(obj).length-1];
    low = oo[1].low;
    high = oo[1].high;
    while(low>high)
    {
        delete obj[oo[0]];
        if(Object.entries(obj).length==0)
        {
            return;
        }
        
        oo = Object.entries(obj)[Object.entries(obj).length-1];
        low = oo[1].low;
        high = oo[1].high;
        
    }
    //make border color blackof range (low,high)
    var l = document.getElementById(`0${id[high]}`);
    var l2 = document.getElementById(`0${id[low]}`);
    for(var kk=low;kk<=high;kk++)
    {
        document.getElementById(`0${id[kk]}`).style.borderColor = 'brown';
        document.getElementById(`0${id[kk]}`).style.borderWidth = '1px';
    }
    //make_border(low,high,this);
    //make last elm of this range as pivot element
    function one()
    {
        l.addEventListener('transitionend',two);
        l.style.background = 'blueviolet';
    }
    one();
    //make first item of this range as replacable placement( qucksort stuff:) )
    function two()
    {
        l.removeEventListener('transitionend',two);
        l2.addEventListener('transitionend',three);
        l2.style.background = 'red';
    }
    //then find its correctposition
    function three()
    {
        l2.removeEventListener('transitionend',three);
        getrightind(low-1,low,low,high,arr[high],obj);
    }
}
function middle(low,high,obj,pivotind)
{
        var pivotrightind = pivotind;
        //after finding swap last elm with its correct position
        var lp = document.getElementById(`0${id[pivotrightind]}`);
        var l = document.getElementById(`0${id[high]}`);
        var tmp = l.style.left;
        swap(pivotrightind,high);
        if(pivotind==high)
        {
            l.addEventListener('transitionend',eight);
            l.style.background = grnclrhx;
        }
        else
        {
            l.addEventListener('transitionend',five);
            l.style.left = lp.style.left;
        }
        
    function five()
    {
        l.removeEventListener('transitionend',five);
        lp.addEventListener('transitionend',six);
        lp.style.left = tmp;
    }
    function six()
    {
        lp.removeEventListener('transitionend',six);
        l.addEventListener('transitionend',eight);
        l.style.background = grnclrhx;
    }
    //now make border again white and make the elm which gets its correctposition green and then call respectively further ranges
    function eight()
    {
        l.removeEventListener('transitionend',eight);
        delete obj[Object.entries(obj)[Object.entries(obj).length-1][0]];
        obj[  +" " + high +" " +(pivotrightind+1)] = {'low':pivotrightind+1 , 'high':high};
        obj[   (pivotrightind-1) + " " +low] = {'low':low , 'high':pivotrightind-1};
        for(var kk=low;kk<=high;kk++)
        {
            document.getElementById(`0${id[kk]}`).style.borderColor = 'white';
            document.getElementById(`0${id[kk]}`).style.borderWidth = '0px';
        }
        quick_sort(obj);
    }
}

function getrightind(i,low,Low,high,pivotelm,obj)
{
    if(low==high)
    {
        middle(Low,high,obj,i+1);
    }
    else
    {
        var l1 = document.getElementById(`0${id[low]}`);
        var l2 = document.getElementById(`0${id[i+1]}`);
        var tmp = l1.style.left;
        l2.addEventListener('transitionend',three);
        if(l2.style.background!='red')
        {
            l2.style.background = 'red';
        }
        else
        {
            three();
        }
        function three()
        {
            l2.removeEventListener('transitionend',three);
            l1.addEventListener('transitionend',one)
            l1.style.background = 'blue';
        }
        
        function one()
        {
            l1.removeEventListener('transitionend',one);
            if(arr[low]>pivotelm)
            {
                l1.addEventListener('transitionend',two);
                if(low==i+1)
                {
                    l1.style.background = 'red';
                }
                else
                {
                    l1.style.background = ylwclrhx;
                }
            }
            else if(arr[low]<=pivotelm && i+1==low)
            {
                l1.addEventListener('transitionend',four);
                l1.style.background = ylwclrhx;
            }
            else 
            {
                l1.addEventListener('transitionend',five);
                swap(i+1,low);
                l1.style.left = l2.style.left;
            }
        }
        function two()
        {
            l1.removeEventListener('transitionend',two);
            getrightind(i,low+1,Low,high,pivotelm,obj);
        }
        function four()
        {
            l1.removeEventListener('transitionend',four);
            getrightind(i+1,low+1,Low,high,pivotelm,obj)
        }
        function five()
        {
            l1.removeEventListener('transitionend',five);
            l2.addEventListener('transitionend',eight);
            l2.style.left = tmp;
        }
        function eight()
        {
            l2.removeEventListener('transitionend',eight);
            l2.addEventListener('transitionend',six);
            if(l2.style.background!=ylwclrhx)
            {
                l2.style.background = ylwclrhx;
            }
            else
            {
                six();
            }
        }
        function six()
        {
            l2.removeEventListener('transitionend',six);
            l1.addEventListener('transitionend',suspicious);
            l1.style.background = ylwclrhx;
        }
        function suspicious()
        {
            l1.removeEventListener('transitionend',suspicious);
            getrightind(i+1,low+1,Low,high,pivotelm,obj);
        }
    }
}

//5) merge sort
function merge_sort(low,high)
{
    var stack1 = [[low,high]];
    var stack2 = [];
    while(stack1.length){
        var k = stack1.pop();
        if(k[0]!=k[1])
            k.push('m');
        stack2.push(k);
        if(k[0]!=k[1])
        {
            var mid = Math.floor((k[0]+k[1])/2);
            stack1.push([k[0],mid]);
            stack1.push([mid+1,k[1]]);
        }
    }
    merge_sort_display(stack2);
}

function merge_sort_display(stack2)
{
    if(stack2.length){
        var k = stack2.pop();
        if(k.length==3){
            var newcord = calculate_newcoordinate(k[0],k[1]);
            go_up(k[0],k[0],k[1],stack2,newcord);
        }
        else{
            var l = document.getElementById(`0${id[k[0]]}`);
            l.addEventListener('transitionend',callnext);
            l.style.background = 'blueviolet';
            function callnext(){
                l.removeEventListener('transitionend',callnext);
                merge_sort_display(stack2);
            }
        }
    }
    else{
        for(var i=0;i<len;i++){
            document.getElementById(`0${id[i]}`).style.background = grnclrhx;
        }
    }
}

function calculate_newcoordinate(low,high){
    var ret = { 'left':[] , 'top':[] , 'width':[] , 'height':[] , 'oldheight':[]};
    //lets define new width
    var nwdth = (xgap*(0.6));
    var leftgap = 0;
    var left = document.getElementById(`0${low}`).style.left;
    left = parseInt(left.substr(0,left.length-2));
    ret['oldleft'] = left;
    leftgap += left;
    for(var i=low;i<=high;i++){
        var l = document.getElementById(`0${id[i]}`);
        var top = l.style.top ,height = l.style.height;
        ret.oldheight.push(height);
        top = parseInt(top.substr(0,top.length-2));
        height= parseInt(height.substr(0,height.length-2));
        ret.left.push(`${(i-low)*nwdth + leftgap}px`);
        ret.width.push(`${nwdth}px`);
        ret.height.push(`${height*0.2}px`);
        ret.top.push(`${610-300-height*0.2}px`);
    }
    return ret;
}

function go_up(i,low,high,stack2,newcord){
    if(i==high+1){
        var mid = Math.floor((low+high)/2);
        merge(0,low,high,stack2,low,mid,mid+1,high,[],[],newcord,430 + low*xgap);
    }
    else{
        var l = document.getElementById(`0${id[i]}`);
        l.addEventListener('transitionend',one);
        l.style.left = newcord.left[i-low];
        l.style.top = newcord.top[i-low];
        l.style.width = newcord.width[i-low];
        l.style.height = newcord.height[i-low];
        if(i<=Math.floor((low+high)/2)){
            l.style.background = 'red';
        }
        else{
            l.style.background = 'blue';
        }
        function one(){
            l.removeEventListener('transitionend',one);
            go_up(i+1,low,high,stack2,newcord);
        }
    }
}

function merge(i,low,high,stack2,l1,h1,l2,h2,values,ids,newcord,leftgap){
    if(l1>h1 && l2>h2){
        for(var k=low;k<=high;k++){
            arr[k] = values[k-low];
            id[k] = ids[k-low];
            document.getElementById(`0${id[k]}`).style.background = 'blueviolet';
        }
        merge_sort_display(stack2);
    }
    else if((l1<=h1 && l2<=h2 && arr[l1]<arr[l2]) || (l2>h2)){
        //shift l1 to ith place and increment l1
        var l = document.getElementById(`0${id[l1]}`);
        l.addEventListener('transitionend',one);
        values.push(arr[l1]);
        ids.push(id[l1]);
        l.style.height = newcord.oldheight[l1-low];
        l.style.width = `${xgap}px`;
        l.style.top = `${  610  -  parseInt(newcord.oldheight[l1-low].substr(0,newcord.oldheight[l1-low].length-2))   }px`;
        l.style.left = `${leftgap + i*xgap}px`;
        function one(){
            l.removeEventListener('transitionend',one);
            merge(i+1,low,high,stack2,l1+1,h1,l2,h2,values,ids,newcord,leftgap);
        }
    }
    else{
        //shift l2 to ith place and increment l2
        var l = document.getElementById(`0${id[l2]}`);
        l.addEventListener('transitionend',two);
        values.push(arr[l2]);
        ids.push(id[l2]);
        l.style.height = newcord.oldheight[l2-low];
        l.style.width = `${xgap}px`;
        l.style.top = `${  610  -  parseInt(newcord.oldheight[l2-low].substr(0,newcord.oldheight[l2-low].length-2))   }px`;
        l.style.left = `${leftgap + i*xgap}px`;
        function two(){
            l.removeEventListener('transitionend',two);
            merge(i+1,low,high,stack2,l1,h1,l2+1,h2,values,ids,newcord,leftgap);
        }
    }
    
}

