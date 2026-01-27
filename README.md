# Portfolio - Siddhesh Avhad

A modern, premium developer portfolio built with React, TypeScript, and Tailwind CSS. Features a password-protected admin panel for dynamic content management.

## 🚀 Live Demo
[View Live Portfolio](https://your-domain.vercel.app)

## ✨ Features

- **Dynamic Content Management**: Edit all portfolio content through the admin panel
- **Password-Protected Admin**: Secure admin access (default password: `27@27`)
- **Modern Design**: Dark gradient theme with glassmorphism effects
- **Fully Responsive**: Optimized for all devices
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **Type-Safe**: Written in TypeScript for better developer experience

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion (motion)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/siddhesh2709/My-Portfolio.git

# Navigate to project directory
cd My-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔨 Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Admin Access

Access the admin panel at `/admin` route. Default password is `27@27`.

### Admin Features:
- Edit personal information
- Manage projects, skills, and experiences
- Add/remove certifications and achievements
- Update education details
- Customize social links

## 📁 Project Structure

```
src/
├── app/
│   ├── components/     # React components
│   ├── context/        # Portfolio context for state management
│   ├── data.ts         # Initial portfolio data
│   ├── types.ts        # TypeScript definitions
│   └── App.tsx         # Main app component
├── index.css           # Global styles
└── main.tsx            # App entry point
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings (Vite build configuration is auto-detected)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/siddhesh2709/My-Portfolio)

## 📝 Customization

1. **Portfolio Data**: Edit `src/app/data.ts` or use the admin panel
2. **Styling**: Modify Tailwind configuration in `tailwind.config.ts`
3. **Colors**: Update gradient colors in component files
4. **Admin Password**: Change password in `src/app/components/Admin/AdminPanel.tsx` (line 58)

## 📧 Contact

- **Email**: siddhesh111avhad@gmail.com
- **LinkedIn**: [siddhesh2709](https://www.linkedin.com/in/siddhesh2709/)
- **GitHub**: [siddhesh2709](https://github.com/siddhesh2709)

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by Siddhesh Avhad