# Web Application CI/CD Automation with Jenkins, Git, and Docker

![CI/CD Pipeline]![Screenshot (140)](https://github.com/Achanandhi-M/Web-Application-project/assets/110651321/f283f467-835b-4f23-b056-20089939aa37)
This project demonstrates how to automate the deployment pipeline of a web application using Jenkins, Git, and Docker. The final Docker image is uploaded to an Amazon EC2 instance for deployment.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Jenkins Configuration](#jenkins-configuration)
  - [Git Repository Setup](#git-repository-setup)
  - [Docker Image Creation](#docker-image-creation)
- [Continuous Integration/Continuous Deployment (CI/CD)](#continuous-integrationcontinuous-deployment-cicd)
- [Deploying to Amazon EC2](#deploying-to-amazon-ec2)
- [Contributing](#contributing)
- [License](#license)

## Overview

In this project, we aim to automate the deployment process of a web application. The pipeline involves the following steps:
1. Code is pushed to a Git repository.
2. Jenkins monitors the repository and triggers a build when changes are detected.
3. Jenkins builds a Docker image of the web application.
4. The Docker image is pushed to a Docker registry.
5. An Amazon EC2 instance pulls the Docker image and deploys the application.

## Prerequisites

Before setting up the CI/CD pipeline, make sure you have the following prerequisites installed:
- Jenkins
- Git
- Docker
- AWS Account (for Amazon EC2)

## Setup

### Jenkins Configuration

1. Install Jenkins on your server or machine.
2. Configure Jenkins to work with your Git repository.
3. Set up Jenkins to build the project whenever changes are pushed to the repository.

### Git Repository Setup

1. Create a Git repository to host your web application code.
2. Add a webhook in your Git repository settings to notify Jenkins on code changes.

### Docker Image Creation

1. Write a Dockerfile to describe the web application's containerization.
2. Create a Jenkins job to build the Docker image and push it to a Docker registry (e.g., Docker Hub).

## Continuous Integration/Continuous Deployment (CI/CD)

This project focuses on automating the CI/CD pipeline with Jenkins. The pipeline includes:
- Code integration from Git.
- Building a Docker image.
- Pushing the Docker image to a registry.

To customize and set up your Jenkins pipeline, refer to the Jenkins documentation and create Jenkins pipeline scripts.

## Deploying to Amazon EC2

1. Set up an Amazon EC2 instance with Docker installed.
2. Pull the Docker image from your Docker registry.
3. Run the Docker container on your EC2 instance.

## Contributing

We welcome contributions to this project. Please feel free to submit issues, pull requests, or provide suggestions for improvement.

## License

This project is licensed under the [MIT License](LICENSE).
