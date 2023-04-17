let tav = 250;
let tanulok = 49;
let tanar = 1;
let sofor = 1;
//meg tudom magyarázni!!! sz = szállás ar = ár, rossz az aki rosszra gondol 😁
function szar(N,M){    
    switch(true){
        case (N>=30):
            if (M>=2){
                return 9000*0.9
            }
            return 9000
        case (29>=N&&N>=20):
            if (M>=2){
                return 10000*0.9
            }
            return 10000
        case (19>=N&&N>=10):
            if (M>=2){
                return 11000*0.9
            }
            return 11000
        case (N>=1&&N<=9):
            if (M>=2){
                return 12500*0.9
            }
            return 12500
        case (N<=0):
            alert('Hiba.')
    }
}
function busz(km,nap,utas){
    return ['km:',640*km*Math.ceil(utas/49),'napi:',40000*nap*Math.ceil(utas/49)]
}
function auto(km){
    return ['km:',84*km,'benzin:',(0.07*1.5*km)]
}
function tomegk(ut,fo){
    return ut*fo*2600
}
