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

products = Product.create([
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
    },

    {name: 'Rubies Adult The Original Inflatable Dinosaur Costume, T-Rex, Standard' , price: 49.99 ,category: 'fashion',
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
    },

    {name: 'The Mountain Men\'s Three Wolf Moon Short Sleeve Tee' , price: 29.99 ,category: 'fashion',
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
    ASIN  :  B002HJ377A'},

    {name: 'Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal' , price: 49.99 ,category: 'Smart Home',
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
    Wi-Fi connectivity   :   Dual-band Wi-Fi supports 802.11a/b/g/n/ac (2.4 and 5 GHz) networks. Does not support connecting to ad-hoc (or peer-to-peer) Wi-Fi networks.'},

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
    Country of Origin  :  China'},

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
    Country of Origin  :  USA'},

    {name: "Tide PODS 4 in 1 with Downy, Laundry Detergent Soap PODS, April Fresh Scent, 73 Count, Packaging May Vary", 
    price: 24.99 ,category: "Health & Household",
    body: "Only Tide PODS Plus Downy cleans and conditions in 1 step, helping protect clothes from stretching and fading in the wash. 
    Tide PODS Plus Downy have the signature Downy April Fresh Scent for outstanding freshness
    America's #1 Trusted Detergent Brand* *Tide is Consumers' #1 Trusted laundry detergent brand in Readers Digest survey
    Each Tide PODS is 4-in-1 including detergent, stain remover, brightener, and Downy Fabric Protect technology
    The new special film now dissolves even better in both hot & cold water",
    description: "The new and improved Tide PODS laundry detergent pacs are super concentrated with 90 percent cleaning ingredients to rejuvenate even dingy clothes for brighter brights and whiter whites, wash after wash. Each Tide PODS is a 3-in-1 breakthrough laundry solution with highly concentrated detergent, stain remover and color protector, giving you more bang for your buck.
    Tide PODS pacs are small but powerful with an innovative, three chamber design separating key ingredients until they hit the wash for maximum cleaning power. More than just a liquid in a pouch, these reformulated laundry pacs reveal Tide's brightest clean yet.
    Its special film enables the multi-chamber technology to dissolve in both hot & cold water. Tide PODS are formulated with quick collapsing Smart SudsTM. It targets tough stains and works in both HE and standard washing machines.
    For superior performance, place 2 Tide PODS pacs into the washing machine drum before you add clothes for large loads. For smaller loads, use 1 laundry pac.",
    product_detail: "Product Dimensions   :  4.49 x 8.74 x 10.63 inches; 4.6 Pounds
    Date First Available   :   March 20, 2019
    Manufacturer Procter & Gamble   :   Pampers
    ASIN   :   B07NW4Q8MLU
    Country of Origin   :   USA"},

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
    Item model number   :	6102215'},

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
    Manufacturer recommended age   :   7 - 11 years'},
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
    Manufacturer recommended age   :   6 years and up'},

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
    ASIN   :   B00000IZKX' },

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
    ASIN  :  B082WQRPDH'},

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
    ASIN  :  B00MW8G62E'},

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
    ASIN  :  B00CHSVYWG' },

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
    Item Package Quantity	:   1'},

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
    ASIN  :  B00G5M75UK'},

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
    ASIN :  B09F1RL18S'},

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
    Item model number   :   BL10US'},

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
    ASIN  :  B07ZK3DZB3'},

#     {name: , price: ,category: ,
#     body: ,
#     description:  ,
#     product_detail: }
# }

#     {name: , price: ,category: ,
#     body: ,
#     description:  ,
#     product_detail: }
# }
])

Review.create([
    {user_id: 1, product_id: 7, rating: 5, headline: 'A great snack for tiktok start', body: 'Who needs food when you can just eat tide pods!'}
])