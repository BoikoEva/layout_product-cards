report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card.png",
        "test": "../bitmaps_test/20210402-162604/Card_with_data-qa_card.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -141,
            "height": 136
          },
          "misMatchPercentage": "58.03",
          "analysisTime": 25
        },
        "diffImage": "../bitmaps_test/20210402-162604/failed_diff_Card_with_data-qa_card.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover.png",
        "test": "../bitmaps_test/20210402-162604/Link_with_data-qa_hover.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Link_with_data-qa_hover.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "waiting for selector \"[data-qa=\"hover\"]\" failed: timeout 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 32,
            "height": -222
          },
          "misMatchPercentage": "44.63",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20210402-162604/failed_diff_Link_with_data-qa_hover.png"
      },
      "status": "fail"
    }
  ]
});