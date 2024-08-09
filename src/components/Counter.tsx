import React, {useState} from 'react';
import {Button} from './Button';

export const Counter = () => {
   const [count, setValue] = useState<number>(0)

    const maxValue = 5

    const increaseCount = () => {
       count === maxValue ? setValue(maxValue) : setValue(count + 1)
    }

    const resetCount =() => {
        setValue(0)
    }
    return (
        <div>
            <div className={`${'tablo'} ${count === maxValue ? 'red' : ''}`}>{count}</div>
            <div className={'buttonBlock'}>
                <Button title={'ins'} onClick={increaseCount} disabled={count === maxValue}/>
                <Button title={'reset'} onClick={resetCount} disabled={count === 0}/>
            </div>
        </div>
    );
};






















// ------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {Button} from './Button';
// import styled from 'styled-components';
// import s from './Button.module.css'
//
//
// export const Counter = () => {
//    const [ count, setCount] = useState<number>(0)
//
//     const increaseHandler = () => {
//         count <= 5 ? setCount(count+1) : setCount(0)
//         // setCount(count)
//     }
//
//     const resetHandler =() => {
//         setCount(0)
//     }
//
//     return (
//         <Wrapper>
//             <CountBlock>
//                 <p className={ count === 5 ? s.red : ''}>{count}</p>
//             </CountBlock>
//             <ButtonBlock>
//                 <Button disabled={count === 5} title={'inc'} onClick={increaseHandler}/>
//                 <Button disabled={count === 0} title={'reset'} onClick={resetHandler}/>
//             </ButtonBlock>
//         </Wrapper>
//     );
// };
//
//
// const Wrapper = styled.div`
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: #393737;
//     width: 300px;
//     height: 200px;
//     border: 3px solid #61dafb;
//     font-size: 40px;
//     font-weight: 600;
//     padding: 20px
// `
//
// const CountBlock = styled.div`
//     background-color: #61dafb;
//     width: 100%;
//     margin-bottom: 10px;
//
// `
// const ButtonBlock = styled.div`
//     width: 100%;
//     border: 3px solid #61dafb;
// `