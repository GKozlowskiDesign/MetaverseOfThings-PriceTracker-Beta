import {Routes} from "../routes"
import styled from "styled-components"

//styled-componet for anchor tag
const LinkItems = styled.a`
    display: flex;
    text-decoration: none;
//.....
`

const navLinks = [
    {id: 1, label: "Home", href: Routes.home, icon: "home-outline", dis: "translate-x-0"},
    {id: 2, label: "Trending", href: Routes.trending, icon: "cellular-outline", dis: "translate-x-16"},
    {id: 3, label: "Education", href: Routes.education, icon: "school-outline", dis: "translate-x-32"},
    {id: 4, label: "Exit", href: Routes.exit, icon: "close-outline", dis: "translate-x-48"},
];


const LandingPage = () => {

        return(
            <div className="bg-transparent px-2 rounded-xl">
            <ul className="flex relative">
                {navLinks?.map((link) => (

                <LinkItems className="mx-auto pb-4 pt-20" key={link.id} href={link.href}>
                    <a className="flex flex-col bg-gradient-to-b from-indigo-100 to-gray-900 mx-auto h-16 w-16 pt-5 pb-8 
                    text-center rounded-xl cursor-pointer hover:text-purple-400 border-2 border-gray" label={link.label}>
                    <span className="text-2xl cursor-pointer duration-500">
                    <ion-icon name={link.icon} ></ion-icon>
                    </span>
                    </a>
                </LinkItems>
                ))}
            </ul>
            </div>
        )}

export default LandingPage;