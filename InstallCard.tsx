import {I} from './Icon';
export function InstallCard({onInstall,canInstall}:{onInstall:()=>void;canInstall:boolean}){return <section className="install-card"><div className="install-icon"><I.Download size={22}/></div><div><b>INSTALL REC TIMETABLE</b><p>Keep your class schedule one tap away.</p></div><button onClick={onInstall}>{canInstall?'INSTALL APP':'HOW TO INSTALL'}</button></section>}
