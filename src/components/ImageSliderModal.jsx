import { useState, useRef, useEffect } from "react";

const ImageSliderModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const slides = project.images || [];
  const total = slides.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Pause video when switching slides
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [current]);

  const currentSlide = slides[current];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          width: "min(600px, 92vw)",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: 500, fontSize: "15px" }}>
              {project.title}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#888" }}>
              {currentSlide?.type === "video" ? "Video demo" : "Screenshot"}{" "}
              {current + 1} of {total}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              color: "#000000",
              lineHeight: 1,
              padding: "4px 8px",
              borderRadius: "6px",
            }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Slide area */}
        <div
          style={{
            position: "relative",
            background: "#111",
            height: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Arrow Left */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "#fff",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image or Video */}
          {currentSlide?.type === "video" ? (
            <video
              key={currentSlide.src}
              ref={videoRef}
              src={currentSlide.src}
              controls
              style={{
                width: "100%",
                height: "320px",
                objectFit: "contain",
                background: "#000",
              }}
            />
          ) : (
            <img
              key={currentSlide?.src}
              src={currentSlide?.src}
              alt={`${project.title} screenshot ${current + 1}`}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />
          )}

          {/* Arrow Right */}
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "#fff",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            borderTop: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                title={slide.type === "video" ? "Video" : "Screenshot"}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: slide.type === "video" ? "2px" : "50%",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  background: i === current ? "#222" : "#ccc",
                  transition: "background 0.15s",
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#888" }}>
            {current + 1} / {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderModal;