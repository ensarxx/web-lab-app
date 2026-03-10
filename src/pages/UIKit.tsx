import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <h1 className="text-4xl font-bold text-center">🎨 UI Kit — Bileşen Kütüphanesi</h1>

        {/* ════════════ BUTTON ════════════ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
            Button Bileşeni
          </h2>

          {/* Renk Varyantları */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-muted">Renk Varyantları</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Boyut Varyantları */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-muted">Boyut Varyantları</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Disabled */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-muted">Disabled State</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="danger" disabled>Danger Disabled</Button>
            </div>
          </div>
        </section>

        {/* ════════════ INPUT ════════════ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
            Input Bileşeni
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <Input label="Normal Input" placeholder="Bir şeyler yazın…" helpText="Bu bir yardım metnidir." />
            <Input label="Hatalı Input" placeholder="Geçersiz değer" error="Bu alan zorunludur." />
            <Input label="Disabled Input" placeholder="Düzenlenemez" disabled />
            <Input label="E-posta" type="email" placeholder="ornek@mail.com" helpText="Geçerli bir e-posta girin." />
          </div>
        </section>

        {/* ════════════ CARD ════════════ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
            Card Bileşeni
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Kart">
              <p>Gölgeli kart varyantı. Hover'da hafif yukarı kayar.</p>
            </Card>
            <Card variant="outlined" title="Outlined Kart">
              <p>Çerçeveli kart varyantı. Border ile ayrılır.</p>
            </Card>
            <Card variant="filled" title="Filled Kart">
              <p>Dolgulu arka planlı kart varyantı.</p>
            </Card>
          </div>
        </section>

        {/* ════════════ ALERT ════════════ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
            Alert Bileşeni
          </h2>

          <div className="space-y-4 max-w-2xl">
            <Alert variant="info">Bu bir bilgilendirme mesajıdır.</Alert>
            <Alert variant="success">İşlem başarıyla tamamlandı!</Alert>
            <Alert variant="warning" dismissible>Dikkat! Bu uyarıyı kapatabilirsiniz.</Alert>
            <Alert variant="error" dismissible>Hata oluştu. Bu mesajı kapatabilirsiniz.</Alert>
          </div>
        </section>
      </div>
    </div>
  )
}
