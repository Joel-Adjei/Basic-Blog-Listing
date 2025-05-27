import React, {createContext, useContext, useState} from 'react'

export const BlogContext = createContext()

export const BlogContextProvider =({children})=>{
    const [blogs , setBlogs] = useState( [
        {
            id: 0,
            title: "Getting Started with React",
            content: "React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamental concepts that make React so popular among developers worldwide. We'll start with components, which are the building blocks of any React application. Components allow you to break down complex UIs into smaller, reusable pieces that are easier to manage and test. We'll also dive into state management, props, and the component lifecycle. By the end of this article, you'll have a solid understanding of how to build dynamic, interactive web applications using React.",
            summary: "Learn the fundamentals of React and how to build dynamic user interfaces with components and state management.",
            date: "2024-01-15",
        },
        {
            id: 1,
            title: "Modern CSS Techniques",
            content: "CSS has evolved significantly over the years, introducing powerful new features that make styling web applications more efficient and maintainable. In this article, we'll explore modern CSS techniques including CSS Grid, Flexbox, custom properties (CSS variables), and advanced selectors. CSS Grid revolutionizes how we create complex layouts, while Flexbox provides elegant solutions for alignment and distribution of elements. Custom properties allow us to create more maintainable stylesheets by defining reusable values. We'll also look at CSS-in-JS solutions and how they integrate with modern JavaScript frameworks. These techniques will help you create more responsive, accessible, and visually appealing web interfaces.",
            summary: "Explore advanced CSS features like Grid, Flexbox, and custom properties for better web design.",
            date: "2024-01-10",
        },
        {
            id: 2,
            title: "JavaScript ES6+ Features",
            content: "JavaScript has undergone tremendous changes with the introduction of ES6 and subsequent versions. This article covers the most important features that every developer should know. We'll start with arrow functions, which provide a more concise syntax for writing functions and solve the 'this' binding problem. Template literals make string interpolation much cleaner and more readable. Destructuring assignment allows us to extract values from arrays and objects in a more elegant way. We'll also explore modules, classes, promises, async/await, and the spread operator. These features not only make your code more readable and maintainable but also help you write more efficient JavaScript applications.",
            summary: "Master essential ES6+ features including arrow functions, destructuring, and async/await.",
            date: "2024-01-05",
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