/**
 * SERKAN VİDANJÖR - JavaScript, Çoklu Dil (TR/EN) & Koyu/Açık Tema Desteği
 */

// Çoklu Dil Sözlüğü (TR / EN)
const i18n = {
  tr: {
    // Üst Bar & Header
    topbar_duty: "7/24 Nöbetçi Vidanjör Ekibi Aktif",
    topbar_region: "Tüm İstanbul Avrupa Yakası (15-30 Dk)",
    nav_home: "Anasayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetlerimiz",
    nav_regions: "Hizmet Bölgelerimiz",
    nav_fleet: "Filomuz",
    nav_faq: "SSS",
    nav_contact: "İletişim",
    btn_emergency_call: "7/24 ACİL VİDANJÖR",
    btn_emergency_call_num: "HEMEN ARA: +90 532 772 22 93",
    btn_whatsapp_location: "WHATSAPP İLE KONUM GÖNDER",

    // Hero Alanı
    hero_badge: "7/24 KESİNTİSİZ ACİL VİDANJÖR HİZMETİ",
    hero_h1: "İstanbul Avrupa Yakası 7/24 Vidanjör Hizmeti",
    hero_title_1: "İstanbul Avrupa Yakası",
    hero_title_2: "7/24 Acil Vidanjör",
    hero_title_3: "Hizmeti",
    hero_desc: "Tıkanıklık açma, foseptik çekimi, otopark vidanjörü, kuka ve atık su tahliyesinde son teknoloji araçlarımızla <strong class='text-white font-bold underline decoration-[#DCE8F2]'>15-30 dakikada</strong> kapınızdayız!",
    hero_btn_call_tag: "7/24 Vidanjör Hattı",
    hero_btn_wa_tag: "Canlı Destek (7/24)",
    hero_btn_wa_title: "Vidanjör Talebi",
    hero_trust_1: "15 Dk. Varış",
    hero_trust_2: "Mini & Büyük Araç",
    hero_trust_3: "Faturalı Kurumsal",
    hero_trust_4: "Kırmadan Çözüm",

    // Acil Çağrı Şeridi
    banner_title: "Su Baskını veya Tıkanıklık mı Yaşıyorsunuz?",
    banner_desc: "Avrupa Yakası genelinde nöbetçi vidanjör araçlarımız hemen adresinize yönlendirilir!",
    banner_btn: "ACİL VİDANJÖR ÇAĞIR: +90 532 772 22 93",

    // Hakkımızda
    about_tag: "Hakkımızda",
    about_title: "İstanbul Avrupa Yakası’nın Güvenilir Altyapı ve Vidanjör Çözüm Ortağı",
    about_badge_title: "Kesintisiz<br>Hizmet",
    about_p1: "<strong class='text-[#0B1F33] dark:text-white'>SERKAN VİDANJÖR</strong>, modern araç filosu, dar sokaklara ve kapalı otoparklara özel düşük tavanlı mini vidanjörleri, yüksek vakum gücüne sahip büyük vidanjörleri ve tecrübeli uzman personeliyle İstanbul Avrupa Yakası'nın 25 ilçesinde 7 gün 24 saat kesintisiz hizmet vermektedir.",
    about_p2: "Kanalizasyon açma, foseptik çekimi, logar temizliği, yağmur suyu tahliyesi ve bina içi pimaş/gider tıkanıklıklarında son teknoloji kameralı ve helezonlu makinelerle kırmadan dökmeden kalıcı çözümler üretiyoruz.",
    about_feat1_title: "15-30 Dk. Hızlı Müdahale",
    about_feat1_desc: "Her ilçede hazır nöbetçi araçlarımız anında sevk edilir.",
    about_feat2_title: "Otopark & Dar Sokak",
    about_feat2_desc: "Kapalı otoparklara ve dar sokaklara özel mini vidanjör filosu.",
    about_feat3_title: "Faturalı & Kurumsal",
    about_feat3_desc: "Site yönetimleri, fabrikalar ve bireysel mülklere garantili servis.",
    about_feat4_title: "Kameralı ve Kırmadan",
    about_feat4_desc: "Gelişmiş robotik ekipmanlarla kırmadan nokta atışı tespit.",
    about_btn_info: "Hemen Bilgi & Fiyat Alın",
    about_btn_regions: "Hizmet Bölgelerimizi Görün",

    // Hizmetler
    services_tag: "Profesyonel Hizmet Yelpazesi",
    services_title: "Vidanjör Hizmetlerimiz",
    services_title_accent: "",
    services_desc: "İstanbul genelinde vidanjör hizmeti, hızlı ve güvenilir çözümler, 7/24 destek! İhtiyacınıza uygun aracı seçin.",
    tab_all: "Tüm Hizmetlerimiz (20)",
    tab_trucks: "Vidanjör Araç Filosu (8)",
    tab_blockage: "Tıkanıklık & Tahliye (12)",

    // Hizmet Kartları
    srv1_title: "KİRALIK VİDANJÖR",
    srv1_desc: "Günlük, haftalık, aylık veya proje bazlı kiralık vidanjör çözümleri. Şantiye, fabrika ve inşaat altyapı çalışmalarına uygun.",
    srv1_badge: "Operatörlü / Operatörsüz",
    srv1_action: "Kirala",

    srv2_title: "VİDANJÖR HİZMETİ",
    srv2_desc: "İstanbul Avrupa Yakası geneli yüksek emiş gücüne sahip araçlarımızla profesyonel, temiz ve çevreye duyarlı vidanjör desteği.",
    srv2_badge: "7/24 Kesintisiz",
    srv2_action: "Talep Et",

    srv3_title: "EN YAKIN VİDANJÖR",
    srv3_desc: "Bulunduğunuz ilçede devriye gezen en yakın nöbetçi vidanjör aracımızı GPS ile tespit edip 15 dakikada adresinize yönlendiriyoruz.",
    srv3_badge: "15 Dk Adreste",
    srv3_action: "Çağır",

    srv4_title: "ACİL VİDANJÖR",
    srv4_desc: "Gece, gündüz, bayram fark etmeksizin acil taşma, patlama ve su baskınlarında öncelikli acil müdahale hizmeti.",
    srv4_badge: "Öncelikli Hat",
    srv4_action: "Hemen Ara",

    srv5_title: "MİNİ VİDANJÖR",
    srv5_desc: "Büyük vidanjörlerin giremediği dar sokaklar, tarihi mahalleler ve dar girişli yapılar için kompakt ve güçlü mini vidanjör filosu.",
    srv5_badge: "Dar Sokaklara Uygun",
    srv5_action: "Detay",

    srv6_title: "OTOPARK VİDANJÖRÜ",
    srv6_desc: "AVM, rezidans ve sitelerin 1.80m - 2.20m tavan yüksekliğine sahip kapalı otoparklarına rahatlıkla giren özel alçak tavan vidanjörler.",
    srv6_badge: "Kapalı Alan Çözümü",
    srv6_action: "Detay",

    srv7_title: "KUKA VİDANJÖR",
    srv7_desc: "Yüksek basınçlı su jeti ile ana hat borularındaki donmuş yağ, beton kalıntısı, taş ve çamurları parçalayarak temizleyen kombine kuka.",
    srv7_badge: "150-250 Bar Basınç",
    srv7_action: "Detay",

    srv8_title: "BÜYÜK VİDANJÖR",
    srv8_desc: "15 - 30 ton tank kapasiteli ağır hizmet vidanjörleri. Büyük fabrika havuzları, sanayi atıkları ve toplu konut foseptik tahliyeleri.",
    srv8_badge: "Sanayi & Ağır İş",
    srv8_action: "Detay",

    srv9_title: "VİDANJÖR İLE TIKANIKLIK AÇMA",
    srv9_desc: "Bina ana hatlarında meydana gelen inatçı tıkanıklıkların güçlü vakum ve tazyikli su jetiyle açılması işlemi.",
    srv10_title: "ÖZEL VİDANJÖR",
    srv10_desc: "Özel endüstriyel tesisler, kimyasal arıtma çamurları ve özel donanım gerektiren saha operasyonlarına özel vidanjör.",
    srv11_title: "YAĞMUR SUYU ÇEKİMİ",
    srv11_desc: "Şiddetli yağışlar sonrası bodrum katlar, asansör boşlukları, garaj ve şantiyelerde biriken yağmur sularının hızla tahliyesi.",
    srv12_title: "FOSEPTİK KUYUSU TEMİZLİĞİ",
    srv12_desc: "Kanalizasyon hattı bulunmayan müstakil villalar, şantiyeler ve tesislerdeki foseptik kuyularının periyodik temizlenmesi.",
    srv13_title: "ATIK SU ÇEKİMİ",
    srv13_desc: "Fabrika, oto yıkama, yemekhane ve sanayi tesislerinin fosseptik ve atık su havuzlarındaki sıvıların yasal bertaraf merkezine nakli.",
    srv14_title: "LOGAR / RÖGAR AÇMA",
    srv14_desc: "Sokak, bahçe ve site logarlarında taşmaya sebep olan pislik, kum ve yabancı maddelerin güçlü vakumla çekilerek açılması.",
    srv15_title: "FOSEPTİK ÇUKURU TEMİZLEME",
    srv15_desc: "Dipte katılaşan balçık ve katı atık tabakasının basınçlı suyla çürütülüp vidanjörle vakumlanarak çukurun ilk günkü kapasitesine kavuşması.",
    srv16_title: "KANAL AÇMA VE TEMİZLİĞİ",
    srv16_desc: "Belediye ve özel mülk ana kanal hatlarındaki birikintilerin kuka basınçlı yıkama ve vakum kombinasyonuyla temizlenmesi.",
    srv17_title: "GİDER TIKANIKLIĞI AÇMA",
    srv17_desc: "Banyo, süzgeç, teras ve balkon zemin giderlerinde biriken saç, inşaat harcı ve yağ kalıntılarının robot spiral telle açılması.",
    srv18_title: "LAVABO TIKANIKLIĞI AÇMA",
    srv18_desc: "Mutfak ve el yıkama lavabolarında yağ donması ve yemek artıklarından kaynaklanan geri basmaların profesyonelce giderilmesi.",
    srv19_title: "KANALİZASYON AÇMA",
    srv19_desc: "Ana cadde veya bina bağlantı kanalizasyon borularındaki çökme, kök sarma ve ağır tıkanıklıkların kuka ve vidanjörle bertarafı.",
    srv20_title: "KLOZET TIKANIKLIĞI AÇMA",
    srv20_desc: "Klozet ve alaturka tuvalet taşmalarında seramiği çizmeden ve kırmadan özel helezon uçlu RIDGID makinelerle dakikalar içinde açma.",

    service_call_card_title: "Hangi Hizmete İhtiyacınız Olduğundan Emin Değil misiniz?",
    service_call_card_desc: "Uzman operatörümüzle görüşün, probleminize en uygun vidanjör ve ekipmanı dakikalar içinde yönlendirelim.",

    // Hizmet Bölgeleri
    regions_tag: "İstanbul Avrupa Yakası Tam Kapsama",
    regions_title: "İstanbul Avrupa Yakası Hizmet Bölgelerimiz",
    regions_title_accent: "",
    regions_desc: "İstanbul Avrupa Yakası'nın tüm 25 ilçesinde hazır nöbetçi vidanjör filomuzla 15-30 dakikada adrese servis sunuyoruz.",
    district_search_placeholder: "İlçenizi yazın (Örn: Avcılar, Esenyurt, Sarıyer...)",

    
    // SSS (FAQ)
    faq_tag: "Merak Edilenler",
    faq_title: "Sıkça Sorulan Sorular",
    faq_desc: "İstanbul Avrupa Yakası vidanjör, tıkanıklık açma ve altyapı hizmetlerimiz hakkında en sık sorulan soruların yanıtları.",
    // Filomuz
    fleet_tag: "Donanımlı Filo",
    fleet_title: "ARAÇ FİLOMUZ &",
    fleet_title_accent: "SAHA ÇALIŞMALARIMIZ",
    fleet_desc: "Her türlü tıkanıklık ve tahliye ihtiyacına özel donanımlı araçlarımız ve profesyonel ekipmanlarımız.",
    fleet_btn_request: "Araç Talep Et: +90 532 772 22 93",

    // İletişim & Form
    contact_tag: "İletişim & Destek",
    contact_title: "7/24 Kesintisiz Vidanjör Çağrı Hattı",
    contact_desc: "Sorun veya acil durum ne olursa olsun bize 7 gün 24 saat telefon veya WhatsApp üzerinden ulaşabilir, en yakın vidanjör ekibimizi talep edebilirsiniz.",
    contact_box_phone_tag: "7/24 Doğrudan Telefon",
    contact_box_wa_tag: "WhatsApp Canlı Destek & Konum",
    contact_box_mail_tag: "E-Posta Adresimiz",
    contact_box_zone_tag: "Operasyon Bölgesi",
    contact_box_zone_val: "Tüm İstanbul Avrupa Yakası (25 İlçe)",
    contact_guarantee_title: "Hızlı Müdahale Garantisi:",
    contact_guarantee_desc: "Çağrınız alındıktan sonra bulunduğunuz bölgedeki en yakın mobil ekip derhal adrese sevk edilir.",

    form_title: "Hızlı Vidanjör Talebi & Fiyat İsteği",
    form_desc: "Formu doldurun, operatörümüz 1-2 dakika içinde sizi geri arasın veya doğrudan WhatsApp üzerinden bağlanın.",
    form_label_name: "Adınız Soyadınız *",
    form_placeholder_name: "Örn: Ahmet Yılmaz",
    form_label_phone: "Telefon Numaranız *",
    form_placeholder_phone: "05XX XXX XX XX",
    form_label_district: "Hizmet İstediğiniz İlçe *",
    form_label_service: "Hizmet Türü",
    form_label_notes: "Adres veya Sorun Özeti (İsteğe Bağlı)",
    form_placeholder_notes: "Örn: Bodrum katımızı su bastı, acil çekim gerekiyor / Lavabo borusu tıkandı...",
    form_submit_btn: "HIZLI SERVİS TALEBİ GÖNDER",
    form_call_alternative: "Veya beklemeksizin hemen arayın:",

    // Footer
    footer_summary: "İstanbul genelinde, kanalizasyon sorunlarınızı, tıkanıklık açma ve atık su tahliyesi işlemlerinizi hızlıca çözüme kavuşturuyoruz.",
    footer_desc: "Vidanjör Hizmeti İstanbul olarak, İstanbul'un her köşesinde altyapı sorunlarınızı hızlı ve etkili şekilde çözüyoruz. Deneyimli ekibimiz ve son teknoloji ekipmanlarımızla, kanal tıkanıklığı, foseptik temizliği ve sıvı atık tahliyesi gibi işlemleri 7/24 profesyonel bir şekilde gerçekleştiriyoruz.",
    footer_btn_regions: "HİZMET BÖLGELERİMİZ",
    footer_menu_title: "Menü",
    footer_services_title: "Hizmetlerimiz",
    footer_contact_title: "İletişim Bilgisi",
    footer_hours: "7 Gün 24 Saat Açık (Nöbetçi Vidanjör)",
    footer_copyright: "© 2026 SERKAN VİDANJÖR. Tüm Hakları Saklıdır.",
    footer_subtag: "7/24 İstanbul Avrupa Yakası Vidanjör & Kanal Açma Hizmetleri",
    footer_districts_header: "İstanbul Avrupa Yakası İlçe Vidanjör Ağımız:"
  },

  en: {
    // Top Bar & Header
    topbar_duty: "24/7 On-Duty Vacuum Truck Active",
    topbar_region: "All Istanbul European Side (15-30 Min)",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_regions: "Service Areas",
    nav_fleet: "Our Fleet",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_emergency_call: "24/7 EMERGENCY VACUUM",
    btn_emergency_call_num: "CALL NOW: +90 532 772 22 93",
    btn_whatsapp_location: "SEND LOCATION VIA WHATSAPP",

    // Hero Area
    hero_badge: "24/7 NON-STOP EMERGENCY VACUUM SERVICE",
    hero_h1: "Istanbul European Side 24/7 Vacuum Truck Service",
    hero_title_1: "Istanbul European Side",
    hero_title_2: "24/7 Emergency Vacuum",
    hero_title_3: "Truck Service",
    hero_desc: "We are at your door in <strong class='text-white font-bold underline decoration-[#DCE8F2]'>15-30 minutes</strong> with our state-of-the-art fleet for drain unblocking, septic pumping, parking vacuum, and wastewater disposal!",
    hero_btn_call_tag: "24/7 Emergency Line",
    hero_btn_wa_tag: "Live Support (24/7)",
    hero_btn_wa_title: "Vacuum Request",
    hero_trust_1: "15 Min Arrival",
    hero_trust_2: "Mini & Heavy Fleet",
    hero_trust_3: "Corporate Invoiced",
    hero_trust_4: "No-Damage Solution",

    // Emergency Banner
    banner_title: "Experiencing Water Flood or Drain Blockage?",
    banner_desc: "Our on-duty vacuum trucks across the European Side are dispatched to your address immediately!",
    banner_btn: "CALL EMERGENCY VACUUM: +90 532 772 22 93",

    // About Us
    about_tag: "About Us",
    about_title: "Trusted Infrastructure & Vacuum Truck Partner in Istanbul European Side",
    about_badge_title: "24/7 Non-Stop<br>Service",
    about_p1: "<strong class='text-[#0B1F33] dark:text-white'>SERKAN VİDANJÖR</strong> provides 24/7 non-stop vacuum truck services across all 25 districts of the Istanbul European Side with its modern vehicle fleet, low-ceiling mini vacuum trucks for narrow alleys and underground garages, and experienced technicians.",
    about_p2: "We offer permanent solutions without breaking tiles or walls using robotic spiral machinery and high-pressure jetting for sewer unblocking, septic pumping, manhole cleaning, and rain flood drainage.",
    about_feat1_title: "15-30 Min Rapid Response",
    about_feat1_desc: "Our on-duty patrol vehicles in each district are dispatched instantly.",
    about_feat2_title: "Parking & Narrow Streets",
    about_feat2_desc: "Custom low-profile mini vacuum trucks for covered garages and tight alleys.",
    about_feat3_title: "Corporate & Invoiced",
    about_feat3_desc: "Guaranteed service for site managements, factories, and residential buildings.",
    about_feat4_title: "Camera & No-Damage",
    about_feat4_desc: "Precision pinpoint diagnostics with robotic camera equipment.",
    about_btn_info: "Get Quote & Info",
    about_btn_regions: "View Service Areas",

    // Services
    services_tag: "Professional Service Range",
    services_title: "Our Vacuum Truck Services",
    services_title_accent: "",
    services_desc: "Vacuum truck services across Istanbul, fast and reliable solutions, 24/7 support! Choose the right vehicle for your needs.",
    tab_all: "All Services (20)",
    tab_trucks: "Vacuum Truck Fleet (8)",
    tab_blockage: "Unblocking & Disposal (12)",

    // Service Cards
    srv1_title: "RENTAL VACUUM TRUCK",
    srv1_desc: "Daily, weekly, monthly or project-based vacuum truck rental. Suitable for construction sites, factories and infrastructure work.",
    srv1_badge: "With / Without Operator",
    srv1_action: "Rent",

    srv2_title: "VACUUM TRUCK SERVICE",
    srv2_desc: "Professional, clean and eco-friendly vacuum suction assistance with high-power equipment across Istanbul European Side.",
    srv2_badge: "24/7 Non-Stop",
    srv2_action: "Request",

    srv3_title: "NEAREST VACUUM TRUCK",
    srv3_desc: "We locate our nearest on-duty patrol vehicle via GPS in your district and dispatch it to your location within 15 minutes.",
    srv3_badge: "15 Min At Door",
    srv3_action: "Call",

    srv4_title: "EMERGENCY VACUUM",
    srv4_desc: "Priority emergency dispatch service for urgent overflows, pipe bursts and flood incidents day or night.",
    srv4_badge: "Priority Hotline",
    srv4_action: "Call Now",

    srv5_title: "MINI VACUUM TRUCK",
    srv5_desc: "Compact and powerful mini vacuum fleet designed for narrow streets, historic neighborhoods and tight access paths.",
    srv5_badge: "Narrow Alley Access",
    srv5_action: "Details",

    srv6_title: "PARKING GARAGE VACUUM",
    srv6_desc: "Special low-clearance trucks designed for underground residential and shopping mall parking with 1.80m - 2.20m ceiling height.",
    srv6_badge: "Low-Ceiling Solution",
    srv6_action: "Details",

    srv7_title: "HIGH-PRESSURE JETTING (KUKA)",
    srv7_desc: "High-pressure water jetting kombi system to crush and flush out hardened grease, concrete debris, rocks and sludge in main pipes.",
    srv7_badge: "150-250 Bar Pressure",
    srv7_action: "Details",

    srv8_title: "HEAVY VACUUM TRUCK",
    srv8_desc: "15 - 30 ton tank capacity heavy duty vacuum trucks for industrial factories, industrial waste and large residential septic tanks.",
    srv8_badge: "Heavy Duty & Industry",
    srv8_action: "Details",

    srv9_title: "DRAIN UNBLOCKING WITH VACUUM",
    srv9_desc: "Powerful suction and pressurized jetting to open stubborn blockages in residential and building main drainage lines.",
    srv10_title: "SPECIALIZED HAZMAT VACUUM",
    srv10_desc: "Dedicated vacuum solutions for industrial plants, chemical treatment sludge and specialized hazardous site operations.",
    srv11_title: "RAINWATER FLOOD SUCTION",
    srv11_desc: "Rapid evacuation of rainwater accumulation in basements, elevator shafts, underground garages and construction sites.",
    srv12_title: "SEPTIC TANK CLEANING",
    srv12_desc: "Periodic pumping and cleaning of septic wells in private villas, construction sites and facilities without municipal sewage connection.",
    srv13_title: "WASTEWATER REMOVAL",
    srv13_desc: "Safe transport and certified disposal of wastewater and liquid waste from factories, car washes and industrial facilities.",
    srv14_title: "MANHOLE CLEANING & OPENING",
    srv14_desc: "Suction of debris, sand, stones and foreign objects causing overflows in street, garden and residential manholes.",
    srv15_title: "SEPTIC PIT DESLUDGING",
    srv15_desc: "Breaking down bottom sludge with high-pressure water and suctioning to restore septic pits to their original full capacity.",
    srv16_title: "SEWER FLUSHING & CLEANING",
    srv16_desc: "Comprehensive cleaning of municipal and private main sewer lines using high-pressure jetting and vacuum suction.",
    srv17_title: "FLOOR DRAIN UNBLOCKING",
    srv17_desc: "Electromechanical spiral spring cleaning for bathroom floor drains, balconies and terraces blocked by hair, grease or mortar.",
    srv18_title: "SINK DRAIN UNBLOCKING",
    srv18_desc: "Professional clearing of kitchen and bathroom sink drain lines clogged by solidified cooking oil and food particles.",
    srv19_title: "SEWER MAIN LINE OPENING",
    srv19_desc: "Clearing major sewer blockages, root intrusions and collapses using heavy-duty jetting and vacuum equipment.",
    srv20_title: "TOILET DRAIN UNBLOCKING",
    srv20_desc: "Fast clearing of clogged toilets and commodes using RIDGID spiral tools without scratching porcelain or breaking tiles.",

    service_call_card_title: "Not Sure Which Service You Need?",
    service_call_card_desc: "Speak with our expert dispatcher; we will direct the most suitable vacuum truck and equipment to you in minutes.",

    // Service Areas
    regions_tag: "Full European Side Coverage",
    regions_title: "Our Service Areas in Istanbul European Side",
    regions_title_accent: "",
    regions_desc: "We provide 15-30 minute dispatch across all 25 districts of the Istanbul European Side with our ready fleet.",
    district_search_placeholder: "Type your district (e.g. Avcılar, Esenyurt, Sarıyer...)",

    // Fleet
    fleet_tag: "Equipped Fleet",
    fleet_title: "OUR FLEET &",
    fleet_title_accent: "FIELD OPERATIONS",
    fleet_desc: "Specialized vehicles and professional machinery equipped for all types of suction, drainage and blockage challenges.",
    fleet_btn_request: "Request Vehicle: +90 532 772 22 93",

    // Contact & Form
    contact_tag: "Contact & Support",
    contact_title: "24/7 Continuous Vacuum Dispatch Line",
    contact_desc: "Whatever the emergency, you can reach us 24/7 via phone or WhatsApp to request our nearest vacuum crew.",
    contact_box_phone_tag: "24/7 Direct Phone",
    contact_box_wa_tag: "WhatsApp Live Support & Location",
    contact_box_mail_tag: "Our Email Address",
    contact_box_zone_tag: "Operational Zone",
    contact_box_zone_val: "All Istanbul European Side (25 Districts)",
    contact_guarantee_title: "Rapid Response Guarantee:",
    contact_guarantee_desc: "As soon as your call is logged, the nearest mobile crew in your district is dispatched immediately.",

    form_title: "Fast Vacuum Request & Price Quote",
    form_desc: "Fill in the form, our operator will call you back in 1-2 minutes, or connect directly via WhatsApp.",
    form_label_name: "Full Name *",
    form_placeholder_name: "e.g. John Doe",
    form_label_phone: "Phone Number *",
    form_placeholder_phone: "+90 5XX XXX XX XX",
    form_label_district: "Select District *",
    form_label_service: "Service Type",
    form_label_notes: "Address or Problem Summary (Optional)",
    form_placeholder_notes: "e.g. Basement flooded, urgent water pumping needed...",
    form_submit_btn: "SEND FAST SERVICE REQUEST",
    form_call_alternative: "Or call immediately without waiting:",

    // Footer
    footer_summary: "We quickly resolve sewer problems, drain blockages, and wastewater disposal across Istanbul.",
    footer_desc: "As Serkan Vidanjör Istanbul, we solve infrastructure problems in every corner of the city quickly and effectively. With our experienced team and high-tech equipment, we perform operations 24/7 professionally.",
    footer_btn_regions: "SERVICE AREAS",
    footer_menu_title: "Menu",
    footer_services_title: "Services",
    footer_contact_title: "Contact Info",
    footer_hours: "24/7 Open (On-Duty Vacuum Trucks)",
    footer_copyright: "© 2026 SERKAN VİDANJÖR. All Rights Reserved.",
    footer_subtag: "24/7 Istanbul European Side Vacuum & Drain Services",
    footer_districts_header: "Our Istanbul European Side District Network:"
  }
};

let currentLang = 'tr';

function applyLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('serkan_lang', lang);

  // Metin içeriklerini güncelle
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Placeholder içeriklerini güncelle
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Buton rozetlerini güncelle
  const langLabels = document.querySelectorAll('.lang-label-text');
  langLabels.forEach(lbl => {
    lbl.textContent = lang.toUpperCase();
  });

  const langFlags = document.querySelectorAll('.lang-flag-icon');
  langFlags.forEach(flag => {
    flag.textContent = lang === 'tr' ? '🇹🇷' : '🇬🇧';
  });
}

function toggleLanguage() {
  const targetLang = currentLang === 'tr' ? 'en' : 'tr';
  applyLanguage(targetLang);
}

// Tema Değiştirme (Koyu / Açık)
function applyTheme(isDark) {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
    localStorage.setItem('serkan_theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('serkan_theme', 'light');
  }

  // İkonları güncelle (Güneş / Ay)
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    if (isDark) {
      icon.className = 'fa-solid fa-sun text-[#DCE8F2] text-lg theme-toggle-icon';
    } else {
      icon.className = 'fa-solid fa-moon text-[#DCE8F2] text-lg theme-toggle-icon';
    }
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(!isDark);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Kaydedilmiş Dil & Tema Tercihlerini Yükle
  const savedLang = localStorage.getItem('serkan_lang') || 'tr';
  applyLanguage(savedLang);

  const savedTheme = localStorage.getItem('serkan_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  // Dil ve Tema Buton Dinleyicileri
  const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // 2. Mobil Menü Aç/Kapat
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });

    const closeMenu = () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMenu);
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 3. Scroll to Top Butonu
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn?.classList.add('show');
    } else {
      scrollTopBtn?.classList.remove('show');
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 4. İlçe Arama / Filtreleme (İstanbul Avrupa Yakası)
  const districtSearch = document.getElementById('districtSearch');
  const districtItems = document.querySelectorAll('.district-item');
  const noDistrictFound = document.getElementById('noDistrictFound');

  if (districtSearch) {
    districtSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLocaleLowerCase('tr-TR').trim();
      let matchCount = 0;

      districtItems.forEach(item => {
        const districtName = item.getAttribute('data-district')?.toLocaleLowerCase('tr-TR') || item.textContent.toLocaleLowerCase('tr-TR');
        if (districtName.includes(query)) {
          item.classList.remove('hidden');
          matchCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      if (noDistrictFound) {
        if (matchCount === 0) {
          noDistrictFound.classList.remove('hidden');
        } else {
          noDistrictFound.classList.add('hidden');
        }
      }
    });
  }

  // 5. Hizmet Sekmeleri Filtresi (Tümü / Araçlar & Vidanjör / Tıkanıklık & Temizlik)
  const filterTabs = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-filter-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('bg-[#0B1F33]', 'text-white', 'shadow-md', 'border-[#0B1F33]');
        t.classList.add('bg-white', 'text-[#0B1F33]', 'hover:bg-[#F4F7FA]', 'border-[#DCE8F2]');
      });

      tab.classList.remove('bg-white', 'text-[#0B1F33]', 'hover:bg-[#F4F7FA]', 'border-[#DCE8F2]');
      tab.classList.add('bg-[#0B1F33]', 'text-white', 'shadow-md', 'border-[#0B1F33]');

      const filterCategory = tab.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 6. Hızlı Servis / Çağrı Formu Gönderimi (Micro-loading state, Accessibility & Feedback)
  const emergencyForm = document.getElementById('emergencyForm');
  const formSuccessModal = document.getElementById('formSuccessModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  if (emergencyForm) {
    emergencyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName')?.value || '';
      const phone = document.getElementById('formPhone')?.value || '';
      const district = document.getElementById('formDistrict')?.value || '';
      const service = document.getElementById('formService')?.value || '';
      const notes = document.getElementById('formNotes')?.value || '';

      // Mikro yükleme durumu (Loading State)
      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        const originalText = formSubmitBtn.innerHTML;
        const loadingText = currentLang === 'tr' 
          ? '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Talebiniz İletiliyor...</span>' 
          : '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Submitting Request...</span>';
        formSubmitBtn.innerHTML = loadingText;
        formSubmitBtn.classList.add('opacity-80', 'cursor-not-allowed');

        setTimeout(() => {
          formSubmitBtn.disabled = false;
          formSubmitBtn.innerHTML = originalText;
          formSubmitBtn.classList.remove('opacity-80', 'cursor-not-allowed');

          const waMessage = encodeURIComponent(
            `Merhaba Serkan Vidanjör,\n\n*Hizmet Talebi:*\n👤 Ad Soyad: ${name}\n📞 Telefon: ${phone}\n📍 İlçe / Bölge: ${district}\n🛠️ Hizmet: ${service}\n📝 Detay: ${notes}\n\nAcil vidanjör desteği rica ediyorum.`
          );
          const waUrl = `https://wa.me/905327722293?text=${waMessage}`;

          if (formSuccessModal) {
            formSuccessModal.classList.remove('hidden');
            const waLinkBtn = document.getElementById('modalWaBtn');
            if (waLinkBtn) {
              waLinkBtn.href = waUrl;
              waLinkBtn.focus();
            }
          }

          emergencyForm.reset();

          // Acil çağrı: Kullanıcı talebini anında WhatsApp hattına ilet
          try {
            window.location.href = waUrl;
          } catch (err) {
            console.log('Redirect fallback to modal:', err);
          }
        }, 400);
      }
    });
  }

  const hideModal = () => {
    if (formSuccessModal) {
      formSuccessModal.classList.add('hidden');
    }
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideModal);
  }

  // Modal dışına tıklandığında ve Escape tuşuna basıldığında kapat (Nielsen #3 - User Control)
  if (formSuccessModal) {
    formSuccessModal.addEventListener('click', (e) => {
      if (e.target === formSuccessModal) {
        hideModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formSuccessModal && !formSuccessModal.classList.contains('hidden')) {
      hideModal();
    }
  });
});
