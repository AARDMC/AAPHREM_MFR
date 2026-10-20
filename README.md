# AAPHREM Master Facility Registry (MFR)

Web viewer for the Addis Ababa master facility list, powered by the Addis Ababa City Data Management Center.

## Repository layout

```
├── index.html            Front end (hosted on GitHub Pages)
├── config.js             Public settings (Apps Script URL, data path, render limit)
├── README.md
├── assets/
│   ├── logo.png          Logo used in the header and as favicon
│   └── README.txt
├── data/
│   └── facilities.json   Created automatically by Apps Script every hour
└── apps-script/
    └── Code.gs           Backup copy only. GitHub does not run it.
```

## How it works

| Task | Where it runs |
|---|---|
| Show the facility list | Browser loads `data/facilities.json` from GitHub Pages (fast) |
| Fallback if the JSON is missing | Browser calls Apps Script `getFacilityData` |
| Save a remark | Browser calls Apps Script `logIssue` (writes to the `Issues` sheet) |
| Hourly JSON publish from the `MFR_Import` sheet | Apps Script `publishMFRData` |

## Setup

1. **GitHub Pages**: Settings → Pages → Branch `main`, folder `/ (root)`.
2. **Apps Script**: paste `apps-script/Code.gs` into the project (the sheet ID is already set) and deploy as a web app.
3. **GitHub token**: create a fine-grained personal access token for this repository only, with *Contents: Read and write*. In Apps Script go to Project Settings → Script Properties and add `GITHUB_TOKEN`.
4. **Trigger**: run `create1HourTrigger()` once, then run `publishMFRData()` once manually to create the first `data/facilities.json`.
5. If you redeploy the web app and the URL changes, update `GAS_WEBAPP_URL` in `config.js`.

## Notes

- Never put the GitHub token in `config.js` or any file in this repo.
- The facility list updates hourly, and GitHub Pages may cache for a few minutes.
- Each hourly update creates a commit on `main`.
