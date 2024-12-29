# fileNames.md

```markdown
ephemera-codex/
├── public/
│   └── **index.html** - *Main HTML file for the web application. This file serves as the entry point for the browser.*
├── src/
│   ├── components/
│   │   └── **GregOSBootScreen.js** - `Handles the initial boot sequence animation, displays system messages, and simulates error logging to the console.`
│   │   └── **Navigation.js** - `Manages the main navigation menu and routing within the application.`
│   │   ├── **INT3RN4L_3RR0R_ST0RY/** - *Directory containing components related to the narrative chapters.*
│   │   │   └── **Chapter1.js** - *Renders Chapter 1 content, including text, visuals, and interactive elements. (Placeholder)*
│   │   ├── **ProjectAmoratus/** - *Directory containing components related to Project Amoratus schematics and information.*
│   │   │   └── **QuantumMind.js** - `Contains logic and data related to the fictional QuantumMind component. (Placeholder)*
│   │   └── **EthicalConsiderations/** - *Directory containing components related to the ethical and philosophical aspects of the project.*
│   │   │   └── **EthicalConsiderationsMatrix.js** - *Renders the Ethical Considerations Matrix, including dilemmas and links to relevant content. (Placeholder)*
│   │   └── **Dashboard.js** - *Component for the main dashboard, providing an overview and access to other sections. (Placeholder)*
│   ├── services/
│   │   └── **api.js** - `Provides functions for making API calls to external services (if applicable). Currently not used as there are no external APIs.`
│   ├── **App.js** - *Main application component; handles routing, overall layout, and integration of the GregOSBootScreen.*
│   └── **styles.css** - `Contains global styles for the application, including Tailwind CSS directives and custom styles.`
├── .gitignore - *Specifies files and folders to be ignored by Git (e.g., node_modules, build directories).*
├── fileNames.md - *This file! Provides a map of the project's file and folder structure with descriptions.*
├── functional-requirements.md - *Detailed functional requirements document for the project, outlining features, functionalities, and technical specifications.*
├── architectural-notes.md - *Documents key architectural decisions, technology stack choices, design patterns, and conventions used in the project.*
├── package.json - *Defines project dependencies (e.g., React, Tailwind CSS) and scripts for building and running the application.*
└── gemini/
    └── **gemini_system_prompt.md** - *Contains the system prompt used to initialize the Gemini chat conversation, providing project context and instructions.*
    └── **gregos_boot_prompt.md** - *Contains the initial prompt for Gemini regarding the implementation of the GregOS Boot Screen feature.*
```

