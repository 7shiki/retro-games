import type { Metadata } from 'next'

declare module 'next' {
  interface MetadataAlternates {
    languages?: Record<string, string | URL | null>
  }
} 