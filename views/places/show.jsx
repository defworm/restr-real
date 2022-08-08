const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
            <h1>{ data.place.name }</h1>
            </div>
            
          </main>
          <body>
            <div>
            <h2>{data.place.cuisines}</h2>
            </div>
            <div>
            <em>{[data.place.city,', ', data.place.state]}</em>
            </div>
            <br></br>
            <div>
                <image>{data.place.pic}</image>
            </div>
            <br></br>
            <div>
                <h2>Ratings</h2>
                <p>Currently Unrated</p>
            </div>

            <span>
                <h4>Comments</h4>
                <p>No Comments Yet</p>
            </span>

           
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
    
    


            </body>
        </Def>
    )
}

module.exports = show
