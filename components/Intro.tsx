import Link from "next/link";
export default function Intro() {
    return (
        <section className="intro-section py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome to Abok Adventures</h2>
                    <p className="text-gray-600 mt-4">
                        Your gateway to unforgettable African safaris in Kenya and Tanzania.
                    </p>    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">

                        <h3 className="text-xl font-semibold mb-4 text-blue-600">Why Choose Us?</h3>
                        <p className="text-gray-600">
                            At Abok Adventures, we specialize in crafting authentic safari experiences that connect you with the breathtaking landscapes, diverse wildlife, and rich cultures of East Africa.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">     
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Services</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Customized Safari Packages</li>
                            <li>Luxury Accommodations</li>
                            <li>Guided Wildlife Tours</li>
                            <li>Cultural Experiences</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
                        <p className="text-gray-600 mb-4">
                            Ready to embark on your African adventure? Contact us today to start planning your dream safari!
                        </p>
                        <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
                            Contact Us
                        </Link>
                    </div>  
                </div>
            </div>
        </section>
    );
}