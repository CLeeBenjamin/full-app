import './card.css'
export default function Card(props) {
    
    const clickedUp = (element) => {
      let foundEl = element.currentTarget
      foundEl.remove()
    }
    return ( 
    <div onClick={clickedUp} className="card" >
        <img src={props.src} alt="Avatar" style={{height: "75px", width: "75px"} }/>
    <div className="container">
      <h4 className="name"><b>{props.name}</b></h4>
      <p>{props.species}</p>
    </div>
    
</div> 
)

}