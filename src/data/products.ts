export type Product = {
  id: string;
  name: string;
  brand: string;
  memory: string;
  price: number;
  category: "gpu-nvidia" | "gpu-amd" | "psu" | "combo";
  hasBox: boolean;
  note?: string;
  images?: string[];
};

export const WHATSAPP_NUMBER = "5491150510046"; // Replace with actual number
export const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/KcKTVOZXstW8ErhnpFGzxh";

export const STORE_INFO = {
  name: "Hardware Store VC",
  address: "AV SAN MARTIN 1758, Villa Crespo",
  hours: "Lunes a Viernes 11 a 19hs — Sábados 10 a 13hs",
  paymentMethods: ["Efectivo (Pesos)", "USD", "USDT"],
  dollarType: "Valor Dólar Blue (venta)",
  shipping: "Envíos solo por Andreani. Genera la etiqueta el comprador.",
  warranty: "Productos SIN GARANTÍA. Todo se puede probar delante del cliente.",
  notes: "No permuto ni tomo componentes en parte de pago.",
};

export const products: Product[] = [
  // NVIDIA GPUs
  { id: "n1", name: "GTX 1660 SUPER 6GB", brand: "ZOTAC TWIN", memory: "6GB", price: 185000, category: "gpu-nvidia", hasBox: false },
  { id: "n2", name: "GTX 1660 SUPER 6GB", brand: "GIGABYTE", memory: "6GB", price: 185000, category: "gpu-nvidia", hasBox: false },
  { id: "n3", name: "GTX 1660 TI 6GB", brand: "ASUS TUF", memory: "6GB", price: 190000, category: "gpu-nvidia", hasBox: true },
  { id: "n4", name: "RTX 2060 6GB", brand: "ZOTAC", memory: "6GB", price: 230000, category: "gpu-nvidia", hasBox: false },
  { id: "n5", name: "RTX 2060 6GB", brand: "ASUS DUAL", memory: "6GB", price: 235000, category: "gpu-nvidia", hasBox: true },
  { id: "n6", name: "RTX 2060 6GB", brand: "MSI VENTUS", memory: "6GB", price: 230000, category: "gpu-nvidia", hasBox: false },
  { id: "n7", name: "RTX 2060 SUPER 8GB", brand: "MSI VENTUS", memory: "8GB", price: 275000, category: "gpu-nvidia", hasBox: true },
  { id: "n8", name: "RTX 2060 12GB", brand: "ZOTAC TWIN", memory: "12GB", price: 255000, category: "gpu-nvidia", hasBox: false },
  { id: "n9", name: "RTX 3060 8GB", brand: "ZOTAC TWIN", memory: "8GB", price: 330000, category: "gpu-nvidia", hasBox: false },
  { id: "n10", name: "RTX 3060 TI 8GB", brand: "GAMING X", memory: "8GB", price: 340000, category: "gpu-nvidia", hasBox: false },
  { id: "n11", name: "RTX 3060 TI 8GB", brand: "MSI VENTUS X3", memory: "8GB", price: 340000, category: "gpu-nvidia", hasBox: true },
  { id: "n12", name: "RTX 3060 TI 8GB", brand: "TRIPLE FAN EAGLE", memory: "8GB", price: 335000, category: "gpu-nvidia", hasBox: true },
  { id: "n13", name: "RTX 3070 8GB", brand: "ASUS TUF", memory: "8GB", price: 380000, category: "gpu-nvidia", hasBox: false },
  { id: "n14", name: "RTX 3070 8GB", brand: "ZOTAC TWIN WHITE", memory: "8GB", price: 380000, category: "gpu-nvidia", hasBox: false, note: "Blanca" },
  { id: "n15", name: "RTX 3070 8GB", brand: "MSI VENTUS X3", memory: "8GB", price: 375000, category: "gpu-nvidia", hasBox: true },
  { id: "n16", name: "RTX 3070 8GB", brand: "ASUS MEGALODON", memory: "8GB", price: 380000, category: "gpu-nvidia", hasBox: false },
  { id: "n17", name: "RTX 3070 8GB", brand: "EVGA FTW3 ULTRA", memory: "8GB", price: 385000, category: "gpu-nvidia", hasBox: false },
  { id: "n18", name: "RTX 3070 8GB", brand: "ASUS ROG STRIX", memory: "8GB", price: 400000, category: "gpu-nvidia", hasBox: false },
  { id: "n19", name: "RTX 3070 8GB", brand: "XC3 EVGA", memory: "8GB", price: 370000, category: "gpu-nvidia", hasBox: false },
  { id: "n20", name: "RTX 3070 TI 8GB", brand: "EVGA FTW3", memory: "8GB", price: 415000, category: "gpu-nvidia", hasBox: false },
  { id: "n21", name: "RTX 3070 TI 8GB", brand: "ASUS TUF", memory: "8GB", price: 420000, category: "gpu-nvidia", hasBox: false },
  { id: "n22", name: "RTX 3070 TI 8GB", brand: "ZOTAC TRINITY", memory: "8GB", price: 415000, category: "gpu-nvidia", hasBox: false },
  { id: "n23", name: "RTX 3080 10GB", brand: "MSI VENTUS", memory: "10GB", price: 515000, category: "gpu-nvidia", hasBox: true },
  { id: "n24", name: "RTX 3080 TI 12GB", brand: "ZOTAC TRINITY", memory: "12GB", price: 585000, category: "gpu-nvidia", hasBox: false },
  { id: "n25", name: "RTX 3080 TI 12GB", brand: "EVGA FTW3", memory: "12GB", price: 595000, category: "gpu-nvidia", hasBox: true },
  { id: "n26", name: "RTX 3090 24GB", brand: "MSI VENTUS", memory: "24GB", price: 740000, category: "gpu-nvidia", hasBox: false },
  { id: "n27", name: "RTX 3090 24GB", brand: "PNY", memory: "24GB", price: 710000, category: "gpu-nvidia", hasBox: true },
  { id: "n28", name: "RTX 3090 24GB", brand: "MSI GAMING X", memory: "24GB", price: 750000, category: "gpu-nvidia", hasBox: false },
  { id: "n29", name: "RTX 3090 24GB", brand: "ASUS TUF", memory: "24GB", price: 750000, category: "gpu-nvidia", hasBox: false },

  // AMD GPUs
  { id: "a1", name: "RX 5600 XT 6GB", brand: "ASROCK PHANTOM", memory: "6GB", price: 185000, category: "gpu-amd", hasBox: false },
  { id: "a2", name: "RX 5700 XT 8GB", brand: "SAPPHIRE NITRO", memory: "8GB", price: 250000, category: "gpu-amd", hasBox: false },
  { id: "a3", name: "RX 5700 XT 8GB", brand: "ASUS TUF", memory: "8GB", price: 240000, category: "gpu-amd", hasBox: false },
  { id: "a4", name: "RX 5700 XT 8GB", brand: "GAMING X", memory: "8GB", price: 240000, category: "gpu-amd", hasBox: false },
  { id: "a5", name: "RX 5700 XT 8GB", brand: "ROG STRIX", memory: "8GB", price: 250000, category: "gpu-amd", hasBox: false },
  { id: "a6", name: "RX 5700 XT 8GB", brand: "ASROCK PHANTOM", memory: "8GB", price: 240000, category: "gpu-amd", hasBox: false },
  { id: "a7", name: "RX 5700 XT 8GB", brand: "XFX", memory: "8GB", price: 240000, category: "gpu-amd", hasBox: false },
  { id: "a8", name: "RX 5700 XT 8GB", brand: "GIGABYTE", memory: "8GB", price: 235000, category: "gpu-amd", hasBox: false },
  { id: "a9", name: "RX 6600 8GB", brand: "XFX SWIFT", memory: "8GB", price: 210000, category: "gpu-amd", hasBox: false, note: "Le tiembla un cooler" },
  { id: "a10", name: "RX 6600 XT 8GB", brand: "ASROCK CHALLENGER", memory: "8GB", price: 280000, category: "gpu-amd", hasBox: false },
  { id: "a11", name: "RX 6600 XT 8GB", brand: "MSI MECH", memory: "8GB", price: 280000, category: "gpu-amd", hasBox: false },
  { id: "a12", name: "RX 6600 XT 8GB", brand: "GIGABYTE TRIPLE FAN", memory: "8GB", price: 285000, category: "gpu-amd", hasBox: false },
  { id: "a13", name: "RX 6700 XT 12GB", brand: "ASUS DUAL", memory: "12GB", price: 365000, category: "gpu-amd", hasBox: true },
  { id: "a14", name: "RX 6700 XT 12GB", brand: "SAPPHIRE PULSE", memory: "12GB", price: 360000, category: "gpu-amd", hasBox: false },
  { id: "a15", name: "RX 6700 XT 12GB", brand: "ASROCK CHALLENGER", memory: "12GB", price: 360000, category: "gpu-amd", hasBox: false },
  { id: "a16", name: "RX 6700 XT 12GB", brand: "POWER COLOR RED DEVIL", memory: "12GB", price: 370000, category: "gpu-amd", hasBox: true },
  { id: "a17", name: "RX 6700 XT 12GB", brand: "MSI GAMING X", memory: "12GB", price: 370000, category: "gpu-amd", hasBox: false },
  { id: "a18", name: "RX 6700 XT 12GB", brand: "XFX QUICK", memory: "12GB", price: 365000, category: "gpu-amd", hasBox: false },
  { id: "a19", name: "RX 6700 XT 12GB", brand: "ASUS TUF", memory: "12GB", price: 375000, category: "gpu-amd", hasBox: false },
  { id: "a20", name: "RX 6700 XT 12GB", brand: "SAPPHIRE NITRO", memory: "12GB", price: 380000, category: "gpu-amd", hasBox: false },
  { id: "a21", name: "RX 6700 XT 12GB", brand: "ASUS ROG STRIX", memory: "12GB", price: 385000, category: "gpu-amd", hasBox: true, note: "Última" },
  { id: "a22", name: "RX 6700 XT 12GB", brand: "AORUS ELITE", memory: "12GB", price: 385000, category: "gpu-amd", hasBox: true, note: "Full Box" },
  { id: "a23", name: "RX 6750 XT 12GB", brand: "XFX QUICK", memory: "12GB", price: 410000, category: "gpu-amd", hasBox: false },
  { id: "a24", name: "RX 6750 XT 12GB", brand: "XFX QUICK", memory: "12GB", price: 480000, category: "gpu-amd", hasBox: true, note: "Nueva sellada" },
  { id: "a25", name: "RX 6800 XT 16GB", brand: "SAPPHIRE NITRO", memory: "16GB", price: 490000, category: "gpu-amd", hasBox: true },
  { id: "a26", name: "RX 6900 XT 16GB", brand: "RED DEVIL", memory: "16GB", price: 555000, category: "gpu-amd", hasBox: false },
  { id: "a27", name: "RX 6900 XT 16GB", brand: "RED DEVIL", memory: "16GB", price: 570000, category: "gpu-amd", hasBox: true },
  { id: "a28", name: "RX 6900 XT 16GB", brand: "ASROCK PHANTOM GAMING", memory: "16GB", price: 570000, category: "gpu-amd", hasBox: true },
  { id: "a29", name: "RX 6900 XT 16GB", brand: "MSI GAMING Z TRIO", memory: "16GB", price: 595000, category: "gpu-amd", hasBox: true },

  // PSUs
  { id: "p1", name: "Fuente 550-600W 80+ White/BR", brand: "Thermaltake / EVGA / Aerocool / Seasonic", memory: "", price: 50000, category: "psu", hasBox: false },
  { id: "p2", name: "Fuente 650W 80+ BR", brand: "Cooler Master / Corsair / Seasonic", memory: "", price: 55000, category: "psu", hasBox: false },
  { id: "p3", name: "Fuente 700W 80+ White/BR", brand: "Thermaltake / Seasonic / DeepCool / Silverstone", memory: "", price: 60000, category: "psu", hasBox: false },
  { id: "p4", name: "Fuente 700-750W 80+", brand: "Game Pro / Voltron", memory: "", price: 50000, category: "psu", hasBox: false },
  { id: "p5", name: "Fuente 750W 80+ BR", brand: "ASUS / Cooler Master", memory: "", price: 75000, category: "psu", hasBox: false },
  { id: "p6", name: "Fuente 850W Dorado Gold", brand: "Aerocool", memory: "", price: 80000, category: "psu", hasBox: false },
  { id: "p7", name: "Fuente 850W Gold Full Modular", brand: "Core Reactor", memory: "", price: 120000, category: "psu", hasBox: false, note: "Full Modular" },

  // Combos
  { id: "c1", name: "Z390/Z490/B460 + Celeron o Pentium", brand: "Combo Mother + CPU", memory: "", price: 65000, category: "combo", hasBox: false, note: "Sin chapita" },
  { id: "c2", name: "Mother 9na (360/390) + i3 9100F", brand: "Combo Mother + CPU", memory: "", price: 125000, category: "combo", hasBox: false },
  { id: "c3", name: "Mother 10ma (460/490/510/410) + i3 10100F", brand: "Combo Mother + CPU", memory: "", price: 135000, category: "combo", hasBox: false },
  { id: "c4", name: "Mother Minería + i3 6100 o 7100", brand: "Combo Mother + CPU", memory: "", price: 75000, category: "combo", hasBox: false },
];
