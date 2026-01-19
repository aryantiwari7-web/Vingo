import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#111",
      color: "#ccc",
      padding: "60px 80px 30px",
      fontFamily: "Arial, sans-serif",
    },
    top: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
    },
    section: {
      minWidth: "220px",
    },
    logoBox: {
      backgroundColor: "#fff",
      width: "90px",
      height: "90px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      color: "#000",
      fontWeight: "bold",
    },
    desc: {
      fontSize: "14px",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    social: {
      display: "flex",
      gap: "12px",
      height:"15px"
    },
    icon: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: "#facc15",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
    },
    title: {
      color: "#fff",
      marginBottom: "15px",
      fontWeight: "600",
    },
    link: {
      fontSize: "14px",
      marginBottom: "10px",
      cursor: "pointer",
    },
    divider: {
      borderTop: "1px solid #333",
      margin: "40px 0 20px",
    },
    bottom: {
      textAlign: "center",
      fontSize: "14px",
      color: "#999",
    },
    highlight: {
      color: "#f43f5e",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        {/* Left Section */}
        <div style={styles.section}>
          <div style={styles.logoBox}>Foodify</div>
          <p style={styles.desc}>
            Bringing you fresh, global cuisine delivered right to your door.
            Every bowl tells a story of flavor, quality, and care.
          </p>
          <div style={styles.social}>
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.title}>QUICK LINKS</h4>
          <div style={styles.link}>Menu</div>
          <div style={styles.link}>Locations</div>
          <div style={styles.link}>About Us</div>
          <div style={styles.link}>Corporate Ordering</div>
          <div style={styles.link}>Bulk Order</div>
          <div style={styles.link}>Blogs</div>
        </div>

        {/* Support */}
        <div style={styles.section}>
          <h4 style={styles.title}>SUPPORT</h4>
          <div style={styles.link}>Returns & Refunds</div>
          <div style={styles.link}>Privacy Policy</div>
          <div style={styles.link}>Terms</div>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h4 style={styles.title}>CONTACT US</h4>
          <div style={styles.link}>
            Foodify, Sri Vaaru Plaza, Ground Floor, 19th Main Road
          </div>
          <div style={styles.link}>
            Next to ProBike HSR Layout 1st Sector, Bangalore 560102
          </div>
          <div style={styles.link}>order@foodify.com</div>
          <div style={styles.link}>grievance@foodify.com</div>
          <div style={{ fontSize: "13px", marginTop: "10px", color: "#888" }}>
            Office Hours:<br />
            Monday - Friday (9:00 AM - 6:00 PM)
          </div>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.bottom}>
        © 2026 Foodify. All rights reserved. Made with{" "}
        <span style={styles.highlight}>♥</span> for food lovers everywhere.
      </div>
    </footer>
  );
};

export default Footer;
