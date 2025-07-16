import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = initMap;
    };

    const initMap = () => {
      const uluru = { lat: -25.363, lng: 131.044 };
      const grayStyles = [
        {
          featureType: "all",
          stylers: [
            { saturation: -90 },
            { lightness: 50 }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ccdee9' }]
        }
      ];
      
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -31.197, lng: 150.744 },
        zoom: 9,
        styles: grayStyles,
        scrollwheel: false
      });
    };

    loadGoogleMaps();

    return () => {
      // Clean up
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="bg-[url('https://via.placeholder.com/1920x300')] bg-cover bg-center py-20">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="text-white">
                  <h2 className="text-4xl font-bold">Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Map Section - Hidden on small screens */}
          <div className="hidden sm:block mb-12 pb-16">
            <div id="map" className="h-[480px] w-full"></div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            </div>
            
            <div className="lg:w-2/3 w-full mb-8 lg:mb-0 lg:pr-8">
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="space-y-6">
                  <div>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="message" 
                      id="message" 
                      cols="30" 
                      rows="9"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        name="name" 
                        id="name" 
                        type="text" 
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <input 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        name="email" 
                        id="email" 
                        type="email" 
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="subject" 
                      id="subject" 
                      type="text" 
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/3 w-full space-y-6">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-4 mt-1">
                  <i className="fas fa-home"></i>
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Buttonwood, California.</h3>
                  <p className="text-gray-600">Rosemead, CA 91770</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-4 mt-1">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <div>
                  <h3 className="text-lg font-semibold">00 (440) 9865 562</h3>
                  <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-4 mt-1">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <h3 className="text-lg font-semibold">support@colorlib.com</h3>
                  <p className="text-gray-600">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;