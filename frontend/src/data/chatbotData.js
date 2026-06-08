
const chatbotData = {
  root: {
    question:
      "🌟 Welcome to Airline Support Hub!\n\nI'm your virtual assistant. How can I help you today?",
    options: [
      { label: "🏢 About Our Company", nextNode: "about_company" },
      { label: "🛠️ Our Services", nextNode: "services_menu" },
      { label: "📞 Contact & Support", nextNode: "contact_info" },
      { label: "❓ FAQ & Help", nextNode: "faq_menu" },
      { label: "📍 Find Us / Offices", nextNode: "locations" },
      { label: "💼 Careers / Jobs", nextNode: "careers" },
    ],
  },

  about_company: {
    answer:
      "🏢 **About Our Company**\n\n✈️ **FlyStack (Pvt) Ltd**\n\n📅 **Founded:** 2026\n📍 **Headquarters:** Colombo, Sri Lanka\n👥 **Employees:** 500+\n🌍 **Coverage:** Global operations\n\n**Our Mission:**\nProviding exceptional aviation support services worldwide.\n\n**Our Vision:**\nTo be the most trusted aviation support partner globally.\n\n**Core Values:**\n• Customer First\n• Innovation\n• Integrity\n• Excellence\n\nWould you like to know more?",
    options: [
      { label: "📊 Our Statistics", nextNode: "statistics" },
      { label: "🏆 Awards & Recognition", nextNode: "awards" },
      { label: "◀️ Back to Main Menu", nextNode: "root" },
    ],
  },

  statistics: {
    answer:
      "📊 **Company Statistics**\n\n✅ **10,000+** Flights supported annually\n✅ **1M+** Happy customers\n✅ **50+** Airline partners\n✅ **98%** Customer satisfaction rate\n✅ **24/7** Customer support\n✅ **15 min** Average response time\n\n**Service Coverage:**\n• 30+ countries\n• 100+ airports\n• 24/7 operations\n\nNeed specific information?",
    options: [
      { label: "◀️ Back to About", nextNode: "about_company" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  awards: {
    answer:
      "🏆 **Awards & Recognition**\n\n2023 - Best Airline Support Service (Asia)\n2022 - Customer Excellence Award\n2021 - Innovation in Aviation Support\n2020 - Best Employer in Aviation Sector\n2019 - Fastest Growing Support Company\n\n**Certifications:**\n✓ ISO 9001:2022 Certified\n✓ IATA Accredited Partner\n✓ Safety Management System Certified\n\nWe take pride in our excellence!",
    options: [
      { label: "◀️ Back to About", nextNode: "about_company" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

services_menu: {
  question:
    "🛠️ **Our Services**\n\nSelect a service category to learn more:",
  options: [
    { label: "✈️ Flight Booking" },
    { label: "🧳 Online Check-in" },
    { label: "📦 Cargo Booking" },
    { label: "📊 Revenue Manager" },
    { label: "🖥️ Operations Dashboard" },
    { label: "🚨 Flight Alerts" },
    { label: "👨‍✈️ Crew Scheduler" },
    { label: "📍 Shipment Tracker" },
    { label: "🛡️ Travel Insurance" },
    { label: "🏠 Back to Main Menu", nextNode: "root" },
  ],
},

  flight_support: {
    answer:
      "✈️ **Flight Support Services**\n\nWe provide comprehensive flight support:\n\n✅ **Real-time Flight Tracking**\n• Live status updates\n• Delay notifications\n• Gate change alerts\n\n✅ **Schedule Management**\n• Route planning\n• Time slot optimization\n\n✅ **Operational Support**\n• 24/7 monitoring\n• Emergency assistance\n• Weather updates\n\n✅ **Documentation**\n• Flight permits\n• Overflight clearances\n\nNeed specific support?",
    options: [
      { label: "📞 Request Support", nextNode: "contact_info" },
      { label: "◀️ Back to Services", nextNode: "services_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  baggage_services: {
    answer:
      "🧳 **Baggage Services**\n\nOur baggage handling solutions:\n\n✅ **Tracking System**\n• Real-time baggage tracking\n• RFID technology\n• Mobile app integration\n\n✅ **Lost & Found**\n• 24/7 claims processing\n• Global tracking network\n• Fast resolution\n\n✅ **Delivery Services**\n• Door-to-door delivery\n• International shipping\n• Insurance options\n\n✅ **Special Items**\n• Sports equipment\n• Musical instruments\n• Medical equipment\n\nReport lost baggage or track your bags!",
    options: [
      { label: "🔍 Track My Bag", nextNode: "contact_info" },
      { label: "📞 Report Lost Baggage", nextNode: "contact_info" },
      { label: "◀️ Back to Services", nextNode: "services_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  crew_services: {
    answer:
      "👥 **Crew Management Services**\n\nComplete crew management solutions:\n\n✅ **Scheduling**\n• Automated rosters\n• Shift management\n• Leave tracking\n\n✅ **Training & Compliance**\n• Certification tracking\n• Training schedules\n• Compliance monitoring\n\n✅ **Accommodation**\n• Hotel booking\n• Transport arrangements\n• Layover management\n\n✅ **Payroll & Benefits**\n• Salary processing\n• Expense claims\n• Benefits management\n\nSupporting 1000+ crew members daily!",
    options: [
      { label: "◀️ Back to Services", nextNode: "services_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  cargo_services: {
    answer:
      "📦 **Cargo & Logistics Services**\n\nComprehensive cargo solutions:\n\n✅ **Air Freight**\n• Domestic & International\n• Express delivery\n• Temperature-controlled cargo\n\n✅ **Warehousing**\n• Secure storage\n• Inventory management\n• Customs clearance\n\n✅ **Tracking**\n• Real-time shipment tracking\n• Proof of delivery\n• Status notifications\n\n✅ **Special Cargo**\n• Dangerous goods\n• Perishables\n• Live animals\n• Valuable items\n\nTrusted by 500+ businesses worldwide!",
    options: [
      { label: "🔍 Track Shipment", nextNode: "contact_info" },
      { label: "📊 Get Quote", nextNode: "contact_info" },
      { label: "◀️ Back to Services", nextNode: "services_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  booking_services: {
    answer:
      "🔄 **Booking Management Services**\n\nWe help manage your bookings:\n\n✅ **Reservation Support**\n• New bookings\n• Modifications\n• Cancellations\n\n✅ **Group Bookings**\n• Corporate travel\n• Event groups\n• Special discounts\n\n✅ **Payment Support**\n• Multiple payment options\n• Installment plans\n• Refund processing\n\n✅ **Documentation**\n• E-tickets\n• Invoices\n• Travel insurance\n\nNeed help with an existing booking?",
    options: [
      { label: "📞 Contact Booking Support", nextNode: "contact_info" },
      { label: "◀️ Back to Services", nextNode: "services_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  // ========== FAQ MENU ==========
  faq_menu: {
    question: "❓ **Frequently Asked Questions**\n\nSelect a topic:",
    options: [
      { label: "🔧 Technical Issues", nextNode: "tech_support" },
      { label: "💰 Payments & Refunds", nextNode: "payment_faq" },
      { label: "🔐 Account Problems", nextNode: "account_faq" },
      { label: "📱 App/Website Issues", nextNode: "app_faq" },
      { label: "📞 General Questions", nextNode: "general_faq" },
      { label: "◀️ Back to Main Menu", nextNode: "root" },
    ],
  },

  tech_support: {
    answer:
      "🔧 **Technical Support**\n\nCommon issues & solutions:\n\n**Website not loading?**\n• Clear browser cache\n• Try different browser\n• Check internet connection\n• Update your browser\n\n**App crashing?**\n• Update to latest version\n• Clear app cache\n• Reinstall the app\n• Restart your device\n\n**Can't login?**\n• Reset your password\n• Check email/spam folder\n• Contact support\n\n**Still having issues?** Our technical team is ready to help!",
    options: [
      { label: "📞 Contact Technical Support", nextNode: "contact_info" },
      { label: "◀️ Back to FAQ", nextNode: "faq_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  payment_faq: {
    answer:
      "💰 **Payments & Refunds FAQ**\n\n**Payment Methods:**\n• Credit/Debit cards\n• Bank transfers\n• Digital wallets\n• Cash (select locations)\n\n**Refund Timeline:**\n• Credit card: 7-10 business days\n• Bank transfer: 10-14 business days\n• Digital wallet: 3-5 business days\n\n**Common Issues:**\n• Payment failed? Check card limits\n• Double charged? Contact support\n• Refund not received? Track status\n\n**Need immediate help?** Contact our payment team!",
    options: [
      { label: "📞 Payment Support", nextNode: "contact_info" },
      { label: "◀️ Back to FAQ", nextNode: "faq_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  account_faq: {
    answer:
      "🔐 **Account Issues FAQ**\n\n**Forgot Password?**\n1. Click 'Forgot Password'\n2. Enter registered email\n3. Check email for reset link\n4. Create new password\n\n**Account Locked?**\n• Too many failed attempts\n• Wait 15 minutes\n• Contact support to unlock\n\n**Update Information:**\n• Email: Can update in settings\n• Phone: Requires verification\n• Address: Instant update\n\n**Delete Account:**\n• Contact support\n• Verification required\n• 30-day cooling period\n\nNeed account assistance?",
    options: [
      { label: "📞 Account Support", nextNode: "contact_info" },
      { label: "◀️ Back to FAQ", nextNode: "faq_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  app_faq: {
    answer:
      "📱 **App & Website FAQ**\n\n**App Features:**\n• Real-time notifications\n• Easy booking\n• Digital boarding passes\n• Baggage tracking\n\n**Website Features:**\n• 24/7 access\n• Multiple language support\n• Accessibility options\n\n**Known Issues (Fixing):**\n• Push notifications delay\n• Login timeouts\n• Image loading\n\n**Latest Updates:**\n• Version 3.2.1 released\n• Bug fixes\n• Performance improvements\n\nUpdate your app for best experience!",
    options: [
      { label: "📱 Download App", nextNode: "contact_info" },
      { label: "◀️ Back to FAQ", nextNode: "faq_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  general_faq: {
    answer:
      "📞 **General Questions**\n\n**Operating Hours:**\n• Customer Support: 24/7\n• Technical Support: 24/7\n• Sales: Mon-Fri 9AM-6PM\n\n**Response Times:**\n• Email: Within 2 hours\n• Live Chat: Instant\n• Phone: < 5 minutes\n\n**Languages Supported:**\n• English\n• Sinhala\n• Tamil\n• Arabic\n• Hindi\n\n**Holiday Schedule:**\n24/7 support even on holidays!\n\nNeed more help? Contact us directly!",
    options: [
      { label: "📞 Contact Support", nextNode: "contact_info" },
      { label: "◀️ Back to FAQ", nextNode: "faq_menu" },
      { label: "🏠 Main Menu", nextNode: "root" },
    ],
  },

  // ========== LOCATIONS ==========
  locations: {
    answer:
      "📍 **Our Office Locations**\n\n**Headquarters:**\nColombo, Sri Lanka\n123 Airline Road\nColombo 01\n📞 +94 11 234 5678\n\n**Regional Offices:**\n\n🇦🇪 Dubai, UAE\nBusiness Bay\n📞 +971 4 567 8901\n\n🇸🇬 Singapore\nChangi Business Park\n📞 +65 6789 0123\n\n🇬🇧 London, UK\nHeathrow Area\n📞 +44 20 1234 5678\n\n**Airport Offices:**\n• BIA, Colombo\n• Dubai International\n• Changi Airport\n• Heathrow Airport\n\n**Coming Soon:**\n• Mumbai, India\n• Kuala Lumpur, Malaysia\n\nNeed directions?",
    options: [
      { label: "🗺️ Get Directions", nextNode: "contact_info" },
      { label: "📞 Call Office", nextNode: "contact_info" },
      { label: "◀️ Back to Main Menu", nextNode: "root" },
    ],
  },

  // ========== CAREERS ==========
  careers: {
    answer:
      "💼 **Careers at Airline Support**\n\n**Why Join Us?**\n• Competitive salary\n• Health insurance\n• Travel benefits\n• Career growth\n• International exposure\n\n**Current Openings:**\n1. Customer Support Agent (10 positions)\n2. Technical Support Engineer (5 positions)\n3. Operations Manager (2 positions)\n4. Software Developer (3 positions)\n5. HR Executive (2 positions)\n\n**How to Apply:**\n📧 Send CV to: careers@airlinesupport.com\n📝 Subject: Position Name - Your Name\n\n**Internship Program:**\nOpen for fresh graduates (3-month program)\n\n**Walk-in Interviews:**\nEvery Tuesday, 10AM - 3PM at HQ\n\nReady to join our team?",
    options: [
      { label: "📧 Apply Now", nextNode: "contact_info" },
      { label: "📞 HR Contact", nextNode: "contact_info" },
      { label: "◀️ Back to Main Menu", nextNode: "root" },
    ],
  },

  // ========== CONTACT & SUPPORT ==========
  contact_info: {
    answer:
      "📞 **Contact & Support**\n\n**24/7 Customer Support:**\n📞 Phone: +94 11 234 5678\n📱 WhatsApp: +94 77 123 4567\n💬 Live Chat: Available on website\n\n**Email Support:**\n• General: support@airlinesupport.com\n• Technical: tech@airlinesupport.com\n• Sales: sales@airlinesupport.com\n• HR: careers@airlinesupport.com\n\n**Social Media:**\n• Facebook: /AirlineSupport\n• Twitter: @AirlineSupport\n• LinkedIn: /company/airline-support\n• Instagram: @airlinesupport\n\n**Emergency Support:**\n📞 +94 11 111 2222 (24/7)\n\n**Average Response Time:**\n• Chat: < 1 minute\n• Phone: < 2 minutes\n• Email: < 2 hours\n\nHow would you like to connect?",
    options: [
      { label: "📞 Call Support", nextNode: "exit" },
      { label: "💬 Live Chat", nextNode: "exit" },
      { label: "📧 Send Email", nextNode: "exit" },
      { label: "◀️ Back to Main Menu", nextNode: "root" },
    ],
  },

  exit: {
    answer:
      "Thank you for visiting Airline Support Hub! 🌟\n\nWe're here 24/7 to assist you.\n\n📱 Download our app for quick access\n⭐ Rate our service - your feedback matters\n\n**Quick Links:**\n• Website: www.airlinesupport.com\n• App: Download on App Store/Google Play\n• Support: 24/7 helpline\n\nHave a great day! ✨\n\n[Click Clear to start a new conversation]",
    options: [],
  },
};

export default chatbotData;