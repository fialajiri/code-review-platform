# Workers

FastAPI workers for the Code Review Platform.

## Features

- AI Agents for code analysis
- Code analysis workers
- RabbitMQ consumers (to be added)

## Setup

```bash
# Activate virtual environment
source .venv/bin/activate  # or .venv\Scripts\activate on Windows

# Install dependencies
pnpm install  # or pip install -r requirements.txt
```

## Development

```bash
# Run in development mode
pnpm dev

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format

# Type checking
pnpm check-types
```

## Environment Variables

Create a `.env` file with required environment variables.

