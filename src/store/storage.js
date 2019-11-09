const storage = {
  set: (key, object) => {
    console.log({key}, {object});
    if(!window.localStorage) return;
    console.log("localStorage 있음");
    window.localStorage[key] = (typeof object) === 'string'? object : JSON.stringify(object);
    console.log(localStorage[key]);
  },
  get: (key) => {
    console.log(window.localStorage);
    if(!window.localStorage) return null;

    if(!window.localStorage[key]){
      return null;
    }

    try{
      const parsed = JSON.parse(window.localStorage[key]);
      return parsed;
    } catch(e){
      return window.localStorage[key];
    }
  },
  remove: (key) => {
    if(!window.localStorage) return null;

    if(window.localStorage[key]) {
        window.localStorage.removeItem(key);
    }
  }
}
export default storage;