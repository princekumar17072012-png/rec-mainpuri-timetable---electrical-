import {I} from './Icon';
export type Tab='home'|'timetable'|'teachers'|'alerts'|'settings';
export function BottomNav({tab,setTab}:{tab:Tab;setTab:(t:Tab)=>void}){const items:[Tab,string,any][]=[['home','Home',I.House],['timetable','Timetable',I.CalendarDays],['teachers','Teachers',I.Users],['alerts','Alerts',I.Bell],['settings','Settings',I.Settings2]];return <nav className="bottom-nav">{items.map(([id,label,Icon])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)} aria-label={label}><Icon size={20}/><span>{label}</span></button>)}</nav>}
