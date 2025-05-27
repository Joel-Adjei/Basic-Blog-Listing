import React, {createContext, useContext, useState} from 'react'

export const BlogContext = createContext()

export const BlogContextProvider =({children})=>{
    const [blogs , setBlogs] = useState( [
        {
            id: 1,
            title: "Getting Started with React",
            content: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of setting up a React project, creating components, and managing state with hooks like useState and useEffect.",
            summary: "Learn the fundamentals of React and how to start building applications with this powerful library.",
            date: "2023-05-15"
        },
        {
            id: 2,
            title: "CSS Grid Layout: A Comprehensive Guide",
            content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward. We'll explore grid-template-areas, fr units, and responsive design techniques.",
            summary: "Master CSS Grid Layout with this complete guide to creating modern web layouts.",
            date: "2023-06-22"
        },
        {
            id: 3,
            title: "JavaScript ES6 Features You Should Know",
            content: "ES6 introduced many new features to JavaScript that make the language more powerful and easier to work with. We'll explore arrow functions, template literals, destructuring, spread/rest operators, and classes.",
            summary: "Discover the essential ES6 features that every JavaScript developer should be using.",
            date: "2023-07-10"
        },
        {
            id: 4,
            title: "Building RESTful APIs with Node.js",
            content: "Learn how to create robust RESTful APIs using Node.js and Express. We'll cover routing, middleware, error handling, authentication with JWT, and best practices for API design.",
            summary: "A practical guide to building professional APIs with Node.js and Express.",
            date: "2023-08-05"
        },
        {
            id: 5,
            title: "The Complete Guide to Docker for Developers",
            content: "Docker has revolutionized how we develop and deploy applications. This guide will walk you through containerization basics, Dockerfiles, volumes, networking, and Docker Compose for multi-container apps.",
            summary: "Everything you need to know to start using Docker in your development workflow.",
            date: "2023-09-18"
        },
        {
            id: 6,
            title: "Introduction to TypeScript",
            content: "TypeScript adds static typing to JavaScript, improving code quality and developer experience. We'll cover interfaces, types, generics, and how to migrate a JavaScript project to TypeScript.",
            summary: "Why TypeScript is gaining popularity and how to use it effectively.",
            date: "2023-10-12"
        },
        {
            id: 7,
            title: "State Management in React with Redux",
            content: "Redux provides predictable state management for React applications. Learn about actions, reducers, the Redux store, and how to use Redux Toolkit to simplify your code.",
            summary: "Managing global state in large React applications using Redux.",
            date: "2023-11-03"
        },
        {
            id: 8,
            title: "Responsive Web Design Best Practices",
            content: "Building websites that work well on all devices is crucial. We'll discuss mobile-first design, flexible grids, media queries, and modern CSS techniques for responsiveness.",
            summary: "Key principles for creating websites that adapt to any screen size.",
            date: "2023-12-14"
        },
        {
            id: 9,
            title: "Getting Started with Next.js",
            content: "Next.js is a React framework that enables server-side rendering and static site generation. We'll explore file-based routing, API routes, and deployment options.",
            summary: "Why Next.js is a great choice for production-ready React applications.",
            date: "2024-01-09"
        },
        {
            id: 10,
            title: "Python for Web Development",
            content: "Python isn't just for data science—it's great for web development too. Learn about Flask and Django, two popular frameworks for building web applications in Python.",
            summary: "How to use Python to build powerful web applications.",
            date: "2024-02-17"
        },
        {
            id: 11,
            title: "Authentication in Modern Web Apps",
            content: "Security is critical in web development. We'll compare session-based auth, JWT, OAuth, and discuss best practices for implementing secure authentication.",
            summary: "Different approaches to handling user authentication securely.",
            date: "2024-03-05"
        },
        {
            id: 12,
            title: "GraphQL vs REST: Which to Choose?",
            content: "GraphQL offers a flexible alternative to REST APIs. We'll compare the two approaches, discuss when to use each, and show how to implement a GraphQL API with Apollo Server.",
            summary: "Understanding the differences between GraphQL and REST APIs.",
            date: "2024-04-11"
        },
        {
            id: 13,
            title: "Web Performance Optimization",
            content: "Fast websites provide better user experiences and rank higher in search. Learn about lazy loading, code splitting, image optimization, and other performance techniques.",
            summary: "Practical ways to make your websites load faster.",
            date: "2024-05-22"
        },
        {
            id: 14,
            title: "Introduction to Machine Learning with Python",
            content: "Machine learning is transforming industries. We'll introduce scikit-learn, cover basic algorithms, and show how to train your first model.",
            summary: "A beginner-friendly introduction to machine learning concepts.",
            date: "2024-06-08"
        },
        {
            id: 15,
            title: "Building Microservices with Node.js",
            content: "Microservices architecture breaks applications into small, independent services. Learn about design patterns, inter-service communication, and deployment strategies.",
            summary: "How to design and implement microservices using Node.js.",
            date: "2024-07-19"
        },
        {
            id: 16,
            title: "The Future of Web Development",
            content: "Web development is constantly evolving. We'll explore emerging trends like WebAssembly, Progressive Web Apps, and the increasing role of AI in development.",
            summary: "What's coming next in the world of web development?",
            date: "2024-08-30"
        },
        {
            id: 17,
            title: "Database Design Best Practices",
            content: "Good database design is crucial for application performance. Learn about normalization, indexing, query optimization, and when to use SQL vs NoSQL databases.",
            summary: "How to design efficient, scalable database structures.",
            date: "2024-09-14"
        },
        {
            id: 18,
            title: "CI/CD Pipelines for JavaScript Projects",
            content: "Continuous Integration and Deployment automates your testing and release processes. We'll set up GitHub Actions to test, build, and deploy a Node.js application.",
            summary: "Automating your development workflow with CI/CD.",
            date: "2024-10-05"
        },
        {
            id: 19,
            title: "Accessibility in Web Development",
            content: "Building accessible websites ensures everyone can use them. Learn about ARIA attributes, semantic HTML, keyboard navigation, and accessibility testing tools.",
            summary: "Making the web more inclusive through accessibility best practices.",
            date: "2024-11-21"
        },
        {
            id: 20,
            title: "Serverless Architecture with AWS Lambda",
            content: "Serverless computing allows you to run code without managing servers. We'll build and deploy a serverless function using AWS Lambda and API Gateway.",
            summary: "Introduction to serverless computing and its benefits.",
            date: "2024-12-10"
        }
    ]
)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0]
    });


    const trim = (content , length) => {
        if(content.length <= length){
            return content
        }
        return content.substring(0 , length ) + "...";
    };


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return(
        <BlogContext.Provider value={{blogs , setBlogs  , handleInputChange , formData ,  trim , setFormData}} >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog =()=> useContext(BlogContext)