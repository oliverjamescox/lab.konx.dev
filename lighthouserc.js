module.exports = {
    "ci": {
      "collect": {
        "numberOfRuns": 3,
      },
      assert: {
        "assertions": {
          "categories:performance": ["warn", {"minScore": 0.8}],
          "categories:accessibility": ["warn", {"minScore": 1}],
          "categories:best-practices": ["warn", {"minScore": 0.8}],
          "categories:seo": ["warn", {"minScore": 1}],
          "categories:pwa": "off",

        }
      },
      "upload": {
        "target": "lhci",
        "serverBaseUrl": "https://lighthouse.konx.dev",
        "token": "83f6ddea-6bf8-46b5-abec-1edddb329929"
      }
    }
}
