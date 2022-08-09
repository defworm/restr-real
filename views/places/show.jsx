const React = require('react')
const Def = require('../default')

function show (data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div>
          <h3>Rating</h3>
          <p>Not Rated</p>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="col-sm-6"
              src={data.place.pic}
              alt={data.place.name}
            />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <br />
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <br />
            <a
              href={`/places/${data.place.id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
            {` `}
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3>Description</h3>
          <p> </p>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <hr />
            <h2>Comments</h2>
            <div className="row">

            </div>
            </div>
      </main>
    </Def>
  );
}
module.exports = show;