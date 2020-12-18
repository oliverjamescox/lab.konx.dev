module.exports = {
    "ci": {
      "collect": {
        "numberOfRuns": 3,
        "url": [
          "https://vuelab.konx.dev/",
        ],
      },
      assert: {
        preset: 'lighthouse:no-pwa',
      },
      "upload": {
        "target": "lhci",
        "serverBaseUrl": "https://lighthouse.konx.dev",
        "token": "0e56b860-0c9a-4c6d-8c81-5e2ea2fa3048"
      }
    }
}
