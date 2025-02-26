# Portfolio Project Dev Guide

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on all files
- `npm run lint src/components/SomeComponent.jsx` - Lint specific file
- `npm run preview` - Preview production build locally

## Code Style
- **Imports**: Group imports: React core, external libs, components, styles
- **Components**: Use function components with arrow syntax and named exports
- **Types**: Use React's prop types or TypeScript interfaces for component props
- **State**: Use React hooks (useState, useEffect) for state management
- **Naming**: PascalCase for components, camelCase for variables and functions
- **Formatting**: Use consistent 2-space indentation and semicolons
- **Error Handling**: Use try/catch for async operations, provide fallbacks
- **CSS**: Use TailwindCSS classes for styling with className prop
- **File Structure**: Group related components in folders with index.js exports