#!/usr/bin/env node

/**
 * Build script to generate projects.json from images folder
 * Run this whenever you add or remove project images
 * Usage: node build-carousel.js
 */

const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "images");
const OUTPUT_FILE = path.join(__dirname, "projects.json");

// Supported image extensions
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

function getProjectName(filename) {
  // Remove extension and use as project name
  return filename.replace(/\.[^/.]+$/, "");
}

function buildCarousel() {
  try {
    // Check if images directory exists
    if (!fs.existsSync(IMAGES_DIR)) {
      console.error(`❌ Error: images directory not found at ${IMAGES_DIR}`);
      process.exit(1);
    }

    // Read all files in images directory
    const files = fs.readdirSync(IMAGES_DIR);

    // Filter for image files and sort
    const imageFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.includes(ext);
      })
      .sort();

    if (imageFiles.length === 0) {
      console.warn("⚠️  No images found in images/ directory");
    }

    // Generate projects data
    const projects = imageFiles.map((filename) => ({
      id: getProjectName(filename).replace(/\s+/g, "-").toLowerCase(),
      title: getProjectName(filename),
      image: `images/${filename}`,
      url: "#", // Update this with actual project URLs
    }));

    // Write projects.json
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));

    console.log(`✅ Successfully generated projects.json with ${projects.length} project(s)`);
    console.log(`📁 Images found: ${imageFiles.join(", ")}`);
    console.log(`💡 Tip: Update the "url" field in projects.json with actual project URLs`);
  } catch (error) {
    console.error("❌ Error building carousel:", error.message);
    process.exit(1);
  }
}

buildCarousel();
