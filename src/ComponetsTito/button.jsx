import "./blog-pages.css"

const Button2 = ({text,style,onClick}) => {
    return(
        <div className="buttoncomp">
            <button onClick={onClick}  style = {style} > {text} </button>
        </div>
    )
}

export default Button2;