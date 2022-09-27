var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "anarchy - overworld",
        "oasissmp - overworld",
        "vanillasmp - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1664235511",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Anarchy",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "anarchy",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "anarchy - overworld",
            "last_rendertime": 1664226436,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                128,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                128,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "OasisSMP",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "oasissmp",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "oasissmp - overworld",
            "last_rendertime": 1664226292,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                208,
                32
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                208,
                32
            ],
            "north_direction": 0
        },
        {
            "name": "VanillaSMP",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "vanillasmp",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "vanillasmp - overworld",
            "last_rendertime": 1664226293,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -739,
                97,
                235
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -739,
                97,
                235
            ],
            "north_direction": 0
        }
    ]
};
