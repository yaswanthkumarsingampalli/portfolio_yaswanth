# Yaswanth Kumar Singampalli - Portfolio 

This is the personal portfolio website for Yaswanth Kumar Singampalli, a Microsoft-Certified Senior Data Engineer, built with React.js and Tailwind CSS.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between themes with system preference detection.
- **Animations**: Smooth animations using Framer Motion.
- **3D Background**: Interactive particle background using React Three Fiber.
- **Component-Based Architecture**: Reusable and maintainable React components.
- **Modern UI**: Clean and professional design using Tailwind CSS.

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion (for animations)
- React Three Fiber & Drei (for 3D graphics)
- Font Awesome (for icons)
- Maath (for random number generation in 3D)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd portfolio-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Adding Your Resume and Profile Picture

1.  **Resume:** Place your resume PDF file (e.g., `Yaswanth_Kumar_Singampalli_DE.pdf`) in the `public` folder of your project.
2.  **Profile Picture:** Place your profile image (e.g., `Yash_OPT_Photo.jpeg`) in the `public` folder. If you change the filename, update the `src` attribute in `src/components/Hero.jsx` accordingly.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages. Follow these steps:

1.  **Set the `homepage` URL in `package.json`:**
    *   Locate your `package.json` file.
    *   Add the `homepage` field with the URL where you intend to host the site. For GitHub Pages user/organization sites, this is `https://<your-username>.github.io/<your-repo-name>/`. For example:
        ```json
        {
          "name": "portfolio-react",
          "version": "0.1.0",
          "private": true,
          "homepage": "https://yaswanthkumarsingampalli.github.io/portfolio_yaswanth/", // Add this line
          ...
        }
        ```
    *   Save the file.

2.  **Commit the change:**
    ```bash
    git add package.json
    git commit -m "Set homepage URL for GitHub Pages"
    git push origin <your-main-branch-name> # (e.g., master or main)
    ```

3.  **Configure GitHub Pages in your repository settings:**
    *   Go to your GitHub repository page.
    *   Navigate to **Settings** > **Pages**.
    *   Under the "Source" section, ensure the dropdown is set to **GitHub Actions**. Click "Save" if you made a change.

4.  **Push your code to GitHub:**
    *   Ensure all your code (including the updated `package.json` and any assets like your resume) is committed and pushed to your main branch (e.g., `master` or `main`).
    ```bash
    git add .
    git commit -m "Initial commit with portfolio code"
    git push origin <your-main-branch-name>
    ```

5.  **Monitor the GitHub Actions workflow:**
    *   Go to the **Actions** tab in your GitHub repository.
    *   You should see a workflow named "Deploy to GitHub Pages" running. This workflow will automatically build your React application using `npm run build` and deploy the generated `build` folder to the `gh-pages` branch.
    *   Wait for the workflow run to complete successfully.

6.  **Find your deployment URL:**
    *   Once the workflow completes successfully, go back to the **Settings** > **Pages** section in your repository.
    *   You will see a message like "Your site is published at `https://<your-username>.github.io/<your-repo-name>/`".
    *   Click the link to view your live portfolio.

Your portfolio should now be accessible at the URL provided by GitHub Pages. Every time you push changes to your main branch, the GitHub Action will automatically rebuild and redeploy your site.

## Customization

To customize this portfolio:

1.  Update the personal information in the components (`Hero`, `Footer`, `Contact`, etc.).
2.  Modify the project data in `src/components/Projects.jsx`.
3.  Update the experience data in `src/components/Experience.jsx`.
4.  Change the education details in `src/components/Education.jsx`.
5.  Adjust the skills and certifications in `src/components/About.jsx`.
6.  Update the resume and profile picture paths if you place them differently.
7.  Adjust the contact form action or integrate with a backend service.

## License

This project is open source and available under the [MIT License](LICENSE).
