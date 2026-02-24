import { useState } from 'react'
import './App.css'

function App() {
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

    const hasError = Object.values(newErrors).some((msg) => msg !== '')
    if (!hasError) {
      alert('Form başarıyla gönderildi!')
      setFormData({ adSoyad: '', email: '', konu: '', mesaj: '' })
    }
  }

  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      {/* HEADER */}
      <header className="site-header">
        <h1>Ensar DAŞ — Portfolyo</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projelerim">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main id="main-content">
        {/* ── Hakkımda ── */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <figure className="profile-figure">
            <img
              src="src\assets\ensar_resim.jpg"
              alt="Ensar DAŞ profil fotoğrafı"
              width={180}
              height={180}
            />
            <figcaption>Ensar DAŞ</figcaption>
          </figure>

          <div className="info-card">
            <h3>Kişisel Bilgiler</h3>
            <p><strong>Ad Soyad:</strong> Ensar DAŞ</p>
            <p><strong>Öğrenci No:</strong> 230541079</p>
            <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
          </div>

          <div className="info-card">
            <h3>Hobilerim</h3>
            <ul>
              <li>Yazılım Geliştirme</li>
              <li>Web Tasarımı</li>
              <li>Oyun Oynama</li>
              <li>Müzik Dinleme</li>
            </ul>
          </div>
        </section>

        {/* ── Projelerim ── */}
        <section id="projelerim" aria-labelledby="projelerim-baslik">
          <h2 id="projelerim-baslik">Projelerim</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>Portfolyo Web Sitesi</h3>
              <p>
                React, TypeScript ve Vite kullanılarak geliştirilen kişisel
                portfolyo sayfası. Semantik HTML5 ve erişilebilirlik
                standartlarına uygun şekilde tasarlanmıştır.
              </p>
            </article>

            <article className="project-card">
              <h3>Görev Yöneticisi Uygulaması</h3>
              <p>
                Kullanıcıların günlük görevlerini ekleyip takip edebildiği,
                localStorage ile veri saklayan bir SPA uygulaması.
              </p>
            </article>
          </div>
        </section>

        {/* ── İletişim ── */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form onSubmit={handleSubmit} noValidate className="contact-form">
            {/* Ad Soyad */}
            <div className="form-group">
              <label htmlFor="adSoyad">Ad Soyad</label>
              <input
                type="text"
                id="adSoyad"
                name="adSoyad"
                required
                minLength={2}
                value={formData.adSoyad}
                onChange={handleChange}
                aria-describedby="adSoyad-error"
                aria-invalid={errors.adSoyad ? true : undefined}
              />
              <small id="adSoyad-error" className="error-msg" role="alert">
                {errors.adSoyad}
              </small>
            </div>

            {/* E-posta */}
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                aria-describedby="email-error"
                aria-invalid={errors.email ? true : undefined}
              />
              <small id="email-error" className="error-msg" role="alert">
                {errors.email}
              </small>
            </div>

            {/* Konu */}
            <div className="form-group">
              <label htmlFor="konu">Konu</label>
              <select
                id="konu"
                name="konu"
                required
                value={formData.konu}
                onChange={handleChange}
                aria-describedby="konu-error"
                aria-invalid={errors.konu ? true : undefined}
              >
                <option value="">-- Seçiniz --</option>
                <option value="is-teklifi">İş Teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Öneri</option>
              </select>
              <small id="konu-error" className="error-msg" role="alert">
                {errors.konu}
              </small>
            </div>

            {/* Mesaj */}
            <div className="form-group">
              <label htmlFor="mesaj">Mesajınız</label>
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
              />
              <small id="mesaj-error" className="error-msg" role="alert">
                {errors.mesaj}
              </small>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>&copy; 2026 Ensar DAŞ. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
