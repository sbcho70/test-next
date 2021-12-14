const Login = () => {
    return (
        <div className="frame">
            <button>로그인</button>
            <div className="input-area">
                <div className="input-wrap" style={{top: "50%", bottom:"0%", order: 0}}>
                    <label>ID</label>
                    <input type="text" placeholder="아이디를 입력해주세요.(email)" />
                </div>
                <div className="input-wrap" style={{top: "0%", bottom:"50%", order: 1}}>
                    <label>Password</label>
                    <input type="text" placeholder="비밀번호를 입력해주세요." />
                </div>
            </div>
        </div>
    )
}
export default Login;