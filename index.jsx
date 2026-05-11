import { createRoot } from "react-dom/client"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

function Page() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}