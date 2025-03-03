# Multi-Step Form Application with MaterialUI, React Hook Form And TypeScript

## Overview

This project is a React application built with Vite.js and TypeScript. It uses several packages to manage functionality, and ensuring smooth application configuration. The application runs on a local server with the port defined in the `.env` file.

## Features

- Built with TypeScript for type safety and maintainability.
- Handles multi step forms.
- Supports useFormHook validation.

---

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Vite.js](https://vite.dev/) 
- [npm](https://www.npmjs.com/)

### Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm run dev
   ```

4. Access the application in your browser at:

   ```
   http://localhost:<PORT>
   ```

---


## Project Structure

```
├── src
│   ├── assets            # All assets of application eg:- images,icons 
│   ├── constant          # All constant data and demo data
│   ├── components        # Small block compomnents of material UI
│   ├── form-components   # Components of form ie. Input, Select
│   ├── schema            # Form validation schema of react hook form
│   └── types             # All type of form
├── .gitignore            # Files and directories to ignore in Git
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## Scripts

The following npm scripts are available:

- `npm install `: Install all packages and its dependencies.
- `npm run dev`: Starts the application.

---

## Key Packages

Here are the main packages used in this project:

### Dependencies

- **react-hook-form**: Library for managing forms in React with minimal re-renders.
- **@mui/material**: Material UI component library for building user interfaces.
- **@mui/icons-material**: Collection of Material UI icons for UI design.
- **vite**: Fast frontend build tool and development server for modern web applications.

### Dev Dependencies

- **typescript**: Enables development using TypeScript.
- **ts-node**: Executes TypeScript directly without pre-compilation.
- **@types/node**: Type definitions for Node.js.

---

