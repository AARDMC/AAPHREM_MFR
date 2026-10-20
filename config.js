// Public configuration. Do NOT put secrets (GitHub tokens etc.) in this file.
window.APP_CONFIG = {
  // Apps Script web app: used for logging remarks and as a fallback data source
  GAS_WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbxusuz0fOlAVBbHNAqHiRRMPNiBPrv11T6id4oac1Vdvq_iztqJ7ia3ZMaUBtHD8swf/exec',

  // Static JSON written hourly by Apps Script (fast, served from GitHub's CDN)
  DATA_URL: 'data/facilities.json',

  // Max table rows drawn at once (performance)
  RENDER_LIMIT: 150
};
