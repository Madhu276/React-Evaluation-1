import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");
  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, phone, street, city, state, pincode } = formData;

    if (!fullName || !phone || !street || !city || !state || !pincode) {
      setMessage("❌ Please fill all required fields.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("❌ Phone number must be 10 digits.");
      return false;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
      setMessage("❌ Pincode must be 6 digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSavedData(formData);
      setMessage("✅ Address saved successfully!");
      console.log("Saved Address:", formData);
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
      });
    }
  };

  return (
    <div className="container">
      <h1>📦 Shipping Address Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit phone number"
        />

        <label>Street Address:</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street and house number"
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city"
        />

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter state"
        />

        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="6-digit pincode"
        />

        <button type="submit">Save Address</button>
      </form>

      <p className={`message ${message.includes("❌") ? "error" : "success"}`}>
        {message}
      </p>

      {savedData && (
        <div className="summary">
          <h2>Saved Address</h2>
          <p><strong>Name:</strong> {savedData.fullName}</p>
          <p><strong>Phone:</strong> {savedData.phone}</p>
          <p><strong>Street:</strong> {savedData.street}</p>
          <p><strong>City:</strong> {savedData.city}</p>
          <p><strong>State:</strong> {savedData.state}</p>
          <p><strong>Pincode:</strong> {savedData.pincode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
