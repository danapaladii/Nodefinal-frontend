import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai"

export const MyTravels = ({text, updatingInInput, deleteTravel}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiTwotoneDelete onClick={deleteTravel}></AiTwotoneDelete>
        </div>
    )
}