(function(){const KEYS={plan:"platepilot_plan",posts:"platepilot_posts",checks:"platepilot_checks",custom:"platepilot_custom_items"};
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
  window.PPStore={getPlan:()=>read(KEYS.plan,null),savePlan:plan=>localStorage.setItem(KEYS.plan,JSON.stringify(plan)),getPosts:()=>read(KEYS.posts,[]),savePosts:posts=>localStorage.setItem(KEYS.posts,JSON.stringify(posts)),getChecks:()=>read(KEYS.checks,[]),saveChecks:items=>localStorage.setItem(KEYS.checks,JSON.stringify(items)),getCustom:()=>read(KEYS.custom,[]),saveCustom:items=>localStorage.setItem(KEYS.custom,JSON.stringify(items)),clear:()=>Object.values(KEYS).forEach(k=>localStorage.removeItem(k))};
})();
