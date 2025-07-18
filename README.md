# X-Draw

A collaborative drawing and sketching application that brings your ideas to life with hand-drawn aesthetics and real-time collaboration features.


## 🎨 Features

### ✏️ **Hand-Drawn Aesthetics**
Create sketches that look and feel like they were drawn by hand with our unique algorithm.

### 👥 **Real-Time Collaboration**
Work together with your team in real-time. See cursors and changes as they happen.

### ⚡ **High Performance**
Built for speed and performance. No lag, no delays, just smooth drawing experience.

### 📤 **Multiple Export Options**
Export your creations as PNG, SVG, or share a link. Your work, your way.

### 🔒 **Privacy First**
Your data stays private. We don't store or track your drawings without permission.

### 📱 **Responsive Design**
Use on desktop, tablet, or mobile. Responsive design that adapts to any screen.

## 🚀 Live Demo

Check out the live application: [https://x-draw.vercel.app/](https://x-draw.vercel.app/)

## 🛠️ Tech Stack

This project is built using:

- **Framework**: Next.js
- **Language**: TypeScript
- **Monorepo**: Turborepo
- **Deployment**: Vercel
- **Styling**: [Your CSS framework - please specify]
- **Real-time**: [Your WebSocket/real-time solution - please specify]

## 📁 Project Structure

This is a Turborepo monorepo containing:

```
├── apps/
│   ├── web/          # Main X-Draw application
│   └── docs/         # Documentation site
├── packages/
│   ├── ui/           # Shared React component library
│   ├── eslint-config/# ESLint configurations
│   └── typescript-config/ # TypeScript configurations
└── turbo.json        # Turborepo configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nikuunj/x-draw.git
cd x-draw
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
# With global turbo installed (recommended)
pnpm run dev

# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build all apps and packages:

```bash
# With global turbo
pnpm run build
#or
npm run build

```
## 📝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request


## 👨‍💻 Author

**Nikuunj** - [GitHub](https://github.com/Nikuunj)

## 🤝 Support

If you like this project, please consider giving it a ⭐ on GitHub!

For support, please open an issue on the [GitHub repository](https://github.com/Nikuunj/x-draw/issues).

---

**Built with ❤️ using Next.js and Turborepo**
