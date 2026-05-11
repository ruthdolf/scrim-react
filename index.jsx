import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

function Header() {
    return (
        <header>
                <img src="react-logo.png" width="40px" alt="React logo" />
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