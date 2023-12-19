const NotesComponent = ({title, content}) => {
    return(
        <div className="w-[150px] bg-amber-300 m-3 p-3 flex flex-col justify-start">
            <strong>{title}</strong>
            {content}
        </div>
    )
}
export default NotesComponent;