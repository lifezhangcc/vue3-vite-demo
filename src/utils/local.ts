// localStorage
export const local = {
  getItem: (key:string) => {
    return localStorage.getItem(key);
  },

  setItem: (key:string, value:any) => {
    localStorage.setItem(key, value);
  },

  removeItem: (key:string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },

  length: localStorage.length
}

// sessionStorage
export const session = {
  getItem: (key:string) => {
    return sessionStorage.getItem(key);
  },

  setItem: (key:string, value:any) => {
    sessionStorage.setItem(key, value);
  },

  removeItem: (key:string) => {
    sessionStorage.removeItem(key);
  },

  clear: () => {
    sessionStorage.clear();
  },

  length: sessionStorage.length
}