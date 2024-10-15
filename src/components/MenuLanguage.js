import React, {useState, useEffect} from "react";
import '../App.css'


export default function MenuLanguage() {
    const [selectLanguage, setSelectedLanguage] = useState('FR');

    useEffect(() => {

    })


    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        console.log(selectLanguage)
    };




    return (
        <form  noValidate={true}  className="max-w-[100px]">
            <select
                name="langauge"
                value={selectLanguage}
                onChange={handleLanguageChange}
                className="py-1 px-1  block w-full border-gray-200 rounded-lg text-[10px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            >
                <option selected={true} value="FR">French</option>
                <option value="DE">German</option>
                <option value="IT">Italian</option>
                <option value="EN">English</option>
            </select>
        </form>
    );
}