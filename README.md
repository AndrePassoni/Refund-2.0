# Refund 2.0 Web

A front-end application for expense reimbursement requests, built with React, TypeScript, Vite, and Tailwind CSS v4.

This project was developed during the **Tailwind CSS module** of the **Rocketseat Fullstack course**.

## Overview

The app simulates a reimbursement flow with role-based navigation:

- **Employee flow**: create a reimbursement request and see a confirmation page.
- **Manager flow**: view submitted requests in a dashboard and open request details.
- **Auth flow**: sign in and sign up screens.

At the moment, data is mocked on the front end (no backend integration yet).

## Main Features

### Authentication UI

- Sign in form
- Sign up form
- Dedicated authentication layout

### Employee Experience

- Reimbursement request form
- Expense category selection
- File upload input for receipts
- Confirmation screen after submit

### Manager Experience

- Requests dashboard
- Search input (UI behavior prepared)
- Pagination controls
- Request item navigation to details view

### UI and Design System

- Tailwind CSS v4 with custom theme tokens
- Shared reusable components (Button, Input, Select, Upload, Pagination)
- Utility-based layout and spacing
- SVG icon assets for categories and controls

## Tech Stack

- **React 19**
- **TypeScript 6**
- **Vite 8**
- **Tailwind CSS 4**
- **React Router 8**
- **clsx + tailwind-merge**

## Project Structure

```text
.
├─ public/
│  └─ icon.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ AppLayout.tsx
│  │  ├─ AuthLayout.tsx
│  │  ├─ Button.tsx
│  │  ├─ Header.tsx
│  │  ├─ Input.tsx
│  │  ├─ Loading.tsx
│  │  ├─ Pagination.tsx
│  │  ├─ RefundItem.tsx
│  │  ├─ Select.tsx
│  │  └─ Upload.tsx
│  ├─ pages/
│  │  ├─ Confirm.tsx
│  │  ├─ Dashboard.tsx
│  │  ├─ NotFound.tsx
│  │  ├─ Refund.tsx
│  │  ├─ SignIn.tsx
│  │  └─ SignUp.tsx
│  ├─ routes/
│  │  ├─ auth-routes.tsx
│  │  ├─ EmployeeRoutes.tsx
│  │  ├─ index.tsx
│  │  └─ ManagerRoutes.tsx
│  ├─ utils/
│  │  ├─ categories.ts
│  │  ├─ classMerge.ts
│  │  └─ formatCurrency.ts
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Routing

The route selection is currently based on a mocked session role in `src/routes/index.tsx`.

- **Auth routes**
  - `/` -> SignIn
  - `/signup` -> SignUp
- **Employee routes**
  - `/` -> Refund form
  - `/confirm` -> Confirm page
- **Manager routes**
  - `/` -> Dashboard
  - `/refund/:id` -> Refund details

## Styling and Tailwind Theme

Global styles are in `src/index.css`, including:

- Tailwind import
- Custom `@theme` tokens for:
  - Grayscale palette
  - Green palette
  - Extra-small text token
  - Default font family (Open Sans)
- Native select arrow customization
- Scrollbar customization

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ (recommended)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

From `package.json`:

- `npm run dev` -> starts Vite dev server
- `npm run build` -> runs TypeScript build check and Vite build
- `npm run preview` -> previews the production build

## Current Notes / Limitations

This is a classroom project focused on Tailwind CSS and front-end composition. Some parts are intentionally simplified or still in progress:

- Authentication is not connected to a real API.
- Role/session logic is mocked in routing.
- Dashboard data is mocked.
- Form submission currently logs to console / local navigation.

If TypeScript strict checks are enabled with no-unused rules, there may be warnings/errors related to placeholders while the app is still being built.

## Learning Context

This repository is part of the Rocketseat Fullstack learning path and was used to practice:

- Tailwind CSS v4 theme customization
- Component composition in React
- Layout and form design from Figma references
- Route organization by user role
- TypeScript in a Vite-based React project

## Possible Next Steps

- Integrate a backend API for auth and reimbursements
- Replace mocked role/session with real auth state
- Add form validation with schema-based rules
- Add request status workflow (pending, approved, rejected)
- Add unit/component tests

## Author

Developed by André Passoni during Rocketseat Fullstack studies.
