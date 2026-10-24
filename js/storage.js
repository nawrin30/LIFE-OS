/* Versioned, defensive LocalStorage layer. */
(function(){
  const KEY='lifeos-rpg-data', VERSION=1;
  const defaultData=()=>({version:VERSION,profile:{name:'Adventurer',avatar:'A',theme:'dark',reducedMotion:false,sound:false,dailyGoal:3},xp:0,quests:[],unlockedSkills:[],achievements:[],activity:{},journal:[],createdAt:new Date().toISOString()});
  function safeParse(raw){try{return JSON.parse(raw)}catch{return null}}
  function normalize(d){
    const base=defaultData(); if(!d||typeof d!=='object'||d.version!==VERSION)return base;
    return {...base,...d,profile:{...base.profile,...(d.profile||{})},quests:Array.isArray(d.quests)?d.quests:[],unlockedSkills:Array.isArray(d.unlockedSkills)?d.unlockedSkills:[],achievements:Array.isArray(d.achievements)?d.achievements:[],activity:d.activity&&typeof d.activity==='object'?d.activity:{},journal:Array.isArray(d.journal)?d.journal:[]};
  }
  let memory=defaultData();
  function load(){try{const raw=localStorage.getItem(KEY);memory=raw?normalize(safeParse(raw)):defaultData()}catch(e){memory=defaultData();console.warn('LocalStorage unavailable; using temporary memory.',e)}return memory}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(memory));return true}catch(e){console.warn('Could not save data.',e);return false}}
  function get(){return memory}
  function update(fn){fn(memory);save();return memory}
  function exportData(){return JSON.stringify(memory,null,2)}
  function importData(raw){const parsed=typeof raw==='string'?safeParse(raw):raw;if(!parsed||parsed.version!==VERSION||!parsed.profile||!Array.isArray(parsed.quests)||!Array.isArray(parsed.journal))throw new Error('This file is not a supported LifeOS RPG backup.');memory=normalize(parsed);save();return memory}
  function reset(){memory=defaultData();save();return memory}
  window.LifeStorage={KEY,VERSION,load,save,get,update,exportData,importData,reset,defaultData};
})();