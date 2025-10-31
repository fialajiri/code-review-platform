# Infrastructure

Docker Compose configurations for local development and production deployment.

## Services

- **PostgreSQL**: Database for the code review platform
- **RabbitMQ**: Message queue with management UI

## Usage

### Development

```bash
# Start services in development mode
docker-compose -f docker-compose.dev.yml up -d

# Stop services
docker-compose -f docker-compose.dev.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Remove volumes (clean slate)
docker-compose -f docker-compose.dev.yml down -v
```

### Production

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Then edit `.env` with your configuration.

## Access

- **PostgreSQL**: `localhost:5432`
- **RabbitMQ AMQP**: `localhost:5672`
- **RabbitMQ Management UI**: `http://localhost:15672`
  - Default credentials: `admin` / `admin`

## Queues

The following queues will be used:
- `review_queue` - For code review tasks
- `test_queue` - For test execution tasks
- `results_queue` - For task results

Note: Queues will be created automatically when first accessed by the application.

