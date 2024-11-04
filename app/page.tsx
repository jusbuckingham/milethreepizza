"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderModal from "../components/OrderModal";
import { motion } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  title: string;
  description: string;
  sizes?: { size: string; price: string }[];
  specialties?: string[];
  bySlice?: string;
  additionalToppings?: string;
  specialtyPrice?: string;
  items?: { name: string; description?: string; price?: string; sizes?: { size: string; price: string }[] }[];
  toppings?: string;
  extras?: string;
  note?: string;
  dressings?: string;
}

interface Contact {
  type: string;
  value: string;
  link: string;
}

interface SectionProps {
  id: string;
  title: string;
  description: string;
  items?: MenuItem[];
  contacts?: Contact[];
  imageSection?: boolean;
  mapSrc?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "NY Style Pizza",
    description: "Classic meets cool with our NY-style pies. Crispy, thin, and loaded with flavor. Want to make it yours? Extra toppings are just a buck away.",
    sizes: [
      { size: "10\"", price: "$6" },
      { size: "12\"", price: "$7" },
      { size: "14\"", price: "$8" },
    ],
    specialties: ["Meat Eater", "Veggie Lover", "Supreme", "Hawaiian", "Alfredo"],
    bySlice: "By the Slice (Cheese) - $2.25 (Extra toppings $0.25 each)",
  },
  {
    title: "Stuffed Pizza",
    description: "Feeling bold? Go big with our stuffed pies. Customize with up to three toppings for that one-of-a-kind pizza bliss.",
    sizes: [{ size: "14\"", price: "$16" }],
    additionalToppings: "$1.50 each",
    specialties: ["Meat Eater", "Veggie Lover", "Alfredo"],
    specialtyPrice: "$18",
    bySlice: "By the Slice (Meat Eater, Veggie Lover, Alfredo) - $4",
  },
  {
    title: "Calzone + Stromboli",
    description: "Folded, baked, and oozing with goodness. Whether you're team Calzone or Stromboli, we've got you covered.",
    items: [
      { name: "Calzone (Up to 3 Toppings)", price: "$6.50" },
      { name: "Stromboli (Up to 3 Toppings)", price: "$6.50" },
    ],
    toppings: "Pepperoni, Italian Sausage, Bacon, Ham, Chicken, Pineapple, Mushrooms, Bell Peppers, Onions, Jalapenos, Black Olives, Spinach, Garlic",
  },
  {
    title: "Hot Subs",
    description: "Sandwiches that mean business. Served hot on house-made rolls, these subs bring the heat and the flavor.",
    items: [
      { name: "Meatball Sub", description: "5 hearty meatballs, melted mozzarella, marinara goodness.", price: "$8" },
      { name: "Ham + Cheese Sub", description: "Deli ham, mozzarella, a touch of mayo for the perfect bite.", price: "$7" },
      { name: "Veggie Sub", description: "A garden's worth of fresh veggies on a roll.", price: "$6" },
    ],
    note: "(Subs come on house-made 8\" rolls + chips)",
  },
  {
    title: "Pasta",
    description: "Comfort food, redefined. Dive into a bowl of our freshly prepared pasta dishes, crafted to satisfy your cravings.",
    items: [
      { name: "Classic Marinara", description: "Rich red tomato sauce with basil vibes.", price: "$8" },
      { name: "House Alfredo", description: "Creamy, dreamy, and oh-so-satisfying.", price: "$8" },
      { name: "House Mari-Fredo", description: "A creamy pink sauce that blends the best of both worlds.", price: "$8" },
      { name: "Handmade Lasagna", description: "Layers of love. Vegetarian option available.", price: "$10" },
    ],
    extras: "Add Chicken - $3 | Add Meatballs - $4",
    note: "(All pasta served with garlic knot)",
  },
  {
    title: "Salads",
    description: "Fresh, crisp, and made to order. Our salads are more than just a sidekick – they’re a flavor experience.",
    items: [
      { name: "Caesar Salad", sizes: [{ size: "Small", price: "$3" }, { size: "Large", price: "$6" }] },
      { name: "Garden Salad", sizes: [{ size: "Small", price: "$3" }, { size: "Large", price: "$6" }] },
    ],
    extras: "Add Chicken - $3",
    dressings: "Ranch, Caesar, Italian, Blue Cheese",
  },
  {
    title: "Sides",
    description: "Because every great pizza needs a sidekick. Pick your favorite and elevate your meal.",
    items: [
      { name: "Wings", description: "6 pieces – choose Buffalo, BBQ, or Plain.", price: "$8" },
      { name: "Garlic Knots", description: "4 buttery, garlicky bites of heaven.", price: "$2" },
      { name: "Garlic Cheese Bread", price: "$4" },
      { name: "Meatballs", price: "$4" },
      { name: "Side Sauces", description: "Ranch, Blue Cheese, Italian, Buffalo, Garlic Butter, Marinara.", price: "$0.50" },
    ],
  },
  {
    title: "Drinks",
    description: "Thirsty? We’ve got just the thing to keep you refreshed.",
    items: [
      { name: "12 oz Soda Can", price: "$1.50" },
      { name: "Water Bottle", price: "$1.50" },
      { name: "2L Soda", price: "$3.00" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <OrderModal />
      <Navbar />
      <main className="flex flex-col items-center justify-center space-y-16 p-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/Mile3Pizza-Logo.png"
            alt="Mile3Pizza Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold text-red-600">Mile3Pizza</h1>
        </div>

        <Section
          id="home"
          title="Welcome to Mile3Pizza!"
          description="Where every slice tells a story of quality, passion, and flavor."
          imageSection
        />
        <Section
          id="menu"
          title="Our Menu"
          description="Explore our selection of mouth-watering pizzas, subs, pastas, and more. We use only the freshest ingredients to create a memorable culinary experience."
          items={menuItems}
        />
        <Section
          id="contact"
          title="Contact Us"
          description="We'd love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out."
          contacts={[
            { type: "Phone", value: "(956) 600-3877", link: "tel:(956) 600-3877" },
            { type: "IG", value: "@MILETHREEPIZZA", link: "https://www.instagram.com/MILETHREEPIZZA/" },
            { type: "Address", value: "2005 W. MILE THREE RD STE 1500 MISSION, TX 78573", link: "https://www.google.com/maps?q=2005+W.+MILE+THREE+RD+STE+1500+MISSION,+TX+78573" },
          ]}
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4513.202240570593!2d-98.34778055493665!3d26.26182415671413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a8d0e414ce89%3A0xef8a32f02d6d6cb2!2s2005%20W%20Mile%203%20Rd%20STE%201500%2C%20Mission%2C%20TX%2078573!5e0!3m2!1sen!2sus!4v1729792077986!5m2!1sen!2sus"
        />
      </main>
      <Footer />
    </div>
  );
}

function Section({ id, title, description, items, contacts, imageSection, mapSrc }: SectionProps) {
  const images = [
    { src: "/images/pizza-1.png", alt: "Pizza 1" },
    { src: "/images/pizza-2.png", alt: "Pizza 2" },
    { src: "/images/pizza-3.png", alt: "Pizza 3" },
    { src: "/images/pizza-4.png", alt: "Pizza 4" },
    { src: "/images/pizza-5.png", alt: "Pizza 5" },
    { src: "/images/garlic-knots.png", alt: "Garlic Knots" },
  ];

  return (
    <section id={id} className="w-full max-w-4xl flex flex-col items-center text-center space-y-8 mb-12 px-4 py-8 border-b border-gray-300">
      <h1 className="text-4xl font-bold text-red-600">{title}</h1>
      <p className="text-lg text-gray-800">{description}</p>

      {id === "home" || id === "menu" ? (
        <a
          href="https://link.clover.com/urlshortener/hHVWhr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
        >
          Order Now
        </a>
      ) : null}

      {imageSection && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                quality={75}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}

      {items?.map((item, index) => (
        <motion.div
          key={index}
          className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-red-500">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
          {item.sizes && (
            <ul className="text-gray-600 mt-2">
              {item.sizes.map((size, sizeIndex) => (
                <li key={sizeIndex}>{`${size.size} - ${size.price}`}</li>
              ))}
            </ul>
          )}
          {item.specialties && (
            <p className="text-gray-600 mt-2">Whole Specialty Pizza: {item.specialties.join(", ")}</p>
          )}
          {item.specialtyPrice && (
            <p className="text-gray-600 mt-2">14&quot; - {item.specialtyPrice}</p>
          )}
          {item.bySlice && <p className="text-gray-600 mt-2">{item.bySlice}</p>}
          {item.items && (
            <ul className="text-gray-600 mt-2">
              {item.items.map((menuItem, itemIndex) => (
                <li key={itemIndex}>{`${menuItem.name} - ${menuItem.price}`}</li>
              ))}
            </ul>
          )}
          {item.toppings && <p className="text-gray-600 mt-2 italic">Toppings: {item.toppings}</p>}
          {item.extras && <p className="text-gray-600 mt-2">{item.extras}</p>}
          {item.note && <p className="text-sm italic text-gray-500">{item.note}</p>}
          {item.dressings && <p className="text-gray-600 mt-2">Dressings: {item.dressings}</p>}
        </motion.div>
      ))}

      {contacts && (
        <div className="flex flex-col items-center space-y-4 mt-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="flex items-center space-x-3 p-4 w-full max-w-md bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-800"
              target="_blank" rel="noopener noreferrer"
            >
              {contact.type === "Phone" && <span className="text-red-500 text-2xl">📞</span>}
              {contact.type === "IG" && <span className="text-red-500 text-2xl">📷</span>}
              {contact.type === "Address" && <span className="text-red-500 text-2xl">📍</span>}
              <span className="text-lg font-medium">{contact.type}: {contact.value}</span>
            </a>
          ))}
        </div>
      )}

      {mapSrc && (
        <div className="w-full h-96 mt-8 overflow-hidden rounded-lg shadow-md">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mile3Pizza Location"
          ></iframe>
        </div>
      )}
    </section>
  );
}
