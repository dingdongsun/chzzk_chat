import React from 'react';
import OptionPanel from './components/OptionPanel';
import CodeOutput from './components/CodeOutput';
import PreviewBox from './components/PreviewBox';
import './index.css'
import logo from './logo.svg';
function App() {
    return (
        <div className='main-wrapper'>
            <h1 className='title'><img src={logo} alt='chzzk' height={36} style={{backgroundColor: 'black', padding: 6, borderRadius: 6, verticalAlign: 'middle', position: 'relative', top: -3}}/> 채팅창 CSS 커스터마이저 
            <CodeOutput /></h1>
            <div className='custom-view'>
                <div className='option-panel'>
                    <OptionPanel />
                </div>
                <PreviewBox />
            </div>
        </div>
    );
}
export default App;