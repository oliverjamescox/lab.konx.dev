module.exports = {
    "ci": {
      "collect": {
        "numberOfRuns": 3
      },
      "assert": {
        "preset": "lighthouse:recommended",
        "assertions": {
          "first-contentful-paint": [
            "error",
            {"maxNumericValue": 2000, "aggregationMethod": "optimistic"}
          ],
          "interactive": ["error", {"maxNumericValue": 5000, "aggregationMethod": "optimistic"}]
        }
      },
      "upload": {
        "target": "lhci",
        "serverBaseUrl": "https://lighthouse.konx.dev",
        "token": ${{ LIGHTHOUSE_TOKEN }}
      }
    }
}
