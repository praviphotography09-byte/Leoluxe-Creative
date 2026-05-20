import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hi Leoluxe Creative, I want to book a photography shoot";

  const instagramHandle = "leoluxe_photography";

  // HERO SLIDES
  const heroSlides = [
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d8e6f",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1523438097201-512ae7d59c8a"
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((p) => (p + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // GALLERY DATA
  const weddingImages = [
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d8e6f",
    "https://images.unsplash.com/photo-1523438097201-512ae7d59c8a",
    "https://images.unsplash.com/photo-1519741497674-611481863552"
  ];

  const portraitImages = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  ];

  const productImages = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1503602642458-232111445657"
  ];

  const galleryGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    maxWidth: "1000px",
    margin: "auto"
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    cursor: "pointer"
  };

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${heroSlides[heroIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 style={{ fontSize: "60px", textShadow: "0 5px 20px #000" }}>
          📸 Leoluxe Creative
        </h1>
        <p style={{ color: "#ddd" }}>Premium Photography • Branding • Studio</p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#25D366",
            color: "#000",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          💬 Book Now
        </a>

        {/* INSTAGRAM */}
        <a
          href={`https://instagram.com/${instagramHandle}`}
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            color: "#fff",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          📷 Instagram @{instagramHandle}
        </a>
      </div>

      {/* ABOUT */}
      <div style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "auto", color: "#bbb" }}>
          Leoluxe Creative is a premium photography studio specializing in weddings,
          portraits, product photography, and cinematic branding.
        </p>
      </div>

      {/* GALLERY */}
      <div style={{ padding: "80px 20px", background: "#111" }}>
        <h2 style={{ textAlign: "center", color: "#f5c542" }}>📸 Portfolio</h2>

        <h3 style={{ textAlign: "center" }}>💍 Weddings</h3>
        <div style={galleryGrid}>
          {weddingImages.map((img, i) => (
            <img key={i} src={img} style={imgStyle} />
          ))}
        </div>

        <h3 style={{ textAlign: "center", marginTop: "40px" }}>👤 Portraits</h3>
        <div style={galleryGrid}>
          {portraitImages.map((img, i) => (
            <img key={i} src={img} style={imgStyle} />
          ))}
        </div>

        <h3 style={{ textAlign: "center", marginTop: "40px" }}>🛍️ Products</h3>
        <div style={galleryGrid}>
          {productImages.map((img, i) => (
            <img key={i} src={img} style={imgStyle} />
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Contact</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: "10px", margin: "10px", width: "220px" }}
        />

        <br />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ padding: "10px", margin: "10px", width: "220px" }}
        />

        <br />

        <button style={{ padding: "12px 25px", background: "#f5c542", border: "none", borderRadius: "8px" }}>
          Send
        </button>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #222", color: "#aaa" }}>
        © 2026 Leoluxe Creative • All Rights Reserved
      </div>

    </div>
  );
}
