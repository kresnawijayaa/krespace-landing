export const visitorStages = [
  {
    title: "Mau bikin dari awal",
    description: "Punya ide atau proses kerja yang ingin dijadikan website atau sistem.",
    service: "Build",
    icon: "Blocks",
    bgClass: "bg-teal-100",
    accentClass: "text-teal-700",
    href: "/#layanan",
  },
  {
    title: "Project sudah ada, belum online",
    description: "Source code tersedia, tetapi deployment, domain, database, atau server belum selesai.",
    service: "Launch",
    icon: "Rocket",
    bgClass: "bg-yellow-100",
    accentClass: "text-yellow-700",
    href: "/#layanan",
  },
  {
    title: "Website atau sistem bermasalah",
    description: "Build gagal, halaman blank, API putus, atau project lama tidak bisa dijalankan.",
    service: "Rescue",
    icon: "LifeBuoy",
    bgClass: "bg-orange-100",
    accentClass: "text-orange-700",
    href: "/rescue",
  },
  {
    title: "Perlu tambahan fitur",
    description: "Sistem sudah berjalan dan perlu payment, role, export, notifikasi, atau integrasi.",
    service: "Upgrade",
    icon: "Wrench",
    bgClass: "bg-purple-100",
    accentClass: "text-purple-700",
    href: "/#layanan",
  },
  {
    title: "Sudah berjalan dan perlu dirawat",
    description: "Butuh monitoring, backup, deployment perubahan, maintenance, dan dukungan teknis.",
    service: "Care",
    icon: "ShieldCheck",
    bgClass: "bg-lime-100",
    accentClass: "text-lime-700",
    href: "/care",
  },
];

export const services = [
  {
    name: "Build",
    result: "Website atau sistem baru yang siap digunakan.",
    examples: ["Website profil", "Dashboard internal", "Sistem operasional"],
    icon: "Blocks",
    bgClass: "bg-teal-500",
    href: "/jasa-pembuatan-sistem-internal",
    cta: "Mulai project baru",
  },
  {
    name: "Launch",
    result: "Source code dibawa sampai online dan dapat diakses.",
    examples: ["Deployment frontend/backend", "Domain, DNS, dan HTTPS", "VPS, database, dan Docker"],
    icon: "Rocket",
    bgClass: "bg-yellow-300",
    href: "/contact?service=launch",
    cta: "Bawa project online",
  },
  {
    name: "Rescue",
    result: "Masalah diperiksa, penyebab dipetakan, dan jalur perbaikan dibuat jelas.",
    examples: ["Gagal build atau deploy", "API dan database error", "Project lama atau hasil AI"],
    icon: "LifeBuoy",
    bgClass: "bg-orange-500 text-white",
    href: "/rescue",
    cta: "Periksa project",
  },
  {
    name: "Upgrade",
    result: "Fitur atau integrasi baru masuk tanpa kehilangan arah sistem.",
    examples: ["Payment dan email", "Role dan permission", "Export dan integrasi API"],
    icon: "Wrench",
    bgClass: "bg-purple-500 text-white",
    href: "/contact?service=upgrade",
    cta: "Diskusikan upgrade",
  },
  {
    name: "Care",
    result: "Website atau sistem tetap dipantau dan punya jalur bantuan setelah launch.",
    examples: ["Uptime dan backup", "Deployment perubahan", "Maintenance dan minor fixes"],
    icon: "ShieldCheck",
    bgClass: "bg-lime-500",
    href: "/care",
    cta: "Lihat layanan Care",
  },
];

export const servicePages = [
  {
    slug: "jasa-pembuatan-website",
    title: "Jasa Pembuatan Website | Krespace Studio",
    description:
      "Krespace membantu build dan launch website profil, landing page, portfolio, event, komunitas, dan bisnis kecil.",
    h1: "Website baru, sampai benar-benar online",
    lead:
      "Dari struktur konten dan tampilan sampai domain, HTTPS, dan proses launch. Cocok untuk bisnis kecil, komunitas, event, dan portfolio.",
    bullets: ["Website profil", "Landing page", "Portfolio", "Event dan komunitas", "Launch dan deployment"],
  },
  {
    slug: "jasa-pembuatan-sistem-internal",
    title: "Jasa Pembuatan Sistem Internal | Krespace Studio",
    description:
      "Krespace membantu build, launch, dan upgrade dashboard, sistem admin, invoice, stok, booking, monitoring, dan laporan.",
    h1: "Sistem internal dari kebutuhan sampai digunakan",
    lead:
      "Untuk tim yang ingin merapikan proses kerja, menyatukan data, atau membuat sistem operasional baru dengan alur yang jelas.",
    bullets: ["Dashboard", "Sistem admin", "Invoice", "Stok dan booking", "Monitoring", "Laporan dan export data"],
  },
  {
    slug: "website-undangan-digital",
    title: "Website Undangan Digital | Krespace Studio",
    description:
      "Krespace membantu build dan launch wedding website dengan RSVP, lokasi, galeri, dan link yang mudah dibagikan.",
    h1: "Website undangan digital yang siap dibagikan",
    lead:
      "Untuk wedding website atau undangan digital yang personal, mudah dibuka dari HP, dan dibantu sampai online.",
    bullets: ["RSVP", "Lokasi", "Galeri", "Cerita singkat", "Link share"],
  },
  {
    slug: "surprise-page",
    title: "Surprise Page | Krespace Studio",
    description:
      "Krespace membantu membuat dan menjalankan halaman surprise untuk ulang tahun, anniversary, foto, cerita, dan musik.",
    h1: "Surprise page untuk hadiah digital yang personal",
    lead:
      "Halaman khusus untuk ulang tahun, anniversary, atau hadiah digital yang dibantu dari ide sampai link siap dibagikan.",
    bullets: ["Foto", "Cerita", "Musik", "Pesan personal", "Halaman khusus"],
  },
];
