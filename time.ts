import type { ScheduleEntry } from '../types';
export const mins=(hhmm:string)=>{const [h,m]=hhmm.split(':').map(Number);return h*60+m};
export const nowMinutes=(d=new Date())=>d.getHours()*60+d.getMinutes()+d.getSeconds()/60;
export const formatTime=(t:string)=>{const [h,m]=t.split(':').map(Number);const ap=h>=12?'PM':'AM';const hh=h%12||12;return `${hh}:${m.toString().padStart(2,'0')} ${ap}`};
export const duration=(a:string,b:string)=>mins(b)-mins(a);
export const humanDuration=(n:number)=>n<60?`${Math.max(1,Math.round(n))} min`:`${Math.floor(n/60)} hr${Math.floor(n/60)!==1?'s':''}${n%60?` ${n%60} min`:''}`;
export const getDay=(d=new Date()):ScheduleEntry['day']=>['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()] as any;
