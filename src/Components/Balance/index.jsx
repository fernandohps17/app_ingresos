import { useGlobalState } from "../../Context/GlobalState"

export const Balance = () => {

    const data = useGlobalState();

    return (
        <div>
            <h2>Balance</h2>
            <p>{data.total}$</p>
        </div>
    )

}