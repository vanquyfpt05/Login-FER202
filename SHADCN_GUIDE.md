# ShadCN UI Integration Guide

## Overview
This Next.js application now uses **Tailwind CSS v4** and **ShadCN UI** components for a modern, consistent design system.

## What's Been Installed

### ShadCN UI Components
The following ShadCN UI components have been added to the project:

1. **Button** (`components/ui/button.tsx`)
   - Multiple variants: default, destructive, outline, secondary, ghost, link
   - Multiple sizes: default, sm, lg, icon, icon-sm, icon-lg
   - Used in: LoginScreen, Dashboard

2. **Card** (`components/ui/card.tsx`)
   - Components: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
   - Used in: LoginScreen (main container), Dashboard (stats cards)

3. **Badge** (`components/ui/badge.tsx`)
   - Used in: Dashboard (trend indicators)

4. **Avatar** (`components/ui/avatar.tsx`)
   - Components: Avatar, AvatarFallback
   - Used in: Dashboard (user profile display)

5. **Input** (`components/ui/input.tsx`)
   - Ready to use for form inputs

## Configuration Files

### `components.json`
ShadCN configuration file that defines:
- Style: "new-york"
- Base color: "neutral"
- CSS variables: enabled
- Icon library: lucide-react
- Path aliases for easy imports

### `app/globals.css`
Enhanced with:
- Tailwind CSS v4 imports
- ShadCN theme variables (light and dark mode)
- Custom CSS variables for colors and radius
- Your existing glass morphism styles
- Custom animations

### `tsconfig.json`
Path aliases configured:
- `@/*` maps to the root directory
- Allows imports like `@/components/ui/button`

## How to Use ShadCN Components

### Importing Components
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
```

### Button Examples
```tsx
// Default button
<Button>Click me</Button>

// With variant
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// With size
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icon
<Button>
  <Plus size={16} />
  New Task
</Button>
```

### Card Examples
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badge Examples
```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
```

### Avatar Examples
```tsx
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Adding More Components

To add more ShadCN components, use:
```bash
npx shadcn@latest add [component-name]
```

Popular components to consider:
- `dialog` - Modal dialogs
- `dropdown-menu` - Dropdown menus
- `select` - Select inputs
- `toast` - Toast notifications
- `tabs` - Tab navigation
- `table` - Data tables
- `form` - Form components with validation
- `alert` - Alert messages
- `checkbox` - Checkboxes
- `radio-group` - Radio buttons
- `switch` - Toggle switches
- `slider` - Range sliders
- `progress` - Progress bars

Example:
```bash
npx shadcn@latest add dialog toast tabs
```

## Customization

### Theming
Colors and theme variables are defined in `app/globals.css` under:
- `:root` - Light mode colors
- `.dark` - Dark mode colors

You can customize these CSS variables to match your brand:
```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... more variables */
}
```

### Component Styling
All ShadCN components accept a `className` prop for custom styling:
```tsx
<Button className="bg-blue-600 hover:bg-blue-500">
  Custom Styled Button
</Button>
```

## Integration Examples

### LoginScreen Component
- Uses `Card` for the main container
- Uses `Button` for social login and submit buttons
- Maintains custom glassmorphism styling

### Dashboard Component
- Uses `Card` for stats display
- Uses `Badge` for trend indicators
- Uses `Avatar` for user profile
- Uses `Button` for actions and navigation

## Benefits of ShadCN UI

1. **Consistency** - Unified design system across the app
2. **Accessibility** - Built with accessibility in mind
3. **Customizable** - Full control over styling
4. **Type-safe** - Full TypeScript support
5. **No bloat** - Only includes components you use
6. **Copy-paste friendly** - Components are in your codebase, not node_modules

## Resources

- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Radix UI Primitives](https://www.radix-ui.com) (underlying component library)
- [Lucide Icons](https://lucide.dev) (icon library)

## Development

Your dev server is already running. Changes to components will hot-reload automatically.

```bash
npm run dev
```

## Next Steps

1. Explore more ShadCN components
2. Customize the theme colors to match your brand
3. Add dark mode toggle functionality
4. Create reusable composite components using ShadCN primitives
