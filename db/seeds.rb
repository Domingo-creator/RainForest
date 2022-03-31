# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# imageVarialbe = open("link to aws bucket")
# product1.image.attach(io: imageVarialbe, filename: 'some-image.jpg')

users = User.create([
    {username: 'Sir_Demo_of_Demoville', email:'Demo_User@email.com', password: 'password'}
])

#### Health & Household ####
tide= Product.create(
    {name: "Tide PODS 4 in 1 with Downy, Laundry Detergent Soap PODS, April Fresh Scent, 73 Count, Packaging May Vary", 
    price: 24.99 ,category: "Health & Household",
    body: "Only Tide PODS Plus Downy cleans and conditions in 1 step, helping protect clothes from stretching and fading in the wash. 
    Tide PODS Plus Downy have the signature Downy April Fresh Scent for outstanding freshness
    America's #1 Trusted Detergent Brand* *Tide is Consumers' #1 Trusted laundry detergent brand in Readers Digest survey
    )Pd = Product.create(
    Each Tide PODS is 4-in-1 including detergent, stain remover, brightener, and Downy Fabric Protect technology
    The new special film now dissolves even better in both hot & cold water",
    descriptio: "The new and improved Tide PODS laundry detergent pacs are super concentrated with 90 percent cleaning ingredients to rejuvenate even dingy clothes for brighter brights and whiter whites, wash after wash. Each Tide PODS is a 3-in-1 breakthrough laundry solution with highly concentrated detergent, stain remover and color protector, giving you more bang for your buck.
    Tide PODS pac are small but powerful with an innovative, three chamber design separating key ingredients until they hit the wash for maximum cleaning power. More than just a liquid in a pouch, these reformulated laundry pacs reveal Tide's brightest clean yet.
    Its special filmenables the multi-chamber technology to dissolve in both hot & cold water. Tide PODS are formulated with quick collapsing Smart SudsTM. It targets tough stains and works in both HE and standard washing machines.
    For superior perforance, place 2 Tide PODS pacs into the washing machine drum before you add clothes for large loads. For smaller loads, use 1 laundry pac.",
    product_detail: "Produt Dimensions   :  4.49 x 8.74 x 10.63 inches; 4.6 Pounds
    Date First Available   :   March 20, 2019
    Manufacturer Procter & Gamble   :   Pampers
    ASIN   :   B07NW4Q8MLU
    Country of Origin   :   USA"}
)
snug= Product.create(
    {name: 'Snuggle SuperCare Laundry Fabric Softener Liquid, Sea Breeze, 2X Concentrated Conditioner, 150 Loads, 78.75 Fl Oz', 
    price: 16.99 ,category: 'Health & Household',
    body: 'Snuggle SuperCare liquid fabric softener protects colors from fading, protects against wear and tear and helps clothes hold shape plus the Snuggle benefits you love like Snuggly Softness and Long-Lasting Freshness
    Protect the clothes you love with specially formulated technology that keeps your clothes looking newer longer* *vs. the leading value liquid detergent alone
    This concentrated formula delivers 2X more softening in every drop so now you don’t have to use as much to leave your clothes Snuggly soft.
    )ge= Product.create(
    Snuggle SuperCare fabric softener is safe for both high efficiency (HE) and regular washing machines
    You get one bottle of Snuggle SuperCare 2X Concentrated liquid fabric softener in the Sea Breeze scent, enough for 150 regular loads.',
    descriptio: 'Snuggle SuperCare keeps clothes looking newer longer*. This fabric conditioner protects the clothes you love with specially formulated technology that prevents wear & tear and color fading. All this plus the Snuggly Softness and Long-Lasting Freshness you love. To use, shake the closed Snuggle bottle. Open the bottle and measure to desired line in cap. Locate the fabric softener dispenser and pour product into dispenser of your washing machine. Do not pour directly on fabrics. Snuggle fabric softener works in all washing machines including high efficiency (HE) washers. This package includes one 78.75 ounce bottle of 2X concentrated Snuggle SuperCare fabric softener liquid in Sea Breeze scent, enough for 150 regular loads. *v. leading value liquid detergent alone.' ,
    product_detai: 'Product Dimensions  :  7.5 x 4.14 x 11.37 inches; 5.34 Pounds
    Item model numbe  :  00072613471393
    Date First Availabl  :  August 5, 2021
    Manufacturer  :  Henke
    ASIN  :  B09BZT7Y46'}
)

dryerBalls = Product.create(
    {name: 'Wool Dryer Balls - Natural Fabric Softener, Reusable, Reduces Clothing Wrinkles and Saves Drying Time. The Large Dryer Ball is a Better Alternative to Plastic Balls and Liquid Softener. (Pack of 6)', 
    price: 11.99 ,category: 'Health & Household',
    body: 'SUPERIOR QUALITY WOOL – 100% New Zealand premium wool with no synthetic fillers, rolled into tight, extra-large balls and felted for a natural, long lasting product.
    REUSABLE FABRIC SOFTENER – Replace chemically infused dryer sheets and liquid fabric softeners with an eco-friendly and natural alternative that will last more than a thousand dryer loads.
    SPEED UP DRYING TIME – As the dryer balls tumble around in the dryer, they lift and separate laundry allowing the hot air to circulate better and dry faster.
    SAVE ENERGY COSTS – Reduce appliance usage and electricity bills by shortening drying time up to 25%
    REDUCE STATIC CLING – Toss them into the dryer and your clothing will dry faster, fluffier and softer, with fewer wrinkles and less static cling.',
    description: 'Our dryer balls are made from 100% premium New Zealand wool. Using them in the dryer eliminates the need for chemical laden fabric softeners and toxic dryer sheets. A few drops of essential oil can even be added to the ball to create a natural fresh scent.' ,
    product_detail: 'Product Dimensions :	7.01 x 5.39 x 2.6 inches
    Item Weight :	11.4 ounces
    Manufacturer :	Handy Laundry
    ASIN :	B014WOWNAY
    Item model number :	5112'}
)

oxiClean = Product.create(
    {name: 'OxiClean Color Boost Color Brightener plus Stain Remover Power Paks, 26 Count' , 
    price: 9.79 ,category:'Health & Household',
    body: 'One 26 count container of OxiClean Color Boost Color Brightener plus Stain Remover Power Paks
    Contains active oxygen power to reach deep into fabric fiberst to quickly and safely break up and remove stains
    Color safe brightener has a built-in optical brightener that reveals vibrant colors and restores radiant whites
    Use directly on stains to pre-treat clothes before washing
    The most convenient way to do laundry – no mess, measuring or spills' ,
    description: 'Want to give your wash an incredible boost? Toss an OxiClean™ Color Boost Color Brightener + Stain Remover Pak into every load along with your detergent. Each contains active oxygen power to reach deep into fabric fibers and quickly, safely break up and remove stains. And the built-in optical brightener brings whites and colors back to life! OxiClean™ Color Boost Color Brightener + Stain Remover Paks remove stains, brightens colors, and whitens whites! Fight stains, whiten whites and brighten colors! Make sure no stain gets past you! OxiClean™ Color Boost Color Brightener + Stain Remover Paks add extra stain fighting abilities to your wash, without the worry of fading the clothes you love best. Its optical brighteners are designed to transform UV light waves to make whites look even whiter. And the paks are simple to use! Now you can boost your detergent’s cleaning power, keep your favorite colors from fading and remove tough stains. Drop a pak into every wash load, or dissolve a pak to pre-soak stains before washing.' ,
    product_detail: 'Is Discontinued By Manufacturer :  No
    Product Dimensions :  3 x 5.75 x 10 inches; 1.57 Pounds
    Item model number :  HDL-113
    Date First Available :  May 4, 2013
    Manufacturer :  Church & Dwight
    ASIN :  B00CN98LAM
    Country of Origin :  USA'}
)

armAndHammer = Product.create(
    {name: 'Arm & Hammer Super Washing Soda Detergent Booster & Household Cleaner, 55oz.', 
    price: 4.17 ,category: 'Health & Household',
    body: 'FOR CLEANER, WHITER, BRIGHTER LAUNDRY choose ARM & HAMMER Super Washing Sodaâ€”a natural detergent booster that increases your laundry detergentâ€s cleaning power.
    IMPROVES LIQUID LAUNDRY DETERGENT PERFORMANCE. Use this effective, natural laundry booster to improve liquid laundry performance by up to 15%.* You can also use it to make your own laundry detergent! (*For mustard and blood stains vs leading value detergent alone)
    FRESHENS AND CLEANS ALL AROUND THE HOME. From appliances and upholstery to fine jewelry and water-softening, this washing powder tackles tough jobs with simple, pure ingredientsâ€”sodium carbonate and water.
    EFFECTIVELY CLEANS HARD SURFACES INDOORS & OUTDOORS. Use this washing soda to clean hard surfaces indoors and outdoors all around your home, such as tile and grout, toilets, microwaves, sinks, stainless steel, bathtubs, refrigerators, outdoor furniture, garage floors, silver, and more!
    CONTAINS NO FRAGRANCES & NO PHOSPHATES. Building off of our commitment to the environment that started more than 120 years ago, this simple two-ingredient formula of sodium carbonate and water is 100% fragrance-free and 100% phosphate-free. It delivers a clean you can trust without fragrances and harsh chemicals.' ,
    description: 'Pure. Natural. Versatile.That’s what you’ll find in every box of ARM & HAMMER Super Washing Soda. This washing powder delivers super-clean results way beyond the laundry room. It’s a natural detergent booster and effective laundry additive that increases your laundry detergent’s cleaning power. In fact, this washing soda improves liquid laundry detergent performance up to 15%. Use it as a washing machine cleaner, or add to every load for cleaner, whiter, brighter laundry. Super Washing Soda is a Baking Soda-based cleanser that helps to neutralize and eliminate odors—its 100% fragrance-free and 100% phosphate-free formula gets rid of lingering laundry smells instead of just covering them up. Use this washing powder to naturally clean hard surfaces inside and outside your home, such as tile and grout, toilets, microwaves, sinks, stainless steel, bathtubs, refrigerators, outdoor furniture, garage floors, silver and jewelry, upholstery, and more. This natural laundry booster and household cleaner delivers an extra boost of clean from the brand you trust. ARM & HAMMER Super Washing Soda—pure & natural since 1874. For mustard and blood stains vs leading value detergent alone' ,
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  9.4 x 6.2 x 2.1 inches; 3.44 Pounds
    Item model number  :  03020
    Date First Available  :  May 14, 2009
    Manufacturer  :  CHUW7
    ASIN  :  B0029XNTEU' }
)

downy = Product.create(
    {name: 'Downy Infusions Liquid Laundry Fabric Softener, Calm Scent, Lavender & Vanilla Bean, 166 Total Loads (Pack of 2)', 
    price: 15.88 ,category: 'Health & Household',
    body: 'Downy Infusions calm scent Liquid fabric enhancer transforms your laundry with the soothing scent of lavender and vanilla bean
    Breathe Deep and let this relaxing, smooth scent of calm envelop you.Dye free
    Scent boosting fabric softener freshens and softens for comfy, great-smelling clothes
    Safe for all washing machines and a great COMPANION to your favorite detergent; just add a capful every load before adding your clothes
    For even more tranquil scent, Use Downy Infusions calm In-Wash Scent Booster Beads and fabric softener dryer sheets',
    description: 'The soothing scents of lavender and vanilla Bean flutter to life in Downy Infusions calm fabric softener, for clothes that smell as comforting as they feel. Use this scented fabric enhancer in your laundry for a tranquil, calm scent in your fabrics. Safe for all washing machines, including HE, simply add a capful to your machine\'s softener dispenser for softer, scented laundry. For even more mood-enhancing aromas, try Downy Infusions calm In-Wash Scent Booster beads and fabric softener dryer sheets.' ,
    product_detail: 'Product Dimensions  :  8.25 x 6.94 x 12.63 inches; 5.82 Pounds
    Item model number  :  1
    Date First Available  :  October 22, 2019
    Manufacturer  :  AmazonUs/PRFY7
    ASIN  :  B07VFPPS3Z'}
)

earthwash = Product.create(
    {name: 'earthwash Laundry Sheets, Scent-Free (32 Loads), The Perfect Plastic Free Detergent Strips, Ideal for TravelHome Use. Biodegradable-Easy Dissolve, True Eco-Wash', 
    price: 16.99,category: 'Health & Household',
    body: 'Concentrated Power: All the performance of high grade detergent delivered in a lightweight strip! Our formula removes stains and spills, without compromising the vibrant color of your clothing!
    No Residue Left Behind: Completely water soluble, low sud and will not leave any soap on your clothes or in your washing machine! Also works on all type of washers - top load, front load and HE.
    Convenient and Mess-Free: Say goodbye to jugs, liquid, pods, and powder! No measuring needed - Just add 1 sheet per load. Lightweight and perfect for travel, camping, dorm use and more!
    Gentle and Scent-Free : Does not contain paraben, dye, phosphate or bleach. Gentle on hands and even on baby clothes, also has fragrance-free variant for sensitive skin.
    Space AND Money Saving: Spill-free, easy to store and saves space - eliminating the need for expensive, heavy and bulky detergent bottles and boxes.
    Unit count type: Count' ,
    description: 'Make pods and plastic jugs a thing of the past! Earthwash is a powerful earth friendly solution to clean your laundry. Our super concentrated dissolving strips are high performing, simple and convenient. With Earthwash, one sheet equals one large load - no measuring, no pouring, and no mess! Works in any washing machine - front load, top load, HE, even hand washing! Our ultra-concentrated detergent sheets are an effective way to save water and plastic without ever sacrificing cleaning power. Our low sud formula tackles heavy stains and spills, and even revives whites and color. Plus,  Earthwash comes in a soft Ocean Breeze or Scent Free formulas, so even the most sensitive of skin can wash with Earthwash! Choose the best solution for your wallet, clothing, and the planet!  Important Information: Directions: How Many Strips Should I Use?  One Earthwash strip covers a large load of clothing Double or Triple the load? Add 1-2 extra sheets.  Small load? Simply tear off ½ a sheet for use.  Hand washing? Use ¼- ½ a sheet! Machine Wash:  Simply place an Earthwash sheet inside your top loading machine on top of your clothing load, or in the detergent dispenser of your front loading machine. Run your machine as normal.  Hand Wash: Dissolve into warm or cold water thoroughly before hand washing as normal.  Safety Information: Do not use with wool or silk.  Machine or hand wash only.  Do not insert into tumble dryer.  If product comes in contact with eyes, rinse with water immediately.' ,
    product_detail: 'Product Dimensions  :  7.62 x 2.54 x 10.16 inches; 5.61 Ounces
    Date First Available  :  September 10, 2020
    ASIN  :  B094TXL3R6'}
)

woolite = product.create(
    {name: 'Woolite Darks with EverCare Liquid Laundry Detergent, 66 Loads, 100 Fl Oz (Pack of 1), Packaging May Vary', 
    price: 14.39 ,category: 'Health & Household',
    body: 'NEW FORMULA Woolite Darks with EverCare is a first of its kind formula that protects synthetics and blends from damage in the wash
    PROTECTS AGAINST FADING, pilling, and stretching for up to 20 washes. Aluminum-Free
    KEEPS YOUR DARK CLOTHES LOOKING LIKE NEW: Combination of ingredients to gently clean stains, while protecting your clothes (protects against fading for up to 20 washes)
    FREE FROM Optical Brighteners, Phosphates, Bleach
    GOOD FOR BOTH REGULAR AND HE WASHING MACHINE',
    description: 'Woolite Darks with EverCare is a first of its kind formula that keeps your clothes looking like new, even synthetics and blends. It protects your clothes from fading, pilling, and stretching. Woolite Darks with EverCare is perfect for all of your dark clothes, including your favorite jeans, leggings, and go-to blouse. It effectively cleans without the harshness. Woolite Darks with EverCare is free from optical brighteners, phosphates, and bleach. For up to 20 washes. Protects against fading for up to 20 washes. Gently cleans without the harshness.' ,
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  5.56 x 7.38 x 10.63 inches; 7.01 Pounds
    Item model number  :  6233883768
    Date First Available  :  March 14, 2011
    Manufacturer  :  Woolite
    ASIN  :  B004S6C0I2
    Country of Origin  :  USA' }
)

tidePens = Product.create(
    {name: 'Tide To Go Instant Stain Remover, 3 Count', 
    price: 7.74,category: 'Health & Household',
    body: 'Powerful solution breaks stains down; microfiber pad lifts and absorbs them
    Portable, pen-like design – fits neatly into briefcases, purses, drawers, or car compartments
    No mess, nothing to throw away, nothing to get on hands
    Works well on tomato juice, ketchup, BBQ sauce, grape juice, coffee, wine, tea, chocolate syrup, and more
    Doesn\’t contain bleach',
    description: 'Save the moment with Tide to Go, the instant stain remover that helps eliminate some of your toughest fresh food and drink stains. Best of all, Tide to Go travels easily to stop stains on the spot. Tide To-Go is part of the Tide Laundry Detergent family of products' ,
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  4.25 x 0.9 x 9.1 inches; 2.56 Ounces
    Item model number  :  10037000018718
    Date First Available  :  March 13, 2006
    Manufacturer  :  Procter & Gamble - Household/Laundry/Food
    ASIN  :  B01C3NAT16
    Country of Origin  :  USA' }
)

clorox = Product.create(
    {name: 'Clorox Disinfecting Wipes Value Pack, 75 Ct Each, Pack of 3 (Package May Vary)', 
    price: 9.98,category: 'Health & Household',
    body: 'DISINFECTING WIPES: Clorox Disinfecting Wipes are proven to kill COVID-19 Virus in 15 seconds; cleans and kills 99.9% of viruses and bacteria with a powerful wipe; Packaging may vary
    ALL-PURPOSE WIPE: These all-purpose disposable wipes remove common allergens, germs and messes on surfaces like kitchen counters, bathroom surfaces and more.
    MULTI-SURFACE CLEANER: Wipes are safe for finished wood, sealed granite and stainless steel and on non-food-contact surfaces in the home, office, classroom, pet area, dorm and locker room.
    DISPOSABLE WIPES: This 3-pack of 75-count canisters that easily dispenses disposable antibacterial wipes that come in 3 fresh, clean scents. Dispose of wipes according to manufacturer instructions.
    NO BLEACH: Disinfect and deodorize with Clorox Disinfecting Wipes for a bleach-free, all-in-1 cleaning alternative that’s safe to use on toys and more.',
    description: 'Clorox Disinfecting Wipes are triple-layered to clean, disinfect, deodorize and remove allergens for 5x cleaning power and leave a pleasant scent. Disinfecting wipes clean and disinfect with antibacterial power that kills 99.9% of viruses and bacteria that can live on surfaces up to 48 hours, including staph, E. coli, MRSA, salmonella, strep and Kleb. These all-purpose disposable wipes remove common allergens, germs and messes on surfaces like kitchen counters, bathroom surfaces and more. Wipes are safe to use on finished wood, sealed granite and stainless steel. Disinfecting Wipes are also great on non-food-contact surfaces in the home, office, classroom, pet area, dorm and locker room. Clean with bleach-free wipes to keep dirt and germs away. Phosphorus-free.' ,
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  13.75 x 4.5 x 8.75 inches; 4.87 Pounds
    Item model number  :  10044600311811
    Date First Available  :  January 12, 2014
    Manufacturer  :  Clorox Disinfecting Wipes
    ASIN  :  B00HSC9F2C'}
)

#### TOYS & GAMES ####
gengarPlush = Product.create(
    {name: 'Pokémon Gengar Plush Stuffed Animal Toy - Large 12" - Ages 2+' , price: 34.99 ,category: 'Toys & Games',
    body: 'Cute and cuddly 12" Pokémon Gengar Plush Stuffed Animal is a must have for all Pokemon fans!
    This super soft plush figure is great to take wherever you go!
    The Gengar plush toy is inspired by Pokémon anime, trading cards, Lets Go! and Nintendo video games series!
    Makes a great gift for fans of Pokemon - Your favorite Pokémon character is waiting for you!
    Officially licensed Pokémon merchandise by Wicked Cool Toys. Polyester. Ages: 2+',
    description: 'Cute and cuddly 12" Pokémon Gengar Plush Stuffed Animal is a must have for all Pokemon fans! This super soft plush figure is great to take wherever you go! The Gengar plush toy is inspired by Pokémon anime, trading cards, Let\'s Go! and Nintendo video games series! Makes a great gift for fans of Pokemon - Your favorite Pokémon character is waiting for you! Officially licensed Pokémon merchandise by Wicked Cool Toys. Polyester. Ages: 2+',
    product_detail: 'Package Dimensions  :	12.48 x 9.29 x 6.18 inches
    Item Weight  :	8.1 ounces
    ASIN   :   B07NXVHHN2
    Manufacturer recommended age  :  24 months and up
    Manufacturer   :	Wicked Cool Toys'
    }
)

lego =  Product.create(
    {name: 'LEGO Classic Large Creative Brick Box 10698 Build Your Own Creative Toys, Kids Building Kit (790 Pieces), Multicolor', 
    price: 43.00 ,category: 'Toys & Games' ,
    body: 'Engage your kids in pretend play by letting them build their own play toys, such as creating a toy house or toy scooter. This classic creative kit of LEGO bricks comes with 33 different colored bricks
    This brick box includes 8 different types of toy windows and toy doors, 2 green baseplates and 6 toy tires and toy wheel rims to create hours of creativity for kids; plus the LEGO inspired packaging serves as toy storage
    Kids will become creative builders as they use these color toys to build a figure or build a castle while also engaging in kids playtime
    The large build and play LEGO Creative Brick toy playset is compatible with all LEGO construction sets for neverending creative play
    The green baseplates in this build it yourself set measure over 6 inches long and 6 inches wide, and 4 inches long and 2 inches respectively, Kids will get to build and play with 790 pieces and is ideal for boys and girls between the ages of 4 and 99 years old' ,
    description: 'Unleash your kids creativity with this building kit full of colorful toys. This 790 piece set contains a variety of colors and pieces for building anything from a toy scooter to a toy house. Kids can build and play for hours with 8 different types of toy windows and toy doors, 2 green baseplates and 6 toy tires and toy wheel rims. It won’t be long before kids are using this creative kit to build a castle or build a figure. The LEGO Classic Large Creative Brick Box is the perfect construction set to complement other LEGO sets or play with on its own! Brand Story By LEGO' ,
    product_detail: 'Product Dimensions   : 	14.57 x 10.31 x 7.09 inches
    Item Weight   : 	2.2 pounds
    Manufacturer   :	LEGO
    ASIN   :	B00NHQF6MG
    Country of Origin   :	Mexico
    Item model number   :	6102215'}
)

uno = Product.create(
    {name:'UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly, Makes a Great Gift for 7 Year Olds and Up',
    price: 9.99,category: 'Toys and Games',
    body: 'UNO is the classic family card game that\'s easy to learn and so much fun to play!
    In a race to deplete your hand, match one of your cards with the current card shown on top of the deck by either color or number.
    Strategize to defeat your competition with special action cards like Skips, Reverses, Draw Twos and color-changing Wild cards.
    When you\'re down to one card, don\'t forget to shout "UNO!"
    This fun family card game is perfect for adults, teens and kids 7 years old and up.
    UNO Tin comes with 112 cards and instructions in a sturdy tin that\'s great for storage and travel.
    ',
    description: 'UNO is the classic family card game that\'s easy to pick up and impossible to put down! Players take turns matching a card in their hand with the current card shown on top of the deck either by color or number. Special action cards, like Skips, Reverses, Draw Twos, color-changing Wild and Draw Four Wild cards, deliver game-changing moments as they each perform a function to help you defeat your opponents. If you can\'t make a match, you must draw from the center pile. And when you\'re down to one card, don\'t forget to shout "UNO!" The first player to get rid of all the cards in their hand wins. Now card game-lovers can get UNO in a sturdy tin that\'s great for travel and makes storage stress-free. Colors and decorations may vary.' ,
    product_detail: 'Product Dimensions   :   1.25 x 6.25 x 5.25 inches
    Item Weight   :   5.9 ounces
    Country of Origin   :   China
    ASIN   :   B07P6MZPK3
    Item model number   :   GDJ85
    Manufacturer recommended age   :   7 - 11 years'}
)

pokemonCards = Product.create(
    {name: 'Pokemon TCG: Sword & Shield Brilliant Stars 36 Count Booster Box', 
    price:137.45 ,category: 'Toys & Games',
    body: 'the Pokémon TCG: Sword & Shield—Brilliant Stars Booster Display Box contains 36 Sword & Shield—Brilliant Stars Booster Packs.
    Try and collect all the cards from this new release.
    There are over 170 cards possible to collect in the new Pokémon TCG: Sword & Shield—Brilliant Stars release. With 4 brand-new Pokémon VSTAR and 20 powerful Pokémon V and 3 enormous Pokémon VMAX.
    You can also work to collect all 30 cards with special art in the Trainer Gallery subset, more than 20 Trainer cards, and be on the look out for a new Special Energy card.',
    description: 'Pokémon TCG: Sword & Shield—Brilliant Stars Booster Display Box' ,
    product_detail: 'Product Dimensions	5 x 5.5 x 3 inches
    Item Weight	 :  1.81 pounds
    ASIN   :   B09LHBX493
    Item model number   :   POK81996
    Manufacturer recommended age   :   6 years and up'}
)

slinky = Product.create(
    {name:'The Original Slinky Walking Spring Toy, Metal Slinky, Fidget Toys, Party Favors and Gifts, Toys for 5 Year Old Girls and Boys, by Just Play',
    price: 3.99,category: 'Toys & Games',
    body: 'There’s only one Original Slinky Brand Celebrate 75 years of wiggly-jiggly fun with Slinky Generations of children and adults have loved playing with Slinky.
    There’s only one Original Slinky brand
    Includes one classic metal Slinky, 2.75-inches in diameter
    Educational Focus: Large Motor Skills, Creative Thinking
    Stretches, wiggles, walks, and jiggles.
    Ideal for presents, party favors, Easter baskets, grab bags, prizes and stocking stuffers
    Ages 5plus',
    description: 'There’s only one Original Slinky Brand! Celebrate 75 years of wiggly-jiggly fun with Slinky! Generations of children and adults have loved playing with Slinky. This classic metal spring toy walks downstairs, alone or in pairs, and makes a slink-ity sound. First invented by mechanical engineer Richard James in 1943 during an experiment with tension coils. James accidentally dropped a spring on the floor and watched as it began to “walk.” Two years later, he introduced his walking spring toy in Gimbels Department Store during Christmas, and the Slinky immediately sold out. Since its debut, over 300 million Slinkys have been sold worldwide. In 2000, this classic toy was inducted into the National Toy Hall of Fame. Made 75 years ago, Slinky continues to be a favorite toy of children and adults all over the world. Slinky is fun for a girl or a boy and makes an ideal gift, stocking stuffer, prize, or present. Everyone loves a Slinky! Ages 5+' ,
    product_detail: 'Product Dimensions   :	  3 x 3 x 2.5 inches
    Item Weight	  :   6.1 ounces
    Domestic Shipping   :   Item can be shipped within U.S.
    International Shipping   :   This item can be shipped to select countries outside of the U.S. Learn More
    Country of Origin   :   USA
    ASIN   :   B00000IZKX' }
)

toyStoryPuzzle = Product.create(
    {name: 'NEILDEN Disney Toy Story Puzzles in a Metal Box 60 Piece for Kids Ages 4-8 Jigsaw Puzzles for Girls and Boys Great Gifts for Children(Toy Story 4)', 
    price: 12.99 ,category: 'Toys & Games' ,
    body: 'wooden
    SAFE MATERIALS: Our Disney Store are Made of Nontoxic and Tasteless Material which are Sturdy Enough and Do Not Tear Easily So Good for a Child. The Die-cuts are Smooth, Allowing for Easy Assembly and Every Pieces Fit Together Well. Also Our Disney Toy Store Puzzle Pieces on the Back are Numbered to Help Younger Children If Needed.
    60 PIECE PUZZLE: Our 60 Pieces Kids Which is a Great Family Activity Both for Adults and Kids Ages 4-8 to Learn and Enjoy Together.The Finished Measures 9.2"X5.9". Also We Provide a Full-Size Picture Guide in Package and the Picture is Clear and Vibrant.
    MISSING PIECE NO WORRY: All NEILDEN for Kids with Easy-to-Reach Lifetime Email Support, 2-Year Quality Warranty.We Offer 30 Days Money Back Guarantee,60 days Replacement, 1 Year Missing Puzzles Protection.We Wish You Enjoy Doing the Jigsaw Puzzles. If You Need Help with Any Puzzles Related,Please Contact Us.We Are Here for You.
    LEARNING AND FUN: Children Love Disney Puzzles! They’ll Learn While Playing! Not Only Provides Engaged Play-Time for Kids, But Also Helps Practice Problem-Solving and Spatial Reasoning as They Complete the Puzzle.Challenging and Engaging Enough for Kids and Adults,Kids Puzzles is the Perfect Way for a Family to Work Together.
    STURDY TIN BOX STORAGE: Our Disney Puzzle Comes with a Tin Box Which is Very Convenient to Store and Easy Take for Travel. The Tin Box Size is 5.9” x 3.5” which is a Nice Storage Container,Also It’s an Ideal Place to Keep Pieces Safe, Together and Free From Damage. It Makes a Great Gift for All Ages at Birthdays and Holidays.',
    description:  'Children Love Toy Story Jigsaw Puzzles! They’ll Learn While Playing! Not Only Provides Engaged Play-Time for Kids, But Also Helps Practice Problem-Solving and Spatial Reasoning as They Complete the Puzzle.Challenging and Engaging Enough for Kids and Adults,Kids Puzzles is the Perfect Way for a Family to Work Together.',
    product_detail: '
    Package Dimensions :	6.34 x 4.29 x 1.69 inches
    Item Weight  :	5.7 ounces
    ASIN  :	B08T6VD4ZT
    Manufacturer recommended age   :	4 - 8 years'}
)

astroHeadset = Product.create(
    {name: 'ASTRO Gaming A50 Wireless Headset + Base Station Gen 4 - Compatible With PS5, PS4, PC, Mac - Black/Silver', 
    price: 299.99,category: 'Toys & Games' ,
    body: 'Astro Audio V2: Immersive Audio and sound experience that delivers dialogue, music and in game sound clearly
    Dolby Audio: Dolby Audio delivers a cinematic, high resolution gaming audio experience
    Battery life: 15 plus hour rechargeable lithium ion battery
    Game: Voice balance: Gives the user total control over the mix of the game and chat Audio
    Astro command center software: The free Astro command center software gives players complete control over their audio experience, which includes voice communication and game Audio settings; Available on windows 10, Xbox 1 and Mac.
    USB sound card functionality: When using PC, USB sound card functionality provides game: Voice balance, game and voice streaming; No optical cables needed
    Mod Kit ready: For even more customization, the optional A50 Mod Kit allows users to add synthetic leather headband and ear cushions for improved noise isolation; Only compatible with A50 wireless Headset Gen 4',
    description: 'Experience legendary performance and sound of ASTRO Audio V2, with the convenience and freedom that comes without wires. The A50 Wireless + Base Station for PlayStation 4/PC delivers top-of-the-line acoustics, ergonomics, comfort and durability that gamers demand. The all-new Base Station provides clear, low-latency voice communication, while making headset pairing and charging simple. The ASTRO Command Center software allows gamers and streamers to tune every input and output parameter of the A50 precisely for their specific setup. For even more flexibility, the optional A50 Mod Kit allows users to add synthetic leather headband and ear cushions for improved noise isolation. Experience absolute audio immersion with the A50 Wireless + Base Station.' ,
    product_detail: '
    ASIN  :	B07R4Q8FQY
    Release date  :	August 11, 2019
    Product Dimensions  :	7.28 x 3.48 x 7.17 inches; 1.49 Pounds
    Binding	: Video Game
    Item model number : 939-001673
    Item Weight  :	1.49 pounds
    Manufacturer  :	Astro
    Country of Origin  :	China
    Batteries	:  1 Lithium Polymer batteries required. (included)
    Date First Available  : 	June 10, 2019'}
)

eldenRing = Product.create(
    {name: 'Elden Ring - PlayStation 5' , 
    price: 59.99 ,category: 'Toys & Games' ,
    body: 'ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware\'s largest game to date, set within a world full of mystery and peril
    Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire
    Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, and foreboding castles
    Create your character in FromSoftware’s refi ned action-RPG and defi ne your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world
    Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid - many options are at your disposal as you decide how to approach exploration and combat',
    description: 'The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware\'s largest game to date, set within a world full of mystery and peril. A NEW FANTASY WORLD - Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Unravel the mysteries of the Elden Ring\'s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. WORLD EXPLORATION IN THE LANDS BETWEEN - ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly. Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title. GENRE-DEFINING GAMEPLAY - Create your character in FromSoftware\'s refi ned action-RPG and defi ne your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world. Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat. A free upgrade to the PlayStation 5 version will be available for players who purchase ELDEN RING on PlayStation 4, and SmartDelivery will be supported for Xbox One and Xbox Series X|S.' ,
    product_detail: 'ASIN  :	B09743F8P6
    Release date  : 	February 25, 2022
    Product Dimensions  :	6.75 x 5.36 x 0.6 inches; 2.89 Ounces
    Binding  :	Video Game
    Rated	:  Mature
    Item model number  :	13020
    Item Weight	: 2.89 ounces
    Manufacturer  :	Bandai
    Country of Origin  : USA
    Date First Available  : June 10, 2021'}
)

raceTrackSet = Product.create(
    {name: 'Scalextric C1368T 24 Hr Le Mans Sports Cars Slot Car Analog 1:32 Race Track Set, Red/White/Black', 
    price: 159.99 ,category: 'Toys & Games' ,
    body: 'Power selector on hand controllers to adjust the speed of the cars which is perfect for beginners or crank it up to full speed for more challenging races. Perfect for all levels or racing
    Lap counter included to add an extra dimension to make it even more competitive
    Each hand controller has a four-position selector switch which allows the driver to choose slow or fast speed settings to reflect the driver\'s experience.
    The race set includes 15\' 9" of track with 4 different layout options to provide endless amounts of fun and variety, can change the layout in a matter of minutes with the easy to connect track.
    Special features of this race set: easy change Pick-ups, magnatraction and Super tough cars' ,
    description: 'Take part in your own version of Le Mans with this fantastic set. Feel the sense of accomplishment of making it to the end of an endurance race, with nearly five meters of track and four different track configurations to pick from, plus a lap counter to keep track of your progress against your opponent. Even if you prefer shorter, quicker races this set is perfect with its two Super Resistant Le Mans Prototype cars that can keep going even after more serious accidents. There’s also an adjustable power setting on the hand controllers to limit the speed of a race, perfect for keeping less experienced racers on the track! Contents: 2 x Le Mans Prototype Cars 1 x Powerbase 2x Hand Controllers 1 x Lap Counter 6 x R2 90 degree curve 6 x R2 45 degree curve Track Supports' ,
    product_detail: 'Product Dimensions  :	28 x 4 x 18 inches
    Item Weight  :	7.39 pounds
    ASIN  :	B01CYE2NYK
    Item model number  :	C1368T
    Manufacturer recommended age  :	14 years and up'}
)

babyDollStroller = Product.create(
    {name: 'My First Baby Doll Stroller - Soft Body Talking Baby Doll Included Fun Play Combo Set for Babies Infants Toddlers Girls Kids', 
    price: 42.95 ,category: 'Toys & Games' ,
    body: 'LIFELIKE FEATURES - Dolls To Play has finally come out with the First Lifelike Baby Doll and Carriage for your beloved Little Girl or Boy. The Baby Princess Doll is made of gentle touch Vinyl with a soft weighted body. The dolls features are all Handcrafted Depicting tiny little toes on the feet and adorable fingers on the hand. The Facial features are all hand painted featuring tiny rosebud lips and Sparkling eyes.
    MY FIRST BABY DOLL STROLLER - This Adorable Detailed Baby Doll Stroller features a seat belt so that the doll shouldn\'t fall out, soft washable fabric, easy to grasp handles special for little hands. Fits dolls up to 18", folds compact for easy storage, strong carriage double wheels for extra stability. Carriage comes fully assembled. Recommended for ages 2 years and older.
    SNUGLY SOFT BODY - Dolls To Play Baby Doll is an ideal first Baby doll that encourages Kids to express affection and care. It has a soft body that\'s perfect for hugging. Your little ones will learn to role-play nurture, love, and care. The Dolls clothing can easily be changed helping young ones develop fine motor skills. Stroller can also be used a walker
    EFFECTIVE CHILD DEVELOPMENT - Develop your child\'s imagination with this realistic looking doll and stroller from Dolls To Play. This incredible Doll provides a superior alternative for pretend play. It\'s time to give your child a break from Video Games! In order to properly develop an imagination, Your child needs to physically touch, hold and interact with people. By introducing your child to Dolls your child will learn to engage with babies properly to help them develop essential life skills.
    MADE FOR DOLLS TO PLAY BRAND - See our other Dolls, Strollers, Doll Accessory, Playpen, etc. by clicking on the Brand Name right under the product title. Dolls To Play is an exclusive Company, manufacturing higher end Dolls and toy accessories for deserving children. Our dolls, toys, and accessories are the perfect gift for Christmas, Holidays, Birthdays, or any other time!' ,
    description: 'PERFECT FOR LITTLE MOMMIES & DADDIES
    
    Would you not like to give your beloved daughter the best-in-class role-playing experience by gifting her a realistic baby doll  and stroller?
    Would you not love to see her play role of a little mother while also allowing her to develop emotional intelligence – caring and love?
    
    Children will love to care for this Adorable 16” Princess Doll and Stroller Set. Stroller is made of comfortable high quality material so that your little one can tote her dolls wherever she goes! The Stroller Fabric can easily be removed and is 100% machine washable; emerges from the wash looking brand new! Now your child can have some wholesome fun without worrying about damaging Dolls Clothing or accessories.
    
    PRINCESS DOLL
    
    - Made of Gentle Touch Vinyl
    - Detailed Lifelike Facial Features
    - Handcrafted Features with Realistic Looking Toes and fingers
    - Adorable Little Princess Doll outfit with matching hat
    
    STROLLER
    
    - Easily Foldable making it perfect for on the go
    - Smooth rolling wheels make it easy to take your doll for a stroll
    - Wide and Stable base doesn’t easily topple
    - No sharp corners no risk of hurting the baby
    - Pink Nursery Print with pacifier, bottle, rattle, hearts, is your Pinky Promise that your baby is gonna love
    - Fits any other kind of doll easily
    - Helps your children understand feelings of care and love – better emotional growth
    
    MAKE IT THE PERFECT GIFT FOR CHRISTMAS OR YEAR ROUND
    Don’t get frustrated while searching the right toy gift for you lovely child or grandchild, get this high quality baby doll carriage as a gift she will remember her entire life! 
    
    So, why think twice?
    
    ORDER NOW TO GIVE YOUR LITTLE GIRL SOMETHING SHE WILL ALWAYS LOVE!',
    product_detail: '
    Package Dimensions  :	23.7 x 10.01 x 4 inches
    Item Weight	:  2.64 pounds
    ASIN  :	B0754J429C
    Manufacturer recommended age  :	36 months - 3 years
    Is Discontinued By Manufacturer  :	No
    Department  :	Unisex-child
    Manufacturer   :	Dolls To Play'}
)


###### FASHION ####
trexCostume = Product.create(
    {name: 'Rubies Adult The Original Inflatable Dinosaur Costume, T-Rex, Standard',
    price: 49.99 ,category: 'Fashion',
    body: '100% Nylon
    Imported
    Zipper closure
    Hand Wash
    LONG SLEEVE inflatable jumpsuit with zipper closure on back and battery operated fan
    READ BEFORE BUYING: Costumes are not sized the same as apparel, please review the Rubies SIZE CHART IN IMAGES to determine fit, recent reviews may also be helpful
    Fan requires 4, AA batteries (not included); do not use rechargeable, nickel-cadmium; remove batteries from fan while not in use From Rubies, manufacturer of the Original Inflatable Dinosaur costume
    GROUPS AND FAMILIES: Combine with other costumes by Rubies; look for regular and inflatable designs in baby, toddler, child, adult and pet sizes, also look for accessories like candy bowls, masks and more
    FAMILY-FOCUSED, and based in the U.S.A. since 1951, Rubie’s has classic and licensed costumes and accessories in sizes and styles for your entire family',
    description: 'Long sleeve inflatable jumpsuit with battery operated fan. Fan requires 4 AA batteries, fan instructions included with costume. Batteries available separately. Please read before buying; costumes are not sized the same as apparel, please review the Rubies size chart in images, read recent reviews and Q & A to determine best fit. Look for Rubies trademark on packaging and labels to help assure you’ve received an authentic safety-tested item. Rubies offers all of your favorite dinosaurs inflatable designs; look for Velociraptor with Sound, Pteranodon, Triceratops, Velociraptor, T-Rex with Sound and the award winning inflatable dinosaur that started it all, the T-Rex; available in standard adult, plus-size and teen. Create your very own family of prehistoric fun and get ready for an unforgettable time.',
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  15.75 x 12.99 x 8.27 inches; 1 Pounds
    Manufacturer recommended age  :  18 years and up
    Item model number  :  810481
    Department  :  Mens
    Batteries  :  4 AA batteries required.
    Date First Available  :  April 24, 2015
    Manufacturer  :  Rubie\'s
    ASIN  :  B00TO6E0T8
    Country of Origin  :  China'
    }
)

threeWolvesShirt = Product.create(
    {name: 'The Mountain Men\'s Three Wolf Moon Short Sleeve Tee' , price: 29.99 ,category: 'Fashion',
    body: '100% Cotton
    Machine wash & dry, do not bleach
    ALL NATURAL QUALITY MATERIALS: 100% cotton, water based inks, and organic dyes ensure the shirt doesn\'t emit nasty toxins; our hand dyeing process make these custom shirts a work of art
    ULTRA SOFT AND COMFORTABLE:  Using only high quality materials, these shirts will not lose their shape and are easy to care for, just toss in the washing machine on cold, tumble dry low (no bleach)
    ENVIRONMENT FIRST PRODUCTION: Since 1972, we remain committed to using sustainable practices that  preserve our natural resources; designed and printed in the USA, we are deeply tied to this commitment and continue to implement the latest practices
    CUSTOM ART WEAR: Our apparel is designed by artists who create stunning works of art that come to life through rich and vibrant colors; these tee shirts are unique and wearable masterpieces making the wonderful gifts
    Take care when wielding the powers of the Three Wolf Moon T-shirt from The Mountain, for you will call excessive amounts of prospective mates to your presence, and others will stand awestruck in your presence, unable to perform other duties',
    description: 'Hand dyed shirt featuring a stunning screen print of 3 wolves howling at a moon on a preshrunk, 100% cotton tee dyed and printed by the mountain. This hand dyed tee shirt features a stunning screen print graphic on a preshrunk, 100% cotton tee. Dyed and printed by The Mountain. The Mountain uses only inks and dyes, to bring you an incredibly durable and comfortable garment.',
    product_detail: 'Item model number  :  56158
    Department  :  Mens
    Date First Available  :  March 5, 2007
    Manufacturer  :  The Mountain Boys 8-20
    ASIN  :  B002HJ377A'}
)

adidasHat = Product.create(
    {name: 'adidas mens Release 2 Structured Stretch Fit Cap' , 
    price: 20.66 ,category: 'Fashion' ,
    body: '80% Polyester, 20% Spandex
    Imported
    Hand Wash Only
    Low crown, 6-panel stretch fit silhouette.
    Breathable mesh fabric.
    Textured offset embroidered badge of sport logo.
    Moisture-wicking sweatband for a dry, comfortable fit.',
    description:  'Go all-in on game day. the iconic adidas badge of sport sits offset on the front of this cap. the soft, stretch-fit build features breathable mesh and a low crown for a traditional fit.',
    product_detail: 'Product Dimensions :  6 x 6 x 51 inches; 3.53 Ounces
    Item model number :  978221
    Department :  Mens
    Date First Available :  May 8, 2019
    Manufacturer :  Adidas
    ASIN :  B07RMBWQK2'}
)

bucket_hats = Product.create(
    {name: 'MaxNova Bucket Hats Summer Travel Beach Sun Hat Outdoor Cap Unisex 2pack', 
    price: 19.99,category: 'Fashion' ,
    body: '100% Cotton
    Material:This cute BUCKET HAT for women/men made of 100% high quality Cotton,it is cozy and comfortable .
    Size:Bucket hats has One free size with head circumference:56-58cm/22.1-22.8".Fits most of boys girls women and men.
    Packable and reversible:This cute bucket hat is easy to pack and roll into your bag and pocket, when not in use.The one fishing cap could be used as two hats, one side is a color bucket hat, the other side is another solid color hat, it is great value for money.
    Occusion:Perfect for both casual daily and outdoor activities,such as fishing,hunting,hiking,camping and beach.It is a good sun hats for women.'
    description: '100% Satisfaction Guaranteed - MaxNova bucket hats for women has 30 days free exchange and returns. Please contact us first if there is any question. We will do our best to meet your request and solve your problem quickly and efficiently!',
    product_detail: 'Department  :  Womens
    Date First Available  :  September 21, 2020
    ASIN  :  B08JMFKDG8'}
)

lemurOnesie = Product.create(
    {name: 'Unisex Adult Onesie Animal Pajamas One-piece Cosplay Costume Women Man Halloween' , 
    price: 22.99 ,category: 'Fashion' ,
    body: 'Zipper closure
    The material is relatively Loose fitting and has a high degree of comfort
    Made of wool, with excellent breathability
    Animal pajamas have buttons for easy putting on and taking off
    Easy to clean, non-fading and lint-free
    If you are not sure about the size, it is recommended to buy a larger size. If you are not satisfied with the product, please contact us and we will help you',
    description: 'If you are not sure about the size, it is recommended to buy a larger one

    Below is the size table：
    
    Small(S)-height 57"-62" suitable for height from 146CM-159CM  
    
    Medium(M)-height 63"-66" suitable for height from 160CM-169CM 
    
    Large(L)-height 67"-70" suitable for height from 170CM-179CM 
    
    X-Large(XL)-height 71"-74" suitable for height from 180CM-188CM'  ,
    product_detail: 'Department  :  Womens
    Date First Available  :  September 18, 2019
    ASIN  :  B07Z1CQ5KW'}
)

bad_cat_shirt = Product.create(
    {name: 'Do What I Want Vintage Black Cat Red Cup Funny My Cat T-Shirt', 
    price: 16.98,category: 'Fashion' ,
    body: 'Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester
    Imported
    Machine Wash
    Do What I Want Vintage Black Cat Red Cup Funny My Cat i do what i want the tshirt for Halloween to cats lovers from dad or mom to special daughter or kids or sons or from brothers to sisters nice humor cute halloween loves cat for Halloween holiday
    Lightweight, Classic fit, Double-needle sleeve and bottom hem' ,
    description: 'Great present to gift to husband, wife, grandpa, grandma, mom, dad, brother, sister, son, daughter, friends or family on occasions such as Graduation, Wedding, Birthday, Valentine's day, New Year's, Christmas, Mother's Day, Father's Day, or Easter holiday.',
    product_detail: 'Package Dimensions  :  10 x 8 x 1 inches; 4.8 Ounces
    Department  :  Womens
    Date First Available  :  March 3, 2021
    Manufacturer  :  i do what i want cat shirt
    ASIN  :  B08XZB97RG'}
)

fullStackShirt = Product.create(
    {name: 'Full Stack Developer - Computer Science Programmer Coding T-Shirt', 
    price: 19.99,category: 'Fashion' ,
    body: 'Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester
    Imported
    Machine wash cold with like colors, dry low heat
    Are you a Coder or a Programmer? If you like to code and are a software developer you can probably relate to the problem. This makes a great Birthday Gift for a software engineer.
    This funny computer engineering design is an exclusive novelty design. Grab this coding enthusiast design as a gift for a Developer, Computer Science Student, Software Engineer or any other IT professional
    Lightweight, Classic fit, Double-needle sleeve and bottom hem',
    description: 'This Programmer design features a stack of pancakes and the text "Full Stack Developer" which is nicely incorporated into the design. Are you looking for a Great Birthday Gift for a Coder or Programmer? Then this Coding design is perfect for you! This will be an eye catcher at work, at the university or at the college. Wear this computer geek design at the next hackathon.' ,
    product_detail: 'Package Dimensions  :  10 x 8 x 1 inches; 4.8 Ounces
    Department  :  Mens
    Date First Available  :  October 27, 2021
    Manufacturer  :  Funny Programmer Shirts
    ASIN  :  B09KHKQC7M'}
)

nikeJoggers = Product.create(
    {name: 'Nike Sportswear Tech Fleece Men\'s Joggers', 
    price: 64.99 ,category: 'Fashion' ,
    body:'66% Cotton, 34% Polyester
    Drawstring closure
    Machine Wash
    Room in the thighs helps you move without restriction.
    Tapering at the knee provides a tailored look to help your sneakers shine.
    Elastic waistband with drawcord provides a snug fit.
    Slim fit for a tailored feel
    Ribbed cuffs and a tapered leg design' ,
    description: 'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zippered pocket on the right leg provides secure small-item storage and elevate the look.' ,
    product_detail: 'Package Dimensions  :  11.06 x 9.49 x 2.91 inches; 1.27 Pounds
    Department  :  Mens
    Date First Available  :  July 2, 2021
    Manufacturer  :  Nike
    ASIN  :  B09LWRQS6G'}
)

nikeShirt = Product.create(
    {name: 'Nike Men\'s Dry Tee', 
    price: 25.00,category: 'Fashion' ,
    body: 'Imported
    Machine Wash
    SWEAT-WICKING NIKE T-SHIRT STYLE: The Nike Dri-FIT Men\'s T-Shirt delivers a soft feel, sweat-wicking performance and great range of motion to get you through your workout in total comfort.
    NIKE SHIRT: The Nike men\'s workout shirt has a standard fit for a relaxed, easy feel during physical activity. Small Nike swoosh trademark on left chest.
    COMFORTABLE FIT: The Nike Dry fabric material moves with you for optimal range while you play. The Nike shirt for men is crafted with 60% cotton and 40% polyester.
    RIBBED CREW NECK: The Nike t-shirt for men has a ribbed crew neck that gives you a comfortable fit when active. The cut is designed to lay smoothly against the skin.
    NIKE MEN\'S SHIRT: Regular fit, fabric: 60% cotton/40% polyester, imported, machine wash',
    description:  'The Nike Dri-FIT Men\'s T-Shirt delivers a soft feel, sweat-wicking performance and great range of motion to get you through your workout in total comfort.',
    product_detail: 'Package Dimensions  :  10.4 x 5.5 x 1.5 inches; 4.97 Ounces
    Item model number  :  AR6029
    Department  :  Mens
    Date First Available  :  March 2, 2019
    Manufacturer  :  Nike Apparel (Sporting Goods)
    ASIN  :  B07DYTCL4W'}
)

leatherBelt = Product.create(
    {name: 'WOLFANT Full Grain Leather Belt for Men,100% Italian Real Solid Leather Casual Jeans belt', 
    price: 39.98,category: 'Fashion' ,
    body: '[Full Grain]: This solid belts is handmade of 100% Italian Full Grain Leather– NO Fillers, NO Bonding, one single piece of 1.5" top Real Solid cowhide, wont break, wont split. The quality of this leather ensures a long-lasting life and durability.
    [Aesthetic Buckle]: Unlike a common buckle, the anaglyph of heavy duty metal buckle makes it look more aesthetic.Combined with exquisite handmade, this cowhide belt will serve as a fine accessory to any jeans, casual, work pants, business slacks& more.You can be sure to never go out of style with the classic yet stylish design of belt.
    [Perfect Fit]: There are 7 holes on the mens belt to make belt fits more waistline size. Each product comes with a puncher so that you can remove the belt head to adjust the belt length according to your waist size.
    [Gift Box]: Experience premium with WOLFANT! As luxury packaging comes as standard! WOLFANT high quality men\'s belt is a great gift for boyfriend, husband, father and male colleagues as birthday gift or anniversary gift.
    [100% Guarantee]: Any product issue makes you dissatisfy with this men\'s leather belt, let us know and we will make it right. Full Refund or a Free Replacement, whichever You Prefer.',
    description: 'The first layer of cowhide leather has a smooth feel, good ductility and breathability, making it more comfortable. The durability of the leather has been significantly improved due to the careful selection of the cowhide. And it has only a little natural scent, no chemical odor.

    There are no two pieces of leather that are exactly the same in the world. Each leather has its characteristics and texture. Each belt is unique. Every effort we put in is to bring you a better experience.' ,
    product_detail: 'Package Dimensions  :  6.34 x 5.16 x 4.29 inches; 9.91 Ounces
    Department  :  Mens
    Date First Available  :  April 14, 2021
    ASIN  :  B092HTJLT3'}


#### Electronics ####
echoDot = Product.create(
    {name: 'Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal' , price: 49.99 ,category: 'Electronics',
    body: 'Meet the Echo Dot - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound.
    Voice control your entertainment - Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and others. Play music, audiobooks, and podcasts throughout your home with multi-room music.
    Ready to help - Ask Alexa to tell a joke, play music, answer questions, play the news, check the weather, set alarms, and more.
    Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices.
    Start Routines with your motion - Turn on compatible lights, play your Flash Briefing, or turn on the coffee maker when you walk into the room.
    Connect with others hands-free - Call friends and family who have the Alexa app or an Echo device. Instantly drop in on other rooms or announce to the whole house that dinner\'s ready.
    Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.',
    description: 'Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home.',
    product_detail: 'Size  :  3.9” x 3.9” x 3.5” (100 x 100 x 89 mm)
    Weight   :   12 oz (341.3 g) Actual size and weight may vary by manufacturing process
    Wi-Fi connectivity   :   Dual-band Wi-Fi supports 802.11a/b/g/n/ac (2.4 and 5 GHz) networks. Does not support connecting to ad-hoc (or peer-to-peer) Wi-Fi networks.'}
)


= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(

    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

= Product.create(

    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)

#### Pet Supplies ####
frontline = Product.create(
    {name: 'FRONTLINE Plus Flea and Tick Treatment for Cats' , price: 71.99 ,category: 'Pet Supplies',
    body: 'The #1 name in flea & tick protection trusted by pet owners for over 20 years, this waterproof, fast-acting flea and tick treatment kills fleas, flea eggs, lice, and ticks, including those that may transmit Lyme disease.
    Designed for use only with cats and kittens, this long-lasting treatment is made for cats eight weeks or older, weighing 1.5 pounds or more.
    Made with two active ingredients, fipronil and (S)-methoprene, this treatment stops infestations and prevents new ones.
    Applied on a single point on your pet, the treatment rapidly covers your cat\'s entire body and deposits in the sebaceous glands. These glands as a reservoir, continuously replenishing the treatment onto your pet, working even if your cat gets wet.
    One dose of FRONTLINE Plus lasts 30 days.
    Flea, flea egg, lice, and tick control for cats and kittens',
    description: 'FRONTLINE Plus for Cats has been trusted by veterinarians for flea and tick control for kittens and cats for nearly 20 years. Made with 2 tough killing ingredients, fipronil and (S)-methoprene – one to kill adult fleas and ticks and the second to kill flea eggs and larvae – this fast-acting, long-lasting protection provides flea and tick control for cats and kittens 8 weeks and older, 1.5 lbs. and over. Its long-lasting formula is stored in the oil glands of the pet’s skin to give non-stop flea and tick protection for a full 30 days.',
    product_detail: 'Is Discontinued By Manufacturer  :  No
    Product Dimensions  :  5.7 x 1 x 4.5 inches; 0.16 Ounces
    Item model number  :  P004FLTSP6-CAT
    Date First Available  :  October 2, 2001
    Manufacturer  :  Boehringer Ingelheim Animal Health
    ASIN  :  B0002J1F7G
    Country of Origin  :  China'}
)

purian = Product.create(
    {name: 'Purina ONE Tender Selects Blend Adult Dry Cat Food' , price: 27.98 ,category: 'Pet Supplies',
    body: '16 Lb. Bag - Purina One Tender Selects Blend With Real Salmon Adult Dry Cat Food
    Real Salmon Is The no.1 Ingredient
    High Protein Helps Support Strong Muscles
    Natural Plus Essential Nutrients
    100% Complete And Balanced Nutrition For Adult Cats',
    description: 'Serve your cat a plate of the deliciously crunchy bites and meaty, tender morsels she\'s been craving with Purina ONE Tender Selects Blend With Real Salmon adult dry cat food. We craft this natural recipe plus essential nutrients with real ingredients, including accents of real carrots and peas. Containing no artificial flavors or preservatives, this formula uses real salmon as the #1 ingredient to provide the protein your cat needs to support strong muscles. The omega-6 fatty acids help nourish and maintain healthy skin and a radiant coat, and antioxidants promote immune health. Along with a great taste cats love, this meal delivers 100% complete and balanced nutrition for adult cats. Plus, the crunchy kibble helps reduce plaque buildup and whiten teeth. This dry food for cats contains 0% fillers, meaning all of our high-quality ingredients have a purpose. For the convenience you demand and the variety your cat appreciates, buy this Purina ONE cat food on Amazon.com today.',
    product_detail: 'Product Dimensions  :  22 x 14 x 3 inches; 16 Pounds
    Item model number  :  178609
    Date First Available  :  February 3, 2006
    Manufacturer  :  Nestle Purina Pet
    ASIN  :  B0000AH3RR
    Country of Origin  :  USA'}
)


dogCarSeat = Product.create(
    {name: 'PETICON Car Seat Cover for Dogs, 100% Waterproof Dog Seat Cover for Back Seat with Mesh Window, Scratchproof Dog Car Hammock for Cars, Trucks, SUVs, Jeep, Nonslip Dog Back Seat Protection, Black',
    price: 30.59  ,category: 'Pet Supplies',
    body: '100% Waterproof - We clearly know the importance of the waterproof for dog back seat cover. This dog car seat was made of the upgraded grid pattern with a water-resistant coating, it also used hot pressing technology instead of quilting, without needle hole avoid leaking water. No more worried cheap dog back seat cover ruins your seats.
    Visible Window - Petech Dog seat cover with mesh window supplies your dog a better air circulation in Summer and Winter. Ensure your dog feels cool and warm. The visible window allows your dog to clearly see you, helps your dog reduce anxiety and remains calm when traveling.
    Perfect Fits Your Car - Perfect size of 54"W x 58"L fits different vehicles like cars, trucks, SUVs! Supplies your pets with comfort while keeping your vehicle interior safe from scratches, fur, and urine (100% waterproof). It also perfects for protecting from damage caused by baby car seats. And for kids, it can protect the back seat from food and juice spills.
    Two Modes Perfect for Your Pets - With durable zippered side flaps, the dog car hammock protects your dog from injury when the emergency brake and turn, you will be less distracted as a driver. The side flaps protect the doors and make dogs impossible to reach the floor of the car. All the hair and dirt will remain on the surface of the car seat covers for dogs and meanwhile, prevent scratching leather bench when dog jump in. Convenient pocket for storage of personal items such as toys, leashes.
    Easy to Install & Clean - With 2 quick release durable buckles, 4 sets of adjustable straps and 2 seat anchors, you can easily install this car seat cover for dogs in seconds. Easy to clean with a damp cloth, vacuum or Water Shower.',
    description: 'PETICON Dog Car Seat Cover.  Enjoy your happy trip with your dogs. Visible mesh window allows for better air circulation, less anxiety, and more fun for pets.  Durable pet seat covers protect your car seat from scrating' ,
    product_detail: 'Package Dimensions  :  14.53 x 11.46 x 5 inches; 3.68 Pounds
    Item model number  :  PT4001
    Date First Available  :  February 8, 2020
    Manufacturer  :  Petech
    ASIN  :  B082WQRPDH'}
)

puppyPad = Product.create(
    {name: 'RainForest Basics Dog and Puppy Pads, Leak-proof 5-Layer Pee Pads with Quick-dry Surface for Potty Training' ,
    price: 29.74 ,category: 'Pet Supplies',
    body: 'Includes 100 regular size, standard absorbency pee pads for dogs
    Super-absorbent core that turns liquid to gel upon contact
    Quick-dry surface with built-in attractant helps aid in potty training; leakproof plastic lining keeps floors safe from damage
    For indoor/outdoor/car use; ideal for puppy training, assisting senior dogs, or as an alternative when outdoor isn’t an option
    Pad Dimensions: Regular size pads measure 22x22 inches (LxW); center pad measures 19x19 inches (LxW) with a 1.5 inch plastic border on all sides to help prevent overflow.',
    description: 'RainForest Basics Dog and Puppy Pads, Leak-proof 5-Layer Pee Pads with Quick-dry Surface for Potty Training, Regular (22 x 22 Inches) - Pack of 100' ,
    product_detail: 'Product Dimensions  :  22 x 0.1 x 22 inches; 2.12 Ounces
    Item model number  :  TRP100R
    Date First Available  :  April 1, 2015
    Manufacturer  :  Amazon Basics
    ASIN  :  B00MW8G62E'}
)

dogHarness = Product.create(
    {name: 'Voyager Step-in Air Dog Harness - All Weather Mesh Step in Vest Harness for Small and Medium Dogs by Best Pet Supplies',
    price: 12.99,category: 'Pet Supplies',
    body: 'ATTENTION: Sizing does NOT directly correspond to your pet\'s breed or weight. Please MEASURE your pet by printing out our Size Guide which has a measuring tape and refer to our sizing chart for the best fit before ordering.
    ALL WEATHER MESH: Made with a soft, breathable air mesh, this lightweight pet harness is perfect for walks all year round.
    REFLECTIVE BANDS: Two reflective bands on the sides of this harness enhance your pet’s visibility for those early morning and late evening strolls.
    THREE SAFETY FEATURES: Our hook and loop fastener, buckle and double D-rings work together protect your pet in three layers of security.
    STEP IN, CLIP & GO. Step into your next walk in this simple and easy-to-wear vest harness. Click ‘Add to Cart’ now.' ,
    description: 'COMFORTABLY WALK YOUR PET NO MATTER THE WEATHER Our Step-In Air All-Weather harness is designed to ensure that regardless of the conditions outside, youll still manage to take your pet on those walks that get their tail wagging like crazy. Weve used mesh material that is breathable to keep your dog or pet cool on hot days, but also provides insulation for those chilly occasions And its going to be one comfy walk for your furball Unlike leashes that have the tendency to strain your pets neck, this safety harness evenly distributes the pressure around the chest to prevent any kind of choking. Stress Free Walks Is it always a struggle trying to get your pet in most harnesses? Well, youll love just how easy this step in harness is to put on Simply have your dog walk into it with their front legs, attach a leash, and youre good to go. But what really makes this support harness a must-have is how secure it is. Weve fitted it with a strong closure and heavy duty metal D-rings for double security. So youll never have to worry about your dog wiggling out of the harness while on your walks. Here are more reasons to love this great harness: Non irritating material allows for all-day wear. Available in a wide range of sizes (Please refer to the sizing chart). Made with great attention to detail to ensure maximum durability. Securely holds your pet while still being gentle. Beautiful choice of colors to suit your pets personality.' ,
    product_detail: 'Product Dimensions  :  13 x 11 x 1 inches; 4.64 Ounces
    Item model number  :  207-BU-XL
    Date First Available  :  April 23, 2013
    Manufacturer  :  Best Pet Supplies, Inc.
    ASIN  :  B00CHSVYWG' }
)

dogPoopBags = Product.create(
    {name: 'Best Pet Supplies Dog Poop Bags for Waste Refuse Cleanup, Doggy Roll Replacements for Outdoor Puppy Walking and Travel, Leak Proof and Tear Resistant, Thick Plastic - Mixed Colors, 240 Bags',
    price: 9.99,category: 'Pet Supplies',
    body: 'LEAK-PROOF POO BAGS:Never have to worry about your dog waste BAGS ripping. Our heavy-duty doggy BAGS for poop are crafted from extra-thick plastic with tear-resistant seams.
    MAKING PLASTIC SMARTER: Unlike other pet waste bags that harm the environment, ours lasts much shorter time if it gets into the open environment due to presence of d2w additive.
    MASK THE MESS: No more cringing in disgust. Opaque, scented, and beautifully designed, these doggie bags for poop make picking up after your four-legged pal less of a nightmare.
    EASY TO SEPARATE AND OPEN: High-quality perforations make separating the biodegradable poop bags a breeze. So you get to clear the mess much faster.
    SIZED JUST RIGHT: Measuring 13” (L) x 9” (H), the pet poop bags are large enough to handle the largest of deposits. Click ‘Add to Cart’ now and start picking up your pup’s poop with confidence!',
    description: 'HEAVY-DUTY BAGS DESIGNED WITH MOTHER NATURE IN MIND Looking for heavy-duty dog poop bags that don\'t easily break? Smarter waste bags that you can confidently toss in the trash? Then you\'ll love our new and improved doggy bags. We went back to the drawing board and created extra-b leak-proof bags made using a special ingredient. The secret behind this smart technology? A certified additive known as d2w. It shortens the life of our bags at the end of its useful life when it ends up in the open environment. So you getto throw your pet\'s waste without destroying the environment. Here are more reasons you\'ll loe these strong poop bags: - Made with 15 microns-thick plastic for greater strength. - Well-sealed seams prevent the bags from ripping. - The opaque design masks the contents of the bags. - Scented with a jasmine fragrance that keeps odor at bay. - Very easy to separate from the roll thanks to high-quality perforations. - Sized at 13 (L) x 9 (H) to handle poop from all breeds. - They leave you enough room at the top to create a knot. - Backd by a 100% customer satisfaction . Go ahead, get heavy-duty poop bags that you can toss guilt-free.' ,
    product_detail: '
    Manufacturer	:   Best Pet Supplies, Inc.
    Part Number	:   MX-240T
    Item Weight	:   1.24 pounds
    Product Dimensions	:   3 x 6.5 x 5 inches
    Country of Origin	:   China
    Item model number	:   MX-240T
    Size	:   240 Bags
    Color	:   Assorted Colors
    Material	:   Plastic
    Item Package Quantity	:   1'}
)

dogSqueakToy = Product.create(
    {name: 'Best Pet Supplies 2-in-1 Fun Skin Stuffless Dog Squeaky Toy and Plush toys',
    price: 5.99,category: 'Pet Supplies',
    body: 'STUFFING FREE: These stuffing free dog toys won’t make a mess while your pup pulls, tugs and chews away.
    KEEP YOUR DOG INTRIGUED: With a squeaker in the head and another in the tail, this stuffing-free dog toy makes every bite a delightfully squeaky treat.
    CUTE DOG TOY: Our no stuffing dog toys come in fun animal designs. Available in wild duck, fox, raccoon, deer, hare, snow leopard and other styles, these unique dog toys will spark your dog’s natural instincts to hunt and play.
    FOR ALL BREEDS: Whether you have a Great Dane or a little Chihuahua, you’ll find the perfect-sized squeaky unstuffed dog toy from our collection. Each of these fun skins come in small, medium and large sizes to fit your dog’s size and age.
    GREAT GIFT: Whether you’re looking for an exciting birthday, holiday or a just-because gift for your furbaby, you can’t go wrong with these incredibly fun dog toys. Click ‘Add to Cart’ now!',
    description: 'THE 2-IN-1 DOG TOY THAT LASTS THROUGH ALL THE FUN Keep them Intrigued It squeaks. It’s cute. It’s that one dog toy your pup won’t want to let go! Our soft, non-stuffed dog toys are designed to tease out the playful side of your pup. It comes with one squeaker in the head and another in the tail to make every bite a delight. Choose between our fun animal designs and treat your dog to a toy that will keep them occupied for ages to come. Designed to Last Does your dog tear apart stuffed plush toys in no time? Well they might have just met their match because these toys have no stuffing to pull out! Our stuffing free toys are perfect for aggressive chewers, and hold up well to countless games of tug & toss. We’ve designed them in multiple sizes to suit just about any breed. Whether you have a husky or pug, Labrador or yorkie, you’ll find the right dog toy to complement their size and energy. Here’s why you’ll love these 2 in 1 dog toys: Made using 100% toxin free materials to keep your pup safe. Natural shape and texture sparks your dog’s natural instincts. Can be safely washed to quickly remove dirt and odor. Well priced to give you great value for money. Treat your pooch to a dog toy that will keep them fascinatingly engaged for extended play time. Click ‘Add to Cart’ now!' ,
    product_detail:'Product Dimensions  :  10.5 x 4 x 1 inches; 0.81 Ounces
    Item model number  :  PT08-S
    Date First Available  :  October 23, 2013
    Manufacturer  :  Best Pet Supplies
    ASIN  :  B00G5M75UK'}
)

petStainSpray = Product.create(
    {name: 'AESROSON Pet Stain and Odor Eliminator Spray - 3-in-1 Formula Natural Pet Odor Spray- All-Purpose Carpet Deodorizer for Pet Urine, Floor Cleaner, and Fabric Stain Remover Enzyme Cleaner - 32 fl oz' ,
    price: 29.99 ,category: 'Pet Supplies',
    body: 'NATURAL FORMULATION - Aesroson Pet Stain and Odor Remover is formulated from naturally derived ingredients, including plant-based surfactant and beneficial bacteria cultures. It provides a gentle yet tough solution for eliminating household stains and odors.
    ALL-PURPOSE CLEANER - Our comprehensive 3-in-1 formula features a wide range of applications. You can use it as a carpet deodorizer for pet urine, floor cleaner, and fabric stain remover. Please note that we do not recommend using it on food surfaces or wood furniture.
    SAFE AND NON-TOXIC - This Pet Odor Eliminator is generally safe for people, pets, and the environment. It provides no harsh or overpowering fragrance. Instead, it gives your home a fresher scent that is totally free from any unpleasant pet odor.
    EASY AND READY TO USE - This Stain and Odor Remover can be used directly on carpets or fabrics. For hard surfaces, mix 4 fl oz of the solution into a gallon of water. Be sure to test the product on an inconspicuous spot first before using it.
    REFILLABLE SPRAY BOTTLE - This 32 fl oz Pet Odor Spray Bottle is refillable with any cleaning solution. You can get our 1-Gallon Pet Stain and Odor Remover Refill and save more by simply using your old bottle and refilling it.  Eliminates stubborn pet stains',
    description: "Naturally derived Pet Stain & Odor remover.  3-in-1 plant based formula.  2 spraying modes + safety lock." ,
    product_detail: 'Package Dimensions :  10.5 x 4 x 3 inches; 2.2 Pounds
    Date First Available :  August 31, 2021
    Manufacturer :  AESROSON
    ASIN :  B09F1RL18S'}
)


smartPetFeeder = Product.create(
    {name:'Petcube Bites 2 Lite Interactive WiFi Pet Monitoring Camera with Phone App and Treat Dispenser, 1080p HD Video, Night Vision, Two-Way Audio, Sound and Motion Alerts, Cat and Dog Monitor',
    price: 99.95 ,category: 'Pet Supplies',
    body:'Your All-In-One Pet Monitor: Check on your pet and home anytime anywhere with full HD 1080p live streaming video, 160° wide-angle view, clear 30-feet night vision, and 8x digital zoom. Enjoy high-quality 2-way audio to talk to your pets and hear them bark or meow back. Get an instant push notification if your camera detects any sound or motion at home.
    🦴 Treat Your Pet Remotely: Bites 2 Lite has a treat dispenser with 1.5 lbs container that allows you to toss dry, crunchy dog and cat treats short, medium, or long distance, or schedule automatic treat dispensing via the free Petcube app.
    ⏳ Easy 1-minute Set-up: Get your Petcube Bites 2 Lite ready to use in under 60 seconds. Note, Bites 2 Lite is only compatible with the 2.4GHz WiFi (does not support 5GHz Wi-Fi). Requires iOS 11.4 and higher or Android 8.10 and higher.
    👩🏼‍⚕️ Take Your Pet to Vet Online: Petcube cameras have a built-in 24/7 online Vet Chat that lets you consult a professional veterinarian by simply starting a chat from the Petcube app. Get answers to health, behavior, and nutrition questions about your pet in minutes.
    💬 24/7/365 Customer Support: We warrant the Petcube-branded product against defects in materials and workmanship under normal use for a period 1 year. Any issues? We’re always here to help! For immediate assistance, start a live chat in the app.
    ' ,
    description: 'Treat your pet remotely. Toss your pet’s favorite treats short, medium, or long distance to play or reward your good girl. Our award-winning treat flinging mechanism provides better portion control, and works faster and quieter. The detachable dishwasher-safe container fits up to 1.5 lbs of treats.' ,
    product_detail: '
    Package Dimensions  :	13.74 x 6.81 x 3.78 inches
    Item Weight  :	2.75 pounds
    ASIN   :  B08XXKJGKH
    Item model number   :   BL10US'}
)

catLitter = Product.create(
    {name: 'Fresh Step Advanced Clumping Cat Litter',
    price: 26.99  ,category: 'Pet Supplies' ,
    body: 'Fights odors longer: Fight litter box odors with Fresh Step advanced clean paws cat litter that starts fighting odors on contact to control odor longer vs. Fresh Step clean paws multi-cat
    Low tracking litter: Clean paws litter is designed to stay off of your cat\'s paws to help keep floors clean
    Low dust cat litter: For cleaner surfaces and cleaner air, this litter is 99% dust free
    Odor control: 10 days of odor control helps keep the litter box and your home smelling fresh
    Clumping cat litter: Clumps tight for easy scooping
    Age range description: All life stages',
    description: 'Clean Paws Fresh Step Advanced Multi Cat Extra Strength clumping cat litter is pet and paw friendly. Created by the makers of Fresh Step with your cat\'s health and happiness in mind using a tough odor eliminating formula and the power of Febreze. Made with larger, high quality clay particles that are designed with specific density and shape, Fresh Step Clean Paws low tracking litter stays in the box to help keep paws and your home clean. This litter offers 10-day odor control, which means more odor-fighting power for multiple cats. Clean Paws Fresh Step Advanced Multi Cat Extra Strength litter also clumps tight for easy cleanup. And, it is 99.9% dust free for cleaner surfaces, cleaner air and reduced tracking. Cleaning is fast and easy—just add more litter to your cat’s litter box after you scoop.' ,
    product_detail: 'Product Dimensions  :  12.25 x 11.31 x 10.63 inches; 37 Pounds
    Item model number  :  32401
    Date First Available  :  October 24, 2019
    Manufacturer  :  Fresh Step
    ASIN  :  B07ZK3DZB3'}
)


#### Sporting Goods ####
basketball = Product.create(
    {name: 'WILSON Evolution Game Basketball',
    price: 69.95 ,category:'Sporting Goods' ,
    body: 'When you focus on getting better, and not just on getting results, success takes care of itself. That is why the Wilson Evolution Game Ball is the preferred basketball in high schools across the country.
    Signature EVO feel: the soft feel that the evolution basketball is famous for is due it’s cushion core carcass, making the ball softer to the touch and easier to grip around the rim
    Grip & durability: the premium Evo microfiber composite cover provides a grip that players love and durability to last all-season and beyond
    Ultimate control: laid-in composite channels create a consistent feel and texture over the entire surface of the basketball to provide unparalleled control
    NFHS approved: approved for play by the national federation of state high school associations (NFHS)
    Official size basketball: 29.5"
    Proper inflation level: 7-9 psi',
    description: 'When you focus on getting better, and not just on getting results, success takes care of itself. That is why the Wilson Evolution Game Ball is the preferred basketball in high schools across the country. Every part from the moisture-wicking composite cover to the laid-in channels provides exceptional performance for those who aren\'t satisfied with being satisfied. Suited for indoor use, the Evolution is approved for play by the National Federation of State High School Associations (NFHS).' ,
    product_detail: 'Item Package Dimensions L x W x H	:  10 x 10 x 10 inches
    Package Weight	:  0.79 Kilograms
    Item Dimensions LxWxH	:  29 x 29 x 29 inches
    Item Weight	:  1.5 Pounds
    Brand Name	:  WILSON
    Country of Origin	:  China
    Warranty Description	:  1 Year Limited
    Model Name	:  WILSON Evolution Game Basketball - Game Ball, Size 7 - 29.5"
    Color	:  Game Ball
    Material	:  Evo Microfiber'}
)
 
campingChair = Product.create(
    {name: 'ALPHA CAMP Oversized Camping Folding Chair Heavy Duty Support 450 LBS Oversized Steel Frame Collapsible Padded Arm Chair with Cup Holder Quad Lumbar Back Chair Portable for Outdoor',
    price: 75.99 , category: 'Sporting Goods',
    body: '❤ 【Large Size】 Oversized Camping Folding Chair Size is 25.20" L x 36.61" W x 39.37"H, Weight is 13.2lbs, Large seat area with 600x 300D padded oxford fabric and padded armrest ensure comfort of this chair
    ❤【Maximum Loading Capacity】With hammer tone powder coating prevent corrosion and fading. four heavy duty steel frame were added to the bottom of the chair .sturdy steel frame construction make it can support up to 450 lbs and you\'re guaranteed a long lasting chair to enjoy outdoors all year
    ❤【Extra Storage Spaces】 Durable mesh cup holder and armrest at the perfect height allows you to relax in comfort.side storage pocket holds cell phone, notebook and maps,side cooler bag will keep you cool on a hot summer day!
    ❤ 【Portable And Easy Storage】Folding camping chair is easy to set up and fold in seconds. It collapses down to just 9.05″ x 38.58″ and Weights only 13.2 lbs that can be stored almost anywhere
    ❤【Supreme Comfort】 Whether you’re in your garden, at the beach, camping or hiking, this quad chair is super comfy. Even use it in the home!',
    description: 'Folding camping chair is easy to set up and fold in seconds.  It collapses down to just 9.05" x 38.58" and weights only 13.2 lbs that can be easy for hand carry and stored almost anywhere' ,
    product_detail: 'Product Dimensions	:  25.2 x 39.37 x 39.37 inches
    Item Weight	:  13.07 pounds
    Manufacturer  : 	ALPHA CAMP
    ASIN  : 	B07MD8HQL6'}
)

binoculars = Product.create(
    {name: 'Athlon Optics Midas Binoculars for Adults and Kids, Waterproof, Durable Binoculars for Bird Watching',
    price: 304.65 ,category: 'Sporting Goods' ,
    body: 'ED Glass - ED glass gives you an image with little or no chromatic fringe so the final result brings a clearer and sharper image to your eyes
    ESP Dielectric Coating is a multi layer prism coating that reflects over 99% of the light to your eyes bringing you a clear, bright image that displays accurate color reproduction.
    Advanced FMC - Advanced Fully Multi-Coated lenses gives you better light transmission to bring optimum brightness and true color across the entire light spectrum.
    Argon Purged - Argon purging gives you better waterproofing and thermal stability and Field of view Angular -8.1 degree
    Long eye relief can be particularly important for eyeglass wearers because longer eye relief allows them to still see the entire field of view.Field Of View M @1000 METERS:144 m',
    description: 'Midas was known to have a golden touch. He must have laid his hands on these binoculars since they set the gold standard for this class of binoculars. The rugged benchmark for all-weather brightness and clarity, these Midas roof-prism binoculars are light and slim thanks to the magnesium designed chassis.
    Together with UHD Glass lenses, Advanced Fully Multi-coated optics, high quality BaK4 prisms with our ESP Dielectric Coating plus Phase Coating, these Midas binoculars gather maximum light and produce brilliant color fidelity.' ,
    product_detail: '
    Item Package Dimensions L x W x H	:  8.78 x 6.54 x 3.54 inches
    Package Weight	:  1 Kilograms
    Item Dimensions LxWxH	:  5.2 x 3.3 x 5.7 inches
    Item Weight	:  1.56 Pounds
    Brand Name	:  Athlon Optics
    Warranty Description	:  Lifetime Transferable Warranty
    Model Name	:  Midas'}
)

paracordBracelet = Product.create(
    {name: 'Atomic Bear Paracord Bracelet (2 Pack) - Adjustable - Fire Starter - Loud Whistle - Perfect for Hiking, Camping, Fishing and Hunting - Black & Black+Orange',
    price: 12.99 ,category:'Sporting Goods',
    body: 'Be Ready To Survive Without Stuffing Your Backpack - Find the 5 survival gear essentials in just one bracelet : fire starter, reliable compass, loud emergency whistle, ferro rod striker and 12 feet of military-grade paracord.
    Don\'t Stress About Getting The Size Right - Unlike other options, the Cobra bracelet is adjustable to fit small and big wrists. Bracelet adjusts from 8\"-10.5\". Perfect outdoor enthusiast\'s gift and gadget.
    Did You Know That Cold Is The #1 Cause Of Death? Beat the statistics. In an emergency, use the flint steel to start a fire and secure a shelter using the paracord to fight hypothermia.
    Be Ready When SHTF - Add the Cobra to your tactical gear or wear it when hunting, fishing, hiking, camping, etc.
    Limited Time Offer - Currently comes in a pack of 2 bracelets: one black and one orange+black (see pictures). Includes a lifetime warranty and instructions on how to make a fire. Buy Now.',
    description: 'The Atomic Bear Cobra bracelet is ideal for outdoor adventures. Take it along when you\'re hiking, camping, hunting or fishing. The six built-in tools will ensure you\'re always prepared! Paracord, compass, ferro rod & striker, paracord, and an emergency whistle.',
    product_detail: '
    Item Package Dimensions L x W x H	:  10.8 x 3 x 0.4 inches
    Package Weight	:  0.07 Kilograms
    Brand Name	:  The Atomic Bear
    Warranty Description	:  1
    Model Name	:  ATOMIC BEAR Paracord Bracelet (2 pack) – Adjustable Size – Fire Starter – Loud Whistle – Perfect for Hiking, Camping, Fishing and Hunting – Black & Black+Orange
    Color	:  Black, Orange and black
    Material	:  Cellulose
    Manufacturer	:  The Atomic Bear' }
)
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }

    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)
    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)
    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)
    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)
    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)
    
= Product.create(
    {name: , 
    price: ,category: ,
    body: ,
    description:  ,
    product_detail: }
)



 Review.create([
     { usrId: 1, productId: 7, rating: 5, headline: 'Eating them on camera makes you really cool!', body: 'Who needs food when you can just eat tide pods!'}
