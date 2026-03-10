import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  /* ── Sayfa state'i ── */
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio')
  const [dark, setDark] = useState(false)

  /* ── Form state'leri ── */
  const [formData, setFormData] = useState({
    adSoyad: '',
    email: '',
    konu: '',
    mesaj: '',
  })

  const [errors, setErrors] = useState({
    adSoyad: '',
    email: '',
    konu: '',
    mesaj: '',
  })

  /* ── Doğrulama ── */
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'adSoyad':
        if (!value.trim()) return 'Ad Soyad alanı zorunludur.'
        if (value.trim().length < 2) return 'Ad Soyad en az 2 karakter olmalıdır.'
        return ''
      case 'email':
        if (!value.trim()) return 'E-posta alanı zorunludur.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Geçerli bir e-posta adresi giriniz.'
        return ''
      case 'konu':
        if (!value) return 'Lütfen bir konu seçiniz.'
        return ''
      case 'mesaj':
        if (!value.trim()) return 'Mesaj alanı zorunludur.'
        if (value.trim().length < 10) return 'Mesaj en az 10 karakter olmalıdır.'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = {
      adSoyad: validateField('adSoyad', formData.adSoyad),
      email: validateField('email', formData.email),
      konu: validateField('konu', formData.konu),
      mesaj: validateField('mesaj', formData.mesaj),
    }
    setErrors(newErrors)
    if (!Object.values(newErrors).some((m) => m !== '')) {
      alert('Form başarıyla gönderildi!')
      setFormData({ adSoyad: '', email: '', konu: '', mesaj: '' })
    }
  }

  /* ── Dark mode toggle ── */
  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  /* ─────── UI Kit sayfası ─────── */
  if (page === 'uikit') {
    return (
      <div className={dark ? 'dark' : ''}>
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setPage('portfolio')}>
            ← Portfolyo
          </Button>
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label={dark ? 'Açık moda geç' : 'Koyu moda geç'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <UIKit />
      </div>
    )
  }

  /* ─────── Portfolyo sayfası ─────── */
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Ana içeriğe atla
      </a>

      {/* ══════ HEADER ══════ */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary dark:text-blue-400">
            Ensar DAŞ — Portfolyo
          </h1>

          <div className="flex items-center gap-4">
            <nav aria-label="Ana navigasyon">
              <ul className="flex gap-6 list-none">
                <li><a href="#hakkimda" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Hakkımda</a></li>
                <li><a href="#projelerim" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Projelerim</a></li>
                <li><a href="#iletisim" className="hover:text-primary dark:hover:text-blue-400 transition-colors">İletişim</a></li>
                <li>
                  <button
                    onClick={() => setPage('uikit')}
                    className="hover:text-accent dark:hover:text-purple-400 transition-colors cursor-pointer font-medium"
                  >
                    UI Kit
                  </button>
                </li>
              </ul>
            </nav>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              aria-label={dark ? 'Açık moda geç' : 'Koyu moda geç'}
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* ══════ MAIN ══════ */}
      <main id="main-content" className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* ── Hakkımda ── */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik" className="scroll-mt-24">
          <h2 id="hakkimda-baslik" className="text-3xl font-bold text-accent dark:text-purple-400 mb-8">Hakkımda</h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Profil fotoğrafı */}
            <figure className="flex flex-col items-center flex-shrink-0">
              <img
                src="src/assets/ensar_resim.jpg"
                alt="Ensar DAŞ profil fotoğrafı"
                width={180}
                height={180}
                className="rounded-full object-cover border-4 border-primary dark:border-blue-400"
              />
              <figcaption className="mt-3 font-semibold text-lg">Ensar DAŞ</figcaption>
            </figure>

            {/* Bilgi kartları */}
            <div className="space-y-6 flex-1">
              <Card variant="outlined" title="Kişisel Bilgiler">
                <p><strong>Ad Soyad:</strong> Ensar DAŞ</p>
                <p><strong>Öğrenci No:</strong> 230541079</p>
                <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
              </Card>

              <Card variant="outlined" title="Hobilerim">
                <ul className="list-disc list-inside space-y-1">
                  <li>Yazılım Geliştirme</li>
                  <li>Web Tasarımı</li>
                  <li>Oyun Oynama</li>
                  <li>Müzik Dinleme</li>
                </ul>
              </Card>

              <Card variant="outlined" title="Becerilerim">
                <ul className="flex flex-wrap gap-2 list-none p-0" role="list" aria-label="Beceri etiketleri">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git', 'Tailwind'].map((s) => (
                    <li key={s} className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Projelerim ── */}
        <section id="projelerim" aria-labelledby="projelerim-baslik" className="scroll-mt-24">
          <h2 id="projelerim-baslik" className="text-3xl font-bold text-accent dark:text-purple-400 mb-8">Projelerim</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Portfolyo Web Sitesi">
              <p className="mb-4">
                React, TypeScript ve Vite kullanılarak geliştirilen kişisel
                portfolyo sayfası. Semantik HTML5 ve erişilebilirlik
                standartlarına uygun tasarlanmıştır.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite'].map((t) => (
                  <span key={t} className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>
            </Card>

            <Card variant="elevated" title="Tatil Masrafım: Bütçe Takip">
              <p className="mb-4">
                Flutter/Dart kullanılarak geliştirilmiş tatil bütçe takip ve paylaşım uygulaması.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Flutter', 'Dart'].map((t) => (
                  <span key={t} className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.dasapps.tatilmasrafim&hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-secondary hover:text-primary dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Google Play'de Görüntüle →
              </a>
            </Card>

            <Card variant="elevated" title="Hava Durumu">
              <p className="mb-4">
                OpenWeather API ile anlık hava durumu bilgisi sunan web uygulaması.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'API'].map((t) => (
                  <span key={t} className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ── İletişim ── */}
        <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-24">
          <h2 id="iletisim-baslik" className="text-3xl font-bold text-accent dark:text-purple-400 mb-8">İletişim</h2>

          <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-6">
            <Input
              label="Ad Soyad"
              name="adSoyad"
              value={formData.adSoyad}
              onChange={handleChange}
              error={errors.adSoyad || undefined}
              required
            />

            <Input
              label="E-posta"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email || undefined}
              required
            />

            {/* Konu — select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="konu" className="text-sm font-medium text-gray-700 dark:text-gray-300">Konu</label>
              <select
                id="konu"
                name="konu"
                required
                value={formData.konu}
                onChange={handleChange}
                aria-describedby="konu-error"
                aria-invalid={errors.konu ? true : undefined}
                className={`
                  w-full rounded-lg border px-4 py-2.5 text-base transition-colors duration-200 outline-none
                  focus:ring-2 focus:ring-offset-1 dark:bg-gray-800 dark:text-white
                  ${errors.konu
                    ? 'border-error focus:ring-error/50 dark:border-red-400'
                    : 'border-gray-300 focus:border-primary focus:ring-primary/50 dark:border-gray-600'}
                `}
              >
                <option value="">-- Seçiniz --</option>
                <option value="is-teklifi">İş Teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Öneri</option>
              </select>
              {errors.konu && (
                <p id="konu-error" role="alert" className="text-sm text-error font-medium">{errors.konu}</p>
              )}
            </div>

            {/* Mesaj — textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mesaj" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={5}
                required
                minLength={10}
                value={formData.mesaj}
                onChange={handleChange}
                aria-describedby="mesaj-error"
                aria-invalid={errors.mesaj ? true : undefined}
                className={`
                  w-full rounded-lg border px-4 py-2.5 text-base transition-colors duration-200 outline-none resize-y
                  focus:ring-2 focus:ring-offset-1 dark:bg-gray-800 dark:text-white
                  ${errors.mesaj
                    ? 'border-error focus:ring-error/50 dark:border-red-400'
                    : 'border-gray-300 focus:border-primary focus:ring-primary/50 dark:border-gray-600'}
                `}
              />
              {errors.mesaj && (
                <p id="mesaj-error" role="alert" className="text-sm text-error font-medium">{errors.mesaj}</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg">Gönder</Button>
          </form>
        </section>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-muted text-sm">
          <p>&copy; 2026 Ensar DAŞ. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
