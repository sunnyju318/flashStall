/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // FlashStall Brand Colors
      colors: {
        // Core shadcn/ui colors with FlashStall values
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // FlashStall Specific Colors (Direct Hex for convenience)
        flashstall: {
          pink: '#FFB6C1', // Main Pink
          blue: '#1F62B9', // Main Blue
          cream: '#F0ECE0', // Main Cream
          ink: '#161513', // Main Ink
          red: '#EF4443', // Sub Red
          green: '#49A870', // Sub Green
          white: '#FFFFFF', // Surface White
          muted: '#CFCFCF', // Muted
          border: '#E4E0D6', // Border Light
        },
      },

      // FlashStall Typography System
      fontFamily: {
        heading: ['IBM Plex Serif', 'serif'], // H1, H2, H3
        body: ['IBM Plex Mono', 'monospace'], // Body text, paragraphs
        ui: ['Courier Prime', 'monospace'], // Buttons, tags, meta
        mono: ['IBM Plex Mono', 'monospace'], // Code, numbers
      },

      // FlashStall Responsive Font Sizes
      fontSize: {
        // Headings (IBM Plex Serif)
        'h1-mobile': ['28px', { lineHeight: '1.2', fontWeight: '400' }],
        'h1-desktop': ['48px', { lineHeight: '1.2', fontWeight: '400' }],
        'h2-mobile': ['24px', { lineHeight: '1.25', fontWeight: '400' }],
        'h2-desktop': ['36px', { lineHeight: '1.25', fontWeight: '400' }],
        'h3-mobile': ['20px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '400' }],

        // Body Text (IBM Plex Mono)
        'body-mobile': ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        'body-desktop': ['18px', { lineHeight: '1.6', fontWeight: '400' }],

        // UI Elements (Courier Prime)
        'button-mobile': ['16px', { lineHeight: '1.2', fontWeight: '400' }],
        'button-desktop': ['18px', { lineHeight: '1.2', fontWeight: '400' }],
        'meta-mobile': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'meta-desktop': ['16px', { lineHeight: '1.4', fontWeight: '400' }],
      },

      // FlashStall Border Radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ⏱FlashStall Animations
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },

      // FlashStall Spacing
      spacing: {
        18: '4.5rem', // 72px - FlashStall specific
        22: '5.5rem', // 88px - FlashStall specific
      },
    },
  },
  plugins: [],
};
