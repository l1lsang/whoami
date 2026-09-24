import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import type {
  ProjectGallery as GalleryData,
  ProjectScreenshot,
} from '../../data/projects'
import './ProjectGallery.css'

type LightboxProps = {
  images: ProjectScreenshot[]
  title: string
  initialIndex: number
  onClose: () => void
}

function ImageLightbox({
  images,
  title,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [zoomed, setZoomed] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const screenshot = images[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    return () => {
      document.body.style.overflow = previousOverflow
      dialog.close()
    }
  }, [])

  function changeImage(direction: number) {
    setIndex((current) => (current + direction + images.length) % images.length)
    setZoomed(false)
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="image-lightbox"
      aria-labelledby={titleId}
      onClose={() => {
        if (!dialogRef.current?.open) onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      onKeyDown={(event) => {
        if (zoomed || images.length < 2) return
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          changeImage(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <div className="lightbox-panel">
        <header className="lightbox-header">
          <div>
            <p>{title} / GALLERY</p>
            <h2 id={titleId}>{screenshot.caption}</h2>
          </div>
          <button
            type="button"
            className="gallery-icon-button"
            aria-label="이미지 닫기"
            onClick={() => dialogRef.current?.close()}
            autoFocus
          >
            <X size={21} aria-hidden="true" />
          </button>
        </header>
        <div
          className={`lightbox-stage ${zoomed ? 'is-zoomed' : ''}`}
          key={`${index}-${zoomed}`}
          tabIndex={0}
          aria-label="프로젝트 이미지. 확대 상태에서는 스크롤로 이동할 수 있습니다."
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
          />
        </div>
        <footer className="lightbox-footer">
          <div className="lightbox-navigation">
            {images.length > 1 ? (
              <button
                type="button"
                className="gallery-icon-button"
                aria-label="이전 이미지"
                onClick={() => changeImage(-1)}
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
            ) : null}
            <span aria-live="polite">
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
            {images.length > 1 ? (
              <button
                type="button"
                className="gallery-icon-button"
                aria-label="다음 이미지"
                onClick={() => changeImage(1)}
              >
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            ) : null}
          </div>
          <div className="lightbox-tools">
            <button
              type="button"
              className="gallery-icon-button"
              aria-label={
                zoomed ? '이미지 화면에 맞추기' : '이미지 원본 크기로 확대'
              }
              aria-pressed={zoomed}
              onClick={() => setZoomed((current) => !current)}
            >
              {zoomed ? (
                <ZoomOut size={18} aria-hidden="true" />
              ) : (
                <ZoomIn size={18} aria-hidden="true" />
              )}
            </button>
            <a
              href={screenshot.src}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              원본 보기 <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </dialog>,
    document.body,
  )
}

export function ProjectGallery({
  gallery,
  title,
}: {
  gallery: GalleryData
  title: string
}) {
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollGallery(direction: number) {
    const track = trackRef.current
    const firstSlide = track?.firstElementChild
    if (!track || !firstSlide) return
    const distance =
      firstSlide.getBoundingClientRect().width +
      parseFloat(getComputedStyle(track).columnGap)
    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    })
  }

  return (
    <div className={`project-gallery gallery-${gallery.kind}`}>
      <div
        className="gallery-track"
        ref={trackRef}
        role="group"
        aria-label={`${title} ${gallery.label}`}
      >
        {gallery.images.map((screenshot, index) => (
          <figure className="gallery-slide" key={screenshot.src}>
            <button
              type="button"
              className="screenshot-button"
              aria-label={`${title} ${screenshot.caption} 크게 보기`}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                loading="lazy"
                decoding="async"
              />
              <span className="screenshot-expand" aria-hidden="true">
                <Expand size={14} /> 크게 보기
              </span>
            </button>
            <figcaption>{screenshot.caption}</figcaption>
          </figure>
        ))}
      </div>
      {gallery.images.length > 1 ? (
        <div className="gallery-footer">
          <div className="gallery-scroll-controls">
            <button
              type="button"
              className="gallery-icon-button"
              aria-label={`${title} 이전 화면으로 스크롤`}
              onClick={() => scrollGallery(-1)}
            >
              <ArrowLeft size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-icon-button"
              aria-label={`${title} 다음 화면으로 스크롤`}
              onClick={() => scrollGallery(1)}
            >
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
      {activeImage !== null ? (
        <ImageLightbox
          images={gallery.images}
          title={title}
          initialIndex={activeImage}
          onClose={() => setActiveImage(null)}
        />
      ) : null}
    </div>
  )
}
