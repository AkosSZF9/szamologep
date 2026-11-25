let elsoSzamjegySzovege = 0 /* változót létrehoztok és értéke 0-ra */
let masodikSzamjegySzovege = "" 
let muvelet = ""

const szamok = document.getElementsByClassName("szam") /* eredménye lista - megfogjuk a szam classnévvel ellátot */
const fosok = document.getElementsByClassName("fos") /* eredménye lista */
const kiiro = document.getElementById("kiirato")
const egyenlo = document.getElementById("egyenlo")
console.log(szamok[0].textContent)

for(let index = 0; index < szamok.length; index++){
    szamok[index].addEventListener("click", beir)
}

function beir(event){
    /* az input nezőbe írjabe a számokat a, amikre kattintunk */
    /* Mi jeleníti meg a számot: */
    console.log(event.target)
    console.log(event.target.textContent)
    kiiro.value += event.target.textContent /* inputelembe beírja annak az elemnek az értékét  */
    /* kiiro input elem, value-ja van */
}

/* ha rákkatintunk egy műveletei jelre, akkor: 
1. Mentsük el a inputelem tartalmát az elsoSzamjegySzovege változoban
2. A műveleti jelet mentsük el a múvelet változóba
3. Töröljük ki az inputelem tartalmát */

for (let index = 0; index < fosok.length; index++){
    fosok[index].addEventListener("click", muveletElvegzese)
}

function muveletElvegzese(event){
    elsoSzamjegySzovege = kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent) /* ez visszaadja a műveleti jelet */
    muvelet = event.target.textContent
    kiiro.value = ""
}

/* Egyenlőség jel működése:
1. Ha rákkantintunk az egyenlőségjelre,
2. Akkor a masodikSzamjegySzovege mentsük el az input mezo tartalmat
3. Végezzük el a muveletet az elsoSzamjegySzovege és a masodikSzamjegySzovege számok között 
4. Az eredményt írjuk ki az input elembe*/

egyenlo.addEventListener("click", szamolas)

function szamolas(){
    masodikSzamjegySzovege = kiiro.value
    /* ide kell egy elágazás a műveleti jel szerint */
    if (muvelet == "+"){
        let eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    if  (muvelet == "-"){
        let eredmeny = Number(elsoSzamjegySzovege) - Number(masodikSzamjegySzovege)
    }
    if (muvelet == "*"){
        let eredmeny = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    if (muvelet == "/" && masodikSzamjegySzovege !="0"){
        let eredmeny = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }
    kiiro.value = eredmeny  
}

const torles = document.getElementById("torles")
torles.addEventListener("click", kitorles)

function kitorles(){
    kiiro.value = ""
    elsoSzamjegySzovege = ""
    masodikSzamjegySzovege =""
}
