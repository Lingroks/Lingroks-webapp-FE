export default function sitemap() {
    const baseUrl = "https://lingroks.live";
  
    return [
      { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/auth/login`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/auth/signup`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/dashboard`, lastModified: new Date().toISOString() },
    ];
  }
  