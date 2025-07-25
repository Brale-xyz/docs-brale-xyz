# Brale Stablecoin API Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and serves as the official documentation for the Brale Stablecoin API.

## Prerequisites

- **Node.js**: Version 18.0 or higher (see `engines` field in package.json)
- **npm**: Latest version recommended
- **Git**: For version control

## Installation

1. Clone the repository:

```bash
git clone https://github.com/brale-xyz/docs-brale-xyz.git
cd docs-brale-xyz
```

2. Install dependencies:

```bash
npm install
```

## Local Development

Start the local development server:

```bash
npm start
```

This command:

- Starts a local development server at `http://localhost:3000`
- Opens up a browser window automatically
- Enables hot reloading - most changes are reflected live without restarting the server

### Development URLs

The site is configured with the following URLs:

- **Production**: `https://docs.brale.xyz`
- **Development**: `https://dev-docs.brale.xyz`
- **Local**: `http://localhost:3000`

## Available Scripts

### Development

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve the built site locally
- `npm run clear` - Clear build cache

### Code Quality

- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Documentation

- `npm run write-translations` - Extract translatable strings
- `npm run write-heading-ids` - Add heading IDs to markdown files

## Project Structure

```
docs-brale-xyz/
├── docs/                    # Documentation content
│   ├── api/                # Auto-generated API docs from OpenAPI spec
│   ├── coverage/           # Coverage and payment methods
│   ├── guides/             # How-to guides
│   ├── key-concepts/       # Core concepts
│   └── overview/           # Getting started
├── static/
│   ├── img/               # Images and assets
│   └── openapi/           # OpenAPI specification
├── src/
│   ├── components/        # Custom React components
│   ├── css/              # Custom styles
│   └── theme/            # Theme customizations
└── docusaurus.config.ts  # Main configuration
```

## Key Features

- **OpenAPI Integration**: API documentation is auto-generated from `static/openapi/api-brale-xyz.yaml`
- **Multi-language Code Examples**: Supports JavaScript, Python, cURL, C#, Go, Ruby, PHP, Java, PowerShell, Dart, and more
- **Search Integration**: Includes LLM-powered search via `@signalwire/docusaurus-plugin-llms-txt`
- **Analytics**: Plausible analytics integration
- **Cloudflare Pages Deployment**: Configured for Cloudflare Pages hosting

## Build

Generate static content for production:

```bash
npm run build
```

This command generates static content into the `build` directory that can be served using any static content hosting service.

## Deployment

This project is configured for deployment to **Cloudflare Pages**.

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

This command:

1. Builds the site using `npm run pages:build`
2. Deploys to Cloudflare Pages using `wrangler pages deploy`

### Preview Deployment

To preview the production build locally:

```bash
npm run preview
```

### Environment Setup

For deployment, ensure you have:

- **Wrangler CLI**: Install with `npm install -g wrangler`
- **Cloudflare Account**: Configured with appropriate permissions
- **Environment Variables**: Set up in Cloudflare Pages dashboard if needed

## Contributing

1. Make your changes in a feature branch
2. Ensure code quality checks pass:
   ```bash
   npm run typecheck
   npm run lint
   npm run format:check
   ```
3. Test your changes locally with `npm start`
4. Submit a pull request

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**

```bash
npm run typecheck
```

**Linting issues:**

```bash
npm run lint:fix
npm run format
```

**Cache issues:**

```bash
npm run clear
```

**OpenAPI generation issues:**

- Ensure `static/openapi/api-brale-xyz.yaml` exists and is valid
- Check that the OpenAPI spec is properly formatted

### Getting Help

- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Review the [OpenAPI plugin documentation](https://github.com/cloud-annotations/docusaurus-openapi)
- Open an issue in this repository for project-specific questions
