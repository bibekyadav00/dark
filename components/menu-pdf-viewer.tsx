"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export function MenuPdfViewer() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)

  // Sample PDF URL - replace with your actual menu PDF
  const pdfUrl = "/sample-menu.pdf"

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber
    })
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0))
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6))
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <div className="flex items-center">
            <Input
              type="number"
              min={1}
              max={numPages || 1}
              value={pageNumber}
              onChange={(e) => setPageNumber(Number.parseInt(e.target.value) || 1)}
              className="w-16 text-center"
            />
            <span className="mx-2 text-sm text-muted-foreground">of {numPages || "--"}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changePage(1)}
            disabled={!numPages || pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={zoomOut} disabled={scale <= 0.6}>
            <ZoomOut className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <span className="text-sm text-muted-foreground">{Math.round(scale * 100)}%</span>
          <Button variant="outline" size="icon" onClick={zoomIn} disabled={scale >= 2.0}>
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={pdfUrl} download="HALL-12-Canteen-Menu.pdf">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download PDF</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto flex justify-center p-4 bg-gray-50">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Skeleton className="w-full h-[800px]" />}
          error={
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <p className="text-red-500 mb-2">Error loading PDF menu.</p>
              <p className="text-sm text-muted-foreground">Please check back later or contact us for the menu.</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={<Skeleton className="w-full h-[800px]" />}
          />
        </Document>
      </div>
    </div>
  )
}
