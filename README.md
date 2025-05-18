# Aurora's PG College CSI Student Branch Website

This is the official website for the Computer Society of India (CSI) Student Branch at Aurora's PG College, Uppal. The website showcases our events, projects, team members, and Instagram feed.

## Features

- Responsive design for all devices
- Instagram feed integration
- Event showcase
- Team member profiles
- Project portfolio
- Blog section
- Contact information

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Configure Instagram Integration:
   - Create a Meta Developer account at [developers.facebook.com](https://developers.facebook.com)
   - Create a new app and configure Instagram Basic Display
   - Add your domain to the OAuth redirect URIs
   - Update the Instagram App ID in `index.html`

3. Run locally:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Or using any other local server of your choice

4. Open in browser:
   - Visit `http://localhost:8000`

## Structure

```
├── index.html          # Main page
├── events.html         # Events page
├── team.html          # Team members page
├── join_us.html       # Membership form
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   ├── instagram-module.js  # Instagram integration
│   └── mobile-menu.js      # Mobile navigation
└── images/            # Image assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

CSI Student Branch - Aurora's PG College, Uppal
- Email: [your-email]
- Website: [your-website] 