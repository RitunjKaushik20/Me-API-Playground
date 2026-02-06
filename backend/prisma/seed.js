require("dotenv").config()
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  await prisma.project.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.profile.deleteMany()

  const profile = await prisma.profile.create({
    data: {
      name: "Ritunj Kaushik",
      email: "ritunjkaushik@gmail.com",
      education: "B.Tech in Computer Science Engineering, Galgotias University (CGPA 7.0)",
      github: "https://github.com/RitunjKaushik20",
      linkedin: "https://www.linkedin.com/in/ritunj-kaushik-75942132b/",

      skills: {
        create: [
          
          { name: "Java" },
          { name: "JavaScript" },
          { name: "TypeScript" },

          
          { name: "React.js" },
          { name: "Vite" },
          { name: "Next.js" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Tailwind CSS" },

     
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "REST APIs" },
          { name: "JWT Authentication" },

       
          { name: "MongoDB" },
          { name: "PostgreSQL" },
          { name: "Prisma ORM" },

          
          { name: "AWS" },
          { name: "Docker" },
          { name: "GitHub Actions" },
          { name: "Vercel" },
          { name: "Render" },
          { name: "Git" },
          { name: "Postman" },

        
          { name: "Data Structures" },
          { name: "Algorithms" },
          { name: "OOP" },
          { name: "DBMS" },
          { name: "Operating Systems" }
        ]
      },

      projects: {
        create: [
          {
            title: "Real Estate Property Management System",
            description:
              "A full-stack property management platform to manage users, properties, and leads with secure authentication and role-based access. Built using Node.js, Express, Prisma, MongoDB Atlas, JWT authentication, Cloudinary image uploads, and deployed on Vercel and Render.",
            link: "https://property-management-backend-six.vercel.app/",
            skills: {
              connect: [
                { name: "Node.js" },
                { name: "Express.js" },
                { name: "MongoDB" },
                { name: "JWT Authentication" },
                { name: "Prisma ORM" },
                { name: "Vercel" },
                { name: "Render" },
                { name: "REST APIs" }
              ]
            }
          },
          {
            title: "Employee Management System",
            description:
              "A role-based employee management system where managers assign tasks and employees accept, update, and complete work. Built with React.js and Tailwind CSS with dashboards and task tracking.",
            link: "https://github.com/RitunjKaushik20/Employee-Management-System",
            skills: {
              connect: [
                { name: "React.js" },
                { name: "Tailwind CSS" },
                { name: "Node.js" },
                { name: "Express.js" },
                { name: "JavaScript" }
              ]
            }
          },
          {
            title: "Full Stack Blogging Platform (Medium Clone)",
            description:
              "A secure blogging platform with authentication, protected routes, and PostgreSQL-based content management using Prisma ORM with cloud-deployed backend APIs.",
            link: "",
            skills: {
              connect: [
                { name: "React.js" },
                { name: "Node.js" },
                { name: "Express.js" },
                { name: "PostgreSQL" },
                { name: "Prisma ORM" },
                { name: "JWT Authentication" },
                { name: "TypeScript" }
              ]
            }
          }
        ]
      }
    }
  })

  console.log("Database seeded successfully 🚀")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
