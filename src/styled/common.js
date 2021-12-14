import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 1440px;
    height: 1080px;
    background: #121212;

    .frame {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        
        position: absolute;
        width: 375px;
        height: 358.91px;
        left: calc(50% - 375px/2);
        top: calc(50% - 358.91px/2 + 0.45px);   

        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px 32px;
            
            position: static;
            width: 375px;
            height: 48px;
            left: calc(50% - 375px/2);
            top: calc(50% - 48px/2 + 155.45px);
            
            background: #6179FF;
            border-radius: 64px;
            
            flex: none;
            order: 3;
            align-self: stretch;
            flex-grow: 0;
            margin: 24px 0px;
        }

        .input-area {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            
            position: static;
            width: 375px;
            height: 176px;
            left: 0px;
            top: 110.91px;
            
            flex: none;
            order: 2;
            align-self: stretch;
            flex-grow: 0;
            margin: 24px 0px;

            .input-wrap {
                position: static;
                width: 375px;
                left: calc(50% - 375px/2);

                flex: none;
                align-self: stretch;
                flex-grow: 0;
                margin: 0px 0px;

                label {
                    position: absolute;
                    height: 16px;
                    left: 0px;
                    right: 0px;
                    top: 0px;

                    /* Subheadline */

                    font-family: Noto Sans KR;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 11.5px;
                    line-height: 138%;
                    /* identical to box height, or 16px */

                    letter-spacing: -0.025em;
                    font-feature-settings: 'kern' off;

                    /* White / 60 */

                    color: rgba(255, 255, 255, 0.6);
                }

                input[type="text"]::placeholder {
                    position: absolute;
                    height: 20px;
                    left: 16px;
                    right: 16px;
                    top: 34px;

                    /* Title 3 */

                    font-family: Noto Sans KR;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 142%;
                    /* identical to box height, or 20px */

                    letter-spacing: -0.025em;
                    font-feature-settings: 'kern' off;

                    /* White / 40 */

                    color: rgba(255, 255, 255, 0.4);
                }
            }
        }
    }
`;