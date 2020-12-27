function insertion_sort(){
    isortr(0,0);
}



function isortr(k,i){
    if(i==len){
        for(var j=0;j<len;j++){
            document.getElementById(j).style.background = grnhx;
        }
    }
    else{
        var l1 = document.getElementById(k);
        if(l1.style.background!=bluhx){
            l1.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                mine();
            });
            l1.style.background = bluhx;
        }
        else{
            mine();
        }
        function mine(){
            if(k==0 || (k>0 && dta[k]>=dta[k-1])){
                l1.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    if(i==k){
                        isortr(i+1,i+1);
                    }
                    else{
                        var l3 = document.getElementById(i);
                        l3.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            isortr(i+1,i+1);
                        });
                        l3.style.background = ylwhx;
                    }
                });
                l1.style.background = ylwhx;
            }
            else{
                var l2 = document.getElementById(k-1);
                var tmp = l1.style.left;
                l1.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    l2.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        if(i==k){
                            l2.addEventListener('transitionend',function handler(e){
                                e.currentTarget.removeEventListener(e.type,handler);
                                swap(k,k-1);
                                isortr(k-1,i);
                            });
                            l2.style.background = rdhx;
                        }
                        else{
                            swap(k,k-1);
                            isortr(k-1,i);
                        }
                    });
                    l2.style.left = tmp;
                });
                l1.style.left = l2.style.left;
            }
        };
    }
}