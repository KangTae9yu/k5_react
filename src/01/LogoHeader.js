import LogoImg from './LogoImg';
import LogoA from './LogoA';
import LogoP from './LogoP';

function LogoHeader() {

    return(
        <header className="App-header">
            <LogoImg />
            <LogoP msg={"부산대학교 "} />
            <LogoP msg={"k-digital 5기"} />
            <LogoP msg={"강태규"} />
            <LogoA />
        </header>

    );
}

export default LogoHeader;