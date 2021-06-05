import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Details from './components/Details/Details'
import Search from './components/Search/Search'

function App (): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/details">
                    <Details />
                </Route>
                <Route path="/">
                    <Search />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
