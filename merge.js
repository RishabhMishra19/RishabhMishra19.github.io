function merge_sort(){
    msortr([[0,len-1]],len);
}

function msortr(ob,tt){
    if(ob.length==0){
        return;
    }
    var ss = ob.pop();
    var low = ss[0] , high = ss[1];
    if(low==high){
        var l = document.getElementById(low);
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            msortr(ob,high);
        });
        l.style.background = bvhx;
    }
    else if(high==tt){
        go_up(ob,low,high,low);
    }
    else{//i need to sort it first
        var mid = Math.floor((low+high)/2);
        ob.push([low,high]);
        ob.push([mid+1,high]);
        ob.push([low,mid]);
        msortr(ob,high);
    }
}

function go_up(ob,low,high,i){
    if(i==high+1){
        var mid = Math.floor((low+high)/2);
        var val = [];
        for(var k=low;k<=high;k++){
            val.push(dta[k]);
        }
        merge(ob,low,high,low,mid,mid+1,high,0,val);
    }
    else{
        var l = document.getElementById(i);
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            if(i<=Math.floor((low+high)/2)){
                l.style.background = rdhx;
            }
            else{
                l.style.background = bluhx;
            }
            go_up(ob,low,high,i+1);
        });
        l.style.width = `${wdt*0.4}px`;
        l.style.height = `${dta[i]*hgtf*0.2}px`;
        l.style.left = `${dlft + low*wdt + ((high-low+1)*wdt*0.4)/2 + (i-low)*wdt*0.5}px`;
        l.style.top = `${dbtm - 310 - dta[i]*hgtf*0.2}px`;
    }
}

function merge(ob,low,high,l1,h1,l2,h2,i,val){
    //first transfer these to up with their color change 
    if(l2>h2 && l1>h1){
        for(var k=low;k<high;k++){
            document.getElementById(k-low+200).style.background = bvhx;
        }
        var l = document.getElementById(high-low+200);
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            for(var k=low;k<=high;k++){
                document.getElementById(200+k-low).id = k;
            }
            if(low==0 && high==len-1){
                for(var i=0;i<len;i++){
                    document.getElementById(i).style.background = grnhx;
                }
            }
            else{
                msortr(ob,high);
            }
        });
        l.style.background = bvhx;
    }
    else if((l2>h2) || (l1<=h1 && l2<=h2 && val[l1-low]<=val[l2-low])){
        var l = document.getElementById(l1);
        dta[low+i] = val[l1-low];
        l.id = (200+i);
        l.style.width = `${wdt}px`;
        l.style.height = `${val[l1-low]*hgtf}px`;
        l.style.left = `${dlft + low*wdt + i*wdt}px`;
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            merge(ob,low,high,l1+1,h1,l2,h2,i+1,val);
        });
        l.style.top = `${dbtm - val[l1-low]*hgtf}px`;
    }
    else{
        var l = document.getElementById(l2);
        dta[low+i] = val[l2-low];
        l.id = (200+i);
        l.style.width = `${wdt}px`;
        l.style.height = `${val[l2-low]*hgtf}px`;
        l.style.left = `${dlft + low*wdt + i*wdt}px`;
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            merge(ob,low,high,l1,h1,l2+1,h2,i+1,val);
        });
        l.style.top = `${dbtm - val[l2-low]*hgtf}px`;
    }
}