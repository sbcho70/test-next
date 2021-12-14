import { InputText } from "../../styled/common"

const Text = () => {
    return (
        <>
            <InputText>
                <label>
                    ID
                </label>
                <input type="text" placeholder="아이디를 입력해 주세요"></input>
            </InputText>
        </>
    )
}

export default Text;