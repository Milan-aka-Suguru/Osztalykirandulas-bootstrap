let tav = 250;
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
function szamol(f,n,u){
    function busz(km,nap,utas){
        return ['&nbsp;km:',640*km*Math.ceil(utas/49)+'Ft','&nbsp;napi:',40000*nap*Math.ceil(utas/49)+'Ft']
    }
    function auto(km){
        return ['km:',84*km,'benzin:',(0.07*1.5*km)]
    }
    function tomegk(ut,fo){
        return ut*fo*2600
    }
        if(u.toLowerCase()=="busz"){
            console.log(u)
            document.getElementById('ered').innerHTML='A busz:'+busz(tav,n,f)+'\nA szállás az egész foglalási időre:&nbsp;'+szar(f,n)+'Ft.'            
        }else if(u.toLowerCase()=='autó'){
            console.log(u)
            document.getElementById('ered').innerHTML=auto(tav,f)[1]+auto(tav,f)[3]+szar((f+Math.ceil(f/4)),n)+'Ft.'
        }else if(u.toLowerCase()=='tömegközlekedés'){
            console.log(u)
            document.getElementById('ered').innerHTML=tomegk(tav,f)+szar((f+Math.ceil(f/4)),n)+'Ft.'
    }
}
