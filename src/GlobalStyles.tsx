// src/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Open+Sans:wght@400&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #fff;
    line-height: 1.4; /* Reduced line-height for a more compact look */
    font-size: 0.9rem; /* Slightly reduced font size */
  }

  h1, h2, h3 {
    font-family: 'Big Shoulders Display', cursive;
    margin-bottom: 1rem;
    color: #fff;
    font-weight: 800; /* Extra bold */
    text-align: left;
  }

  a {
    color: #fff; /* Change link color to white */
    text-decoration: none;
  }

  a:hover {
    color: #ddd; /* Slightly lighter on hover */
  }

  * {
    box-sizing: border-box;
  }

  /* App Wrapper */
  .app-wrapper {
    text-align: center;
    max-width: 2000px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: left;
    padding: 2rem 0;
    text-align: left;
  }

  /* Title Wrapper */
  .title-wrapper {
    text-align: left;
  }

  /* Title */
  .title {
    font-size: 4rem;
    font-weight: 800; /* Extra bold */
    margin: 0;
  }

  /* Subtitle */
  .subtitle {
    font-size: 1.7rem;
    color: #888;
    margin: 0;
  }

  /* Icon Links */
  .icon-links {
    display: flex;
    gap: 20px;
  }

  .icon-links a {
    font-size: 2rem;
    color: #fff;
  }

  .icon-links a:hover {
    color: #ddd;
  }

  /* Footer */
  .footer-container {
    padding: 2rem 0;
    text-align: center;
    background-color: #111;
  }

  .footer-text {
    color: #aaa;
  }

  /* Section */
  .section {
    padding: 6rem 0 2rem 0; /* Reduced padding */
  }

  /* Section Title */
  .section-title {
    font-family: 'Big Shoulders Display', cursive;
    color: #fff;
    font-weight: 800;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  /* Subtitle Text */
  .subtitle-text {
    font-size: 1.6em;
    color: #888;
    text-align: left;
  }

  .container {
  text-align: center;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app-wrapper {
  display: flex;
  height: 100vh;
  align-items: flex-start;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  text-align: left;
}

/* Sticky left column */
.left-column {
  position: sticky;
  top: 0;
  width: 40%;
  padding-right: 0rem;
  height: 100vh;
  background-color: #111;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

/* Right column that scrolls */
.right-column {
  flex: 1;
  overflow-y: auto; /* Allow vertical scrolling */
  padding-left: 2rem;
  height: 100vh;

    /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.right-column::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.profile-photo {
  width: 230px;
  height: 230px;
  border-radius: 50%; /* Makes the image circular */
  margin-bottom: 20px; /* Adds space below the image */
}

@media (max-width: 850px) {
  .app-wrapper {
    flex-direction: column; /* Stack columns vertically */
  }

  .left-column {
    position: relative; /* No longer sticky */
    width: 100%;
    height: auto; /* Adjust height */
    padding-right: 0; /* Remove right padding */
    padding-top: 1rem; /* Add top padding for spacing */
  }

  .right-column {
    width: 100%; /* Ensure the right column takes full width */
    padding: 1rem; /* Optional padding for better spacing */
  }

  .profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Makes the image circular */
  margin-bottom: 6px; /* Adds space below the image */
  }

    /* Title */
  .title {
    font-size: 2rem;
    font-weight: 800; /* Extra bold */
    margin: 0;
  }

  /* Subtitle */
  .subtitle {
    font-size: 1rem;
    color: #888;
    margin: 0;
  }

  /* Icon Links */
  .icon-links {
    display: flex;
    gap: 15px;
    padding: 0.2rem 0 0.5rem 0;
  }

  .icon-links a {
    font-size: 1.3rem;
    color: #fff;
  }

  .app-wrapper {
    text-align: center;
    max-width: 2000px;
    margin: 0 auto;
    padding: 0;
  }

    /* Header */
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0.1rem 0;
    text-align: left;
  }

    /* Section */
  .section {
    padding: 1rem 0 0rem 0; /* Reduced padding */
  }

  /* Section Title */
  .section-title {
    font-family: 'Big Shoulders Display', cursive;
    color: #fff;
    font-weight: 800;
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  .right-column {
  flex: 1;
  overflow-y: auto; /* Allow vertical scrolling */
  padding: 0;
  height: 100vh;

    /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

  .section-text {
  color: #fff;
  font-size: 0.85rem;
  text-align: left;
}
}
`;
