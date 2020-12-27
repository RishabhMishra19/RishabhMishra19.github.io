function bubble_sort(){
    var l = document.getElementById(0);
    l.addEventListener('transitionend',function handler(e){
        e.currentTarget.removeEventListener(e.type,handler);
        bsortr(1,len);
    });
    l.style.background = bluhx;  
}



function bsortr(low,high){
    if(low==high){
        var l = document.getElementById(low-1);
        l.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            if(high>1){
                l = document.getElementById(0);
                l.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    bsortr(1,high-1);
                });
                l.style.background = bluhx;  
            }
        });
        l.style.background = grnhx;  
    }
    else if(dta[low]>=dta[low-1]){
        var l1 = document.getElementById(low);
        var l2 = document.getElementById(low-1);
        l1.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            l2.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                bsortr(low+1,high);
            });
            l2.style.background = ylwhx; 
        });
        l1.style.background = bluhx;  
    }
    else{
        var l1 = document.getElementById(low);
        var l2 = document.getElementById(low-1);
        var tmp = l1.style.left;
        l1.addEventListener('transitionend',function handler(e){
            e.currentTarget.removeEventListener(e.type,handler);
            l1.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                l2.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    l1.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        swap(low,low-1);
                        bsortr(low+1,high);
                    });
                    l1.style.background = ylwhx; 
                });
                l2.style.left = tmp;
            });
            l1.style.left = l2.style.left;
        });
        l1.style.background = bluhx; 
    }
}

