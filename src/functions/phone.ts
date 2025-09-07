/**
 * uses a mixture of techniques to determine if application is a phone
 * @returns 
 */
export const isPhone = ()=>{
    return isPhoneMediaQuery() || basicIsPhone() ||isPhoneByScreen()
}

const isPhoneMediaQuery = ():boolean=> {
  return window.matchMedia("only screen and (max-width: 767px)").matches;
}

const basicIsPhone = ():boolean=> {
  return /iPhone|Android.+Mobile|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

const isPhoneByScreen = ():boolean=> {
  return window.innerWidth <= 767; // Typical breakpoint for phones
}

