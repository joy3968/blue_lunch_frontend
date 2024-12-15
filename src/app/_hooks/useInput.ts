import React, {useState} from "react";

const useInput = (initialValue: string = '') : [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState(initialValue);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return [
        value, onChangeValue
    ]
}

export default useInput;