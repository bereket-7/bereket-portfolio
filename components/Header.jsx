import Link from "next/link"
import { Button } from "./ui/button"
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            {/* {logo } */}

            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Bereket<span className="text-accent">.</span>
                    </h1>
            </Link>
            {/* {desktop nav} */}
            <nav className="flex gap-8 items-center justify-end"></nav>
        </div>
    </header>
  )
}

export default Header