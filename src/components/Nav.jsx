import { Link } from "react-router-dom"

export const Nav = () => {
    const links=[
        {
            name: "Galeria",
            href: "/"
        },
        {
            name: "Calculadora",
            href: "/calculadora"
        },
        {
            name: "To-Do",
            href: "/todo"
        },
        {
            name: "Juego",
            href: "/juego"
        },
    ]
  return (
    <div>
        <div className="flex justify-center gap-12 m-4 text-2xl">
            {links.map(link=>(
                <Link to={link.href} key={link.href}>{link.name}</Link>
            ))}
        </div>
    </div>
  )
}
