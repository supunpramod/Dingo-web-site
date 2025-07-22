import React from "react";

const Booktable = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="w-full lg:w-5/12">
            <div className="space-y-2">
              <p className="text-lg text-orange-500">Reservation</p>
              <h2 className="text-4xl font-bold">Book A Table</h2>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Name *"
                />
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Email address *"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg" defaultValue="1">
                  <option value="1">Persons *</option>
                  <option value="2">Number of guests 1</option>
                  <option value="3">Number of guests 2</option>
                  <option value="4">Number of guests 3</option>
                  <option value="5">Number of guests 4</option>
                </select>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Phone number *"
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg" defaultValue="">
                  <option value="">Time *</option>
                  <option value="8-10am">8 AM TO 10AM</option>
                  <option value="10-12pm">10 AM TO 12PM</option>
                  <option value="12-2pm">12PM TO 2PM</option>
                  <option value="2-4pm">2PM TO 4PM</option>
                  <option value="4-6pm">4PM TO 6PM</option>
                  <option value="6-8pm">6PM TO 8PM</option>
                  <option value="4-10pm">4PM TO 10PM</option>
                  <option value="10-12pm">10PM TO 12PM</option>
                </select>
              </div>

              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Your Note *"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium"
              >
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booktable;
