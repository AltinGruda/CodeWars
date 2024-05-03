function alternate(items) {
    if(items.length === 0) return null;
  
    if(items.includes(true)){
      return true;
    }
    
    return false;
}