import { useEffect, useState } from "react";
import axios from "axios";

const Contactshow = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/contacts");
        setContacts(response.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Failed to fetch contact data");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact Submissions</h2>
      {contacts.length === 0 ? (
        <p>No contact submissions found.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact._id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Subject:</strong> {contact.subject}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p><strong>Submitted At:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contactshow;
