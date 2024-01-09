import { useGlobalState } from "../../Context/GlobalState"

const Balance = () => {

    const data = useGlobalState();

    return (
        <div>
            <h2>Balance</h2>
        </div>
    )

}

export default Balance