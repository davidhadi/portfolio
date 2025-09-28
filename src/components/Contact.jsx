import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { icon: <FaPhoneAlt />, text: "+91 9525178942", link: "tel:+919525178942" },
    { icon: <FaEnvelope />, text: "shakilarbaz888@gmail.com", link: "mailto:shakilarbaz888@gmail.com" },
    { icon: <FaWhatsapp />, text: "Chat on WhatsApp", link: "https://wa.me/919525178942" },
    { icon: <FaLinkedin />, text: "LinkedIn", link: "https://www.linkedin.com/in/shakildavid/" },
    { icon: <FaInstagram />, text: "Instagram", link: "https://www.instagram.com/david_shakil/" },
    { icon: <FaGithub />, text: "GitHub", link: "https://github.com/davidhadi" },
  ];

  return (
    <section className="text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        
        {/* LEFT SIDE - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">Have a project? Let's talk!</h3>
        <form className="max-w-lg mx-auto flex flex-col gap-6">
          <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 border border-gray-700" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
          <textarea placeholder="Message" className="p-3 rounded bg-gray-800 border border-gray-700" rows="4" />
          <button type="submit" className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">Submit</button>
        </form>
        </motion.div>

        {/* RIGHT SIDE - CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h3 className="text-3xl font-bold mb-4">Feel free to talk!</h3>
          <div className="space-y-4">
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 p-4 rounded-2xl hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-2xl text-blue-400"
                >
                  {item.icon}
                </motion.div>
                <span className="text-lg">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
