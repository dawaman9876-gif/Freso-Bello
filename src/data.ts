export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: 'pasta' | 'infused' | 'grains' | 'stuffed' | 'sauce';
  tag: string;
  image: string;
  basePricePerKg: number;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  iconName: 'Cpu' | 'Scale' | 'Leaf' | 'Award' | 'Building' | 'ChefHat';
  number: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'pappardelle',
    name: 'Pappardelle',
    subtitle: 'Perfect for rich meat sauces & hearty ragù',
    description: 'Exceptionally wide ribbon-like pasta. Slices cleanly, absorbing thick and deep-flavored sauces for a rich, traditional Italian mouthfeel.',
    category: 'pasta',
    tag: '500g | Fresh',
    image: 'https://i.pinimg.com/736x/52/56/40/52564099c83ab73ccff4227c04a6e9a7.jpg',
    basePricePerKg: 1250.00
  },
  {
    id: 'bulk-lasagna',
    name: 'Bulk Fully Cooked Lasagna',
    subtitle: 'Perfect for large-scale banquets & events',
    description: 'Carefully prepared bulk catering-sized trays layered with rich sauce, melted cheeses, and our premium fresh pasta sheets.',
    category: 'stuffed',
    tag: 'Bulk Catering',
    image: 'https://i.pinimg.com/736x/d6/41/bb/d641bb9b88d8c77e827d7f157bcf5835.jpg',
    basePricePerKg: 1800.00
  },
  {
    id: 'marinara-sauce',
    name: 'Artisanal Marinara',
    subtitle: 'Slow-cooked San Marzano tomatoes',
    description: 'Our signature house sauce. Simmered for 8 hours with fresh basil, extra virgin olive oil, and roasted garlic. The perfect companion for any shape.',
    category: 'sauce',
    tag: 'Gourmet Sauce',
    image: 'https://images.unsplash.com/photo-1600803681822-639a035a9675?auto=format&fit=crop&q=80&w=800',
    basePricePerKg: 1500.00
  },
  {
    id: 'beetroot-infused',
    name: 'Beetroot Tagliatelle',
    subtitle: 'Elegant and colorful presentation',
    description: 'Infused with organic beetroot extract to deliver a vibrant ruby color and a subtle earthy finish. Elegant and visually stunning on the plate.',
    category: 'infused',
    tag: 'Vibrant Beetroot',
    image: 'https://i.postimg.cc/V6vyLf0T/Beetroot-Tagliatelle.png',
    basePricePerKg: 1450.00
  },
  {
    id: 'pesto-alla-genovese',
    name: 'Pesto alla Genovese',
    subtitle: 'Fresh basil & toasted pine nuts',
    description: 'Cold-pressed Ligurian-style pesto. Made with DOP basil, Pecorino Romano, and high-grade pine nuts for an explosion of aromatic freshness.',
    category: 'sauce',
    tag: 'Fresh Pesto',
    image: 'https://images.unsplash.com/photo-1595187123982-f59787e91f09?auto=format&fit=crop&q=80&w=800',
    basePricePerKg: 2200.00
  },
  {
    id: 'carrot-infused',
    name: 'Carrot Tagliatelle',
    subtitle: 'Vibrant orange hues & delicate nutrition',
    description: 'Infused with high-grade organic carrot nutrients. Promotes a beautiful presentation, perfect for showcasing sophisticated visual plating.',
    category: 'infused',
    tag: 'Carrot Blend',
    image: 'https://i.postimg.cc/X7y5h9qq/2.jpg',
    basePricePerKg: 1450.00
  },
  {
    id: 'catering-kit-large',
    name: 'Executive Catering Kit',
    subtitle: 'Complete B2B service solution',
    description: 'Everything needed for a 50-person event. Includes 5kg of assorted fresh pasta, 3L of signature sauces, and premium grated Parmesan.',
    category: 'stuffed',
    tag: 'Catering Kit',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    basePricePerKg: 25000.00
  },
  {
    id: 'whole-grain',
    name: 'Whole Grain Tagliatelle',
    subtitle: 'Rich fiber & deep wheat profile',
    description: 'Unrefined high-fiber whole grain flour. Maintains a perfect, satisfying bite while supporting health-conscious nutrition portfolios.',
    category: 'grains',
    tag: 'Whole Grain',
    image: 'https://i.postimg.cc/c483jfC4/3.jpg',
    basePricePerKg: 1300.00
  },
  {
    id: 'barley-ribbon',
    name: 'Barley Ribbon',
    subtitle: 'Robust structure for velvety cream sauces',
    description: 'Wide barley ribbons and nest noodles designed to perfectly withstand high culinary temps and hold sauce with unmatched integrity.',
    category: 'grains',
    tag: 'Barley Ribbon',
    image: 'https://i.postimg.cc/HjGF2bvs/Barley-Ribbon.png',
    basePricePerKg: 1350.00
  },
  {
    id: 'durum-semolina',
    name: 'Pure Durum Semolina',
    subtitle: 'The pinnacle of standard Italian al dente',
    description: 'Extruded exclusively with high-protein premium Italian durum semolina wheat, delivering flawless resilience and classic bite.',
    category: 'pasta',
    tag: '100% Semolina',
    image: 'https://i.postimg.cc/DmVRg1pv/Pure-Durum-Semolina.png',
    basePricePerKg: 1150.00
  },
  {
    id: 'gourmet-ravioli',
    name: 'Gourmet Ravioli',
    subtitle: 'Bespoke profiles filled with gourmet ingredients',
    description: 'Elegant filled pockets packed with premium ricotta cheese, fresh organic spinach, or slow-roasted beef alignments.',
    category: 'stuffed',
    tag: 'Gourmet',
    image: 'https://i.postimg.cc/fLy4TzSg/Gourmet-Ravioli.png',
    basePricePerKg: 1950.00
  }
];

export const WHY_CARDS: WhyCard[] = [
  {
    id: 'precision',
    title: 'Precision Extrusion',
    description: 'Our Italian-engineered machinery ensures every pasta shape is structurally perfect, holding sauces with scientific precision for a superior mouthfeel.',
    iconName: 'Cpu',
    number: '01'
  },
  {
    id: 'agile',
    title: 'Agile Scale-Up',
    description: 'Whether it is a private dinner or a 1,000-guest gala, our manufacturing infrastructure adapts instantly to your volume requirements without quality drift.',
    iconName: 'Scale',
    number: '02'
  },
  {
    id: 'organic',
    title: 'Nutrient Integrity',
    description: 'We source high-protein durum semolina and local organic grains, ensuring that every bite is as nutritious as it is delicious.',
    iconName: 'Leaf',
    number: '03'
  },
  {
    id: 'certified',
    title: 'Culinary Assurance',
    description: 'Rigorously tested for al dente consistency. We provide the reliability that executive chefs and discerning home cooks demand daily.',
    iconName: 'Award',
    number: '04'
  },
  {
    id: 'strategic',
    title: 'Strategic B2B Partner',
    description: 'We are more than a supplier; we are a culinary partner for Ethiopia\'s elite hotels, embassies, and premium international airlines.',
    iconName: 'Building',
    number: '05'
  },
  {
    id: 'empower',
    title: 'Home Chef Empowerment',
    description: 'Our retail collection brings professional-grade ingredients to the home kitchen, turning every meal into an artisanal experience.',
    iconName: 'ChefHat',
    number: '06'
  }
];
