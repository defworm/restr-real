const React = require('react')
const Def = require('./default')


function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Ope, sorry, we can't find this page!</p>
              <div>
                <img className = "col-sm-4" src = "/images/errorbike.jpg" alt = "Bike Lying Down on the Ground" />
                <div>
                Photo by <a href="https://unsplash.com/@ispywithmylittleeye?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zeynep Sümer</a> on <a href="https://unsplash.com/s/photos/free-not-found?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                  </div> 
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404