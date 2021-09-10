import Navbar from './navBar'

export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <Navbar />
            <div className={{Page}}>
                <Routes />
            </div>
        </div>
    )
}