# RURA — Inspired by CURA Climate

> **Dummy portfolio project.** RURA adalah perusahaan **fiktif**. Situs ini dibuat sebagai studi desain dan latihan front-end untuk portofolio, bukan produk, bisnis, atau layanan nyata.

🔗 Desain yang menjadi inspirasi: [CURA Climate](https://www.curaclimate.com/)

---

## Tujuan project

Project ini adalah eksperimen untuk meniru **filosofi desain**, bukan konten, dari situs climate-tech industrial yang saya kagumi: tata letak editorial, grid vertikal yang tipis, tipografi besar, ritme halaman yang lega, dan animasi yang tertahan.

- **RURA bukan CURA.** Tidak ada hubungan, afiliasi, atau endorsement dengan CURA Climate.
- Logo, nama, copywriting, dan gambar CURA **tidak digunakan**. Semua teks dan konten RURA ditulis ulang secara original.
- Nama perusahaan, anggota tim, partner, artikel press, dan lowongan kerja di situs ini **semuanya fiktif**.
- Foto potret tim adalah foto stok placeholder, bukan orang sungguhan dari "RURA".
- Angka 8% emisi CO₂ semen adalah konteks industri secara umum, **bukan klaim performa RURA**.
- Atribusi inspirasi ditampilkan di situs: **"RURA — Inspired by CURA Climate"** (strip atas dan footer), dengan tautan ke situs aslinya.

## Fitur

- 7 rute: `/`, `/technology`, `/about`, `/careers`, `/press`, `/press/[slug]`, `/contact`
- Grid editorial responsif (4 / 8 / 12 kolom) dengan garis pemandu halus
- Navigasi desktop yang ringkas dan overlay layar penuh di mobile (Framer Motion)
- Transisi halaman, reveal gambar dengan `clip-path`, reveal heading, marquee, dan angka yang menghitung naik
- Section teknologi dengan gambar sticky yang berganti saat scroll
- Arsip press dengan filter kategori dan halaman artikel dinamis
- Form kontak dengan React Hook Form + Zod (demo: pesan tidak dikirim atau disimpan)
- Dukungan `prefers-reduced-motion`, label form yang aksesibel, dan focus state yang jelas
- Metadata SEO unik per halaman (title, description, OpenGraph, Twitter)

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide React · React Hook Form · Zod · Biome · Bun

## Palet warna

| Token | Hex | Peran |
|---|---|---|
| `cobalt` | `#2457E6` | primary: CTA, footer, aksen |
| `navy` | `#0A1B4D` | section gelap |
| `ice` | `#D9E7FF` | label, marquee, footer bawah |
| `paper` | `#F3F5F8` | latar halaman |
| `mist` | `#E6E9EF` | panel abu |
| `ink` | `#05070B` | teks |

Palet ini sengaja dibuat **biru** sebagai penyesuaian dari referensi aslinya yang memakai coral dan hijau. Token ada di `src/app/globals.css`.

## Menjalankan secara lokal

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint
bun run build
```

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import repo di [vercel.com/new](https://vercel.com/new), lalu klik **Deploy**.
3. Opsional: set `NEXT_PUBLIC_SITE_URL` ke domain produksi untuk metadata absolut.

Atau lewat CLI:

```bash
bunx vercel --prod
```

## Struktur penting
src/
app/ rute dan halaman (App Router)
components/
layout/ header, footer, badge inspirasi, grid guides
ui/ button, headline, figure, marquee, dll.
sections/ section yang dipakai ulang antar halaman
press/ kartu dan arsip artikel
contact/ form kontak
data/
site.ts konten dummy (artikel, tim, lowongan, partner)
images.ts konfigurasi gambar terpusat
types.ts tipe data
lib/ helper (motion, meta, format, nav)

## Mengubah konten dan gambar

- Konten dummy: `src/data/site.ts`
- Gambar, alt text, dan caption: `src/data/images.ts`

Gambar berasal dari Unsplash dengan URL tetap. Nama fotografer tidak dicantumkan karena metadata-nya tidak diketahui, jadi caption memakai **"Photo via Unsplash"**. Jika ada gambar yang tidak tampil, ganti ID foto-nya di `images.ts`.

## Batasan

- Situs statis tanpa backend dan tanpa admin panel; konten diubah lewat file data.
- Form kontak hanya demo.
- Link Privacy, Terms, Cookies, dan LinkedIn di footer masih placeholder.

## Tentang pembuat

**Bintang Mesir** adalah web developer yang membangun aplikasi full-stack dan bekerja secara independen. Project ini adalah bagian dari portofolio saya untuk melatih detail desain, motion, dan aksesibilitas di Next.js.

🌐 Portofolio: [portofolio-bintang-mesir.vercel.app](https://portofolio-bintang-mesir.vercel.app/)

## Lisensi dan atribusi

Kode di repo ini dibuat untuk keperluan portofolio dan pembelajaran. Desain terinspirasi dari [CURA Climate](https://www.curaclimate.com/); seluruh merek, logo, dan materi asli CURA adalah milik pemiliknya masing-masing. Foto berasal dari Unsplash.
