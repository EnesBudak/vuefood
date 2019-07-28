<template>
<div class="container">
 <div class="row">
    <div class="col-md-3">

<p v-if="errors.length">
    <b>Lütfen hatayı düzeltin:</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>
  </div>
   
  <div class="col-md-6">
     <div class="validate-form">
    <div class="form-group">
     <i class="ti ti-email text-primary mr-2"> </i>
        <label>E-mail</label>
        <input v-model="userData.username" name="email" type="email" class="form-control" id="email" >
    </div>
    <div class="form-group">
     <i class="ti ti-key text-primary mr-2"> </i>

        <label>Şifre</label>
       <input v-model="userData.password" name="Şifre" type="password" id='password' class="form-control" >
     <i class="ti ti-key text-primary mr-2"> </i>

        <label>Şifre Tekrar</label>

       <input v-model="userData.rePassword" name="Şifre" type="password"  class="form-control" >
     <i class="ti ti-user text-primary mr-2"> </i>

       <label >Ad</label>
        <input v-model="userData.name" name="name" type="text" class="form-control" id="name" >
     <i class="ti ti-user text-primary mr-2"> </i>

       <label >Soyad</label>

        <input v-model="userData.surname" name="surname" type="text" class="form-control" id="surname" >
     <i class="ti ti-mobile text-primary mr-2"> </i>

        <label >Telefon </label>
        <input v-model="userData.phone" name="phone" type="number" class="form-control" id="phone">
     <i class="ti ti-location-pin text-primary mr-2"> </i>

    
        <label >Adres</label>
      <textarea v-model="userData.adress" name="message" id="message" cols="20" rows="2" class="form-control" required></textarea>

                    <div class="form-group" style="margin-top:5px">
                                    <label class="custom-control custom-radio">
                                        <input type="checkbox" id="one" v-model="userData.politics" name="payment_type" class="custom-control-input"  >
                                       
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description"> <p class="lead"  data-toggle="modal" data-target="#exampleModalCenter" > <span style="color:blue"> Kullanıcı Sözleşmesini </span> <span class="lead">
                                          ve Kişisel Verilerin Korunması Politikasını kabul ediyorum</span> </p>   </span>
                                    </label>
                                </div>
      
    </div>



<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Zeki Usta Kullanıcı Sözleşmesi</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      zekiustakebab.com' da sunulan hizmetlere zekiustakebab.com tarafından belirlenen şekil dışında ve/veya yetkisiz şekilde ulaşmamayı ve yazılımı hiçbir şekilde değiştirmemeyi, değiştirilmiş olduğu belli olanları kullanmamayı ve anılan kurallara uymadığı durumlarda zekiustakebab.com'un uğrayabileceği tüm maddi ve manevi zararı karşılamayı;
Tütün Mamulleri ve Alkollü İçkilerin Satışına ve Sunumuna İlişkin Usul ve Esaslar Hakkında Yönetmelik ve ilgili mevzuat uyarınca zekiustakebab.com üzerinden tütün mamulleri ve alkollü içecek satışı kati suretle yapılmadığını, zekiustakebab.com vasıtasıyla tütün mamulleri ve alkollü içecek temin etmemeyi ve üye işyerlerine bu konuda talepte bulunmamayı, aksi yöndeki işlemlerin üyeliğin iptali ve işbu Sözleşme’nin feshi ile sonuçlanabileceğini;
Kullanıcı verilerinin yetkisiz kişilerce okunmasından veya kullanılmasından dolayı gelebilecek zararlardan ötürü zekiustakebab.com'un sorumlu tututalamayacağını;
Kullanıcı paylaşımlarının üçüncü kişiler tarafından izinsiz şekilde kullanılmasından, paylaşılmasından veya yayınlanmasından dolayı gelebilecek zararlardan zekiustakebab.com’un sorumlu olmayacağını;
Tehdit edici, ahlak dışı, ırkçı, Türkiye Cumhuriyeti kanunlarına, uluslararası anlaşmalara aykırı, politik mesajlar içeren, 3. kişilerin fikri veya sınai mülkiyet haklarını ihlal eder nitelikte kullanıcı adı, fotoğraf ve rumuz kullanmamayı; mesaj veya yorum göndermemeyi;
Ortama eklenecek kullanıcı adları, fotoğraflar, yazışmalar, konu başlıkları ve rumuzların genel ahlak, görgü ve hukuk kurallarına uygun olmasını; politik mesajlar içermemesini; ve söz konusu ibareler, yazışmalar ve fotoğraflar ile ilgili tüm yayımlama, işleme ve çoğaltma, yayma, temsil, işaret, ses ve/veya görüntü nakline yarayan araçlarla umuma iletim, üçüncü kişilere devir ve temlik hakları dâhil olmak üzere 5846 sayılı ve 5.12.1951 tarihli Fikir ve Sanat Eserleri Kanunu’nda sayılan tüm mali hakların zekiustakebab.com’a devredildiğini;
Diğer kullanıcıları taciz ve tehdit etmemeyi;
Diğer kullanıcıların zekiustakebab.com sistemini kullanmasını olumsuz etkileyecek şekilde davranmamayı;
zekiustakebab.com sistemi veya ona bağlı olarak geliştirilen sistem ve uygulamalarda yer alan hizmetleri kötüye kullanmayacağını ve bu sistemi kullanan diğer kullanıcıların haklarını ihlal eden nitelikte veya zarar veren hiçbir davranışta bulunmayacağını ve söz konusu kötüye kullanım neticesinde zekiustakebab’nin veya ilgili kullanıcının uğrayacağı tüm zararlardan sorumluluğun tamamen kendisine ait olduğunu ve böyle bir kullanımın tespit edilmesi halinde Yemek Sepeti’nin bu kullanıcının ilgili hizmetteki hesabını ya da hesabının kullanıcı adı, profil fotoğrafı ve benzeri kısımlarını kapatma veya limitleme veya zekiustakebab üyeliğini sona erdirme hakkının bulunduğunu;
Kişi veya kurumların isimlerini lekeleyici, çiğneyici, ahlaka aykırı, yakışıksız veya kanun dışı materyal veya bilgiler yayımlamamayı, basıp çoğaltmamayı, dağıtmamayı;
Reklam yapmamayı, herhangi bir mal veya hizmet satmamayı veya satılmasına yönelik teklifte bulunmamayı, anket, yarışma veya zincir mektup faaliyetlerinde bulunmamayı;
Diğer kullanıcıların bilgisayarındaki bilgilere veya yazılıma zarar verecek bilgi veya programlar göndermemeyi;
zekiustakebab.com hizmetleri kullanarak elde edilen herhangi bir kayıt veya elde edilmiş malzemelerin tamamen kullanıcının rızası dâhilinde olduğunu, kendi bilgisayarında yaratacağı arızalar, bilgi kaybı ve diğer kayıpların sorumluluğunun tamamem kendisine ait olduğunu, zekiustakebab.com sisteminin kullanımından dolayı uğrayabileceği zararlardan dolayı zekiustakebab.com'dan tazminat talep etmemeyi;
zekiustakebab.com'dan izin almadan zekiustakebab.com servislerini ticari veya reklam amacıyla kullanmamayı;
zekiustakebab.com'un, dilediği zaman veya sürekli olarak tüm sistemi izleyebileceğini;
Kurallara aykırı davrandığı takdirde zekiustakebab.com'un gerekli müdahalelerde bulunma ve kullanıcıyı hizmet dışına çıkarma ve üyeliğine son verme hakkına sahip olduğunu,
zekiustakebab.com'un, kendi sistemini ticari amaçla kullanabileceğini;
Kanunlara göre iletilmesi yasak olan bilgileri iletmemeyi ve zincir posta (chain mail), yazılım virüsü (vb.) gibi gönderilme yetkisi olmayan verileri paylaşmamayı;
Başkalarına ait kişisel bilgileri kayıt etmemeyi, yaymamayı, kötüye kullanmamayı;
Online Ödeme Yöntemi ile ödeme yapılmadığı durumda sipariş teslimi sırasında hizmetin daha önceden kendilerine bildirilmiş olan ücretini seçilen ödeme aracıyla ödemek durumunda olduğunu aksi takdirde ürünün kendilerine teslim edilmeyebileceğini;
zekiustakebab.com sisteminde çerez (cookie/tanımlama bilgileri) kullanıldığını, çerezlerin bir internet sitesinin kullanıcının bilgisayarındaki sabit diskte çerez dosyasına aktardığı bilgi parçaları olduğunu, bunların kullanıcıların zekiustakebab.com’da gezinmesine olanak sağladığını ve gerektiğinde siteye erişen kullanıcıların ihtiyaçlarına uygun içeriklerin hazırlanmasına yardımcı olduğunu beyan, taahhüt ve kabul eder.
5. zekiustakebab.com'a Tanınan Yetkiler

zekiustakebab.com herhangi bir zamanda sistemin çalışmasını geçici bir süre askıya alabilir veya tamamen durdurabilir.
zekiustakebab.com güvenliği şüphesi doğuran kullanıcı işlemlerinden dolayı ilgili kullanıcıların Online Ödeme Yöntemi aracılığı ile ödeme yapma imkânını geçici bir süre askıya alabilir veya tamamen durdurabilir.
Sistemin veya Online Ödeme Yöntemi kullanımının geçici bir süre askıya alınması veya tamamen durdurulmasından dolayı zekiustakebab.com’un kullanıcılarına veya üçüncü kişilere karşı hiçbir sorumluluğu olmayacaktır.
Kullanıcı adı veya e-posta ile şifre zekiustakebab.com tarafından sunulan başvuru alanlarının doldurulmasından sonra görüntülenecek ve onaylanacaktır. zekiustakebab.com kullanıcı kayıt formunu eksiksiz doldurmuş üyelerin veya zekiustakebab.com sistemine giriş yapan kullanıcıların yeni bir şifreye sahip olmalarını veya şifrelerini kullanmalarını münhasıran süresiz olarak engelleyebilecektir.
zekiustakebab.com, hizmetlerinin zamanında, güvenli ve hatasız olarak sunulması, hizmet kullanımından elde edilen sonuçların doğru ve güvenilir olması, hizmet kalitesinin beklentilere cevap vermesi için gerekli özeni gösterecektir ancak bunları taahhüt etmemektedir.
zekiustakebab.com kullanıcıların sistemden yararlanmaları sırasında ortamda bulunduracakları dosyaların, mesajların bazılarını veya tamamını uygun göreceği periyotlarla yedekleme ve silme yetkisine sahiptir. Yedekleme ve silme işlemlerinden dolayı zekiustakebab.com sorumlu tutulmayacaktır.
zekiustakebab.com kendi ürettiği ve/veya dışardan satın aldığı bilgi, belge, yazılım, tasarım, grafik vb. eserlerin mülkiyet ve mülkiyetten doğan telif haklarına sahiptir.
zekiustakebab.com sistemindeki satışlar, üye işyeri menülerinin sipariş anındaki mevcudiyetiyle sınırlıdır. zekiustakebab.com ilgili üye işyerinde bulunmayan ürünlerin kullanıcıya teslimini sağlayamayabilir. Ürünlerin zekiustakebab.com sisteminde teşhir edilmesi bunların stokta bulunduğu anlamına gelmemektedir.
zekiustakebab.com kullanıcılarının ürettiği ve yayınlanmak üzere kendi iradesiyle sisteme yüklediği (örneğin kullanıcı resimleri, panoya eklediği mesaj, şiir, haber, dosya gibi) bilgi, belge, yazılım, tasarım, grafik vb. eserlerin her türlü yazılı ve görsel mecrada yayınlanma, işleme, sosyal medya ağlarında paylaşma ve/veya zekiustakebab.com sistemi içinde zekiustakebab.com tarafından uygun görülecek başka bir adrese taşıma veya kendi takdirinde olmak üzere internet sitesinden kaldırma haklarına sahiptir. Yayınlanan bu bilgilerin başka kullanıcılar tarafından kopyalanması, işlenmesi ve/veya yayınlanması ihtimal dâhilindedir. Bu hallerde kullanıcı, zekiustakebab.com'dan hiçbir telif ücreti talep etmeyecektir.
zekiustakebab.com sisteminde satışa sunulan ürünlerin fiyat ve ürün özellik bilgilerini değiştirme yükümlülüğü zekiustakebab.com sistemindeki üye işyerlerine aittir. Fiyat ve ürün özellik bilgilerinde hata oluştuğu takdirde zekiustakebab.com kullanıcıları bilgilendirerek, bu hatayı düzeltecek şekilde ürün teslimatı yapabilir veya siparişi iptal edebilir.
zekiustakebab.com sisteminde satışa sunulan ürünlerin içeriğine dair doğru ve dürüst açıklama yapılmasına dair zekiustakebab.com gerekli özeni gösterecektir ancak üye işyerlerinin sipariş içeriklerine dair yaptıkları eksik ve/veya hatalı açıklamalardan dolayı oluşacak problemlerden veya zararlardan zekiustakebab.com sorumlu değildir.
zekiustakebab.com, kullanıcının zekiustakebab.com sistemi dışındaki web-sitelerine geçişini sağlayabilir. Bu takdirde kullanıcı geçiş yapacağı sitelerin içeriğinden zekiustakebab.com'un sorumlu olmadığını peşinen kabul eder.
zekiustakebab.com kullanıcı üyeliği gerektirmeyen hizmetleri zaman içinde üyelik gerektiren bir hale dönüştürülebilir, ilave hizmetler açabilir, bazı hizmetlerini kısmen veya tamamen değiştirebilir veya ücretli hale dönüştürebilir. Bu durumda kullanıcının Sözleşme’yi feshederek, üyelikten ayrılma hakkı saklıdır.
zekiustakebab.com, ileride doğacak teknik zaruretler ve mevzuata uyum amacıyla kullanıcıların aleyhine olmamak kaydıyla işbu Sözleşme’nin uygulamasında değişiklikler yapabilir, mevcut maddelerini değiştirebilir veya yeni maddeler ilave edebilir.
zekiustakebab.com üye restoranların sağladığı içerikten sorumlu değildir.
6. Kullanım Amacı

Kullanıcılar, zekiustakebab.com sistemi üzerinde verilen tüm siparişlerin, yapılan tüm alışverişlerin kişisel kullanım amaçlı olduğunu, bunların tekrar satış amaçlı olmadığını kabul ederler.

7. Ödeme

zekiustakebab.com kullanıcıları zekiustakebab.com sisteminden verdikleri siparişin ücretini, zekiustakebab.com sisteminde ilgili üye işyerinin sunduğu seçenekler arasından sipariş verirken seçtikleri şekilde teslim esnasında ödeyebilir. Kullanıcılar ayrıca Online Ödeme Yöntemi kullanarak banka kartı, kredi kartı veya benzer bir ödeme aracı ile diğer ödeme sistemleri (örneğin PayPal) vasıtasıyla anında online ödeme de yapabileceklerdir. Online Ödeme Yöntemi seçeneği kullanılarak yapılan ödemelerde, kartın hamili haricinde bir başkası tarafından hukuka aykırı şekilde kullanılması halinde 23.02.2006 tarihli 5464 sayılı Banka Kartları ve Kredi Kartları Kanunu ve 10.03.2007 tarihli ve 26458 sayılı Resmi Gazete’de yayımlanan Banka Kartları ve Kredi Kartları Hakkında Yönetmelik hükümlerine göre işlem yapılır.Online Ödeme Yöntemi ile ödemesi yapılmış siparişlerde, sipariş karşılığı fiş/fatura zekiustakebab.com tarafından değil siparişi alan restoran tarafından düzenlenir.

Online Ödeme Yöntemi kullanılarak verilen siparişlerde, zekiustakebab.com, sipariş edilen ürünlere ilişkin bedelleri restoranların nam ve hesabına Kullanıcılardan tahsil etmek için restoranlar tarafından münhasır olarak yetkilendirilmiştir. Kullanıcılar, Online Ödeme Yöntemi kullanılarak verilen siparişlerde ödemeyi zekiustakebab.com’a yapmakla ödeme yükümlülüklerini ifa etmiş olmaktadır.

Vale Hizmeti kullanılarak online ödeme yöntemi, kapıda kredi kartı/banka kartıyla ödeme yöntemi, kapıda nakit ödeme yöntemi dahil fakat bunlarla sınırlı olmamak üzere her türlü ödeme yöntemiyle gerçekleşen siparişlerde, zekiustakebab.com, sipariş edilen ürünlere ilişkin bedelleri restoranların nam ve hesabına Kullanıcılardan tahsil etmek için münhasır olarak yetkilendirilmiştir. Kullanıcılar, vale hizmeti kullanılarak verilen siparişlerde ödemeyi online ödeme yöntemi, kapıda kredi kartı/banka kartıyla ödeme yöntemi, kapıda nakit ödeme yöntemi dahil fakat bunlarla sınırlı olmamak üzere her türlü ödeme yöntemiyle yapmakla, restorana ve zekiustakebab.com'a karşı ödeme yükümlülüklerini ifa etmiş olmaktadırlar.

 

8. Kişisel Veri

Kullanıcı zekiustakebab.com’a üye olurken Kullanıcı Sözleşmesini onaylamak ve üyelik sonrası Web Sitesi içerisindeki hareketleri esnasında, veri sorumlusu zekiustakebab ile paylaştıkları ad, soyad, elektronik posta adresi, sipariş adres/adresleri, telefon numarası gibi kişisel verilerinin (“Kişisel Veri/ler”) Kişisel Verilerin Korunması Hakkındaki Kanun’da belirlenmiş olan esaslar çerçevesinde işlenmesine, 3. kişilere ve yurtdışına aktarılmasına açıkça rıza gösterdiğini kabul ve beyan eder. Kişisel Veriler’in işlenmesi, 3. kişilere ve yurtdışına aktarılması Kullanıcı ile zekiustakebab.com arasında kurulan hukuki ilişkiye dayanmaktadır. Kişisel Veriler zekiustakebab.com ve zekiustakebab.com iştirakleri tarafından işbu sözleşmesel ilişki kapsamında ve zekiustakebab.com ve iştiraklerinin sözleşmesel ilişkisi bulunan iş ortakları tarafından pazarlama, analiz, istatistik gibi amaçlarla işlenebilir, 3. kişilere ve yurtdışına aktarılabilir veya anonimleştirilerek kullanılabilir. Buna ek olarak Kullanıcılar Kişisel Verileri dışındaki sipariş bilgileri (sipariş verdikleri restoranlar, sipariş verilen ürün tipi, sipariş adedi, sipariş saati, sipariş verilen bölge gibi Web Sitesi (veya kullanılan benzeri mobil veya elektronik mecra) üzerindeki tüm davranışları, sipariş detayları gibi) ve benzeri verilerinin (“Veri/ler”) zekiustakebab.com, zekiustakebab.com iştirakleri ve iş ortakları tarafından kaydedilmesi, işlenmesi ve listelenmesinde ve/veya anonimleştirilerek analizlerde 3. kişilerle hizmetin daha iyi sağlanması veya çeşitli uygulamaların veya programların zekiustakebab.com üzerinde çalıştırılabilmesi için anonim şekilde kullanılmasına açık rızalarının olduğunu kabul ve beyan ederler.

9. Kanuni Zorunluluklar

İşbu Sözleşme kapsamı dışında gerçekleşecek tüm kanuni değişikliklerden kaynaklanan işlemler zekiustakebab.com sorumluluğu dışındadır ve aynen Sözleşme’ye yansıtılır.

10. Ürün Teslimatı

Üye işyerleri tarafından yapılan ürün teslimatı sürecinde kullanıcı, zekiustakebab.com sisteminde seçtiği adreste bulunamaz ise siparişi kesinlikle başka bir adrese bırakılmayacaktır. Bu durum çerçevesinde kullanıcı kendisinin bulunmadığı bir adrese sipariş vermiş olduğu için doğacak kanuni yükümlülükleri kabul etmek durumundadır.

11. Ücret İadesi

Online Ödeme Yöntemi ile ödemesi yapılmış siparişlerle sınırlı olmak üzere kullanıcıya ücret iadesi ancak 
 

kullanıcı adresinin sipariş verilen restoranın gönderim alanı dışında olması nedeniyle siparişin zorunlu iptali;
siparişin ilgili restorana iletilememesi nedeniyle siparişin zorunlu iptali;
restoran tarafından siparişin hazırlanmadığı veya siparişin hazırlanmış olmasına rağmen restoranın iptal işlemini onaylamış olduğu hallerde kullanıcı talebi üzerine siparişin iptali;
siparişin bir kısmının veya tamamının restoranda mevcut olmaması nedeniyle siparişin kısmen veya tamamen zorunlu iptali;
Sipariş edilen üründen memnun kalınmaması nedeniyle ilgili restoran onayının alınmasının akabinde yapılan sipariş iptali; ve
Sipariş edilen ürünün teslimatının gecikmesi durumunda ilgili restoran onayı üzerine yapılan iptal durumunda yapılacaktır. İptale konu siparişe ilişkin ilgili restoran bir fiş veya fatura düzenlemiş ve bu kullanıcıya teslim edilmiş ise ilgili restoran görevlisine iadesi gerekmektedir.

zekiustakebab.com, yalnızca kullanıcıdan kaynaklanan sebeplerden dolayı (örneğin kullanıcının evde olmaması, yanlış adres bilgisi vermesi, siparişi teslim almaması gibi) ücret iadesi yapmama hakkını saklı tutar.
Online Ödeme Yöntemi dışındaki ödeme vasıtaları ile ödemesi yapılmış siparişlerde ücret iadesi, zekiustakebab.com’un bünyesinde bulundurduğu üye işyerleri tarafından doğrudan yapılmaktadır. zekiustakebab.com, üye işyerleri tarafından yapılacak ürün iadesi koşullarına ilişkin olarak doğabilecek anlaşmazlıklarda hiçbir sorumluluk kabul etmemektedir.

12. Bilgilerin Saklanması ve İspat Yükümlülüğü:

zekiustakebab.com sisteminde kayıtlı kullanıcı bilgileri, siparişleri, yorum/değerlendirmeleri vb. zekiustakebab.com Gizlilik Politikası’na tabi olacak şekilde en az üç (3) yıl boyunca saklanır. İşbu Sözleşme’nin ifasından doğacak her türlü uyuşmazlıkta zekiustakebab.com sisteminde saklanan veriler ile kullanıcı kayıtları bağlayıcı ve kesin delil teşkil eder.

13. Uygulanacak Hukuk ve Yetkili Mahkeme ve İcra Daireleri

İşbu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Sözleşme’nin ifasından doğabilecek her türlü uyuşmazlığın çözümünde İstanbul Merkez Mahkeme ve İcra Müdürlükleri yetkilidir.

14. Yürürlük

İşbu Sözleşme taraflar arasında kullanıcının, kullanıcı kayıt formunu doldurmasından itibaren süresiz olarak yürürlüğe girer.

15. Fesih

Taraflar işbu Sözleşme’yi diledikleri zaman sona erdirebileceklerdir. Sözleşme’nin feshi anında tarafların birbirlerinden olan alacak hakları etkilenmez.
      </div>
      
    </div>
  </div>
</div>

    <div>
        <button  @click="checkForm" class="btn btn-success btn-block"><span>Üye Ol!
          </span></button>
    
    </div>
    </div>
  </div>
  <div class="col-md-3">
    
  </div>

 
   <div class="col-md-3"></div>
   
    <div class="col-md-9">
    <h4> Zaten üyeliğiniz var mı?  <router-link tag='a' to='/login'> 
       <span class="lead" style="color:blue">  Giriş Yap!</span></router-link>  </h4>
  </div>

 </div>
 
</div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  data(){
  return{
       errors:[],
      userData:{

      username:'' ,
      password:'',
      rePassword:null,
      adress:'',
      name:'',
      surname:'',
      date:0,
      politics:null,
      phone:'',

    },
   

    
 }

  },
  methods:{


  checkForm:function(e) {
      this.errors = [];
      if(!this.userData.password) this.errors.push("Şifre giriniz.");
      if(!this.userData.username) {
        this.errors.push("Email giriniz.");
      }  if(!this.validEmail(this.userData.username)) {
        this.errors.push("Yanlış email girdiniz.");        
      }  if(!this.userData.name){
          this.errors.push('Ad giriniz');
      }
       if(!this.userData.adress){
          this.errors.push('Adress giriniz');
      } if(!this.userData.surname){
          this.errors.push('Soyad giriniz');
      }if(!this.userData.politics){
          this.errors.push('Sözleşmeyi Kabul Ediniz');
      }
       if(this.validEmail(this.userData.username)){
        const url ="user/register"
       
       axios.post(url,this.userData)
      .then(response => {
        
            
        console.log(response);
        if(response.data.status == 'created'){
          //this.$router.go(this.$router.currentRoute)
                swal({
          title: "Kayıt Olundu!",
          text: "Ana sayfaya yönlendiriliyorsunuz!",
          icon: "success",
          timer:1500
        })
        .then(() => {
               
         window.location.href = "home";
      

        
        })

       
        }else{
              swal({
          title: "Lütfen bilgileri kontrol ediniz !",
      
          icon: "warning",
          timer:1500
        })

        }
      }) 
      .catch(e => console.log(e));
        
      
      }
      
      if(!this.errors.length) return true;
      e.preventDefault();
      },
     

       validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
 
    },
    
   
  }


/* 
axios.post("https://vue-deneme-1fa03.firebaseio.com/posts.json",this.userData)
      .then(response => {
        console.log(response);
        
      }) 
      .catch(e => console.log(e));
*/
</script>
