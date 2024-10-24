// Contact page (app/contact/page.tsx)
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="p-12 flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-light text-center mb-6">Contact Us</h1>
        <div className="text-center space-y-4">
          <p className="text-lg">We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.</p>
          <p className="text-lg">Phone: (123) 456-7890</p>
          <p className="text-lg">Email: info@mile3pizza.com</p>
          <p className="text-lg">Address: 123 Pizza Street, Pizzatown, USA</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}