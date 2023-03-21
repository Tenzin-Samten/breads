const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title})  {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        
  {
    breads.map((bread, index)=> {
      return (
        <li key={index}>
          <a href={`/breads/${index}`}>
            {bread.name}
          </a>
        </li>
      )
    })
  }
  </Default>
    )
}

module.exports = Index
