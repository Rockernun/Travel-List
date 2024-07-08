import { ICountry } from "../atoms";

function Country({ text }: ICountry) {
    return (
        <li>
            {text} 
            <button>✅</button>
            <button>🗑️</button>
        </li>
    );
}

export default Country;