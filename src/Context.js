import { createContext, useContext, useRef, useState } from "react";
const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);
export const ResumeProvider = ({ children }) => {
    const printElem = useRef();
    const [theme, setTheme] = useState('purple.400');
    const [about, setAbout] = useState({
        name: "",role: "",email: "",phone: "",address: "",picture:"",
    });
    const [educationList, setEducationList] = useState([
        {
            id: "",degree: "",school: "",startYr: 0,endYr: 0,grade: "",
        },
    ]);
    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "ReactJS",
        },
        {
            id: 3,
            name: "NodeJS",
        },
        {
            id: 4,
            name: "C",
        },
        {
            id: 5,
            name: "C++",
        },
        {
            id: 6,
            name: "Java",
        },
        {
            id: 7,
            name: "RestAPI",
        },
        {
            id: 8,
            name: "MySQL",
        },
        {
            id: 9,
            name: "HTML",
        },
        {
            id: 10,
            name: "CSS",
        },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: "",position: "",company: "",type: "",startDate: "",endDate: "",description: "",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            id: "",name: "",description: "",url: "",
        },
    ]);

    const value = { about, setAbout, educationList, setEducationList, skills, setSkills, workList, setWorkList, projects, setProjects, printElem, theme, setTheme };
    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    )
}