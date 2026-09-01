import type React from 'react';
import type {ScheduleEntry} from '../types';
import {formatTime,mins} from '../utils/time';
import {subjectByCode} from '../data/subjects';

export function Timeline({items,nowMin,onSelect}:{items:ScheduleEntry[];nowMin:number;onSelect:(e:ScheduleEntry)=>void}){
  const sorted=[...items].sort((a,b)=>mins(a.start)-mins(b.start));
  const out:React.ReactNode[]=[];
  let cursor=600;
  sorted.forEach(e=>{
    const a=mins(e.start), b=mins(e.end);
    if(a>cursor){
      const end=Math.min(a,800);
      if(end-cursor>5){
        const isLunch=cursor===800 && end===860;
        const hh=Math.floor(cursor/60).toString().padStart(2,'0');
        const mm=(cursor%60).toString().padStart(2,'0');
        out.push(<div className="timeline-item gap" key={`gap-${e.id}`}>
          <div className="timeline-time">{formatTime(`${hh}:${mm}`)}</div><div className="timeline-dot"/>
          <div className="timeline-card"><span className="status">{isLunch?'LUNCH':'FREE PERIOD'}</span><b>{end-cursor} min</b><small>{isLunch?'Official lunch break.':'Genuine timetable gap.'}</small></div>
        </div>);
      }
    }
    cursor=Math.max(cursor,b);
    const status=nowMin>=b?'completed':nowMin>=a?'current':'upcoming';
    const s=e.code?subjectByCode[e.code]:undefined;
    out.push(<button className={`timeline-item ${status}`} key={e.id} onClick={()=>onSelect(e)}>
      <div className="timeline-time">{formatTime(e.start)}<small>{formatTime(e.end)}</small></div><div className="timeline-dot"/>
      <div className="timeline-card"><div className="row"><span className="status">{status.toUpperCase()}</span>{e.group&&<span className="pill">{e.group}</span>}</div>
      <b>{s?.name||e.alternative||e.code}</b><div className="timeline-meta">{s?.teacher||''}{e.kind==='library'?'Library':e.kind==='sports'?'Sports & Yoga':''}</div></div>
    </button>);
  });
  if(cursor<800){
    out.push(<div className="timeline-item gap" key="lunch-final"><div className="timeline-time">1:20 PM</div><div className="timeline-dot"/><div className="timeline-card"><span className="status">LUNCH</span><b>60 min</b><small>Official lunch break.</small></div></div>);
  }
  return <div className="timeline">{out}</div>;
}
