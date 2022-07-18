import classNames from "classnames";
function Button ({text, variant = 'default'}) {
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center rounded" : true,
            "bg-gray-100" : variant === "default",
            "bg-green-600 text-white" : variant === "success",
            "bg-yellow-300 text-black-600" : variant === "warning",
            "bg-red-600 text-white" : variant === "danger"
        })} style={{minWidth:"110px", textAlign:"center", display:"flex", justifyContent:"center", textTransform:"uppercase"}}>{text}</button>
    )
}

export default Button;