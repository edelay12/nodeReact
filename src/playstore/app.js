import React from 'react';
import App from './listItem'

export default class app extends React.Component {
constructor(props){
super(props)
this.state = {
    apps : [],
    filter : 'none',
    genre : 'all',
    error : null
}

}
sortChange(e) {
    console.log(e)
this.setState({filter : e})
}

genreChange(e) {
    console.log(e)
    this.setState({genre : e})
}

handleSubmit = (e) => {
    e.preventDefault();

    console.log('fetch')

    let url=`http://localhost:8000/apps?genre=${this.state.genre}&sort=${this.state.filter}`;
    console.log(url)
    fetch(url)
    .then(Response => {
        if(Response.ok) {
            return Response.json();
        }
        throw new Error(Response.statusText)
    })
    .then(ResponseJson => {
        this.setState({apps : ResponseJson, error : null})
    })
    .catch(Err => {
        this.setState({ error : Err})
    })
}

render(){
     //map over all the apps
     const apps = this.state.apps.map((app, i) => {
        return <App {...app} key={i}/>
      })
    return (
        <div className='app'>
<form onSubmit={this.handleSubmit}>
    <h3>Sort by:</h3>
    <select className='sortSelect' defaultValue='none' onChange={(e) => this.sortChange(e.target.value)}>
    <option value='none'>None</option>
    <option value='rating'>rating</option>
    <option value='app'>app</option>
    </select>
    <br />
    <br />
    <h3>Genres:</h3>
    <select className='genreSelect' defaultValue='all' onChange={(e) => this.genreChange(e.target.value)}>
    <option value='all'>All</option>
    <option value='Action'>Action</option>
    <option value='Puzzle'>Puzzle</option>
    <option value='Strategy'>Strategy</option>
    <option value='Casual'>Casual</option>
    <option value='Arcade'>Arcade</option>
    <option value='Card'>Card</option>
    </select>
    <br/>
    <br/>
    <button className='submitB' type='submit'>Show List of Apps</button>
</form>
<hr />


{apps}

        </div>
    )
}
}