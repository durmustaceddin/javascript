// Soru1

// let birinci_sayi = parseInt(prompt("Bir sayi giriniz"))
// let ikinci_sayi = parseInt(prompt("Bir sayi giriniz"))
// let ucuncu_sayi = parseInt(prompt("Bir sayi giriniz"))


// let sayi= (birinci_sayi + ikinci_sayi + ucuncu_sayi )/3

// alert(sayi)

// Bu soruya EXTRA: girdiğin sayıların ortalaması virgüüllü olduğunda bile tam sayı versin ve .toFixed sayıyı neden yuvarlıyor bul

// --------------------------------------------------------------------------------------------------------------------------------------

// Soru2

// let üçgen_a = parseInt(prompt("Üçgenin A köşesinin ölçüsünü yazınız"))
// let üçgen_b = parseInt(prompt("Üçgenin B köşesinin ölçüsünü yazınız"))
// let asd = parseInt(kalan_açı)

// let kalan_açı = 180 - (üçgen_a + üçgen_b)
// prompt("Üçgenin C köşesinin ölçüsünü yazınız", kalan_açı)


//  if (üçgen_a === 60 && üçgen_b === 60 && kalan_açı === 60) {
//     console.log("Girdiğiniz üçgen çeşidi: " + "Eşkenar Üçgen")

// } else if ((üçgen_a === üçgen_b)  || üçgen_a === kalan_açı || kalan_açı === üçgen_b) {
//     console.log("Girdiğiniz üçgen çeşidi: " + "İkizkenar Üçgen")

// } else {
//     console.log("Girdiğiniz üçgen çeşidi: "+"Çeşitkenar Üçgen")
// }



// -----------------------------------------------------------------------------------------------------------------------------------------

//Soru3

// let vize_notu = parseInt(prompt("Vize Notunuzu Giriniz"))
// let final_notu = parseInt(prompt("Final Notunuzu Giriniz"))

// let oratalama = vize_notu*0.4+final_notu*0.6

// if(oratalama===50){
//     console.log("wows tam 50 ile geçtiniz,avarege:"+oratalama )

// }


// else if(oratalama>50){
//     console.log("Congratulations your passed,avarege:"+oratalama)

// }else {
//     console.log("Ah no sorry your stayed,avarege:"+oratalama)
// }



// -----------------------------------------------------------------------------------------------------------------------------------------

// Soru4
// for (i = 1; i < 6; i++) {
//     console.log(i + "Muhammed Taceddin DURMUŞ for")

// }
// console.log(" ")
// let sayi = 1
// while (sayi < 6) {
//     console.log(sayi + "Muhammed Taceddin DURMUŞ while")
//     sayi++;
// }
// console.log(" ")

// let yas=19
// do{
//     console.log(yas+"Muhammed Taceddin Durmuş do while")
//     yas++;
// } while(yas<24)


// console.log(" ")









// for (let i = 0; i < 29; i++) {
//     console.log(i + "Muhammed Taceddin Durmuş do break")
//     if (i === 5) {
//         break;
//     }
// }

// console.log(" ")


// for (let i = 0; i <6 ; i++) {
//     if (i === 0) {
//         continue
//     }
//     console.log(i+"Muhammed Taceddin Durmuş continue")
// }


// -----------------------------------------------------------------------------------------------------------------------------------------

// Soru5

//     let toplam = 0
// for (let i = 1; i < 100; i++) {
//     parseInt(i)

// toplam+= i

// }
// console.log(toplam)


// -----------------------------------------------------------------------------------------------------------------------------------------

// Soru6

// let yazdirilcak_metin =""



// for(i=0;i<=10;i++){
//     if(i!=10){
// yazdirilcak_metin= yazdirilcak_metin+i+","
//     } else{
//         yazdirilcak_metin= yazdirilcak_metin+i
//     }

// }
// console.log(yazdirilcak_metin)

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru7

// let girilen_sayi = parseInt(prompt("Faktöriyeli hesaplanacak sayıyı giriniz", "13"))

// let toplam = 1
// for (let i = 1; i <= girilen_sayi; i++) {


//     toplam = toplam * i

// }
// console.log(`Girdiğiniz sayı:${girilen_sayi} bu sayının faktöriyeli:${toplam}dir`)

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru8

// let x_sayisi = parseInt(prompt("X sayisini giriniz"))
// let y_sayisi = parseInt(prompt("Y sayisini girinizi"))
// let sonuc = 0

// if (x_sayisi > 0 && y_sayisi < 0) {
//     sonuc = 4 * x_sayisi + 2 * y_sayisi + 4

// } else if (x_sayisi > 0 && y_sayisi == 0) {
//     sonuc = 2 * x_sayisi - y_sayisi + 3

// } else if (x_sayisi < 0 && y_sayisi > 0) {
//     sonuc = 3 * x_sayisi + 4 * y_sayisi + 3

// }
// console.log(`(${x_sayisi},${y_sayisi})=`+sonuc)

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru9

// let not = parseInt(prompt("Notunuzu Giriniz" + "100"))
// let onluk_sayi = (not / 10)
// let sayi = parseInt(onluk_sayi)
// console.log("Yüzlük sistemdeki not:" + not + " Onluk sistemde karşılığı:" + sayi)

// switch (sayi) {
//     case 10: console.log("AA"); break
//     case 9: console.log("AA"); break
//     case 8: console.log("AB"); break
//     case 7: console.log("BB"); break
//     case 6: console.log("BC"); break
//     case 5: console.log("CC"); break
//     case 4: console.log("CB"); break
//     case 3: console.log("DD"); break
//     case 2: console.log("DE"); break
//     case 1: console.log("EE"); break
//     default: console.log("Hesaplamaya değmiyecek bir not")
// }

// }

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru10

// Soru10
// Çarpım tablosunu oluşturan bir uygulama yazınız

// yazdirilcak_metin = ""
// for (let i = 1; i <= 10; i++) {



//     for (let j = 1; j<= 10; j++) {

//     yazdirilcak_metin = yazdirilcak_metin+(i+"*"+j+"="+i*j)+"\t"


//     }
// console.log(yazdirilcak_metin)
// yazdirilcak_metin=""

// // -----------------------------------------------------------------------------------------------------------------------------------------

// }

// Soru11

// let girilen_sayi = parseInt(prompt("1 ile 100 arasında bir sayı yazınız", "13"))


// let üretilen_sayi =(parseInt(Math.random()*100+1))
// console.log("Üretilen sayı:"+üretilen_sayi)
// let tahmin = -1
// let tahmin_sayisi = 0


// while (tahmin != üretilen_sayi) {

//     tahmin = parseInt(prompt("Bir sayı giriniz"))
//     tahmin_sayisi++
//     if (tahmin == üretilen_sayi){
//         console.log("Tebrikler "+tahmin_sayisi+".seferde bildiniz bildiniz");
//     }else if(tahmin<üretilen_sayi){
//         console.log("Arttır"+"");
//     }else{
//         console.log("Azalt"+"");
//     }
// }

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru12

// let girilen_sayi = parseInt(prompt("Bir sayi giriniz", "99"))
// let carpim_sonucu = 1
// while (0 != girilen_sayi) {

//     carpim_sonucu = carpim_sonucu * girilen_sayi
//     girilen_sayi = parseInt(prompt("Bir sayi giriniz"))
// }
// console.log("Çarpım sonucu:"+carpim_sonucu);

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru13

// Kullanıcıdan aldığımız iki integer(tam sayı) değerin en büyük ortak bölenini bulan uygulama yazınız.Örneğin 14 ve 35 sayıları için ebob=7 olmalıdır

// let birinci_sayi = parseInt(prompt("ilk sayiyi giriniz", "14"))
// let ikinci_sayi = parseInt(prompt("ikinci sayiyi giriniz", "35"))

// let ebob = 1, kontrol = 2

// while (kontrol <= birinci_sayi && kontrol <= ikinci_sayi) {

//     if (birinci_sayi % kontrol == 0 && ikinci_sayi % kontrol == 0) {

//         ebob = kontrol
//     }
//     kontrol++
// }

// if (ebob == 1) {
//     console.log("Bu sayılar aralarında asaldır")
// } else {
//     console.log("Bu sayıların ortak böleni:" + ebob)
// }

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru14

// let kullanicinin_girdigi_sayi = parseInt(prompt("Bir sayı giriniz", "10"))
// let gösterilcek_metin = ""
// for (let i = 2; i <= kullanicinin_girdigi_sayi; i++) {

//     let asal_sayi_mi = true

//     for (let j = 2; j < i; j++) {

//         if (i % j == 00) {
//             asal_sayi_mi = false
//             break
//         }


//     }
//     if (asal_sayi_mi == true) {
//        gösterilcek_metin=gösterilcek_metin+i+"\t"

//     }

// }
// console.log(gösterilcek_metin);

// // -----------------------------------------------------------------------------------------------------------------------------------------

// Soru15

// 1+2+4+7+11+16+20+23+25+26+28+31+35=229? işeliminin sonucunu bulan js kodunu yazınız


// let artis_miktari = 0
// let artiyor_mu = true
// let toplam = 0
// let gösterilcek_metin = ""

// for (let i = 1; i <= 35; i = i + artis_miktari) {

//     if (i != 35) {
//         toplam = toplam + i
//         gösterilcek_metin = gösterilcek_metin + i + "+"

//     } else {
//         toplam = toplam + i
//         gösterilcek_metin = gösterilcek_metin + i + "=" + toplam
//     }



//     if (artis_miktari <= 4 && artiyor_mu == true) {

//         artis_miktari++

//         if (artis_miktari == 5) {
//             artiyor_mu = false
//             continue
//         }
//     } else {
//         artis_miktari--
//         if (artis_miktari == 1) {
//             artiyor_mu = true
//             continue
//         }
//     }





// }

// console.log(gösterilcek_metin);
























