import type { Subject } from '../types';
export const subjects: Subject[] = [
 {code:'AAS102C',teacher:'Dr. Anoop Kumar Awasthi',abbr:'AKA',ltp:'3+0+0',name:'Applied Chemistry for Emerging Electronics and Futuristic Devices'},
 {code:'AAS103C',teacher:'Dr. Anugrah Pratap Singh',abbr:'APS',ltp:'3+1+0',name:'Differential Calculus and Linear Algebra'},
 {code:'AEC101A',teacher:'Dr. Priyanka',abbr:'PR',ltp:'2+1+0',name:'Fundamentals of Electronics Engineering'},
 {code:'ACS101',teacher:'Mr. Rishav Kumar Singh',abbr:'RKS',ltp:'2+1+0',name:'Programming Languages'},
 {code:'AAS104',teacher:'Dr. Anugrah Pratap Singh',abbr:'APS',ltp:'2+0+0',name:'Introduction to Indian Knowledge System'},
 {code:'AME101A',teacher:'Mr. Yogendra Singh Rajput',abbr:'YSR',ltp:'2+0+0',name:'Fundamentals of Mechanical Engineering'},
 {code:'AAS152C',teacher:'Dr. Anoop Kumar Awasthi',abbr:'AKA',ltp:'0+0+2',name:'Applied Chemistry for Emerging Electronics and Futuristic Devices Lab'},
 {code:'AEC151A',teacher:'Dr. Priyanka',abbr:'PR',ltp:'0+0+2',name:'Electronics Engineering Lab'},
 {code:'AID151',teacher:'Ms. Smriti Singh / Incubation',abbr:'SS',ltp:'0+1+2',name:'Innovation & Design Thinking Lab (Project-Based Learning)'},
 {code:'AAC101',teacher:'Mr. Nikhil Dixit',abbr:'ND',ltp:'2+0+0',name:'Environment & Sustainability'},
 {code:'AGP151',teacher:'Dr. Anshul Kumar Mishra',abbr:'AKM',ltp:'0+0+2',name:'General Proficiency'}
];
export const subjectByCode = Object.fromEntries(subjects.map(s=>[s.code,s]));
