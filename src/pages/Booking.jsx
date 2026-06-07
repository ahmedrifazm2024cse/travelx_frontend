import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiPost } from "../api";
import "./Booking.css";

function Booking() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const token = localStorage.getItem("tx_token");
    try {
      await apiPost(
        "https://travelx-2-2liv.onrender.com/api/bookings",
        Object.fromEntries(fd),
        token,
      );
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>
          Book Your <span style={{ color: "#00B4FF" }}>Tour</span>
        </h1>
        <p>Complete your booking in just a few simple steps</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span>
          <Link to="/packages">Packages</Link> <span>›</span>
          <span>Booking</span>
        </div>
      </div>

      <section className="booking-section">
        {/* Steps */}
        <div className="booking-steps">
          {[
            "Personal Details",
            "Tour Selection",
            "Payment",
            "Confirmation",
          ].map((s, i) => (
            <div key={s} className={`step ${i === 0 ? "active" : ""}`}>
              <div className="step-num">{i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className="booking-grid">
          {/* Form */}
          <div className="booking-form-box light-form">
            <h3>Personal Information</h3>
            {status === "success" && (
              <p style={{ color: "#16a34a", marginBottom: "16px" }}>
                ✅ Booking confirmed successfully!
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#dc2626", marginBottom: "16px" }}>
                ❌ Booking failed. Please try again.
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-row2">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              <div className="form-row2">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <h3
                style={{
                  marginTop: "28px",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                Tour Details
              </h3>
              <div className="form-row2">
                <div className="form-group">
                  <label>Select Package *</label>
                  <select name="package" required>
                    <option value="">Choose a package</option>
                    <option>Maldives Paradise – ₹25,000</option>
                    <option>Ooty Hill Station – ₹12,000</option>
                    <option>Goa Beach Fun – ₹18,000</option>
                    <option>Kerala Backwaters – ₹22,000</option>
                    <option>Rajasthan Royal – ₹28,000</option>
                    <option>Manali Snow Trek – ₹20,000</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Number of Travelers *</label>
                  <select name="travelers" required>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>
              <div className="form-row2">
                <div className="form-group">
                  <label>Travel Date *</label>
                  <input name="travelDate" type="date" required />
                </div>
                <div className="form-group">
                  <label>Room Type</label>
                  <select name="roomType">
                    <option>Standard Room</option>
                    <option>Deluxe Room</option>
                    <option>Suite</option>
                    <option>Shared Dormitory</option>
                  </select>
                </div>
              </div>

              <h3
                style={{
                  marginTop: "28px",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                Payment Method
              </h3>
              <div className="payment-options">
                {[
                  "💳 Credit / Debit Card",
                  "📱 UPI / BHIM",
                  "🏦 Net Banking",
                  "💰 Pay Later (EMI)",
                ].map((p) => (
                  <label key={p} className="pay-option">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked={p.includes("Credit")}
                    />
                    {p}
                  </label>
                ))}
              </div>

              <div className="form-group" style={{ marginTop: "20px" }}>
                <label>Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows="3"
                  placeholder="Any dietary needs, accessibility requirements or special requests..."
                />
              </div>

              <label
                className="check-label"
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  color: "#475569",
                }}
              >
                <input type="checkbox" required />
                <span style={{ marginLeft: "8px", fontSize: "13px" }}>
                  I agree to the{" "}
                  <Link to="/terms" style={{ color: "#00B4FF" }}>
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" style={{ color: "#00B4FF" }}>
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                className="form-full-btn"
                style={{
                  background: "linear-gradient(135deg,#00B4FF,#0080cc)",
                  color: "white",
                }}
              >
                Confirm Booking ✅
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-card">
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600&auto=format&fit=crop"
                alt="Package"
              />
              <div className="summary-details">
                <h4>Maldives Paradise</h4>
                <p>📅 5 Days / 4 Nights</p>
                <p>⭐ 4.9 / 5.0 Rating</p>
                <p>🏨 Luxury Resort Stay</p>
              </div>
              <div className="summary-price">
                <div className="s-row">
                  <span>Package Price</span>
                  <strong>₹25,000</strong>
                </div>
                <div className="s-row">
                  <span>Taxes (18%)</span>
                  <strong>₹4,500</strong>
                </div>
                <div className="s-row">
                  <span>Insurance</span>
                  <strong>₹500</strong>
                </div>
                <div className="s-divider" />
                <div className="s-row total">
                  <span>Total Amount</span>
                  <strong>₹30,000</strong>
                </div>
                <div
                  className="s-row"
                  style={{ fontSize: "13px", color: "#64748b" }}
                >
                  <span>Advance (30%)</span>
                  <strong style={{ color: "#16a34a" }}>₹9,000</strong>
                </div>
              </div>
              <div className="summary-badges">
                <span>🔒 Secure Payment</span>
                <span>✅ Instant Confirmation</span>
                <span>🔄 Free Cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Booking;
