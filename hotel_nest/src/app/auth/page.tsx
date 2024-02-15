'use client';

import { ChangeEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


const defaultFormData = {
    email: "",
    username: "",
    password: "",
}

const Auth = () => {

    const [formData, setFormData] = useState(defaultFormData);

    const [login, setLogin] = useState(false)

    const inputStyles = "border border-gray-300 sm:text-sm  text-black rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            console.log(formData);
        } catch (error) {
            console.log(error);
        } finally {
            setFormData(defaultFormData);
        }
    }


    return (
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md-space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-3xl font-montserrat text-black dark:text-white">
                        Create an account
                    </h1>
                    <p>OR</p>
                    <span className="inline-flex items-center">
                        <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" /> |
                        <FcGoogle className="ml-3 text-4xl cursor-pointer text-black dark:text-white" />
                    </span>
                </div>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                     <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        required
                        className={inputStyles}
                        value={formData.username}
                        onChange={handleInputChange}
                    />

                     <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        required
                        minLength={6}
                        className={inputStyles}
                        value={formData.password}
                        onChange={handleInputChange}
                    />


                    <button type="submit" className="w-full bg-tertiary-yellow focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-100 ease-in-out hover:bg-orange-400 focus:ring-4  focus:ring-blue-300   ">
                        sign up
                    </button>

                    <button className="text-blue-700 hover:underline dark:text-blue-50">login</button>

                </form>
            </div>
        </section>
    )
}


export default Auth