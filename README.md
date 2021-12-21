# Multi-Robot control systems based on Cloud Computing

This is the basic backend with one endpoint for logging hardware sensor data and
contains landing page for explaining the principle of the course project.

## Installation

### Build the docker container

```bash
docker build -t backend .
```

### Running docker container

```bash
docker run -e MONGOOSE_CONNECTION_STRING="" -p 80:8080 backend
```
