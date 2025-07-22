import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  // Dummy Data for Sidebar
  const categories = [
    { name: 'Technology', count: 5 },
    { name: 'Design', count: 3 },
    { name: 'Travel', count: 2 },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'How to use React in 2025',
      image: 'https://via.placeholder.com/80',
      date: 'July 20, 2025',
    },
    {
      id: 2,
      title: 'UI Trends of the Future',
      image: 'https://via.placeholder.com/80',
      date: 'July 18, 2025',
    },
  ];

  const tags = ['React', 'Design', 'Tech', 'UI', 'Backend'];

  const instagramFeeds = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blogPost");
        setBlogPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();
  }, []);

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
              <h2 className="text-4xl font-bold text-black">Our Blog</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="lg:w-8/12">
              {blogPosts.map((post) => (
                <article key={post._id} className="mb-12">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white text-center p-3 rounded">
                      <h3 className="text-xl font-bold">{post.date.day}</h3>
                      <p className="text-sm">{post.date.month}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a href={`/blog/${post._id}`} className="block mb-3">
                      <h2 className="text-2xl font-bold hover:text-orange-500 transition">
                        {post.title}
                      </h2>
                    </a>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="hover:text-orange-500 transition">
                        <i className="far fa-user mr-1"></i> {post.category}
                      </span>
                      <span className="hover:text-orange-500 transition">
                        <i className="far fa-comments mr-1"></i> {post.comments}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              {/* Pagination (Static for now) */}
              <nav className="flex justify-center mt-8">
                <ul className="flex items-center space-x-2">
                  <li>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded hover:bg-orange-500 hover:text-white transition">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded hover:bg-orange-500 hover:text-white transition">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white border border-orange-500 rounded">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded hover:bg-orange-500 hover:text-white transition">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="lg:w-4/12">
              {/* Search */}
              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <form>
                  <div className="flex mb-3">
                    <input
                      type="text"
                      placeholder="Search Keyword"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      type="button"
                      className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition"
                    >
                      <i className="ti-search"></i>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                  >
                    Search
                  </button>
                </form>
              </aside>

              {/* Categories */}
              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Category</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between hover:text-orange-500 transition"
                      >
                        <p>{category.name}</p>
                        <p>({category.count})</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Recent Posts */}
              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Recent Post</h4>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center gap-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <a href="single-blog.html" className="font-medium hover:text-orange-500 transition">
                          <h3>{post.title}</h3>
                        </a>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Tags */}
              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Tag Clouds</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-orange-500 hover:text-white transition"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </aside>

              {/* Instagram Feeds */}
              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Instagram Feeds</h4>
                <div className="grid grid-cols-3 gap-2">
                  {instagramFeeds.map((feed, index) => (
                    <a key={index} href="#">
                      <img
                        src={feed}
                        alt={`Instagram post ${index + 1}`}
                        className="w-full h-24 object-cover rounded"
                      />
                    </a>
                  ))}
                </div>
              </aside>

              {/* Newsletter */}
              <aside className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4">Newsletter</h4>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
