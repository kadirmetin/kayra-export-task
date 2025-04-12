# Micro Front-End Based E-Commerce App

This project is a complete solution that demonstrates modern frontend development practices using React, Next.js, Webpack and micro frontend architecture.

## Technologies

#### Frameworks & Libraries:

- React
- Next.js
- Ant Design

#### Languages:

- TypeScript
- JavaScript

#### State Management:

- RTK Query (Redux Toolkit Query)
- Context API

#### API:

- Fake Store API

#### Micro Frontend Architecture:

- Webpack 5 Module Federation

## Project Architecture

#### Host Application

- Built with: Next.js
- Role: Acts as the central hub, responsible for integrating and communicating with remote applications.
- Features:
  - Fetches and lists products from the API.
  - Integrates with the remote basket application to display selected products.

#### Remote Applications

- Products Remote:

  - Built using Next.js.
  - Manages product data fetching from the external API and communicates with the host application.

- Basket Remote:
  - Developed with React.
  - Handles the listing and management of products selected by the user.
  - Integrates with the host to update and display the basket content.

## Instalation

1. Clone the Repository

```bash
git clone https://github.com/kadirmetin/kayra-export-task.git
cd kayra-export-task
```

2. Install Dependencies

```bash
pnpm install
```

3. Environment Variables

Create an .env file in the host and product-remote folder and configure the required environment variables.

```bash
NEXT_PRIVATE_LOCAL_WEBPACK=true
```

## Running the Project

```bash
pnpm run dev
```

## Development Process

- **Coding Standards:** I followed SOLID principles to ensure that each component has a single responsibility and is easily extensible.

- State Management:** RTK Query is used to optimize API calls and manage state consistently.

- Responsive Design:** I adapted to the provided Figma design template to ensure a responsive and intuitive interface.

- Code Documentation:** I thoroughly commented the code, especially for critical design decisions such as responsive behavior and component interactions.

## Branching Strategy

- Feature development and testing occur on the test/v1.0.0 branch.
- Upon completion and testing, merge into prod/v1.0.0.

##### Commit Messages

Ensure that commit messages are detailed and follow standard formatting, including references to any issues or tasks worked on.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
