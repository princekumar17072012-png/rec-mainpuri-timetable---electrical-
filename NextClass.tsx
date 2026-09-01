import {I} from './Icon';
import type {ScheduleEntry} from '../types';
import {formatTime,humanDuration,mins} from '../utils/time';
import {subjectByCode} from '../data/subjects';
export function NextClass({current,next,nowMin}:{current?:ScheduleEntry;next?:ScheduleEntry;nowMin:number}){
 const item=current||next; if(!item)return <section className="next-card empty"><span className="eyebrow">NEXT CLASS</span><h2>No more classes today</h2><p>Your timetable is clear for the rest of the day.</p></section>;
 const s=item.code?subjectByCode[item.code]:undefined; const left=current?mins(item.end)-nowMin:mins(item.start)-nowMin;
 return <section className="next-card"><div className="next-top"><span className="eyebrow">{current?'CLASS IN PROGRESS':'NEXT CLASS'}</span><span className="live-dot"/></div><h2>{s?.name||item.alternative?.replace(/ \(.*?\)/,'')||item.code||item.alternative}</h2><div className="next-time"><I.Clock3 size={17}/>{formatTime(item.start)} — {formatTime(item.end)}</div><div className="next-meta"><span>{s?.teacher||item.abbr||'—'}</span><span>{item.group?`Group ${item.group}`:item.kind==='library'?'Library':item.kind==='sports'?'Sports & Yoga':'EES03'}</span><span>{item.tutorial?'Tutorial':item.kind==='library'?'Study':item.kind==='sports'?'Activity':item.code?.endsWith('151')?'Lab':'Lecture'}</span></div><div className="countdown"><b>{current?'Ends in':'Starts in'}</b><strong>{humanDuration(left)}</strong></div></section>
}
