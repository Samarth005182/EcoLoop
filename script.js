// ==========================================================================
// EcoLoop — Sustainable E-Commerce Logic & Interactive Prototype
// Pixel-Perfect Implementation matching Reference Mockup Design
// ==========================================================================

const EcoLoopData = {
  categories: [
    { 
      id: 'reusable', 
      name: 'Reusable Products', 
      count: 8,
      image: 'assets/product-green-bottle.png'
    },
    { 
      id: 'care', 
      name: 'Personal Care', 
      count: 6,
      image: 'assets/product-bamboo-brush.png'
    },
    { 
      id: 'stationery', 
      name: 'Sustainable Stationery', 
      count: 4,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
    },
    { 
      id: 'home', 
      name: 'Eco-Friendly Home', 
      count: 5,
      image: 'assets/product-glass-container.png'
    },
    { 
      id: 'recycled', 
      name: 'Recycled Products', 
      count: 5,
      image: 'assets/product-travel-mug.png'
    },
    { 
      id: 'accessories', 
      name: 'Upcycled Accessories', 
      count: 5,
      image: 'assets/product-tote-bag.png'
    }
  ],

  products: [
    {
      id: 'p1',
      name: 'Stainless Steel Water Bottle',
      category: 'reusable',
      categoryName: 'Reusable Products',
      materialKey: 'steel',
      price: 799,
      origPrice: 999,
      discountPercent: 20,
      rating: 4.6,
      reviewsCount: 120,
      image: 'assets/product-green-bottle.png',
      thumbnails: [
        'assets/product-green-bottle.png',
        'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1544003484-3cd181d17917?auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'A durable, reusable matte green stainless steel water bottle with integrated carry handle. Keeps beverages cold for 24 hours or hot for 12 hours while eliminating single-use plastic bottles.',
      materialsDetailed: 'Food-Grade SS-304 Double Wall Vacuum Insulated steel, leakproof loop handle cap, food-safe silicone gasket.',
      careInstructions: 'Hand wash with warm soapy water and bottle brush. Air dry naturally. Not microwave safe.',
      specs: [
        { label: 'Stainless Steel', sub: 'Material' },
        { label: '1 Litre', sub: 'Capacity' },
        { label: 'BPA Free', sub: 'Safe & Non-Toxic' }
      ]
    },
    {
      id: 'p2',
      name: 'Organic Cotton Tote Bag',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'cotton',
      price: 399,
      origPrice: 549,
      discountPercent: 27,
      rating: 4.7,
      reviewsCount: 98,
      image: 'assets/product-tote-bag.png',
      thumbnails: [
        'assets/product-tote-bag.png',
        'https://images.unsplash.com/photo-1597484662367-9b50bd72d378?auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Spacious everyday tote bag crafted from 100% certified unbleached organic cotton canvas. High-tensile stitched webbing shoulder straps carry books, groceries, and daily essentials effortlessly.',
      materialsDetailed: '100% GOTS certified unbleached natural organic cotton canvas. Zero chemical bleaches, synthetic dyes, or plastic thread.',
      careInstructions: 'Machine wash cold with eco-friendly detergent. Line dry in shade to preserve cotton grain.',
      specs: [
        { label: 'Organic Cotton', sub: 'Material' },
        { label: '18 Litres', sub: 'Volume' },
        { label: 'GOTS Certified', sub: 'Chemical Free' }
      ]
    },
    {
      id: 'p3',
      name: 'Bamboo Toothbrush Set',
      category: 'care',
      categoryName: 'Personal Care',
      materialKey: 'bamboo',
      price: 299,
      origPrice: 420,
      discountPercent: 28,
      rating: 4.5,
      reviewsCount: 84,
      image: 'assets/product-bamboo-brush.png',
      thumbnails: [
        'assets/product-bamboo-brush.png',
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Family set of biodegradable bamboo toothbrushes with round ergonomic handles and soft charcoal-infused bristles for gentle oral care. 100% backyard compostable.',
      materialsDetailed: 'Wild sustainable Moso bamboo handle. BPA-free bio-based castor oil & charcoal bristles.',
      careInstructions: 'Store upright in a dry ventilated holder. Snap off bristled head before composting the wooden handle.',
      specs: [
        { label: 'Moso Bamboo', sub: 'Handle' },
        { label: 'Pack of 4', sub: 'Quantity' },
        { label: 'Biodegradable', sub: 'Zero Waste' }
      ]
    },
    {
      id: 'p4',
      name: 'Insulated Travel Coffee Mug',
      category: 'reusable',
      categoryName: 'Reusable Products',
      materialKey: 'steel',
      price: 649,
      origPrice: 899,
      discountPercent: 28,
      rating: 4.8,
      reviewsCount: 114,
      image: 'assets/product-travel-mug.png',
      thumbnails: [
        'assets/product-travel-mug.png',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Double-walled vacuum insulated commuter travel tumbler with leakproof flip sip lid. Keeps your brew steaming hot for 6 hours or iced cold for 12 hours.',
      materialsDetailed: 'Food Grade 18/8 SS-304 stainless steel interior, ceramic-feel exterior finish, BPA-free Tritan flip lid with silicone seal.',
      careInstructions: 'Dishwasher safe lid. Hand wash tumbler body with warm soapy water for maximum insulation life.',
      specs: [
        { label: 'Double Wall Steel', sub: 'Thermal Core' },
        { label: '380 ml', sub: 'Capacity' },
        { label: 'Leakproof Flip', sub: 'Car Cup Fit' }
      ]
    },
    {
      id: 'p5',
      name: 'Glass Food Storage Box',
      category: 'home',
      categoryName: 'Eco-Friendly Home',
      materialKey: 'glass',
      price: 899,
      origPrice: 1199,
      discountPercent: 25,
      rating: 4.7,
      reviewsCount: 92,
      image: 'assets/product-glass-container.png',
      thumbnails: [
        'assets/product-glass-container.png',
        'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Ultra-clear thermal borosilicate glass lunch & meal prep container with natural carved bamboo lid and airtight silicone seal. Oven, microwave, and dishwasher safe body.',
      materialsDetailed: 'High thermal shock borosilicate glass container, solid sustainable bamboo lid with groove seal, medical silicone gasket.',
      careInstructions: 'Glass bowl is oven, freezer, microwave, and dishwasher safe. Hand wash bamboo lid and dry immediately.',
      specs: [
        { label: 'Borosilicate Glass', sub: 'Body' },
        { label: 'Bamboo Lid', sub: 'Airtight' },
        { label: '1050 ml', sub: 'Capacity' }
      ]
    },
    {
      id: 'p6',
      name: 'Recycled Agro-Waste Notebook',
      category: 'stationery',
      categoryName: 'Sustainable Stationery',
      materialKey: 'recycled',
      price: 250,
      origPrice: 350,
      discountPercent: 28,
      rating: 4.4,
      reviewsCount: 76,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Handcrafted hardbound notebook made with 100% post-consumer agro-waste sugarcane bagasse paper and recycled kraft board cover with secure strap closure.',
      materialsDetailed: '100% sugarcane pulp & recycled cotton rag paper, unbleached acid-free 100 GSM.',
      careInstructions: 'Keep in dry room. Suitable for fountain pens, gel inks, and graphite sketches.',
      specs: [
        { label: 'Agro Waste Pulp', sub: '100 GSM' },
        { label: '180 Pages', sub: 'Hardbound' },
        { label: 'Compostable', sub: 'FSC Certified' }
      ]
    },
    {
      id: 'p7',
      name: 'Upcycled Laptop Sleeve',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'recycled',
      price: 1199,
      origPrice: 1599,
      discountPercent: 25,
      rating: 4.8,
      reviewsCount: 50,
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Padded laptop sleeve upcycled from post-industrial textiles and vegan felt with magnetic snap flap. Fits up to 14-inch laptops and tablets.',
      materialsDetailed: 'Upcycled quilted organic textile outer, cushioned recycled felt inner padding.',
      careInstructions: 'Spot clean with mild damp cloth. Do not soak.',
      specs: [
        { label: 'Upcycled Felt', sub: 'Textile' },
        { label: '13-14 Inch', sub: 'Universal Fit' },
        { label: 'Padded', sub: 'Drop Safe' }
      ]
    },

    // ── REUSABLE PRODUCTS ──────────────────────────────────────────
    {
      id: 'p8',
      name: 'Bamboo Fibre Lunch Box',
      category: 'reusable',
      categoryName: 'Reusable Products',
      materialKey: 'bamboo',
      price: 549,
      origPrice: 749,
      discountPercent: 27,
      rating: 4.6,
      reviewsCount: 88,
      image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Eco-friendly lunch box made from natural bamboo fibre composite. Microwave and dishwasher safe with a secure locking lid. Perfect for home, office or school.',
      materialsDetailed: 'Natural bamboo fibre composite body, food-grade PP locking lid, BPA-free silicone gasket seal.',
      careInstructions: 'Dishwasher safe on the top rack. Microwave safe without lid. Air dry fully before storing.',
      specs: [
        { label: 'Bamboo Fibre', sub: 'Material' },
        { label: '900 ml', sub: 'Capacity' },
        { label: 'Leak-proof', sub: 'Lock Lid' }
      ]
    },
    {
      id: 'p9',
      name: 'Collapsible Silicone Cup',
      category: 'reusable',
      categoryName: 'Reusable Products',
      materialKey: 'steel',
      price: 349,
      origPrice: 499,
      discountPercent: 30,
      rating: 4.5,
      reviewsCount: 72,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Portable, foldable food-grade silicone cup that collapses to 2 cm flat. Ideal for hiking, travel, or office use. Eliminates the need for single-use paper cups.',
      materialsDetailed: '100% food-grade platinum silicone, stainless steel base ring, BPA and phthalate free.',
      careInstructions: 'Dishwasher safe. Boil to sterilise. Store collapsed in pocket or bag.',
      specs: [
        { label: 'Food Silicone', sub: 'Material' },
        { label: '350 ml', sub: 'Capacity' },
        { label: 'Foldable', sub: 'Ultra Portable' }
      ]
    },
    {
      id: 'p25',
      name: 'Stainless Steel Straw Set',
      category: 'reusable',
      categoryName: 'Reusable Products',
      materialKey: 'steel',
      price: 299,
      origPrice: 399,
      discountPercent: 25,
      rating: 4.6,
      reviewsCount: 152,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Set of 6 reusable stainless steel straws (4 straight + 2 bent) with 2 cleaning brushes and a jute carry pouch. Eliminates hundreds of single-use plastic straws.',
      materialsDetailed: '18/8 food-grade stainless steel, silicone tip option, jute carry pouch, bamboo cleaning brush.',
      careInstructions: 'Use the included cleaning brush to scrub after use. Dishwasher safe. Dry before storing in pouch.',
      specs: [
        { label: 'Food-Grade Steel', sub: 'Material' },
        { label: 'Pack of 6', sub: '+ 2 Brushes' },
        { label: 'Jute Pouch', sub: 'Carry Bag' }
      ]
    },

    // ── PERSONAL CARE ──────────────────────────────────────────────
    {
      id: 'p10',
      name: 'Bamboo Cotton Swabs (200 Pcs)',
      category: 'care',
      categoryName: 'Personal Care',
      materialKey: 'bamboo',
      price: 199,
      origPrice: 299,
      discountPercent: 33,
      rating: 4.4,
      reviewsCount: 134,
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Pack of 200 organic bamboo cotton swabs with paper cardboard box packaging. 100% plastic-free, compostable, and gentle on skin. A simple swap with big impact.',
      materialsDetailed: 'Sustainable Moso bamboo handle, GOTS certified organic cotton tips, kraft paper box.',
      careInstructions: 'Store in a dry place. Compost used swabs — the bamboo stick and cotton tip are fully biodegradable.',
      specs: [
        { label: 'Bamboo + Cotton', sub: 'Material' },
        { label: 'Pack of 200', sub: 'Quantity' },
        { label: 'Compostable', sub: 'Plastic Free' }
      ]
    },
    {
      id: 'p11',
      name: 'Solid Shampoo Bar',
      category: 'care',
      categoryName: 'Personal Care',
      materialKey: 'recycled',
      price: 249,
      origPrice: 349,
      discountPercent: 28,
      rating: 4.6,
      reviewsCount: 98,
      image: 'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Concentrated zero-waste solid shampoo bar that replaces 2–3 plastic bottles. Infused with neem, argan oil, and rosemary. Suitable for all hair types.',
      materialsDetailed: 'Cold-pressed neem oil, argan oil, rosemary extract, natural SLS-free surfactants, zero synthetic preservatives.',
      careInstructions: 'Lather in hands and apply to wet hair. Store on a draining soap dish in a cool dry place between uses.',
      specs: [
        { label: 'Neem + Argan', sub: 'Key Ingredients' },
        { label: '80g Bar', sub: '~80 washes' },
        { label: 'Zero Plastic', sub: 'Packaging' }
      ]
    },
    {
      id: 'p12',
      name: 'Natural Loofah Scrubber',
      category: 'care',
      categoryName: 'Personal Care',
      materialKey: 'recycled',
      price: 179,
      origPrice: 249,
      discountPercent: 28,
      rating: 4.3,
      reviewsCount: 61,
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Naturally grown loofah gourd scrubber — 100% plant-based, compostable, and a perfect zero-waste replacement for synthetic plastic bath sponges.',
      materialsDetailed: '100% naturally dried Luffa aegyptiaca gourd. No bleaches or chemical treatments.',
      careInstructions: 'Rinse after use and hang to dry. Replace every 4–6 weeks. Compost when finished.',
      specs: [
        { label: 'Natural Luffa', sub: 'Material' },
        { label: 'Medium Exfoliation', sub: 'Skin Safe' },
        { label: 'Compostable', sub: '100% Plant-based' }
      ]
    },

    // ── SUSTAINABLE STATIONERY ─────────────────────────────────────
    {
      id: 'p13',
      name: 'Seed Paper Greeting Cards (5 Pk)',
      category: 'stationery',
      categoryName: 'Sustainable Stationery',
      materialKey: 'recycled',
      price: 299,
      origPrice: 399,
      discountPercent: 25,
      rating: 4.8,
      reviewsCount: 47,
      image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Set of 5 handmade seed paper greeting cards embedded with wildflower seeds. After use, plant the card in soil and watch it bloom into flowers.',
      materialsDetailed: 'Handmade recycled cotton rag paper embedded with marigold, cosmos, and basil seeds. Vegetable-based ink printing.',
      careInstructions: 'Plant in a pot with well-drained soil. Water gently and keep in sunlight. Seeds germinate in 1–2 weeks.',
      specs: [
        { label: 'Seed Paper', sub: 'Plantable' },
        { label: 'Pack of 5', sub: 'Cards' },
        { label: 'Wildflower Seeds', sub: 'Embedded' }
      ]
    },
    {
      id: 'p14',
      name: 'Recycled Kraft Pencils (12 Pk)',
      category: 'stationery',
      categoryName: 'Sustainable Stationery',
      materialKey: 'recycled',
      price: 149,
      origPrice: 220,
      discountPercent: 32,
      rating: 4.5,
      reviewsCount: 83,
      image: 'https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Set of 12 HB pencils crafted from rolled recycled newspaper and kraft paper instead of wood. Writes smoothly, sharpens easily, and reduces deforestation.',
      materialsDetailed: '100% post-consumer recycled newspaper body, graphite-clay HB core, recycled rubber eraser tip.',
      careInstructions: 'Sharpen with a standard pencil sharpener. Keep in a dry pencil case.',
      specs: [
        { label: 'Recycled Paper', sub: 'Body' },
        { label: 'HB Grade', sub: '12 Pencils' },
        { label: 'Tree-Free', sub: 'No Wood Used' }
      ]
    },

    // ── ECO-FRIENDLY HOME ──────────────────────────────────────────
    {
      id: 'p15',
      name: 'Beeswax Food Wraps (3 Pk)',
      category: 'home',
      categoryName: 'Eco-Friendly Home',
      materialKey: 'cotton',
      price: 449,
      origPrice: 599,
      discountPercent: 25,
      rating: 4.7,
      reviewsCount: 109,
      image: 'https://images.unsplash.com/photo-1584268137559-fa99e3f2fad2?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1584268137559-fa99e3f2fad2?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Set of 3 reusable beeswax food wraps in small, medium and large sizes. The natural heat of your hands moulds the wrap around bowls, fruits and sandwiches.',
      materialsDetailed: 'GOTS organic cotton fabric coated with ethically sourced beeswax, jojoba oil, and tree resin.',
      careInstructions: 'Wash with cool water and mild soap — never hot water (melts wax). Air dry and reuse up to 1 year.',
      specs: [
        { label: 'Beeswax Cotton', sub: 'Material' },
        { label: 'S + M + L Set', sub: '3 Sizes' },
        { label: 'Cling-Wrap Free', sub: 'Reusable 1yr' }
      ]
    },
    {
      id: 'p16',
      name: 'Coconut Shell Candle Set',
      category: 'home',
      categoryName: 'Eco-Friendly Home',
      materialKey: 'recycled',
      price: 599,
      origPrice: 799,
      discountPercent: 25,
      rating: 4.9,
      reviewsCount: 76,
      image: 'https://images.unsplash.com/photo-1603905741598-a3d1e6d8b22d?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1603905741598-a3d1e6d8b22d?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Artisan soy wax candles hand-poured into upcycled coconut shells. Scented with lavender and eucalyptus essential oils. Burns for 30+ hours with a cotton wick.',
      materialsDetailed: 'Upcycled coconut shell bowl, 100% natural soy wax, unbleached cotton wick, pure lavender and eucalyptus essential oils.',
      careInstructions: 'Trim wick to 5mm before each use. Keep away from drafts. Do not leave burning unattended.',
      specs: [
        { label: 'Soy Wax', sub: 'Natural Wax' },
        { label: '30+ Hours', sub: 'Burn Time' },
        { label: 'Coconut Shell', sub: 'Upcycled Vessel' }
      ]
    },
    {
      id: 'p17',
      name: 'Bamboo Dish Brush Set',
      category: 'home',
      categoryName: 'Eco-Friendly Home',
      materialKey: 'bamboo',
      price: 329,
      origPrice: 449,
      discountPercent: 27,
      rating: 4.5,
      reviewsCount: 55,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Set of 3 bamboo dish brushes with plant-based sisal bristles. Ideal for dishes, pots, bottles, and vegetables. A plastic-free kitchen essential.',
      materialsDetailed: 'FSC certified bamboo handle, natural sisal and tampico agave fibre bristles, stainless steel ferrule.',
      careInstructions: 'Rinse well after each use. Stand upright to dry. Replace every 3 months; compost the handles.',
      specs: [
        { label: 'Bamboo + Sisal', sub: 'Material' },
        { label: 'Set of 3', sub: 'Sizes Included' },
        { label: 'Compostable', sub: 'Plastic Free' }
      ]
    },

    // ── RECYCLED PRODUCTS ──────────────────────────────────────────
    {
      id: 'p18',
      name: 'Recycled PET Yoga Mat',
      category: 'recycled',
      categoryName: 'Recycled Products',
      materialKey: 'recycled',
      price: 1299,
      origPrice: 1799,
      discountPercent: 28,
      rating: 4.7,
      reviewsCount: 43,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'High-grip yoga mat made from 100% post-consumer recycled plastic bottles. Lightweight, non-slip textured surface, with alignment guidelines. Comes with a recycled carry strap.',
      materialsDetailed: 'Body: rPET from 17 recycled 500ml PET bottles. Natural rubber non-slip base. Recycled webbing carry strap.',
      careInstructions: 'Wipe clean with damp cloth after use. Roll loosely and store in shade. Machine wash on gentle cycle monthly.',
      specs: [
        { label: 'rPET Fabric', sub: 'Recycled Bottles' },
        { label: '6mm Thick', sub: 'High Density' },
        { label: 'Non-Slip Base', sub: 'Natural Rubber' }
      ]
    },
    {
      id: 'p19',
      name: 'Upcycled Denim Wallet',
      category: 'recycled',
      categoryName: 'Recycled Products',
      materialKey: 'recycled',
      price: 499,
      origPrice: 699,
      discountPercent: 28,
      rating: 4.6,
      reviewsCount: 38,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Slim bifold wallet hand-crafted from upcycled denim fabric with recycled metal rivets. Holds 6 cards and cash. Each piece is unique, made from salvaged jeans.',
      materialsDetailed: 'Post-consumer denim fabric, recycled metal rivets and snap button, cotton thread stitching.',
      careInstructions: 'Spot clean with a damp cloth. Air dry naturally. Avoid prolonged exposure to water.',
      specs: [
        { label: 'Upcycled Denim', sub: 'Material' },
        { label: '6 Card Slots', sub: 'Slim Bifold' },
        { label: 'One of a Kind', sub: 'Handcrafted' }
      ]
    },

    // ── UPCYCLED ACCESSORIES ───────────────────────────────────────
    {
      id: 'p20',
      name: 'Recycled Canvas Backpack',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'recycled',
      price: 1799,
      origPrice: 2499,
      discountPercent: 28,
      rating: 4.8,
      reviewsCount: 62,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Everyday backpack crafted from upcycled canvas with recycled webbing straps and an organiser interior. Fits 15" laptops, has a padded back panel, and a hidden anti-theft pocket.',
      materialsDetailed: 'Post-industrial recycled canvas outer, recycled polyester lining, YKK zippers, recycled PET webbing straps.',
      careInstructions: 'Machine wash on gentle cold cycle. Air dry in shade. Do not tumble dry.',
      specs: [
        { label: 'Recycled Canvas', sub: 'Material' },
        { label: '22L Capacity', sub: 'Storage' },
        { label: '15" Laptop Fit', sub: 'Padded Sleeve' }
      ]
    },
    {
      id: 'p21',
      name: 'Bamboo Sunglasses',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'bamboo',
      price: 999,
      origPrice: 1399,
      discountPercent: 28,
      rating: 4.7,
      reviewsCount: 34,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Lightweight sunglasses with handcrafted bamboo temples and UV400 polarised lenses. No two pairs look the same. Packaged in a recycled cardboard box.',
      materialsDetailed: 'Sustainable hand-selected bamboo arms, bio-acetate frame, TAC polarised UV400 lens.',
      careInstructions: 'Wipe lenses with the included microfibre cloth. Store in the bamboo case. Avoid submerging in water.',
      specs: [
        { label: 'Bamboo Arms', sub: 'Lightweight' },
        { label: 'UV400', sub: 'Polarised Lens' },
        { label: 'Unisex Fit', sub: 'All Faces' }
      ]
    },
    {
      id: 'p22',
      name: 'Jute Market Bag',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'cotton',
      price: 299,
      origPrice: 449,
      discountPercent: 33,
      rating: 4.5,
      reviewsCount: 91,
      image: 'https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Spacious jute market bag with reinforced cotton handles. Strong enough for groceries, books, or a beach day. Naturally biodegradable, stylish and sturdy.',
      materialsDetailed: 'Natural golden jute weave, reinforced organic cotton webbing handles, cotton liner.',
      careInstructions: 'Hand wash or gentle machine wash. Air dry in shade. Avoid heavy scrubbing.',
      specs: [
        { label: 'Natural Jute', sub: 'Material' },
        { label: '15L Capacity', sub: 'Large Market Size' },
        { label: 'Biodegradable', sub: '100% Natural' }
      ]
    },
    {
      id: 'p23',
      name: 'Cork Yoga Brick',
      category: 'accessories',
      categoryName: 'Upcycled Accessories',
      materialKey: 'recycled',
      price: 699,
      origPrice: 999,
      discountPercent: 30,
      rating: 4.6,
      reviewsCount: 28,
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=300&q=80'
      ],
      description: 'Solid natural cork yoga brick offering firm support for poses and stretching. Antimicrobial, moisture-resistant, and sustainably harvested without cutting the tree.',
      materialsDetailed: 'Sustainably harvested Portuguese cork granules, natural binders, no synthetic glues.',
      careInstructions: 'Wipe with a damp cloth after use. Air dry. Do not immerse in water.',
      specs: [
        { label: 'Natural Cork', sub: 'Material' },
        { label: 'Firm Support', sub: 'High Density' },
        { label: 'Antimicrobial', sub: 'Self-cleaning' }
      ]
    }
  ]
};

// Global App State
const state = {
  cart: [],
  lastOrder: null,
  wishlist: ['p1'],
  currentView: 'home',
  selectedProductId: 'p1',
  activeCategoryFilter: 'all',
  activeMaterials: [],
  activeMaxPrice: 2500,
  activeSort: 'featured',
  searchQuery: '',
  inStockOnly: false
};

// ==========================================================================
// App Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHomeCategories();
  renderHomeFeatured();
  renderShopCategoryChips();
  renderShopProducts();
  updateCartCounters();
  setupEventListeners();
  renderCartView();
  renderCheckoutSummary();
});

// Navigation Handling
function initNavbar() {
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.nav;
      switchView(target);
    });
  });

  const cartIconBtn = document.getElementById('nav-cart-btn');
  if (cartIconBtn) {
    cartIconBtn.addEventListener('click', () => switchView('cart'));
  }

  const wishlistIconBtn = document.getElementById('nav-wishlist-btn');
  if (wishlistIconBtn) {
    wishlistIconBtn.addEventListener('click', () => {
      switchView('shop');
      showToast('Viewing your saved collection ♥');
    });
  }
}

function switchView(viewName) {
  state.currentView = viewName;

  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active-view');
  });

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navbar active state
  document.querySelectorAll('.site-nav a').forEach(link => {
    if (link.dataset.nav === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (viewName === 'cart') renderCartView();
  if (viewName === 'checkout') renderCheckoutSummary();
  if (viewName === 'shop') renderShopProducts();
  if (viewName === 'order-details') renderOrderDetails();
}

// ==========================================================================
// HOME VIEW RENDERING
// ==========================================================================
function renderHomeCategories() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  container.innerHTML = EcoLoopData.categories.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat.id}')">
      <div class="category-img-wrap">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy">
      </div>
      <span class="category-label">${cat.name}</span>
    </div>
  `).join('');
}

function renderHomeFeatured() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  // Display first 4 featured items
  const featured = EcoLoopData.products.slice(0, 4);
  container.innerHTML = featured.map(p => createProductCardMarkup(p)).join('');
}

function createProductCardMarkup(product) {
  const isWish = state.wishlist.includes(product.id);
  return `
    <div class="product-item-card" data-id="${product.id}">
      <div class="product-item-img-wrap" onclick="openProductDetail('${product.id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="wishlist-heart-btn ${isWish ? 'active' : ''}" 
                aria-label="Add to wishlist" 
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
          <svg viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="product-item-body">
        <h3 class="product-item-name" onclick="openProductDetail('${product.id}')">${product.name}</h3>
        <div class="product-item-price-row">
          <span class="product-item-price">₹${product.price}</span>
        </div>
        <div class="product-item-rating">
          <span class="star-icon">★</span>
          <span class="rating-val">${product.rating}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>
        <button class="btn-add-cart-outline" onclick="addToCart('${product.id}', 1)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// SHOP / CATALOGUE VIEW RENDERING
// ==========================================================================
function renderShopCategoryChips() {
  const container = document.getElementById('shop-category-list');
  if (!container) return;

  const totalProducts = EcoLoopData.products.length;
  let html = `
    <label class="filter-radio-row">
      <input type="radio" name="shop-category" value="all" ${state.activeCategoryFilter === 'all' ? 'checked' : ''} onchange="onCategoryRadioChange('all')">
      <span class="custom-radio"></span>
      <span class="filter-radio-label">All Products</span>
      <span class="filter-radio-count">(${totalProducts})</span>
    </label>
  `;

  EcoLoopData.categories.forEach(cat => {
    const isChecked = state.activeCategoryFilter === cat.id;
    html += `
      <label class="filter-radio-row">
        <input type="radio" name="shop-category" value="${cat.id}" ${isChecked ? 'checked' : ''} onchange="onCategoryRadioChange('${cat.id}')">
        <span class="custom-radio"></span>
        <span class="filter-radio-label">${cat.name}</span>
        <span class="filter-radio-count">(${cat.count})</span>
      </label>
    `;
  });

  container.innerHTML = html;
}

function onCategoryRadioChange(catId) {
  state.activeCategoryFilter = catId;
  renderShopProducts();
}

function filterByCategory(catId) {
  state.activeCategoryFilter = catId;
  renderShopCategoryChips();
  switchView('shop');
}

function renderShopProducts() {
  const container = document.getElementById('shop-products-grid');
  const countLabel = document.getElementById('shop-product-count');
  if (!container) return;

  let filtered = EcoLoopData.products.filter(p => {
    // Category check
    if (state.activeCategoryFilter !== 'all' && p.category !== state.activeCategoryFilter) {
      return false;
    }
    // Materials check
    if (state.activeMaterials.length > 0 && !state.activeMaterials.includes(p.materialKey)) {
      return false;
    }
    // Price check
    if (p.price > state.activeMaxPrice) {
      return false;
    }
    // Search query check
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Sort
  if (state.activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === 'popular') {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (countLabel) {
    countLabel.textContent = `${filtered.length} products`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-shop-state">
        <p>No products match your current filters.</p>
        <button class="btn-clean-primary" onclick="resetShopFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(p => createProductCardMarkup(p)).join('');
  }
}

function resetShopFilters() {
  state.activeCategoryFilter = 'all';
  state.activeMaterials = [];
  state.activeMaxPrice = 2000;
  state.searchQuery = '';
  state.activeSort = 'featured';

  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) searchInput.value = '';

  const slider = document.getElementById('shop-price-slider');
  if (slider) slider.value = 2000;
  const sliderVal = document.getElementById('shop-price-val');
  if (sliderVal) sliderVal.textContent = '₹2000';

  document.querySelectorAll('input[name="shop-material"]').forEach(cb => cb.checked = false);

  renderShopCategoryChips();
  renderShopProducts();
  showToast('Filters reset');
}

// ==========================================================================
// PRODUCT DETAIL PAGE (PDP)
// ==========================================================================
function openProductDetail(productId) {
  const p = EcoLoopData.products.find(item => item.id === productId);
  if (!p) return;

  state.selectedProductId = productId;

  // Breadcrumbs
  const breadcrumbCat = document.getElementById('pdp-breadcrumb-category');
  if (breadcrumbCat) breadcrumbCat.textContent = p.categoryName;
  const breadcrumbName = document.getElementById('pdp-breadcrumb-name');
  if (breadcrumbName) breadcrumbName.textContent = p.name;

  // Main Image
  const mainImg = document.getElementById('pdp-main-image');
  if (mainImg) {
    mainImg.src = p.image;
    mainImg.alt = p.name;
  }

  // Thumbnails
  const thumbsContainer = document.getElementById('pdp-thumbnail-strip');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = p.thumbnails.map((imgUrl, i) => `
      <div class="pdp-thumb-item ${i === 0 ? 'active' : ''}" onclick="setMainPDPImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${p.name} preview ${i + 1}">
      </div>
    `).join('');
  }

  // Details
  document.getElementById('pdp-title').textContent = p.name;
  document.getElementById('pdp-price').textContent = `₹${p.price}`;
  document.getElementById('pdp-orig-price').textContent = `₹${p.origPrice}`;
  document.getElementById('pdp-discount').textContent = `${p.discountPercent}% OFF`;
  document.getElementById('pdp-rating-val').textContent = p.rating;
  document.getElementById('pdp-rating-count').textContent = `(${p.reviewsCount} reviews)`;
  document.getElementById('pdp-short-desc').textContent = p.description;

  // Specs pill row
  const specsRow = document.getElementById('pdp-specs-row');
  if (specsRow && p.specs) {
    specsRow.innerHTML = p.specs.map(spec => `
      <div class="pdp-spec-pill">
        <span class="spec-pill-title">${spec.label}</span>
        <span class="spec-pill-sub">${spec.sub}</span>
      </div>
    `).join('');
  }

  // Tab content
  document.getElementById('pdp-tab-desc').textContent = p.description;
  document.getElementById('pdp-tab-materials').textContent = p.materialsDetailed;
  document.getElementById('pdp-tab-care').textContent = p.careInstructions;
  document.getElementById('pdp-tab-reviews-count').textContent = p.reviewsCount;

  // Related products
  const relatedContainer = document.getElementById('pdp-related-grid');
  if (relatedContainer) {
    const related = EcoLoopData.products.filter(item => item.id !== p.id).slice(0, 4);
    relatedContainer.innerHTML = related.map(prod => createProductCardMarkup(prod)).join('');
  }

  // Reset Quantity
  const qtyInput = document.getElementById('pdp-qty-val');
  if (qtyInput) qtyInput.textContent = '1';

  switchView('pdp');
}

function setMainPDPImage(imgUrl, el) {
  const mainImg = document.getElementById('pdp-main-image');
  if (mainImg) mainImg.src = imgUrl;

  document.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

// PDP Tabs Toggle
function switchPDPTab(tabKey, btn) {
  document.querySelectorAll('.pdp-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pdp-tab-panel').forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  const panel = document.getElementById(`pdp-panel-${tabKey}`);
  if (panel) panel.classList.add('active');
}

// ==========================================================================
// CART & DRAWER MANAGEMENT
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    state.cart.push({ id: productId, qty: quantity });
  }

  const p = EcoLoopData.products.find(prod => prod.id === productId);
  showToast(`Added ${quantity} × ${p ? p.name : 'item'} to cart`);
  updateCartCounters();
  if (state.currentView === 'cart') renderCartView();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
    showToast('Item removed from cart');
  }
  updateCartCounters();
  renderCartView();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  showToast('Item removed from cart');
  updateCartCounters();
  renderCartView();
}

function updateCartCounters() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('nav-cart-badge');
  if (badge) badge.textContent = totalQty;
}

// Single source of truth for cart totals (free delivery on orders ≥ ₹499)
function getCartTotals() {
  const subtotal = state.cart.reduce((sum, ci) => {
    const p = EcoLoopData.products.find(pr => pr.id === ci.id);
    return sum + (p ? p.price * ci.qty : 0);
  }, 0);
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 40;
  return { subtotal, delivery, total: subtotal + delivery };
}

function fmtINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function renderCartView() {
  const listContainer = document.getElementById('cart-items-list');
  const countTitle = document.getElementById('cart-items-count-title');
  const subtotalEl = document.getElementById('cart-summary-subtotal');
  const deliveryEl = document.getElementById('cart-summary-delivery');
  const totalEl = document.getElementById('cart-summary-total');

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (countTitle) countTitle.textContent = `Your Cart (${totalQty} item${totalQty === 1 ? '' : 's'})`;

  if (!listContainer) return;

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-cart-view">
        <p>Your cart is empty.</p>
        <button class="btn-clean-primary" onclick="switchView('shop')">Explore Products</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (deliveryEl) deliveryEl.textContent = '₹0';
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  listContainer.innerHTML = state.cart.map(item => {
    const p = EcoLoopData.products.find(prod => prod.id === item.id);
    if (!p) return '';

    return `
      <div class="cart-product-row">
        <div class="cart-row-img">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="cart-row-info">
          <h4 class="cart-row-title">${p.name}</h4>
          <span class="cart-row-price">₹${p.price}</span>
        </div>
        <div class="cart-row-qty-pill">
          <button class="qty-btn" onclick="updateCartQty('${p.id}', -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${p.id}', 1)">+</button>
        </div>
        <button class="cart-row-trash-btn" onclick="removeFromCart('${p.id}')" aria-label="Remove item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  const t = getCartTotals();
  if (subtotalEl) subtotalEl.textContent = fmtINR(t.subtotal);
  if (deliveryEl) deliveryEl.textContent = t.delivery === 0 ? 'FREE' : fmtINR(t.delivery);
  if (totalEl) totalEl.textContent = fmtINR(t.total);
}

// ==========================================================================
// CHECKOUT & ORDER CONFIRMATION
// ==========================================================================
function renderCheckoutSummary() {
  const itemsContainer = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const deliveryEl = document.getElementById('checkout-delivery');
  const totalEl = document.getElementById('checkout-total');

  if (!itemsContainer) return;

  itemsContainer.innerHTML = state.cart.map(item => {
    const p = EcoLoopData.products.find(prod => prod.id === item.id);
    if (!p) return '';
    const lineTotal = p.price * item.qty;

    return `
      <div class="checkout-summary-row">
        <div class="checkout-row-left">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <span class="checkout-item-name">${p.name}</span>
            <span class="checkout-item-qty">x${item.qty}</span>
          </div>
        </div>
        <span class="checkout-item-total">₹${lineTotal}</span>
      </div>
    `;
  }).join('');

  const t = getCartTotals();
  if (subtotalEl) subtotalEl.textContent = fmtINR(t.subtotal);
  if (deliveryEl) deliveryEl.textContent = t.delivery === 0 ? 'FREE' : fmtINR(t.delivery);
  if (totalEl) totalEl.textContent = fmtINR(t.total);
}

// Cart → Checkout (details) → Payment
function goToCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty.');
    return;
  }
  switchView('checkout');
}

const CHECKOUT_RULES = {
  'ch-name':    { test: v => v.length >= 2,                          msg: 'Enter your full name' },
  'ch-email':   { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v), msg: 'Enter a valid email address' },
  'ch-phone':   { test: v => /^[6-9]\d{9}$/.test(v),                 msg: 'Enter a valid 10-digit mobile number' },
  'ch-address': { test: v => v.length >= 5,                          msg: 'Enter your house no., street and area' },
  'ch-city':    { test: v => v.length >= 2,                          msg: 'Enter your city' },
  'ch-pincode': { test: v => /^\d{6}$/.test(v),                      msg: 'Enter a valid 6-digit pincode' }
};

function setFieldError(input, message) {
  const group = input.closest('.form-field-group');
  if (!group) return;
  group.classList.toggle('has-error', !!message);
  const msgEl = group.querySelector('.field-error-msg');
  if (msgEl) msgEl.textContent = message || '';
}

function validateCheckoutForm() {
  let firstBad = null;
  Object.entries(CHECKOUT_RULES).forEach(([id, rule]) => {
    const input = document.getElementById(id);
    if (!input) return;
    const ok = rule.test(input.value.trim());
    setFieldError(input, ok ? '' : rule.msg);
    if (!ok && !firstBad) firstBad = input;
  });
  if (firstBad) firstBad.focus();
  return !firstBad;
}

function processCheckoutOrder() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty.');
    switchView('cart');
    return;
  }
  if (!validateCheckoutForm()) {
    showToast('⚠️ Please fix the highlighted fields.');
    return;
  }

  const val = id => document.getElementById(id).value.trim();
  state.checkoutInfo = {
    name: val('ch-name'),
    email: val('ch-email'),
    phone: val('ch-phone'),
    address: val('ch-address'),
    city: val('ch-city'),
    state: document.getElementById('ch-state').value,
    pincode: val('ch-pincode')
  };

  openPayment();
}

// Digits-only for phone/pincode, and clear a field's error as soon as it's edited
document.addEventListener('input', e => {
  if (e.target.closest && e.target.closest('#checkout-form')) {
    if (e.target.id === 'ch-phone' || e.target.id === 'ch-pincode') {
      let digits = e.target.value.replace(/\D/g, '');
      // Pasted "+91 98765 43210" → keep the last 10 digits
      if (e.target.id === 'ch-phone' && digits.length > 10) digits = digits.slice(-10);
      e.target.value = digits.slice(0, e.target.id === 'ch-phone' ? 10 : 6);
    }
    setFieldError(e.target, '');
  }
});

// ==========================================================================
// EVENT LISTENERS & FILTER WIDGETS
// ==========================================================================
function setupEventListeners() {
  // Global search input in navbar
  const globalSearch = document.getElementById('nav-search-input');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.currentView !== 'shop') switchView('shop');
      renderShopProducts();
    });
  }

  // Shop in-page search
  const shopSearch = document.getElementById('shop-search-input');
  if (shopSearch) {
    shopSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderShopProducts();
    });
  }

  // Shop sort dropdown
  const sortSelect = document.getElementById('shop-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderShopProducts();
    });
  }

  // Price Range Slider in Shop
  const priceSlider = document.getElementById('shop-price-slider');
  const priceVal = document.getElementById('shop-price-val');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      state.activeMaxPrice = parseInt(e.target.value);
      if (priceVal) priceVal.textContent = `₹${state.activeMaxPrice}`;
      renderShopProducts();
    });
  }

  // Material checkboxes in Shop
  document.querySelectorAll('input[name="shop-material"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="shop-material"]:checked')).map(c => c.value);
      state.activeMaterials = checked;
      renderShopProducts();
    });
  });

  // PDP Quantity buttons
  const qtyMinus = document.getElementById('pdp-qty-minus');
  const qtyPlus = document.getElementById('pdp-qty-plus');
  const qtyVal = document.getElementById('pdp-qty-val');

  if (qtyMinus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      let cur = parseInt(qtyVal.textContent) || 1;
      if (cur > 1) qtyVal.textContent = cur - 1;
    });
  }

  if (qtyPlus && qtyVal) {
    qtyPlus.addEventListener('click', () => {
      let cur = parseInt(qtyVal.textContent) || 1;
      if (cur < 10) qtyVal.textContent = cur + 1;
    });
  }

  // PDP Add to Cart button
  const pdpAddCartBtn = document.getElementById('pdp-add-cart-btn');
  if (pdpAddCartBtn) {
    pdpAddCartBtn.addEventListener('click', () => {
      const qty = parseInt(qtyVal.textContent) || 1;
      addToCart(state.selectedProductId, qty);
    });
  }

  // PDP Add to Wishlist button
  const pdpWishBtn = document.getElementById('pdp-add-wishlist-btn');
  if (pdpWishBtn) {
    pdpWishBtn.addEventListener('click', () => {
      toggleWishlist(state.selectedProductId);
    });
  }
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from saved wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to wishlist ♥');
  }

  const wishBadge = document.getElementById('nav-wishlist-badge');
  if (wishBadge) wishBadge.textContent = state.wishlist.length;

  if (state.currentView === 'home') renderHomeFeatured();
  if (state.currentView === 'shop') renderShopProducts();
}

// Toast Notification
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'clean-toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

// ==========================================================================
// LOGIN PAGE
// ==========================================================================

function openLogin() {
  const el = document.getElementById('view-login');
  if (el) {
    el.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLogin() {
  const el = document.getElementById('view-login');
  if (el) {
    el.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const btnText = document.getElementById('login-btn-text');
  const btnLoader = document.getElementById('login-btn-loader');
  if (btnText) btnText.style.display = 'none';
  if (btnLoader) btnLoader.style.display = 'inline-flex';

  setTimeout(() => {
    closeLogin();
    showToast('✅ Signed in as Rahul Sharma');
    if (btnText) btnText.style.display = '';
    if (btnLoader) btnLoader.style.display = 'none';
  }, 1500);
}

function togglePasswordVisibility() {
  const input = document.getElementById('login-password');
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

// Wire user icon to login
document.addEventListener('DOMContentLoaded', () => {
  const userBtn = document.querySelector('.user-btn');
  if (userBtn) {
    userBtn.removeAttribute('onclick');
    userBtn.addEventListener('click', () => openLogin());
  }
});

// ==========================================================================
// PAYMENT PAGE
// ==========================================================================

let payTimerInterval = null;

function renderDeliverTo() {
  const box = document.getElementById('pay-deliver-to');
  const info = state.checkoutInfo;
  if (!box || !info) return;
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  box.innerHTML = `
    <div class="pay-deliver-head">
      <span>Delivering to</span>
      <button type="button" class="pay-edit-btn" onclick="closePayment()">Edit</button>
    </div>
    <strong>${esc(info.name)}</strong>
    <p>${esc(info.address)}, ${esc(info.city)}, ${esc(info.state)} – ${esc(info.pincode)}</p>
    <p>${esc(info.phone)} · ${esc(info.email)}</p>
  `;
}

function openPayment() {
  const el = document.getElementById('view-payment');
  if (!el) return;

  // Payment is only reachable after the details step
  if (!state.checkoutInfo) {
    switchView('checkout');
    return;
  }
  renderDeliverTo();

  // Populate order summary
  renderPaymentItems();
  updatePaymentTotals();

  el.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  startPaymentTimer(10 * 60); // 10 minutes
}

function closePayment() {
  const el = document.getElementById('view-payment');
  if (el) {
    el.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (payTimerInterval) {
    clearInterval(payTimerInterval);
    payTimerInterval = null;
  }
}

function renderPaymentItems() {
  const container = document.getElementById('payment-items-preview');
  if (!container) return;

  const cartItems = state.cart.map(ci => {
    const p = EcoLoopData.products.find(pr => pr.id === ci.id);
    return p ? { ...p, qty: ci.qty } : null;
  }).filter(Boolean);

  container.innerHTML = cartItems.map(item => `
    <div class="pay-item-row">
      <img src="${item.image}" alt="${item.name}" class="pay-item-img" onerror="this.src='https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=80&q=60'">
      <div class="pay-item-info">
        <div class="pay-item-name">${item.name}</div>
        <div class="pay-item-qty">Qty: ${item.qty}</div>
      </div>
      <span class="pay-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
    </div>
  `).join('');
}

function updatePaymentTotals() {
  const { subtotal, delivery, total } = getCartTotals();
  const fmt = fmtINR;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('pay-subtotal', fmt(subtotal));
  setEl('pay-delivery', delivery === 0 ? 'FREE' : fmt(delivery));
  setEl('pay-total', fmt(total));
  setEl('qr-amount-val', fmt(total));
  setEl('upi-amount-display', fmt(total));
  const cardPayAmount = document.getElementById('card-pay-amount');
  if (cardPayAmount) cardPayAmount.textContent = fmt(total);
}

function startPaymentTimer(seconds) {
  if (payTimerInterval) clearInterval(payTimerInterval);
  const timerEl = document.getElementById('pay-timer');
  let remaining = seconds;

  const update = () => {
    const m = String(Math.floor(remaining / 60)).padStart(2, '0');
    const s = String(remaining % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${m}:${s}`;
    if (remaining <= 0) {
      clearInterval(payTimerInterval);
      showToast('⚠️ Payment session expired. Please try again.');
      closePayment();
    }
    remaining--;
  };

  update();
  payTimerInterval = setInterval(update, 1000);
}

function switchPayTab(tab) {
  ['qr', 'upi', 'card'].forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    const panel = document.getElementById(`panel-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
    if (panel) panel.classList.toggle('active', t === tab);
  });
}

function copyUpiId() {
  navigator.clipboard.writeText('ecoloop@upi').then(() => {
    showToast('📋 UPI ID copied: ecoloop@upi');
  }).catch(() => {
    showToast('📋 UPI ID: ecoloop@upi');
  });
}

function confirmPayment() {
  const totals = getCartTotals();
  const activePayTab = document.querySelector('.pay-tab.active');
  const placedAt = new Date();
  state.lastOrder = {
    id: `EL${placedAt.getTime().toString().slice(-8)}`,
    placedAt,
    paymentMethod: activePayTab ? activePayTab.textContent.trim() : 'UPI',
    customer: state.checkoutInfo,
    items: state.cart.map(item => {
      const product = EcoLoopData.products.find(p => p.id === item.id);
      return product ? { ...product, qty: item.qty } : null;
    }).filter(Boolean),
    totals
  };
  closePayment();
  const successEmail = document.getElementById('success-email');
  if (successEmail && state.checkoutInfo) successEmail.textContent = state.checkoutInfo.email;
  renderOrderDetails();
  state.cart = [];
  updateCartCounters();
  switchView('order-details');
  showToast('🎉 Payment successful! Order confirmed.');
}

function renderOrderDetails() {
  const order = state.lastOrder;
  if (!order) return;

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const customer = order.customer || {};

  setText('order-details-number', `#${order.id}`);
  setText('order-details-date', order.placedAt.toLocaleString('en-IN', {
    dateStyle: 'medium', timeStyle: 'short'
  }));
  setText('order-details-payment', order.paymentMethod);
  setText('order-details-subtotal', fmtINR(order.totals.subtotal));
  setText('order-details-delivery', order.totals.delivery === 0 ? 'FREE' : fmtINR(order.totals.delivery));
  setText('order-details-total', fmtINR(order.totals.total));

  const address = document.getElementById('order-details-address');
  if (address) {
    address.innerHTML = `<strong>${escapeHTML(customer.name)}</strong>
      <span>${escapeHTML(customer.address)}</span>
      <span>${escapeHTML(customer.city)}, ${escapeHTML(customer.state)} ${escapeHTML(customer.pincode)}</span>
      <span>${escapeHTML(customer.phone)} · ${escapeHTML(customer.email)}</span>`;
  }

  const items = document.getElementById('order-details-items');
  if (items) {
    items.innerHTML = order.items.map(item => `
      <div class="order-detail-item">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}">
        <div class="order-detail-item-info">
          <strong>${escapeHTML(item.name)}</strong>
          <span>Qty: ${item.qty}</span>
        </div>
        <strong class="order-detail-item-price">${fmtINR(item.price * item.qty)}</strong>
      </div>`).join('');
  }
}

function sendUpiRequest() {
  const upiInput = document.getElementById('upi-id-input');
  const val = upiInput ? upiInput.value.trim() : '';
  if (!val || !val.includes('@')) {
    showToast('⚠️ Please enter a valid UPI ID (e.g., name@upi)');
    return;
  }
  showToast(`⚡ Payment request sent to ${val}…`);
  setTimeout(() => confirmPayment(), 2500);
}

function handleCardPayment(e) {
  e.preventDefault();
  const num = document.getElementById('card-number')?.value.replace(/\s/g, '');
  if (!num || num.length < 16) {
    showToast('⚠️ Please enter a valid 16-digit card number');
    return;
  }
  showToast('🔒 Processing secure payment…');
  setTimeout(() => confirmPayment(), 2000);
}

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = val.replace(/(.{4})/g, '$1 ').trim();
  const display = document.getElementById('card-num-display');
  if (display) {
    const padded = val.padEnd(16, '•');
    display.textContent = padded.replace(/(.{4})/g, '$1 ').trim();
  }
}


function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 4);
  if (val.length >= 2) val = val.slice(0, 2) + ' / ' + val.slice(2);
  input.value = val;
  const display = document.getElementById('card-exp-display');
  if (display) {
    const raw = val.replace(/\s/g, '').replace('/', '');
    display.textContent = raw.length >= 4
      ? raw.slice(0, 2) + '/' + raw.slice(2)
      : 'MM/YY';
  }
}

// ==========================================================================
// MOBILE NAV DRAWER
// ==========================================================================
function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('nav-hamburger-btn');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
  }
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('nav-hamburger-btn');
  drawer.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// ==========================================================================
// MOBILE FILTER TOGGLE (Shop Sidebar)
// ==========================================================================
function toggleMobileFilters() {
  const sidebar = document.querySelector('.shop-sidebar');
  const btn = document.getElementById('mobile-filter-btn');
  if (!sidebar) return;
  const isOpen = sidebar.classList.contains('mobile-open');
  sidebar.classList.toggle('mobile-open');
  if (btn) {
    btn.textContent = isOpen ? '⚡ Filters' : '✕ Close Filters';
    if (isOpen) {
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="8" y1="12" x2="16" y2="12"></line><line x1="11" y1="18" x2="13" y2="18"></line></svg> Filters`;
    } else {
      btn.innerHTML = `✕ Close Filters`;
    }
  }
}

// Close mobile nav on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMobileNav();
  }
});

