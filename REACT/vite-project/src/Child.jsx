function Child(obj){
    // console.log(props.object)
    // console.log(props.name)

    const {name,age} = obj;
    return(
        <>  
            <p>{name}</p>
            {age}
        </>
    )

}
export default Child