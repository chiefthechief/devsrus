# DevsRUs Project Carousel

The carousel automatically loads projects from the `projects.json` file, which is generated from images in the `images/` folder.

## Adding New Projects

To add a new project to the carousel:

1. **Add the project image** to the `images/` folder
   - Supported formats: PNG, JPG, JPEG, GIF, WebP
   - Example: `images/my-awesome-project.png`

2. **Regenerate the projects.json** by running:
   ```bash
   node build-carousel.js
   ```

3. **Update project URLs** (optional):
   - Edit `projects.json` and update the `url` field for each project
   - Example:
     ```json
     {
       "id": "my-awesome-project",
       "title": "my awesome project",
       "image": "images/my-awesome-project.png",
       "url": "https://my-project.com"
     }
     ```

4. **Commit your changes**:
   ```bash
   git add images/ projects.json
   git commit -m "Add new project to carousel"
   git push origin main
   ```

## How It Works

- **build-carousel.js**: Node.js script that scans the `images/` folder and generates `projects.json`
- **projects.json**: Contains metadata for each project (title, image path, URL)
- **script.js**: Fetches `projects.json` and dynamically creates carousel items at load time

## Removing Projects

1. Delete or move the image file from the `images/` folder
2. Run `node build-carousel.js` to regenerate `projects.json`
3. The carousel will automatically exclude that project on next page load

## Tips

- Image filenames are converted to project titles (e.g., `best-lashes.png` → "best lashes")
- Images are displayed in alphabetical order by filename
- All carousel features work automatically: navigation, auto-rotation, keyboard controls, dots

## File Exclusions

The build script only processes image files. Other files in the `images/` folder (like `bg.png` if it's a background asset) will still be included. To exclude specific files, either:
- Move them to a different folder
- Update `build-carousel.js` to add a filter for unwanted files
