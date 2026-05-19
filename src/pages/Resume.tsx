import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, FileText, Minus, Plus, RefreshCcw, RotateCcw, Sparkles } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLanguage } from '../contexts/LanguageContext';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type ViewerStatus = 'idle' | 'loading' | 'ready' | 'error';

const MIN_ZOOM = 60;
const MAX_ZOOM = 160;
const ZOOM_STEP = 10;

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const cvUrl = t('footer.cv') as string;
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageAspectRatio, setPageAspectRatio] = useState(1.414);
  const [status, setStatus] = useState<ViewerStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryToken, setRetryToken] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [zoomPercent, setZoomPercent] = useState(() => {
    if (typeof window === 'undefined') return 100;

    const savedZoom = window.localStorage.getItem('portfolio_resume_zoom');
    const parsedZoom = savedZoom ? Number(savedZoom) : Number.NaN;

    if (Number.isFinite(parsedZoom)) {
      return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, parsedZoom));
    }

    return 100;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = viewerRef.current;
    if (!element) return;

    const updateSize = () => {
      setContainerWidth(element.clientWidth);
    };

    updateSize();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [cvUrl]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = viewerRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPageCount(0);
    setStatus('idle');
    setErrorMessage(null);
    setRetryToken(0);
  }, [cvUrl]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('portfolio_resume_zoom', String(zoomPercent));
  }, [zoomPercent]);

  const pageWidth = Math.max(280, containerWidth || 0);
  const zoomScale = zoomPercent / 100;
  const pageHeight = Math.max(420, Math.round(pageWidth * pageAspectRatio * zoomScale));
  const visualPageWidth = Math.max(280, Math.round(pageWidth * zoomScale));

  const handleRetry = () => {
    setErrorMessage(null);
    setStatus('loading');
    setRetryToken((value) => value + 1);
  };

  const changeZoom = (delta: number) => {
    setZoomPercent((currentZoom) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, currentZoom + delta)));
  };

  const resetZoom = () => setZoomPercent(100);

  return (
    <section className="w-full" id="resume">
      <div className="mx-auto max-w-4xl border-x border-b border-neutral-300/70 bg-diagonal px-6 py-5 lg:px-10 dark:border-neutral-800">
        <h1 className="text-4xl heading-display text-darker sm:text-4xl dark:text-text-dark">
          {t('resume.title')}
        </h1>
      </div>

      <div className="mx-auto max-w-4xl border-x border-b border-neutral-300/70 bg-white px-6 py-8 lg:px-10 dark:border-neutral-800 dark:bg-[#0a0a0a]">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
            >
              <Download className="h-4 w-4" />
              {t('resume.download')}
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary/30 hover:text-primary dark:border-neutral-700 dark:bg-surface-dark/55 dark:text-text-dark"
            >
              <ArrowUpRight className="h-4 w-4" />
              {t('resume.open')}
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-100/80 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.55)] ring-1 ring-black/5 dark:border-neutral-800 dark:bg-neutral-950/50 dark:ring-white/5">
            <div className="flex flex-wrap items-center justify-center gap-4 border-b border-neutral-200/80 px-4 py-3 text-xs uppercase tracking-[0.28em] text-text/45 dark:border-neutral-800 dark:text-text-dark/45">
              <div className="flex flex-wrap items-center gap-2 normal-case tracking-normal text-text dark:text-text-dark">
                <div className="inline-flex items-center gap-1 rounded-full border border-neutral-300/80 bg-white/80 px-2 py-1 text-xs shadow-sm dark:border-neutral-700 dark:bg-neutral-900/60">
                  <button
                    type="button"
                    onClick={() => changeZoom(-ZOOM_STEP)}
                    disabled={zoomPercent <= MIN_ZOOM}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-neutral-800"
                    aria-label="Reducir zoom"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="min-w-12 text-center font-medium tabular-nums">{zoomPercent}%</span>
                  <button
                    type="button"
                    onClick={() => changeZoom(ZOOM_STEP)}
                    disabled={zoomPercent >= MAX_ZOOM}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-neutral-800"
                    aria-label="Aumentar zoom"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300/80 bg-white/80 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/30 hover:text-primary dark:border-neutral-700 dark:bg-neutral-900/60"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset
                </button>

                <label className="flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/80 px-3 py-1.5 text-xs font-medium dark:border-neutral-700 dark:bg-neutral-900/60">
                  Zoom
                  <input
                    type="range"
                    min={MIN_ZOOM}
                    max={MAX_ZOOM}
                    step={5}
                    value={zoomPercent}
                    onChange={(event) => setZoomPercent(Number(event.target.value))}
                    className="h-1.5 w-28 cursor-pointer accent-primary"
                    aria-label="Zoom del PDF"
                  />
                </label>
              </div>
            </div>

            <div
              ref={viewerRef}
              className="relative min-h-[48vh] w-full px-4 py-4 sm:min-h-[76vh] sm:px-5 sm:py-5"
              style={{ overflowX: visualPageWidth > (containerWidth || 0) ? 'auto' : 'hidden' }}
            >
              {!isVisible && (
                <div className="flex min-h-[48vh] w-full items-center justify-center rounded-[1.5rem] border border-dashed border-neutral-300/80 bg-white/70 px-6 sm:min-h-[72vh] dark:border-neutral-700 dark:bg-neutral-950/50">
                  <div className="space-y-4 text-center">
                    <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-text dark:text-text-dark">Cargando visor tipográfico</p>
                      <p className="text-xs text-text/55 dark:text-text-dark/55">Preparando el PDF cuando entra en pantalla</p>
                    </div>
                  </div>
                </div>
              )}

              {isVisible && status === 'error' && (
                <div className="flex min-h-[48vh] w-full items-center justify-center rounded-[1.5rem] border border-dashed border-red-300/70 bg-white/80 px-6 py-10 sm:min-h-[72vh] text-center dark:border-red-900/70 dark:bg-neutral-950/55">
                  <div className="max-w-xl space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-darker dark:text-text-dark">No se pudo cargar el CV</h2>
                      <p className="text-sm leading-7 text-text/70 dark:text-text-dark/70">
                        {errorMessage ?? 'El archivo PDF no respondió correctamente. Puedes intentar otra vez o abrirlo en una pestaña nueva.'}
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary/30 hover:text-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-text-dark"
                      >
                        <RefreshCcw className="h-4 w-4" />
                        Reintentar
                      </button>
                      <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        Abrir PDF
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {isVisible && status !== 'error' && (
                <Document
                  key={`${cvUrl}-${retryToken}`}
                  file={cvUrl}
                  loading={
                    <div className="flex min-h-[48vh] w-full items-center justify-center rounded-[1.5rem] border border-dashed border-neutral-300/80 bg-white/70 px-6 sm:min-h-[72vh] dark:border-neutral-700 dark:bg-neutral-950/50">
                      <div className="space-y-5 text-center">
                        <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800" />
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-text dark:text-text-dark">Cargando documento</p>
                          <p className="text-xs text-text/55 dark:text-text-dark/55">Preparando páginas y ajustando el ancho al contenedor</p>
                        </div>
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex min-h-[48vh] w-full items-center justify-center rounded-[1.5rem] border border-dashed border-red-300/70 bg-white/80 px-6 py-10 sm:min-h-[72vh] text-center dark:border-red-900/70 dark:bg-neutral-950/55">
                      <div className="max-w-xl space-y-4">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-lg font-semibold text-darker dark:text-text-dark">No se pudo cargar el PDF</h2>
                          <p className="text-sm leading-7 text-text/70 dark:text-text-dark/70">
                            El visor no pudo procesar el archivo. Prueba recargar el bloque o abrir el documento directamente.
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                          <button
                            type="button"
                            onClick={handleRetry}
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary/30 hover:text-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-text-dark"
                          >
                            <RefreshCcw className="h-4 w-4" />
                            Reintentar
                          </button>
                          <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            Abrir PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                  onLoadStart={() => {
                    setStatus('loading');
                    setErrorMessage(null);
                  }}
                  onLoadSuccess={(pdf) => {
                    const firstPage = pdf.getPage(1);

                    firstPage.then((page) => {
                      const viewport = page.getViewport({ scale: 1 });
                      setPageAspectRatio(viewport.height / viewport.width);
                    });

                    setPageCount(pdf.numPages);
                    setStatus('ready');
                  }}
                  onLoadError={(error) => {
                    setStatus('error');
                    setErrorMessage(error instanceof Error ? error.message : 'Error desconocido al cargar el PDF');
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                      <div
                        key={pageNumber}
                        className="relative mx-auto overflow-visible rounded-[1.5rem] bg-white shadow-[0_24px_70px_-48px_rgba(15,23,42,0.55)] ring-1 ring-black/5 dark:ring-white/5"
                        style={{ width: pageWidth, height: pageHeight }}
                      >
                        <div
                          className="mx-auto transition-transform duration-150 ease-out"
                          style={{
                            transform: `scale(${zoomScale})`,
                            transformOrigin: 'top center',
                            width: pageWidth,
                          }}
                        >
                          <Page
                            pageNumber={pageNumber}
                            width={pageWidth}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            loading={
                              <div className="flex h-full w-full items-center justify-center bg-white dark:bg-white">
                                <div className="h-10 w-10 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm" />
                              </div>
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Document>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
