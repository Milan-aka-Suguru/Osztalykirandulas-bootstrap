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
//a fohoz ne felejtsd belevenni a tanárt is lmao
class prototipus{
    constructor(fo,km=0,ut=0,nap){
        this.fo = fo;
        this.fo2 = fo;
        this.km = km;
        this.ut = ut;
        this.nap = nap;
        this.k = kocsi(this.km,this.fo,this.nap,this.fo2)
        this.b = bu(this.fo,this.km,this.nap,this.fo2)
        this.t = tomeg(this.fo,this.ut,this.nap)
    }
    tomeg(fo,ut,nap){
        return tomegk(ut,fo)/fo+szar(fo,nap)/fo
    }
    bu(fo,km,nap,fo2){        
        if (fo >= 50){
            fo2 += Math.ceil(fo/49)
        }
        return busz(km,nap,fo)[busz(km,nap,fo).findIndex('km:')+1]+busz(km,nap,fo)[busz(km,nap,fo).findIndex('napi:')+1]+szar((fo+fo2),nap)
    }
    kocsi(km,fo,nap,fo2){
        if (fo >= 5){
            fo2 += Math.ceil(fo/3)
        }        
        return auto(km)[auto(km).findIndex('km:')+1]+szar((fo+fo2),nap)
    }
}