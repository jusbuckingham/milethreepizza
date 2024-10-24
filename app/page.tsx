"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center space-y-16 p-8 bg-accent speckled-bg">
        {/* Home Section */}
        <section id="home" className="w-full flex flex-col items-center text-center space-y-8 mb-12 text-black">
          <h1 className="text-5xl font-light mb-6">Welcome to Mile3Pizza!</h1>
          <p className="text-lg">Where every slice tells a story of quality, passion, and flavor.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {index === 6 ? (
                  <Image
                    src="/images/garlic-knots.png"
                    alt="Garlic Knots"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={`/images/pizza-${index}.png`}
                    alt={`Pizza ${index}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="w-full flex flex-col items-center text-center space-y-8 mb-12 ">
          <h1 className="text-4xl font-light mb-6 text-black">Our Menu</h1>
          <p className="text-lg text-black mb-4">Explore our selection of mouth-watering pizzas, subs, pastas, and more. We use only the freshest ingredients to create a memorable culinary experience.</p>
          <div className="space-y-12 w-full max-w-4xl">
            {/* NY Style Pizza */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">NY Style Pizza</h2>
              <p className="text-lg font-semibold text-black">Whole Cheese Pizza (Additional toppings $1)</p>
              <ul className="text-lg mb-4 text-black">
                <li>10&quot; - $6</li>
                <li>12&quot; - $7</li>
                <li>14&quot; - $8</li>
              </ul>
              <p className="text-lg font-semibold text-black">Whole Specialty Pizza (Meat Eater, Veggie Lover, Supreme, Hawaiian, Alfredo)</p>
              <ul className="text-lg mb-4 text-black">
                <li>10&quot; - $10</li>
                <li>12&quot; - $12</li>
                <li>14&quot; - $14</li>
              </ul>
              <p className="text-lg text-black">By the Slice (Cheese) - $2.25 (Additional toppings $0.25)</p>
            </motion.div>

            {/* Stuffed Pizza */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Stuffed Pizza</h2>
              <p className="text-lg font-semibold text-black">Build Your Own (Up to 3 Toppings)</p>
              <ul className="text-lg mb-4 text-black">
                <li>14&quot; - $16</li>
                <li>Additional toppings - $1.50 each</li>
              </ul>
              <p className="text-lg font-semibold text-black">Whole Specialty Pizza (Meat Eater, Veggie Lover, Alfredo)</p>
              <ul className="text-lg mb-4 text-black">
                <li>14&quot; - $18</li>
              </ul>
              <p className="text-lg text-black">By the Slice (Meat Eater, Veggie Lover, Alfredo) - $4</p>
            </motion.div>

            {/* Calzone + Stromboli */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Calzone + Stromboli</h2>
              <p className="text-lg text-black">Indulge in our freshly baked calzones and strombolis, filled with the toppings you love.</p>
              <p className="text-lg text-black">Calzone (Up to 3 Toppings) - $6.50</p>
              <p className="text-lg text-black">Stromboli (Up to 3 Toppings) - $6.50</p>
              <p className="text-lg font-semibold text-black">Toppings:</p>
              <p className="text-lg text-black">Pepperoni, Italian Sausage, Bacon, Ham, Chicken, Pineapple, Mushrooms, Bell Peppers, Onions, Jalapenos, Black Olives, Spinach, Garlic</p>
            </motion.div>

            {/* Hot Subs */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Hot Subs</h2>
              <p className="text-lg text-black">Our hot subs are served on house-made rolls, perfect for a hearty meal on the go.</p>
              <p className="text-lg text-black">Meatball Sub (5 Meatballs, Mozzarella, Marinara) - $8</p>
              <p className="text-lg text-black">Ham + Cheese Sub (Deli Ham, Mozzarella, Mayo) - $7</p>
              <p className="text-lg text-black">Veggie Sub (Spinach, Peppers, Onions, Black Olives, Mushrooms) - $6</p>
              <p className="text-sm italic text-black">(Subs come on house-made 8&quot; rolls + chips)</p>
            </motion.div>

            {/* Pasta */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Pasta</h2>
              <p className="text-lg text-black">Pasta dishes that satisfy your cravings with rich sauces and savory flavors.</p>
              <p className="text-lg text-black">Classic Marinara (Red Tomato Sauce with Basil) - $8</p>
              <p className="text-lg text-black">House Alfredo (White Creamy Sauce) - $8</p>
              <p className="text-lg text-black">House Mari-Fredo (Pink Creamy Tomato Sauce) - $8</p>
              <p className="text-lg text-black">Handmade Lasagna (Vegetarian Option Available) - $10</p>
              <p className="text-lg text-black">Add Chicken - $3 | Add Meatballs - $4</p>
              <p className="text-sm italic text-black">(All pasta served with garlic knot)</p>
            </motion.div>

            {/* Salads */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Salads</h2>
              <p className="text-lg text-black">Fresh, crisp salads to complement your meal or enjoy on their own.</p>
              <p className="text-lg text-black">Ceasar Salad (Small - $3 | Large - $6)</p>
              <p className="text-lg text-black">Garden Salad (Small - $3 | Large - $6)</p>
              <p className="text-lg text-black">Add Chicken - $3</p>
              <p className="text-lg font-semibold text-black">Dressings:</p>
              <p className="text-lg text-black">Ranch, Caesar, Italian, Blue Cheese</p>
            </motion.div>

            {/* Sides */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Sides</h2>
              <p className="text-lg text-black">Perfect additions to your meal, including wings, garlic knots, and more.</p>
              <p className="text-lg text-black">Wings (6 Pc - Buffalo, BBQ, Plain) - $8</p>
              <p className="text-lg text-black">Garlic Knots (4 Pc) - $2</p>
              <p className="text-lg text-black">Garlic Cheese Bread - $4</p>
              <p className="text-lg text-black">Meatballs - $4</p>
              <p className="text-lg text-black">Side Sauces (Ranch, Blue Cheese, Italian, Buffalo, Garlic Butter, Marinara) - $0.50</p>
            </motion.div>

            {/* Drinks */}
            <motion.div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-semibold mb-4 text-black">Drinks</h2>
              <p className="text-lg text-black">Quench your thirst with our variety of refreshing beverages.</p>
              <p className="text-lg text-black">12 oz Soda Can - $1.50</p>
              <p className="text-lg text-black">Water Bottle - $1.50</p>
              <p className="text-lg text-black">2L Soda - $3.00</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full flex flex-col items-center text-center space-y-8 mb-12 text-black">
          <h1 className="text-4xl font-light mb-6">Contact Us</h1>
          <p className="text-lg mb-4">We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.</p>
          <div className="text-center space-y-4">
            <p className="text-lg">Phone: <a href="tel:(956) 600-3877" className="underline hover:text-primary">(956) 600-3877</a></p>
            <p className="text-lg">IG/FB: <a href="mailto:info@mile3pizza.com" className="underline hover:text-primary">@MILETHREEPIZZA</a></p>
            <p className="text-lg">Address: <a href="address: 2005 W. MILE THREE RD STE 1500 MISSION, TX 78573" className="underline hover:text-primary">2005 W. MILE THREE RD STE 1500 MISSION, TX 78573</a></p>
          </div>
          <div className="w-full max-w-4xl h-96 mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4513.202240570593!2d-98.34778055493665!3d26.26182415671413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a8d0e414ce89%3A0xef8a32f02d6d6cb2!2s2005%20W%20Mile%203%20Rd%20STE%201500%2C%20Mission%2C%20TX%2078573!5e0!3m2!1sen!2sus!4v1729792077986!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mile3Pizza Location"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}