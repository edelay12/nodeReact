import React from 'react';

export default function App(props){
    return (
        <div>
  <h2>{ props.App }</h2>
        <div className="book_author">Category: { props.Category }</div>
        <div className="book_publisher">
          Rating: { props.Rating }
        </div>
        <div className="book_description">{ props.Genres }</div>
        </div>
    )
}

/*

"App": "ROBLOX",
        "Category": "GAME",
        "Rating": 4.5,
        "Reviews": "4447388",
        "Size": "67M",
        "Installs": "100,000,000+",
        "Type": "Free",
        "Price": "0",
        "Content Rating": "Everyone 10+",
        "Genres": "Adventure;Action & Adventure",
        "Last Updated": "July 31, 2018",
        "Current Ver": "2.347.225742",
        "Android Ver": "4.1 and up"





*/