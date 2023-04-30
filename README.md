# HireUp Job Posting Site

Hire up is a job posting site that connects tech freelancers to those in need of their valuable skills.

## Table of Contents

1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Demo](#demo)
3. [How to Install and Run this Project](#how-to-install-and-run-this-project)
4. [Future Enchancements](#future-enhancements)

# Project Description

We created this project from scratch over the course of a week as part of the Hack Reactor Software Engineering Immersive. We were given a “client” that requested that we build a job posting site where freelancers could post their profiles, and those seeking talent could post business proposals.

# Technologies Used

![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Demo

## Landing Page
![HireUp Landing Page Demo 2](https://user-images.githubusercontent.com/93889833/235370770-3bde8c7e-c2e0-448d-94c2-bedd8efb7888.gif)
## Explore Pages
![HireUp Explore Page Demo](https://user-images.githubusercontent.com/93889833/235371681-af2001db-236d-4a23-9487-cda14abaf4ac.gif)
## Profile Page
![HireUp Profile Page Demo](https://user-images.githubusercontent.com/93889833/235371792-4ad6860e-a66b-45da-b39e-da37b58700e1.gif)
## Chat Page
![HireUp Chat Page Demo](https://user-images.githubusercontent.com/93889833/235372128-ea1d4808-11ea-4610-bc1a-ad1e3a5f3ee5.gif)
## Freelancer and Business Proposal Form Pages
![HireUp Freelancer and Proposals Form Pages Demo 2](https://user-images.githubusercontent.com/93889833/235373369-b7f4de7e-ca1c-4c53-b278-5fa828ab27ec.gif)

# How to Install and Run this Project

1. Clone the repo to your computer in your desired folder

`git clone https://github.com/TeamRubys/HireUP.git`

2. Install all dependencies by running

`npm install`

3. If you don't already have PostgreSQL installed on your machine, you will need to do so. You can refer to the [Postgres Documentation](https://www.postgresql.org/docs/current/tutorial-install.html) to assist you if need.

4. Once PostgreSQL is up and running, you can create the database by running `i\` and copying your machine's path to `server/db/schema.sql` in your terminal where Postgres is running.

5. Create an Auth0 account if you don't already have one. You will need to create an app on their dashboard. You can refer to the [Auth0 documentation](https://auth0.com/docs) to assist you.

6. Create a Twilio account if you don't already have one. You can refer to the [Twilio documentation](https://www.twilio.com/docs)

7. Refer to the `example.env` file, and create your own `.env` file, filling in the appropriate values for your Postgres connection, Auth0 account, and Twilio account.

8. It's time to start your development server! Run

`npm run dev`

in your command line, and check out the project at localhost:3000 in your browser. Have fun!

# Future Enhancements

Given the extremely tight turnaround we faced and the high standards we hold for ourselves, there are a few things we would love to improve when time allows. Some of these include:

 * Robust unit testing
 * Create cohesive styling accross pages
 * Integrate video chat with user messaging
 * Leverage the Next.js integration to deploy on Vercel
