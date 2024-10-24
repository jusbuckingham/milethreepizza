import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <main className="p-12 flex flex-col items-center space-y-12">
        <h1 className="text-4xl font-light text-center mb-6">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* NY Style Pizza */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">NY Style Pizza</h2>
            <p className="text-lg">Whole Cheese Pizza (Additional toppings $1)</p>
            <p className="text-lg">10&quot; - $6 | 12&quot; - $7 | 14&quot; - $8</p>
            <p className="text-lg">Whole Specialty Pizza (Meat Eater, Veggie Lover, Supreme, Hawaiian, Alfredo)</p>
            <p className="text-lg">10&quot; - $10 | 12&quot; - $12 | 14&quot; - $14</p>
            <p className="text-lg">By the Slice (Cheese) - $2.25 (Additional toppings $0.25)</p>
          </div>

          {/* Stuffed Pizza */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Stuffed Pizza</h2>
            <p className="text-lg">Build Your Own (Up to 3 Toppings) - 14&quot; - $16 (Additional toppings $1.50)</p>
            <p className="text-lg">Whole Specialty Pizza (Meat Eater, Veggie Lover, Alfredo) - 14&quot; - $18</p>
            <p className="text-lg">By the Slice (Meat Eater, Veggie Lover, Alfredo) - $4</p>
          </div>

          {/* Calzone + Stromboli */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Calzone + Stromboli</h2>
            <p className="text-lg">Calzone (Up to 3 Toppings) - $6.50</p>
            <p className="text-lg">Stromboli (Up to 3 Toppings) - $6.50</p>
            <p className="text-lg">Toppings: Pepperoni, Italian Sausage, Bacon, Ham, Chicken, Pineapple, Mushrooms, Bell Peppers, Onions, Jalapenos, Black Olives, Spinach, Garlic</p>
          </div>

          {/* Hot Subs */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Hot Subs</h2>
            <p className="text-lg">Meatball Sub (5 Meatballs, Mozzarella, Marinara) - $8</p>
            <p className="text-lg">Ham + Cheese Sub (Deli Ham, Mozzarella, Mayo) - $7</p>
            <p className="text-lg">Veggie Sub (Spinach, Peppers, Onions, Black Olives, Mushrooms) - $6</p>
          </div>

          {/* Pasta */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Pasta</h2>
            <p className="text-lg">Classic Marinara (Red Tomato Sauce with Basil) - $8</p>
            <p className="text-lg">House Alfredo (White Creamy Sauce) - $8</p>
            <p className="text-lg">House Mari-Fredo (Pink Creamy Tomato Sauce) - $8</p>
            <p className="text-lg">Handmade Lasagna (Vegetarian Option Available) - $10</p>
            <p className="text-lg">Add Chicken +$3 | Add Meatballs +$4</p>
          </div>

          {/* Salads */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Salads</h2>
            <p className="text-lg">Ceasar Salad (Small - $3 | Large - $6)</p>
            <p className="text-lg">Garden Salad (Small - $3 | Large - $6)</p>
            <p className="text-lg">Add Chicken +$3 | Dressings: Ranch, Caesar, Italian, Blue Cheese</p>
          </div>

          {/* Sides */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Sides</h2>
            <p className="text-lg">Wings (6 Pc - Buffalo, BBQ, Plain) - $8</p>
            <p className="text-lg">Garlic Knots (4 Pc) - $2</p>
            <p className="text-lg">Garlic Cheese Bread - $4</p>
            <p className="text-lg">Meatballs - $4</p>
            <p className="text-lg">Side Sauces (Ranch, Blue Cheese, Italian, Buffalo, Garlic Butter, Marinara) - $0.50</p>
          </div>

          {/* Drinks */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Drinks</h2>
            <p className="text-lg">12 oz Soda Can - $1.50</p>
            <p className="text-lg">Water Bottle - $1.50</p>
            <p className="text-lg">2L Soda - $3.00</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}