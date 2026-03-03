# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640px ve 1024px seçtim?**
  640px, çoğu telefon ekranının yatay modda ulaştığı ve tabletlerin dikey modda başladığı noktadır. 1024px ise klasik masaüstü deneyiminin başladığı eşiktir. Bu iki nokta, cihaz çeşitliliğini üç mantıklı gruba (mobil, tablet, masaüstü) ayırmak için yeterlidir.

- **İçeriğim bu noktalarda nasıl değişiyor?**
  Mobilde (< 640px) navigasyon dikey sıralanır, kartlar tek sütun akar ve tipografi küçük kalır. 640px üzerinde navigasyon yatay Flexbox düzenine geçer, `about-content` yan yana sıralanır ve kart grid'i iki sütuna genişler. 1024px üzerinde proje kartları üç sütuna çıkar, header padding'leri artar ve `max-width` container ile içerik ortalanır.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?**
  Header tek boyutlu bir düzendir: logo/başlık solda, navigasyon sağda yer alır. Flexbox, `justify-content: space-between` ile bu hizalamayı tek satırda çözer; Grid'in iki boyutlu gücüne burada ihtiyaç yoktur.

- **Proje kartları için neden Grid seçtim?**
  Proje kartları iki boyutlu bir ızgara oluşturur; satır ve sütun hizalamasının eşit olması gerekir. CSS Grid, `grid-template-columns` ile sütun sayısını ve genişliğini tek bir bildirimde kontrol etmeye olanak tanır.

- **auto-fit mı auto-fill mı kullandım, neden?**
  `auto-fit` kullandım. `auto-fit`, mevcut kartlardan fazla boşluk kaldığında sütunları genişleterek tüm satırı doldurur. `auto-fill` ise boş sütun izi bırakır. Az sayıda kart olduğu için `auto-fit` daha temiz bir görünüm sağlar.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?**
  Birincil renk olarak koyu mavi (`#1E3A8A`), vurgu rengi olarak mor (`#7C3AED`) seçtim. Mavi güven ve profesyonellik hissi verirken, mor yaratıcılığı temsil eder. Bu kombinasyon WCAG AA kontrast oranlarını (≥ 4.5:1) karşılar.

- **Spacing skalasını nasıl belirledim?**
  4px temel birim üzerine kurulu bir skala oluşturdum: `xs (4px)`, `sm (8px)`, `md (16px)`, `lg (24px)`, `xl (32px)`, `2xl (48px)`, `3xl (64px)`. Bu 4px tabanlı ızgara, elemanlar arası tutarlı dikey ritim ve görsel hiyerarşi sağlar.

- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  `clamp(min, preferred, max)` formülünde minimum değeri mobil okunabilirlik için, maksimum değeri masaüstü konfor boyutu için belirledim. Örneğin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` ile metin 16px altına düşmez, viewport genişledikçe 18px'e kadar akışkan büyür.

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?**
  Tüm temel stiller mobil görünüm için yazıldı; daha geniş ekranlar `min-width` medya sorguları ile eklendi. Bu yaklaşım, CSS'in doğal kaskad yapısını kullanarak önce en kısıtlı ortamı hedefler ve gereksiz override'ları azaltır.

- **Hangi elemanlar breakpoint'lerde değişiyor?**
  Navigasyon (dikey → yatay), `about-content` (tek sütun → yan yana), proje grid'i (1 → 2 → 3 sütun), header padding'leri ve section iç boşlukları breakpoint'lere göre değişir. Tipografi ise `clamp()` ile breakpoint'lerden bağımsız olarak akışkan şekilde ölçeklenir.

- **Görsel boyutları nasıl yönettim?**
  Profil fotoğrafına sabit `width/height` ve `border-radius: 50%` verdim; böylece her ekranda tutarlı daire formu korunur. Container genişliği `max-width` ile sınırlandırılıp `margin: 0 auto` ile ortalandığından, görseller taşmaz ve orantılı kalır.
