var obj = [];
function quick_sort(){
    qsortr(-1,0,0,len-1);
}
function qsortr(i,Low,low,high){
    if(low>high){
        if(obj.length){
            var tmpp = obj.pop();
            qsortr(tmpp[0]-1,tmpp[0],tmpp[0],tmpp[1]);
        }
    }
    else if(low==high){
        var l1 = document.getElementById(i+1);
        var l2 = document.getElementById(high);
        var tmp = l2.style.left;
        if(i+1==high){
            l2.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                if(Low==high){
                    if(obj.length){
                        var tmpp = obj.pop();
                        qsortr(tmpp[0]-1,tmpp[0],tmpp[0],tmpp[1]);
                    }
                }
                else{
                    qsortr(Low-1,Low,Low,i);
                }
            });
            l2.style.background = grnhx;
        }
        else{
            if(l1.style.background!=rdhx){
                l1.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    mine();
                });
                l1.style.background=rdhx;
            }
            else{
                mine();
            }
            function mine(){
                l2.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    l1.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        l2.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            l1.addEventListener('transitionend',function handler(e){
                                e.currentTarget.removeEventListener(e.type,handler);
                                if(i+2<=high){
                                    obj.push([i+2,high]);
                                }
                                swap(i+1,high);
                                qsortr(Low-1,Low,Low,i);
                            });
                            l1.style.background = ylwhx;
                        });
                        l2.style.background = grnhx;
                    });
                    l1.style.left = tmp;
                });
                l2.style.left = l1.style.left;
            }
        }
    }
    else{
        var l1 = document.getElementById(i+1);
        var l2 = document.getElementById(high);
        var l3 = document.getElementById(low);
        var tmp = l3.style.left;
        if(l2.style.background!=bvhx){
            l2.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                mine();
            });
            l2.style.background = bvhx;
        }
        else{
            mine();
        }
        function mine(){
            if(l1.style.background!=rdhx){
                l1.addEventListener('transitionend',function handler(e){
                    e.currentTarget.removeEventListener(e.type,handler);
                    mine2();
                });
                l1.style.background = rdhx;
            }
            else{
                mine2();
            }
        }
        function mine2(){
            l3.addEventListener('transitionend',function handler(e){
                e.currentTarget.removeEventListener(e.type,handler);
                if(dta[low]>dta[high]){
                    l3.addEventListener('transitionend',function handler(e){
                        e.currentTarget.removeEventListener(e.type,handler);
                        qsortr(i,Low,low+1,high);
                    });
                    l3.style.background = ylwhx;
                }
                else{
                    if(i+1==low){
                        l3.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            qsortr(i+1,Low,low+1,high);
                        });
                        l3.style.background = ylwhx;
                    }
                    else{
                        l3.addEventListener('transitionend',function handler(e){
                            e.currentTarget.removeEventListener(e.type,handler);
                            l1.addEventListener('transitionend',function handler(e){
                                e.currentTarget.removeEventListener(e.type,handler);
                                l3.addEventListener('transitionend',function handler(e){
                                    e.currentTarget.removeEventListener(e.type,handler);
                                    l1.addEventListener('transitionend',function handler(e){
                                        e.currentTarget.removeEventListener(e.type,handler);
                                        swap(i+1,low);
                                        qsortr(i+1,Low,low+1,high);
                                    });
                                    l1.style.background = ylwhx;
                                });
                                l3.style.background = ylwhx;
                            });
                            l1.style.left = tmp;
                        });
                        l3.style.left = l1.style.left;
                    }
                }
            });
            l3.style.background = bluhx;
        }
    }
}