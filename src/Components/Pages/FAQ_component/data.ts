export interface FAQItem {
    question: string;
    ans: string;
}

export type dataType = FAQItem[];  // Typing dataType as an array of FAQItem

export const data: dataType = [
    {
        "question": "What is React?",
        "ans": "It is a front-end development library."
    },
    {
        "question": "What is JavaScript?",
        "ans": "JavaScript is a programming language used to make web pages interactive."
    },
    {
        "question": "What is HTML?",
        "ans": "HTML stands for Hypertext Markup Language and is used to create the structure of web pages."
    },
    {
        "question": "What is CSS?",
        "ans": "CSS stands for Cascading Style Sheets and is used to style HTML elements."
    },
    {
        "question": "What is a component in React?",
        "ans": "A component in React is a reusable piece of UI that can be used to build complex interfaces."
    },
    {
        "question": "What is JSX?",
        "ans": "JSX stands for JavaScript XML and is a syntax extension for JavaScript that looks similar to HTML."
    },
    {
        "question": "What is a hook in React?",
        "ans": "Hooks are functions that let you use state and other React features in functional components."
    },
    {
        "question": "What is the virtual DOM?",
        "ans": "The virtual DOM is a lightweight copy of the real DOM that React uses to efficiently update the UI."
    },
    {
        "question": "What is state in React?",
        "ans": "State is an object in React that holds dynamic data and determines how the component behaves."
    },
    {
        "question": "What is a prop in React?",
        "ans": "Props (short for properties) are used to pass data between React components."
    },
    {
        "question": "What is an event in JavaScript?",
        "ans": "An event is an action or occurrence like a mouse click or key press that can be detected by JavaScript."
    },
    {
        "question": "What is npm?",
        "ans": "npm (Node Package Manager) is a package manager for JavaScript, allowing developers to share and reuse code."
    },
   
]