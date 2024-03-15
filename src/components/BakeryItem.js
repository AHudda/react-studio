// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return (
        <div class="BakeryItem">
            <img class="imageSpecifications" src={props.image} alt={props.name}/>
            <div class="bakeryItemDescription">
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>${props.price}</p>
                <Button onClick={() => {
                    props.incrementCartTotal(props.price);
                    props.incrementCartContents(props.name);
                }} />
            </div>
        </div>
    )
}

function Button(props){
    return (
        <button onClick={props.onClick}>
            {"Add to Cart"}
        </button>
    )
}
