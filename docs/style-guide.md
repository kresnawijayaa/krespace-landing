# Krespace Studio Web Style Guide

Dokumen ini dipakai sebagai pegangan saat mengembangkan halaman atau komponen baru untuk website Krespace Studio. Tujuannya menjaga visual tetap konsisten dengan landing page awal: neo-brutalist, vibrant, tech-focused, santai, dan mudah dibaca.

## Prinsip Visual

- Pertahankan nuansa neo-brutalist: border tebal, shadow hitam, card rounded, badge, dan button yang terasa tactile.
- Gunakan layout yang padat tapi tetap lega: section lebar penuh, isi dibatasi `max-w-6xl` atau `max-w-4xl`.
- Jangan mengubah arah visual menjadi terlalu corporate, terlalu minimalis, atau terlalu soft.
- Copy tetap santai dan langsung. Hindari klaim berlebihan seperti trusted by, nama client, atau kalimat marketing yang terlalu formal.
- Konten utama harus selalu berupa HTML statis, bukan teks penting yang hanya muncul dari JavaScript.

## Brand

- Nama utama: `Krespace Studio`
- Nama pendek: `Krespace`
- Logo text: `Krespace.`
- Tone: praktis, santai, jelas, dan tidak terlalu teknis.
- Positioning utama: dari ide atau source code sampai benar-benar berjalan.
- Pilar layanan: Build, Launch, Rescue, Upgrade, dan Care.

## Warna

Gunakan warna vibrant dan tech-focused ini sebagai palet utama pengembangan berikutnya.

| Token | Hex | Tailwind class yang dianjurkan | Penggunaan |
| --- | --- | --- | --- |
| Fresh Teal | `#14b8a6` | `bg-teal-500`, `bg-teal-50`, `text-teal-600` | Primary background, highlight teknologi, section ringan |
| Warm Yellow | `#fcd34d` | `bg-yellow-300`, `bg-yellow-100`, `text-yellow-600` | Badge, alert, emphasis, dekorasi mockup |
| Vivid Purple | `#a855f7` | `bg-purple-500`, `bg-purple-100`, `text-purple-600` | Accent, custom/personal project, visual variety |
| Coral / Orange | `#f97316` | `bg-orange-500`, `bg-orange-100`, `text-orange-600` | CTA sekunder, icon service, accent energik |
| Lime Green | `#84cc16` | `bg-lime-500`, `bg-lime-100`, `text-lime-600` | Success state opsional, status selesai |
| White | `#ffffff` | `bg-white` | Card, modal, navbar, content surface |
| Black / Outline | `#111827` atau black | `text-black`, `border-black`, `bg-dark` | Teks utama, outline, shadow, button gelap |
| Base | `#FAFAFA` | `bg-base` | Background halaman |

Catatan implementasi:
- Tailwind default sudah menyediakan `bg-teal-500`, `bg-yellow-300`, `bg-purple-500`, `bg-orange-500`, dan `bg-lime-500`.
- `tailwind.config.mjs` juga menyimpan alias `brand.teal`, `brand.warmYellow`, `brand.vividPurple`, `brand.orange`, dan `brand.lime` untuk kebutuhan token internal.
- Jangan membuat halaman didominasi satu warna saja. Campur white surface, black outline, dan 2-3 accent vibrant secukupnya.

## Typography

- Font utama: Plus Jakarta Sans.
- H1 homepage: besar, bold, dan langsung menyampaikan positioning.
- H2 section: `text-3xl md:text-4xl font-extrabold`.
- H3 card: `text-lg` sampai `text-xl`, `font-bold`.
- Body copy: `text-gray-600` atau `text-gray-700`, ukuran `text-sm` sampai `text-lg` sesuai konteks.
- Hindari letter spacing negatif. Gunakan `tracking-tight` hanya untuk headline besar jika diperlukan.

## Komponen Reusable

Class yang harus dipertahankan:

```css
.neo-border
.neo-card
.neo-btn
.neo-badge
.mockup-window
.mockup-header
.mockup-dot
```

Panduan:
- `neo-card`: untuk card berulang, pricing, wrapper CTA besar, atau panel konten.
- `neo-btn`: untuk CTA dan action jelas. Button utama biasanya `bg-brand-green`, `bg-teal-500`, atau `bg-orange-500`.
- `neo-badge`: untuk tag pendek seperti Website, Dashboard, Invoice, Booking.
- `mockup-*`: khusus visual dashboard atau browser mockup.

## Borders, Radius, Shadow

- Border utama: 2px sampai 2.5px solid black/dark.
- Radius card: `rounded-xl`, `rounded-2xl`, atau `border-radius: 1.25rem` untuk `neo-card`.
- Shadow neo:
  - `shadow-neo-sm`: elemen kecil seperti icon wrapper atau badge.
  - `shadow-neo`: card, navbar, button.
  - `shadow-neo-lg`: mockup besar atau panel hero.
- Hover card boleh memakai `hover:-translate-y-1` atau transform kecil, jangan terlalu banyak animasi.

## Layout Section

Homepage wajib menjaga urutan section utama:

1. Navbar
2. Hero
3. Kamu sedang berada di tahap mana?
4. Layanan Build, Launch, Rescue, Upgrade, dan Care
5. Featured Work
6. Kebijakan testimonial
7. Before & After
8. Cara Kerja
9. Estimasi Awal
10. CTA akhir
11. Footer

Saat menambah section baru:
- Gunakan semantic HTML: `header`, `nav`, `main`, `section`, `footer`.
- Pastikan hierarchy heading tetap rapi.
- Homepage hanya boleh punya satu H1.
- Gunakan spacing section sekitar `py-20 px-4 md:px-8`.

## Icon

- Gunakan icon dari `lucide-astro` melalui komponen `src/components/Icon.astro`.
- Jangan memakai Lucide CDN.
- Icon di card biasanya `w-5 h-5` atau `w-6 h-6`.
- Bungkus icon penting dengan square kecil ber-border dan shadow agar tetap sesuai gaya neo-brutalist.

## CTA dan WhatsApp

- Semua link WhatsApp harus memakai `whatsappUrl` dari `src/data/site.ts`.
- Jangan hardcode URL WhatsApp di banyak komponen.
- CTA utama:
  - `Ceritakan Kebutuhan`
  - `Tanya Scope`
  - `Lihat Hasil Kerja`
- CTA harus jelas, tidak terlalu panjang, dan terlihat seperti tombol.

## SEO dan AI Crawler

- Set `html lang="id"`.
- Gunakan title dan description natural, bukan keyword stuffing.
- Semua halaman service harus punya title, description, H1, CTA WhatsApp, dan internal link.
- JSON-LD tetap dipertahankan untuk `ProfessionalService`.
- Konten utama harus ada di HTML hasil build.
- Jangan menyembunyikan copy penting di script browser.

## File Penting

- Konfigurasi site: `src/data/site.ts`
- Data service: `src/data/services.ts`
- Content portfolio: `src/content/work/`
- Content schema: `src/content.config.ts`
- Data pricing: `src/data/pricing.ts`
- Global style: `src/styles/global.css`
- Tailwind tokens: `tailwind.config.mjs`
- Layout SEO: `src/layouts/BaseLayout.astro` dan `src/components/SEO.astro`

## Checklist Sebelum Ship

- `npm run build` berhasil.
- Tidak ada Tailwind CDN.
- Tidak ada Lucide CDN.
- Homepage tetap satu H1.
- Section utama tidak hilang.
- Tidak ada link atau kartu demo lama.
- Portfolio restricted hanya memakai data demonstrasi.
- Draft testimonial tidak dipublikasikan sebagai review asli.
- Mobile menu bisa dibuka.
- WhatsApp URL masih dari config.
- Tahun copyright mengikuti `site.copyrightYear`.
