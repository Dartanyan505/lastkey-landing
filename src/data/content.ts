import anaSayfaShot from "../screen-shots/ana-sayfa.jpg";
import favoriOtellerShot from "../screen-shots/favori-oteller.jpg";
import odalarShot from "../screen-shots/odalar.jpg";
import canliDestekShot from "../screen-shots/canli-destek.jpg";
import otelDetaylariShot from "../screen-shots/otel-detayları.jpg";
import rezervasyonlarimShot from "../screen-shots/rezervasyonlarım.jpg";
import yorumlarShot from "../screen-shots/yorumlar.jpg";
import odemeOzetiShot from "../screen-shots/ödeme-özeti.jpg";

const toImagePath = (asset: unknown) =>
  typeof asset === "string" ? asset : (asset as { src?: string })?.src ?? "";

export const screenShotPaths = [
  anaSayfaShot,
  favoriOtellerShot,
  odalarShot,
  canliDestekShot,
  otelDetaylariShot,
  rezervasyonlarimShot,
  yorumlarShot,
  odemeOzetiShot,
].map(toImagePath).filter(Boolean);

export const nav = [
  { label: "Keşfet", href: "#kesfet" },
  { label: "Otel Sahipleri", href: "#otel-sahipleri" },
  { label: "SSS", href: "#sss" },
  { label: "Destek", href: "#destek" },
];

export const userValueProps = [
  "Son dakika aramada indirimli oda seçeneklerine hızlıca ulaş.",
  "Konum, tarih, kişi sayısı ve bütçene göre hızlıca filtrele.",
  "İndirimli odaları karşılaştır, en uygun oteli seç.",
  "Güvenli ödeme altyapısıyla rezervasyonunu dakikalar içinde tamamla.",
  "İstersen kupon kodunu ekle, fiyatı daha da düşür.",
];

export const userFeatures = [
  { title: "İndirimli oda listesi", desc: "Son dakika aramada indirimli oda seçeneklerini öne çıkarır." },
  { title: "Konuma göre keşif", desc: "Yakınındaki otelleri ve indirimli odaları otomatik öne çıkarır." },
  { title: "Harita görünümü", desc: "Otelleri harita üstünde inceleyip konum avantajını görürsün." },
  { title: "Akıllı filtreler", desc: "Fiyat aralığı, yıldız, ilçe ve otel özelliklerine göre arama." },
  { title: "Fırsat etiketleri", desc: "En iyi fiyat veren oteller “Tavsiye Edilen” veya “Fırsat Otel” etiketi alır." },
  { title: "Favoriler", desc: "Beğendiğin otelleri kaydet, sonra kolayca geri dön." },
  { title: "Yorumlar", desc: "Misafir deneyimlerini oku; kararını hızlı ve güvenli ver." },
];

export const userScreenStory = [
  {
    src: toImagePath(anaSayfaShot),
    alt: "LastKey ana sayfa ve arama ekranı",
    title: "Hızlı arama ile başla",
    desc: "Konum, gece ve kişi sayısını seçip uygun otelleri tek ekranda anında gör.",
    details: ["Konum ve tarih seçimi tek panelde.", "Filtrelerle aramayı hızlıca daralt.", "Harita ve liste arasında geçiş yap."],
    reverse: false,
  },
  {
    src: toImagePath(favoriOtellerShot),
    alt: "LastKey favori oteller ekranı",
    title: "Favorilere al, sonra karşılaştır",
    desc: "Beğendiğin otelleri kaydedip fiyat, puan ve imkanları daha rahat kıyasla.",
    details: ["Favori listeni tek ekranda takip et.", "İndirim etiketlerini kaçırmadan gör.", "Karar verirken seçeneklerini koru."],
    reverse: true,
  },
  {
    src: toImagePath(odalarShot),
    alt: "LastKey oda seçenekleri ekranı",
    title: "Oda tiplerini net karşılaştır",
    desc: "Standart ve manzaralı gibi oda seçeneklerini fiyat ve kapasite bilgileriyle incele.",
    details: ["Her oda için kapasite bilgisi var.", "Gece fiyatı ve toplam tutar net görünür.", "Tek dokunuşla seçip devam et."],
    reverse: false,
  },
  {
    src: toImagePath(canliDestekShot),
    alt: "LastKey canlı destek konuşması",
    title: "Canlı destek her adımda yanında",
    desc: "Takıldığın anda uygulama içi sohbetten hızlıca yardım alarak işlemi yarıda bırakma.",
    details: ["Sohbet akışı sade ve anlaşılır.", "Yeni talep açma aksiyonu net.", "Destekle çözüm süreci tek yerde."],
    reverse: true,
  },
  {
    src: toImagePath(otelDetaylariShot),
    alt: "LastKey otel detay sayfası",
    title: "Otel detaylarını tam gör",
    desc: "Puan, açıklama, imkanlar ve fiyatı aynı sayfada görüp emin olarak seçim yap.",
    details: ["İndirimli fiyat kartı öne çıkıyor.", "Otel imkanları etiketlerle listelenir.", "Yorumlara sayfa içinden erişirsin."],
    reverse: false,
  },
  {
    src: toImagePath(rezervasyonlarimShot),
    alt: "LastKey rezervasyonlarım ekranı",
    title: "Rezervasyonlarını yönet",
    desc: "Yaklaşan, geçmiş ve iptal durumlarını filtreleyip rezervasyonlarını tek listede takip et.",
    details: ["Rezervasyon durumu anlık görünür.", "Tarih, oda ve ödeme özeti tek kartta.", "Yaklaşan konaklamaları kaçırmazsın."],
    reverse: true,
  },
  {
    src: toImagePath(yorumlarShot),
    alt: "LastKey yorumlar ve konaklama seçenekleri ekranı",
    title: "Yorumları oku, doğru tercihi yap",
    desc: "Gerçek kullanıcı yorumlarını okuyup ardından gecelere göre hızlıca oda kontrol et.",
    details: ["Yorum puanı ve tarih bilgisi görünür.", "Gece seçenekleri aynı ekranda listelenir.", "Rezervasyon aksiyonu hemen altta."],
    reverse: false,
  },
  {
    src: toImagePath(odemeOzetiShot),
    alt: "LastKey ödeme özeti ekranı",
    title: "Ödeme özetini net tamamla",
    desc: "Giriş-çıkış, misafir bilgisi ve toplam tutarı görüp güvenli ödeme adımını tamamla.",
    details: ["Süre sayacıyla işlem takibi yapılır.", "Fiyat kırılımı açık şekilde listelenir.", "Bilgilendirme notlarıyla şeffaf süreç sunulur."],
    reverse: true,
  },
];

export const howUser = [
  "Konumunu aç veya şehir/ilçe seç.",
  "Tarih ve kişi sayısını belirle, filtrelerini uygula.",
  "İndirimli odaları karşılaştır, otelini seç.",
  "Güvenli ödeme ile rezervasyonu tamamla.",
];

export const hostFeatures = [
  { title: "Kolay listeleme", desc: "Otel bilgileri, fotoğraflar ve oda tiplerini düzenle." },
  { title: "Boş odayı değerlendir", desc: "Normalde boş kalacak odaları indirimli fiyatla satarak gelir üret." },
  { title: "Esnek fiyat kontrolü", desc: "İndirim oranını sen belirle; doluluk ve fiyat dengesini sen yönet." },
  { title: "Daha görünür ol", desc: "Rekabetçi fiyat veren oteller listede daha üstte görünür." },
  { title: "Müsaitlik yönetimi", desc: "Tarihe göre kontenjanı kontrol et, kısa konaklamalara hazır ol." },
  { title: "Rezervasyon yönetimi", desc: "Gelen rezervasyonları tek panelden hızlıca yönet." },
];

export const howHost = [
  "Otelini başvuruyla ekle, profilini oluştur.",
  "Oda tiplerini, müsaitliği ve fiyatlarını tanımla.",
  "Boş odalar için indirim oranını belirle.",
  "Rezervasyon al, boş kalan odalardan kâr üret.",
];

export const trust = [
  "Ödeme işlemleri güvenli ödeme altyapısı üzerinden yürütülür.",
  "Son dakika kullanıcıları için indirimli oda listesi standart olarak sunulur.",
  "Destek ekibi, rezervasyon süreçlerinde yardımcı olur.",
];

export const testimonials = [
  { quote: "Son dakika girdiğimde indirimli oda seçeneklerini hızlıca görebiliyorum.", who: "[İsim]" },
  { quote: "Kısa konaklamada uygun fiyatı hızlıca yakaladım.", who: "[İsim]" },
  { quote: "Boş kalacak odaları indirimli satıp ekstra gelir elde ettim.", who: "[Otel Sahibi, İşletme Adı]" },
];

export const faqs = [
  { q: "LastKey nedir?", a: "LastKey, son dakika konaklama için otel keşfi ve rezervasyonu tek yerde toplayan bir platformdur." },
  { q: "Kullanıcı tarafında temel avantaj ne?", a: "Son dakika aramalarda indirimli oda seçenekleri tek ekranda sunulur; fırsat yakalamak kolaylaşır." },
  { q: "Nasıl rezervasyon yaparım?", a: "Konum/şehir seç, tarih ve kişi sayısını belirle, indirimli odaları karşılaştırıp ödeme adımlarını tamamla." },
  { q: "Otel sahibi için avantaj ne?", a: "Normalde boş kalabilecek odaları daha uygun fiyatla satar, doluluğu ve geliri artırır." },
  { q: "İndirim oranını kim belirler?", a: "Otel sahibi kendi fiyat ve indirim stratejisini yönetir." },
  { q: "Kupon kodu kullanabiliyor muyum?", a: "Uygun kampanyalarda kupon kodunu ekleyebilirsin." },
  { q: "Otelimi nasıl listeleyebilirim?", a: "“Otelimi Listele” ile başvurup işletme bilgilerini paylaşarak başlayabilirsin." },
];
