import './Main.css'
import {Paragraph} from './paragraph/Paragraph'

export function Main() {
    return (
        <div className="main-content">
            <h1>This is header title</h1>
            <Paragraph />
            <Paragraph />
            <Paragraph />
            <Paragraph />
        </div>
    )
}