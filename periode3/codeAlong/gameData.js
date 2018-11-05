const gameArea = 
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          12.541236877441406,
          55.7745937743835
        ],
        [
          12.567329406738281,
          55.77570409453003
        ],
        [
          12.578487396240234,
          55.77715229066336
        ],
        [
          12.572736740112305,
          55.77903486518577
        ],
        [
          12.577972412109373,
          55.78038640106636
        ],
        [
          12.576427459716797,
          55.78400635552426
        ],
        [
          12.580461502075195,
          55.787963787549664
        ],
        [
          12.577800750732422,
          55.7893150137341
        ],
        [
          12.575654983520508,
          55.794381694500565
        ],
        [
          12.570934295654297,
          55.796118690471815
        ],
        [
          12.541236877441406,
          55.7745937743835
        ]
      ]
    ]
  }
}

const players = [

  {
    "type": "Feature",
    "properties": {"name":"Cheater-1"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.559776306152344,
        55.79370617514494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name":"Cheater-2"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.583036422729492,
        55.77946929254524
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name":"Kurt"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.568960189819336,
        55.78709511739494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name":"Peter"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.555999755859375,
        55.779372753550554
      ]
    }
  }
];

module.exports = {
  gameArea : gameArea.geometry,
  playersInArea : players
}
