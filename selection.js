function selection_sort(){
    ssortr(0,1,0);
}


function ssortr(low,i,mi){
    if(low==len){
        return;
    }
    else if(i==len){
        var l1 = document.getElementById(mi);
        var l2 = document.getElementById(low);
        var tmp = l1.style.left;
        if(mi==low){
            l2.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                ssortr(low+1,low+2,low+1);
            });
            l2.style.background = grnhx;
        }
        else{
            l1.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                l2.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    l1.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        l2.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            swap(mi,low);
                            ssortr(low+1,low+2,low+1);
                        });
                        l2.style.background = ylwhx;
                    });
                    l1.style.background = grnhx;
                });
                l2.style.left = tmp;
            });
            l1.style.left = l2.style.left;
        }
    }
    else{
        var l = document.getElementById(low);
        if(l.style.background!=bvhx){
            l.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                mine();
            });
            l.style.background = bvhx;
        }
        else{
            mine();
        }
        function mine(){
            var l1 = document.getElementById(mi);
            var l2 = document.getElementById(i);
            l2.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                if(dta[i]<dta[mi]){
                    if(mi==low){
                        l2.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            ssortr(low,i+1,i);
                        });
                        l2.style.background = rdhx;
                    }
                    else{
                        l1.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            l2.addEventListener('transitionend',function handler(e){
                                e.currentTarget.removeEventListener(e.type,handler);
                                ssortr(low,i+1,i);
                            });
                            l2.style.background = rdhx;
                        });
                        l1.style.background = ylwhx;
                    }
                }
                else{
                    l2.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        ssortr(low,i+1,mi);
                    });
                    l2.style.background = ylwhx;
                }
            });
            l2.style.background = bluhx;
        }
    }
}