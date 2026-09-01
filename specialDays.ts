export type SpecialDay={date:string;title:string;subtitle:string;type:'national'|'festival'|'occasion';icon:string};
// Dates verified against a 2026/2027 Indian festival calendar; religious dates can vary by locality/observance.
export const specialDays:SpecialDay[]=[
 {date:'2026-08-15',title:'Independence Day',subtitle:'भारत का स्वतंत्रता दिवस',type:'national',icon:'🇮🇳'},
 {date:'2026-08-28',title:'Raksha Bandhan',subtitle:'Rakhi',type:'festival',icon:'🎉'},
 {date:'2026-09-04',title:'Krishna Janmashtami',subtitle:'Janmashtami',type:'festival',icon:'🪷'},
 {date:'2026-09-05',title:"Teachers' Day",subtitle:'शिक्षक दिवस',type:'occasion',icon:'👨‍🏫'},
 {date:'2026-09-14',title:'Ganesh Chaturthi',subtitle:'Vinayaka Chaturthi',type:'festival',icon:'🐘'},
 {date:'2026-09-15',title:"Engineer's Day",subtitle:'Visvesvaraya Jayanti',type:'occasion',icon:'⚙️'},
 {date:'2026-10-02',title:'Gandhi Jayanti',subtitle:'महात्मा गांधी जयंती',type:'national',icon:'🇮🇳'},
 {date:'2026-10-20',title:'Dussehra',subtitle:'Vijayadashami',type:'festival',icon:'🏹'},
 {date:'2026-11-08',title:'Diwali',subtitle:'Deepavali',type:'festival',icon:'🪔'},
 {date:'2026-11-15',title:'Chhath Puja',subtitle:'छठ पूजा',type:'festival',icon:'🌅'},
 {date:'2026-11-24',title:'Guru Nanak Jayanti',subtitle:'Gurpurab',type:'festival',icon:'🙏'},
 {date:'2026-12-25',title:'Christmas',subtitle:'क्रिसमस',type:'festival',icon:'🎄'},
 {date:'2027-01-26',title:'Republic Day',subtitle:'गणतंत्र दिवस',type:'national',icon:'🇮🇳'},
 {date:'2027-02-11',title:'Vasant Panchami',subtitle:'बसंत पंचमी',type:'festival',icon:'🌼'},
 {date:'2027-03-10',title:'Eid al-Fitr',subtitle:'ईद-उल-फितर',type:'festival',icon:'🌙'},
 {date:'2027-03-22',title:'Holi',subtitle:'होली',type:'festival',icon:'🎨'}
];
