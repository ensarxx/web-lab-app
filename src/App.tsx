import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Web Tasarimi ve Programlama</h1>
      <h2>LAB-1</h2>

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
    </div>
  )
}

export default App
