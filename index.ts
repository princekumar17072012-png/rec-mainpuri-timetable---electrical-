export type Day = 'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday';
export type EntryKind = 'class'|'library'|'lunch'|'sports'|'activity';
export type ScheduleEntry = { id:string; day:Day; start:string; end:string; code?:string; teacher?:string; abbr?:string; subject?:string; group?:string; alternative?:string; type?:string; kind:EntryKind; tutorial?:boolean };
export type Subject = {code:string; name:string; teacher:string; abbr:string; ltp:string};
