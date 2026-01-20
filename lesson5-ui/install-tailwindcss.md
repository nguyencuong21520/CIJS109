## Step 1: Install Tailwind CSS
Run the following command to install Tailwind CSS and its Vite plugin:
```bash
npm install tailwindcss @tailwindcss/vite
```

## Step 2: Configure the Vite Plugin
Open `vite.config.js` and update it with the following configuration:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Step 3: Import Tailwind CSS
Open `./src/index.css` and add the following import statement:
```css
@import "tailwindcss";
```
