/* ============================================
   AboutSection Component - About GNRC Medishop
   Franchise legacy, stats, content grid & differentiators
   ============================================ */

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import AnimatedCounter from "../../common/AnimatedCounter/AnimatedCounter";
import styles from "./AboutSection.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stats data
const keyStats = [
  {
    value: "20",
    suffix: "+",
    label: "Years of Legacy",
    icon: "mdi:trophy-award",
    color: "#2EC4B6",
  },
  {
    value: "80",
    suffix: "Cr+",
    label: "Annual Turnover",
    icon: "mdi:currency-inr",
    color: "#2D3561",
  },
  {
    value: "50000",
    suffix: "+",
    label: "Products Available",
    icon: "mdi:package-variant-closed",
    color: "#2EC4B6",
  },
  {
    value: "16",
    suffix: "L+",
    label: "Happy Customers",
    icon: "mdi:account-group",
    color: "#2D3561",
  },
  {
    value: "9",
    suffix: "",
    label: "Stores & Growing",
    icon: "mdi:store",
    color: "#2EC4B6",
  },
];

// Image grid data
const gridImages = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    alt: "GNRC Medishop Store",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
    alt: "GNRC Medishop Products",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=300&fit=crop",
    alt: "GNRC Medishop Team",
  },
];

// Key differentiators data
const differentiators = [
  {
    icon: "mdi:store-check",
    title: "Turnkey Store Setup",
    description:
      "Complete store setup support including layout design, inventory stocking, and POS system installation.",
  },
  {
    icon: "mdi:truck-delivery",
    title: "Centralised Supply Chain",
    description:
      "Direct procurement from 1,200+ brands ensuring competitive pricing and 50,000+ product availability.",
  },
  {
    icon: "mdi:chart-line",
    title: "20-22% Gross Margin",
    description:
      "Industry-leading margins with proven unit economics and transparent revenue sharing model.",
  },
  {
    icon: "mdi:account-star",
    title: "Dedicated Franchise Support",
    description:
      "End-to-end operational guidance, marketing support, and training for you and your staff.",
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleExploreCourses = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.overviewSection} id="about" ref={ref}>
      {/* Background Elements */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />

      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.mainWrapper}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <span className={styles.badge}>ABOUT GNRC MEDISHOP</span>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.75rem" },
                color: "#2D3561",
                letterSpacing: "-0.01em",
              }}
            >
              Why Choose GNRC Medishop?
            </Typography>
            <Typography
              variant="h3"
              className={styles.sectionSubtitle}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
                color: "#6b7280",
                marginTop: "0.5rem",
              }}
            >
              North East India's Most Trusted Pharmacy & Essentials Retail Chain Since 2004
            </Typography>
          </motion.div>

          {/* Stats Counter Row */}
          <motion.div variants={itemVariants} className={styles.statsRow}>
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={styles.statIcon}
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon icon={stat.icon} style={{ color: stat.color }} />
                </div>
                <div className={styles.statValue}>
                  <AnimatedCounter
                    value={stat.value}
                    duration={1.5}
                    delay={0.2 + index * 0.1}
                  />
                  {stat.suffix && (
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  )}
                </div>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid (2 columns desktop, 1 column mobile) */}
          <div className={styles.contentGrid}>
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className={styles.textColumn}>
              <Typography className={styles.contentParagraph}>
                For over 20 years, GNRC Medishop has been North East India's
                most trusted pharmacy and essentials retail chain. With ₹80 Cr+
                annual turnover, 50,000+ products, and 1.6 million+ happy
                customers, we are the region's leading retail pharmacy brand.
              </Typography>
              <Typography className={styles.contentParagraph}>
                With 9 company-owned stores, 1,200+ partner brands, and a proven
                franchise model offering 20-22% gross margins, GNRC Medishop is
                now expanding across Assam and North East India.
              </Typography>
              <Button
                variant="contained"
                onClick={handleExploreCourses}
                className={styles.ctaButton}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{
                  background:
                    "linear-gradient(135deg, #2EC4B6 0%, #5DD9CE 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: { xs: "0.9375rem", md: "1rem" },
                  padding: { xs: "12px 28px", md: "14px 36px" },
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 8px 30px rgba(46, 196, 182, 0.3)",
                  marginTop: "1.5rem",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5DD9CE 0%, #2EC4B6 100%)",
                    boxShadow: "0 12px 40px rgba(46, 196, 182, 0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Explore Franchise Plans →
              </Button>
            </motion.div>

            {/* Right Column - Image Grid */}
            <motion.div variants={itemVariants} className={styles.imageColumn}>
              {gridImages.map((img, index) => (
                <motion.div
                  key={index}
                  className={styles.imageWrapper}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.gridImage}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key Differentiators Row */}
          <motion.div
            variants={itemVariants}
            className={styles.differentiatorsRow}
          >
            <Typography
              variant="h4"
              className={styles.differentiatorsTitle}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                color: "#2D3561",
                textAlign: "center",
                marginBottom: { xs: "1.5rem", md: "2rem" },
              }}
            >
              What Sets GNRC Medishop Apart
            </Typography>
            <div className={styles.differentiatorsGrid}>
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.differentiatorCard}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.differentiatorIcon}>
                    <Icon icon={item.icon} />
                  </div>
                  <h4 className={styles.differentiatorTitle}>{item.title}</h4>
                  <p className={styles.differentiatorDesc}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
