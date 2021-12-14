const SignUp = () => {
    return (
        <div className="frame">
            <button>로그인</button>
            <div className="input-area">

                <div className="text-input" placeholder="아이디를 입력해주세요. (email)">
                    <div className="label-area">ID</div>
                    <input type="text"></input>
                </div>
                <div className="text-input" placeholder="비밀번호를 입력해주세요.">
                    <div className="label-area">Password</div>
                    <input type="text"></input>
                </div>

            </div>
        </div>
    )
}
export default SignUp;