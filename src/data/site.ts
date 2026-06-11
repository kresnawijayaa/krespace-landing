export const site = {
  brandName: "Krespace Studio",
  shortBrandName: "Krespace",
  siteUrl: "https://krespace.my.id",
  whatsappNumber: "6281314250902",
  whatsappText: "Halo Krespace, saya mau konsultasi project",
  email: "contact@kresnawijaya.web.id",
  defaultSeoTitle: "Krespace Studio | Website & Sistem Sederhana",
  defaultSeoDescription:
    "Krespace Studio bantu bikin website, dashboard, invoice, stok, booking, dan sistem internal kecil yang mudah dipakai sehari-hari.",
  ogImage: "/og-image.svg",
  copyrightYear: 2026,
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappText)}`;

export const navLinks = [
  { label: "Solusi", href: "/#solusi" },
  { label: "Demo", href: "/demo" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Estimasi Harga", href: "/#harga" },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brandName,
  url: site.siteUrl,
  description: site.defaultSeoDescription,
  areaServed: "Indonesia",
  serviceType: [
    "Jasa pembuatan website",
    "Jasa pembuatan sistem internal",
    "Dashboard sederhana",
    "Website undangan digital",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: whatsappUrl,
  },
};
