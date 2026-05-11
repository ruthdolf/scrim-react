import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

function Header() {
    return (
        <header className="header">
                <img src="react-logo.png" alt="React logo" className="nav-logo"/>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list-item">Pricing</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
                    </ul>
                </nav>
        </header>
    )
}

function Main() {
    return (
        <main>
            <h1>Reasons why I'm excited to learn React</h1>
            <ol>
                <li>for my internship</li>
                <li>I want to make an impactful web app</li>
                <li>I like to challenge myself</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2026 Lukkanothai development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}