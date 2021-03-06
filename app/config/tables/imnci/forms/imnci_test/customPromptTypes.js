define(['promptTypes','jquery','underscore', 'prompts'],
function(promptTypes, $,       _) {
    return {
        "pulseox" : promptTypes.launch_intent.extend({
            type: "pulseox",
            datatype: "pulseox",
            intentString: 'org.opendatakit.sensors.PULSEOX',
            buttonLabel: {
                'default': 'Get Oxygen Saturation',
                'hindi': 'Get Oxygen Saturation'
            },
            formattedValueForContentsDisplay: function() {
                if ( !this.name ) {
                    return '';
                } else {
                    var displayObject = this.getValue();
                    if (displayObject.pulse != null && displayObject.ox != null) {
                        return "pulse: " + displayObject.pulse + " ox: " + displayObject.ox;
                    }
                    else {
                        return '';
                    }
                }
            }
        }),
        "breathcounter" : promptTypes.launch_intent.extend({
            type: "breathcounter",
            datatype: "breathcounter",
            buttonLabel: {
                'default': 'Launch breath counter',
                'hindi': 'शुरू करना सांस की गिनती'
            },
            intentString: 'change.uw.android.BREATHCOUNT',
            extractDataValue: function(jsonObject) {
                return jsonObject.result.value;
            }
        })
    };
});