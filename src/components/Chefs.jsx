import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/chefs'); // adjust the URL if needed
        setChefs(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch chefs:', error);
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading chefs...</div>;
  }

  return (
    <div className="font-sans">
      {/* Breadcrumb Section */}
      <section
        className="bg-cover bg-center py-20 relative"
        style={{ backgroundImage: "url('img/breadcrumb_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f9f8f3]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black">Experienced Chefs</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Team Member</p>
                <h2 className="text-4xl font-bold">Our Experienced Chefs</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div key={chef._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="px-6 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-1">{chef.name}</h3>
                  <p className="text-gray-600 mb-4">{chef.position}</p>
                  <div className="flex justify-center space-x-4">
                    {chef.social.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="text-gray-600 hover:text-orange-500 text-xl transition"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chefs;
