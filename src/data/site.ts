export const site = {
  brandName: "Krespace Studio",
  shortBrandName: "Krespace",
  siteUrl: "https://krespace.my.id",
  whatsappNumber: "6281314250902",
  whatsappText: "Halo Krespace, saya mau konsultasi project",
  email: "contact@kresnawijaya.web.id",
  defaultSeoTitle: "Krespace Studio | Build, Launch, Rescue, Upgrade & Care",
  defaultSeoDescription:
    "Krespace membantu membuat website dan sistem baru, menjalankan project yang belum online, memperbaiki kendala teknis, menambahkan fitur, dan merawatnya.",
  ogImage: "/og-image.svg",
  copyrightYear: 2026,
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappText)}`;

export const whatsappUrlFor = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Layanan", href: "/services" },
  { label: "Hasil Kerja", href: "/work" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Harga", href: "/#harga" },
  { label: "Tentang", href: "/about" },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brandName,
  url: site.siteUrl,
  description: site.defaultSeoDescription,
  areaServed: "Indonesia",
  serviceType: [
    "Build website dan sistem",
    "Launch dan deployment",
    "Rescue project bermasalah",
    "Upgrade fitur dan integrasi",
    "Care dan maintenance",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: whatsappUrl,
  },
};
