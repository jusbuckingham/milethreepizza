"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    description: "Whole Cheese Pizza (Additional toppings $1)",
    sizes: [
      { size: "10\"", price: "$6" },
      { size: "12\"", price: "$7" },
      { size: "14\"", price: "$8" },
    ],
    specialties: [
      "Meat Eater",
      "Veggie Lover",
      "Supreme",
      "Hawaiian",
      "Alfredo",
    ],
    bySlice: "By the Slice (Cheese) - $2.25 (Additional toppings $0.25)",
  },
  {
    title: "Stuffed Pizza",
    description: "Build Your Own (Up to 3 Toppings)",
    sizes: [{ size: "14\"", price: "$16" }],
    additionalToppings: "$1.50 each",
    specialties: ["Meat Eater", "Veggie Lover", "Alfredo"],
    specialtyPrice: "$18",
    bySlice: "By the Slice (Meat Eater, Veggie Lover, Alfredo) - $4",
  },
  {
    title: "Calzone + Stromboli",
    description: "Indulge in our freshly baked calzones and strombolis, filled with the toppings you love.",
    items: [
      { name: "Calzone (Up to 3 Toppings)", price: "$6.50" },
      { name: "Stromboli (Up to 3 Toppings)", price: "$6.50" },
    ],
    toppings: "Pepperoni, Italian Sausage, Bacon, Ham, Chicken, Pineapple, Mushrooms, Bell Peppers, Onions, Jalapenos, Black Olives, Spinach, Garlic",
  },
  {
    title: "Hot Subs",
    description: "Our hot subs are served on house-made rolls, perfect for a hearty meal on the go.",
    items: [
      { name: "Meatball Sub", description: "(5 Meatballs, Mozzarella, Marinara)", price: "$8" },
      { name: "Ham + Cheese Sub", description: "(Deli Ham, Mozzarella, Mayo)", price: "$7" },
      { name: "Veggie Sub", description: "(Spinach, Peppers, Onions, Black Olives, Mushrooms)", price: "$6" },
    ],
    note: "(Subs come on house-made 8\" rolls + chips)",
  },
  {
    title: "Pasta",
    description: "Pasta dishes that satisfy your cravings with rich sauces and savory flavors.",
    items: [
      { name: "Classic Marinara", description: "(Red Tomato Sauce with Basil)", price: "$8" },
      { name: "House Alfredo", description: "(White Creamy Sauce)", price: "$8" },
      { name: "House Mari-Fredo", description: "(Pink Creamy Tomato Sauce)", price: "$8" },
      { name: "Handmade Lasagna", description: "(Vegetarian Option Available)", price: "$10" },
    ],
    extras: "Add Chicken - $3 | Add Meatballs - $4",
    note: "(All pasta served with garlic knot)",
  },
  {
    title: "Salads",
    description: "Fresh, crisp salads to complement your meal or enjoy on their own.",
    items: [
      { name: "Caesar Salad", sizes: [{ size: "Small", price: "$3" }, { size: "Large", price: "$6" }] },
      { name: "Garden Salad", sizes: [{ size: "Small", price: "$3" }, { size: "Large", price: "$6" }] },
    ],
    extras: "Add Chicken - $3",
    dressings: "Ranch, Caesar, Italian, Blue Cheese",
  },
  {
    title: "Sides",
    description: "Perfect additions to your meal, including wings, garlic knots, and more.",
    items: [
      { name: "Wings", description: "(6 Pc - Buffalo, BBQ, Plain)", price: "$8" },
      { name: "Garlic Knots", description: "(4 Pc)", price: "$2" },
      { name: "Garlic Cheese Bread", price: "$4" },
      { name: "Meatballs", price: "$4" },
      { name: "Side Sauces", description: "(Ranch, Blue Cheese, Italian, Buffalo, Garlic Butter, Marinara)", price: "$0.50" },
    ],
  },
  {
    title: "Drinks",
    description: "Quench your thirst with our variety of refreshing beverages.",
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
      <Navbar />
      <main className="flex flex-col items-center justify-center space-y-16 p-8">
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
            { type: "IG/FB", value: "@MILETHREEPIZZA", link: "mailto:info@mile3pizza.com" },
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
  return (
    <section id={id} className="w-full max-w-4xl flex flex-col items-center text-center space-y-8 mb-12 px-4 py-8 border-b border-gray-300">
      <h1 className="text-4xl font-bold text-red-600">{title}</h1>
      <p className="text-lg text-gray-800">{description}</p>

      {imageSection && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={index === 6 ? "/images/garlic-knots.png" : `/images/pizza-${index}.png`}
                alt={index === 6 ? "Garlic Knots" : `Pizza ${index}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}

      {items && items.map((item, index) => (
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
              {/* Contact Icon */}
              {contact.type === "Phone" && <span className="text-red-500 text-2xl">📞</span>}
              {contact.type === "IG/FB" && <span className="text-red-500 text-2xl">📷</span>}
              {contact.type === "Address" && <span className="text-red-500 text-2xl">📍</span>}

              {/* Contact Details */}
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
