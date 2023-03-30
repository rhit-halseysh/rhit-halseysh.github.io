var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023ingre",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "radio",
      "choices": {
        "1": "Close to loading station (1)<br>",
        "2": "Middle (2)<br>",
        "3": "Edge of the field (3)"
      },
      "defaultValue": "1"
    }
  ],
  "auton": [
    { "name": "High Cube",
      "code": "ahu",
      "type": "counter"
    },
    { "name": "High Cone",
      "code": "aho",
      "type": "counter"
    },
    { "name": "Mid Cube",
      "code": "amu",
      "type": "counter"
    },
    { "name": "Mid Cone",
      "code": "amo",
      "type": "counter"
    },
    { "name": "Low Cube",
      "code": "alu",
      "type": "counter"
    },
    { "name": "Low Cone",
      "code": "alo",
      "type": "counter"
    },
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "1": "Docked-Not Engaged (1)<br>",
        "2": "Engaged (2)<br>",
        "-1": "Attempted but failed (-1)<br>",
        "0": "Not attempted (0)<br>"
      },
      "defaultValue": "0"
    }
  ],
  "teleop": [
    { "name": "High Cube",
      "code": "thu",
      "type": "counter"
    },
    { "name": "High Cone",
      "code": "tho",
      "type": "counter"
    },
    { "name": "Mid Cube",
      "code": "tmu",
      "type": "counter"
    },
    { "name": "Mid Cone",
      "code": "tmo",
      "type": "counter"
    },
    { "name": "Low Cube",
      "code": "tlu",
      "type": "counter"
    },
    { "name": "Low Cone",
      "code": "tlo",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "code": "who",
      "type": "text"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "3": "Parked (3)<br>",
        "1": "Docked-Not Engaged (1)<br>",
        "2": "Engaged (2)<br>",
        "-1": "Attempted but failed (-1)<br>",
        "0": "Not attempted (0)<br>"
      },
      "defaultValue": "0"
    }
  ],
  "postmatch": [
    { "name": "Defense Played",
      "code": "dr",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
